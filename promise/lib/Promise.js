/*
 * :file description:
 * :name: /promise/lib/Promise.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-24 21:27:30
 * :last editor: 张德志
 * :date last edited: 2024-09-26 05:07:07
 */
const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

class MyPromise {
  constructor(excutor) {
    this.status = PENDING;
    this.data = undefined;
    this.callbacks = [];
    let _this = this;
    function resolve(value) {
      if (_this.status !== PENDING) return;

      _this.status = RESOLVED;
      _this.data = value;

      if (_this.callbacks.length > 0) {
        // 如果有待执行的callback函数，立即异步执行回调函数onResolved
        _this.callbacks.forEach((obj) => {
          setTimeout(() => {
            obj.onResolved(value);
          });
        });
      }
    }

    function reject(reason) {
      if (_this.status !== PENDING) return;
      _this.status = REJECTED;
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
    let _this = this;

    onResolved =
      typeof onResolved === "function" ? onResolved : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };

    return new MyPromise((resolve, reject) => {
      function handler(callback) {
        try {
          const result = callback(_this.data);
          if (result instanceof Promise) {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      }

      if (_this.status === PENDING) {
        handler(onResolved);
      } else if (_this.status === REJECTED) {
        setTimeout(() => {
          handler(onRejected);
        });
      } else {
        _this.callbacks.push({
          onResolved() {
            handler(onResolved);
          },
          onRejected() {
            handler(onRejected);
          },
        });
      }
    });
  }
  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  static resolve(value) {
    return new MyPromise((resolve, reject) => {
      if (value instanceof MyPromise) {
        value.then(resolve, reject);
      } else {
        resolve(value);
      }
    });
  }

  static reject(reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason);
    });
  }


  static all(promises) {
    const resolvedCount = 0;
    const values = new Array(promises.length);

    return new Promise((resolve, reject) => {
      promises.forEach((p, index) => {
        p.then(
          (value) => {
            resolvedCount++;
            values[index] = value;

            // 如果全部成功了,将return的promise改成成功
            if (resolvedCount === promises.length) {
              resolve(values);
            }
          },
          (reason) => {
            reject(reason);
          }
        );
      });
    });
  }
}

export default MyPromise;
