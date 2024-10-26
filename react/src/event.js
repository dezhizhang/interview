/*
 * :file description:
 * :name: /react/src/event.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-26 06:50:04
 * :last editor: 张德志
 * :date last edited: 2024-10-26 09:11:26
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


function createBaseEvent(nativeEvent) {
  let syntheticBaseEvent = {};
  for(let key in nativeEvent) {
    syntheticBaseEvent[key] = nativeEvent[key];
  }
  syntheticBaseEvent.nativeEvent = nativeEvent;
  // 兼容默认事件
  syntheticBaseEvent.preventDefault = preventDefault
  return syntheticBaseEvent;
}


// 处理默认事件
function preventDefault(event){
  if(!event) {
    window.event.returnValue = false;
  }
  event && event.preventDefault();
};


// 将dom上的事件放在document事件上
function dispatchEvent(event) {
  const { target, type } = event;

  const eventType = `on${type}`;

  const { store } = target;

  const handler = store && store[eventType];
  // 合成事件对像
  const SyntheticBaseEvent = createBaseEvent(event);
  updateQueue.isBatchData = true;
  handler && handler(SyntheticBaseEvent);
  updateQueue.isBatchData = false;
  updateQueue.batchUpdate();
}
