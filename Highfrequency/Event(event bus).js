/*
 * @Author: your name
 * @Date: 2021-03-11 23:59:21
 * @LastEditTime: 2021-03-12 00:03:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/Highfrequency/Event(event bus).js
 */


 class EventEmeitter{
     constructor() {
         this._events = this._events || new Map();
         this._maxListeners = this._maxListeners || 0
     }
 }

 EventEmeitter.prototype.emit = function(type,...args) {
     let handler;
     handler = this._events,get(type);
     if(args.length > 0) {
         handler.apply(this,args);
     }else {
         handler.call(this)
     }
     return true;
     
 }

 EventEmeitter.prototype.addListener = function(type,fn) {
     if(!this._events.get(type)) {
         this._events.set(type,fn);
     }
 }