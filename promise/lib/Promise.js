/*
 * :file description:
 * :name: /promise/lib/Promise.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-24 21:27:30
 * :last editor: 张德志
 * :date last edited: 2024-09-24 22:36:56
 */

class MyPromise {
  constructor(excutor) {
    this.status = "pending";
    this.data = undefined;
    this.callbacks = [];
    let _this = this;
    function resolve(value) {
      if (that.status !== "pending") return;

      _this.status = "resolved";
      _this.data = value;

      if (_this.callbacks.length > 0) {
        // 如果有待执行的callback函数，立即异步执行回调函数onResolved
        this.callbacks.forEach((obj) => {
          debugger;
          setTimeout(() => {
            obj.onResolved(value);
          });
        });
      }
    }

    function reject(reason) {
      if (_this.status !== "pending") _this.status = "rejected";
      _this.data = reason;

      if (_this.callbacks.length > 0) {
        // 如果有待执行的callback函数，立即异步执行回调函数onRejected
        _this.callbacks.forEach((obj) => {
          setTimeout(() => {
            obj.onRejected(reason);
          });
        });
      }
    }

    try {
      excutor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  then(onResolved, onRejected) {
    this.callbacks.push({
      onResolved,
      onRejected,
    });
  }
}

export default MyPromise;
