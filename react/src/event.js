/*
 * :file description:
 * :name: /react/src/event.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-26 06:50:04
 * :last editor: 张德志
 * :date last edited: 2024-10-26 07:21:48
 */

import { updateQueue } from "./component";

export default function addEvent(dom, eventType, handler) {
  let store = dom.store || (dom.store = {});

  // 创建表
  store[eventType] = handler;
  if (store[eventType]) {
    document[eventType] = dispatchEvent;
  }
}

// 将dom上的事件放在document事件上
function dispatchEvent(event) {
  const { target, type } = event;

  const eventType = `on${type}`;

  const { store } = target;

  const handler = store && store[eventType];
  updateQueue.isBatchData = true;
  handler && handler(event);
  updateQueue.isBatchData = false;
  updateQueue.batchUpdate();
}
