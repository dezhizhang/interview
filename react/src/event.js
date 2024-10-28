/*
 * :file description:
 * :name: /react/src/event.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-26 06:50:04
 * :last editor: 张德志
 * :date last edited: 2024-10-29 05:23:59
 */

import { updateQueue } from "./component";

export default function addEvent(dom, eventType, handler) {
  //1 document store
  let store = dom.store || (dom.store = {});

  //2 创建表映射表
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
    // ie 浏览器
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
  // 批量更新
  updateQueue.isBatchData = true;
  handler && handler(SyntheticBaseEvent);
  updateQueue.isBatchData = false;
  updateQueue.batchUpdate();
}
