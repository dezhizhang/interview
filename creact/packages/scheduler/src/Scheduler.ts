/*
 * :file description: 任务调度
 * :name: /creact/packages/scheduler/src/Scheduler.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-23 16:04:06
 * :last editor: 张德志
 * :date last edited: 2024-10-23 17:43:20
 */

import {
  maxSigned31BitInt,
  normalPriorityTimeout,
  UserBlockingPriorityTimeout,
} from "./SchedulerFeatureFlags";
import { peek, pop, push } from "./SchedulerMinHeap";
import {
  PrioritiesLevel,
  NormalPriority,
  IdlePriority,
  ImmediatePriority,
  LowPriority,
  UserBlockingPriority,
} from "./SchedulerProrities";

type Callback = (arg: boolean) => Callback | null | undefined;

export type Task = {
  id: number;
  callback: Callback | null;
  priorityLevel: PrioritiesLevel;
  startTime: number;
  expirationTime: number;
  sortIndex: number;
};

let currentTask: Task | null = null;
let currentPriorityLevel: PrioritiesLevel = NormalPriority;
// 记录时间切片的起始值，时间戳
let startTime = -1;

// 时间切片，这是个时间段
let frameInterval = 5;

let taskIdCounter = 1;

// 是否有work在执行
let isPerformingWork = false;

// 主线程是否在调度
let isHostCallbackScheduled = false;

// 时间切片要循环
function workLoop(initialTime: number): boolean {
  let currentTime = initialTime;
  currentTask = peek(taskQueue);

  while (currentTask !== null) {
    if (currentTask.expirationTime > currentTime && shouldYieldToHost()) {
      break;
    }

    // 执行任务
    const callback = currentTask.callback;
    if (typeof callback === "function") {
      currentTask.callback = null;
      currentPriorityLevel = currentTask.priorityLevel;
      const didUsedCallbackTimeout = currentTask.expirationTime <= currentTime;
      const continuationCallback = callback(didUsedCallbackTimeout);

      if (typeof continuationCallback === "function") {
        currentTask.callback = continuationCallback;
        return true;
      } else {
        if (currentTask === peek(taskQueue)) {
          pop(taskQueue);
        }
      }
    } else {
      pop(taskQueue);
    }
    currentTask = peek(taskQueue);
  }
  if (currentTask !== null) {
    return true;
  } else {
    return false;
  }
}

function shouldYieldToHost() {
  const timeElapsed = getCurrentTime() - startTime;

  if (timeElapsed < frameInterval) {
    return false;
  }
  return true;
}

// 任务池，最小堆
const taskQueue: Array<Task> = [];

// 任务调度器
function scheduleCallback(priorityLevel: PrioritiesLevel, callback: Callback) {
  // 开始时间
  const startTime = getCurrentTime();

  let timeout: number;

  switch (priorityLevel) {
    case ImmediatePriority:
      timeout = -1;
      break;
    case UserBlockingPriority:
      timeout = UserBlockingPriorityTimeout;
      break;
    case IdlePriority:
      timeout = maxSigned31BitInt;
      break;
    case NormalPriority:
      timeout = normalPriorityTimeout;
      break;
    default:
      timeout = normalPriorityTimeout;
  }

  // 任务过期时间
  const expirationTime = startTime + timeout;

  const newTask: Task = {
    id: taskIdCounter++,
    callback,
    priorityLevel,
    startTime,
    expirationTime,
    sortIndex: 0,
  };
  newTask.sortIndex = expirationTime;
  push(taskQueue, newTask);

  if (!isHostCallbackScheduled && !isPerformingWork) {
    isHostCallbackScheduled = true;
    requestIdleCallback()
  }
}



function requestIdleCallback() {

}

// 取消任务调度
function cancelCallback() {
  currentTask!.callback = null;
}

function getCurrentPriorityLevel(): PrioritiesLevel {
  return currentPriorityLevel;
}

export {
  PrioritiesLevel,
  NormalPriority,
  IdlePriority,
  ImmediatePriority,
  LowPriority,
  UserBlockingPriority,
};
