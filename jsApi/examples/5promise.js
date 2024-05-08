/*
 * :file description: promise
 * :name: /jsApi/examples/promise.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-19 21:26:40
 * :last editor: 张德志
 * :date last edited: 2024-04-19 21:27:51
 */

class MyPromise {
    state = 'pending';
    value = undefined;
    reason = undefined;
  
    resolveCallbacks = [];
    rejectCallbacks = [];
  
    constructor(fn) {
      const resolveHandler = (value) => {
        if (this.state === 'pending') {
          this.state = 'fulfilled';
          this.value = value;
          this.resolveCallbacks.forEach((fn) => fn(this.value));
        }
      };
      const rejectHandler = (reason) => {
        if (this.state === 'pending') {
          this.state = 'rejected';
          this.reason = reason;
          this.resolveCallbacks.forEach((fn) => fn(this.reason));
        }
      };
      try {
        fn(resolveHandler, rejectHandler);
      } catch (err) {
        rejectHandler(err);
      }
    }
    then(fn1, fn2) {
      fn1 = typeof fn1 === 'function' ? fn1 : (v) => v;
      fn2 = typeof fn2 === 'function' ? fn2 : (e) => e;
  
      if (this.state === 'pending') {
        const p1 = new MyPromise((resolve, reject) => {
          this.resolveCallbacks.push(() => {
            try {
              const newValue = fn1(this.value);
              resolve(newValue);
            } catch (err) {
              reject(err);
            }
          });
  
          this.rejectCallbacks.push(() => {
            try {
              const newReason = fn2(this.reason);
              reject(newReason);
            } catch (err) {
              reject(err);
            }
          });
        });
        return p1;
      }
  
      // fulfilled状态
      if (this.state === 'fulfilled') {
        const p1 = new MyPromise((resolve, reject) => {
          try {
            const newValue = fn1(this.value);
            resolve(newValue);
          } catch (err) {
            reject(err);
          }
        });
        return p1;
      }
  
      // rejcted
      if (this.state === 'rejcted') {
        const p1 = new MyPromise((resolve, reject) => {
          try {
            const newReason = fn2(this.reason);
            reject(newReason);
          } catch (err) {
            reject(err);
          }
        });
        return p1;
      }
    }
    catch(fn) {
      return this.then(null, fn);
    }
  }
  
  MyPromise.resolve = function (value) {
    return new MyPromise((resolve) => resolve(value));
  };
  
  MyPromise.reject = function (reason) {
    return new MyPromise((resolve, reject) => reject(reason));
  };
  
  MyPromise.all = function (promiseList = []) {
    const p1 = new Promise((resolve, reject) => {
      const result = [];
      const length = promiseList.length;
      let resolveCount = 0;
      promiseList.forEach((p) => {
        p.then((data) => {
          result.push(data);
          resolveCount++;
          if (resolveCount === length) {
            resolve(result);
          }
        }).catch((err) => {
          reject(err);
        });
      });
    });
    return p1;
  };
  
  MyPromise.race = function (promiseList) {
    let resolved = false;
    const p1 = new MyPromise((resolve, reject) => {
      promiseList.forEach((p) => {
        p.then((data) => {
          if (!resolved) {
            resolve(data);
            resolved = true;
          }
        }).catch((err) => {
          reject(err);
        });
      });
    });
    return p1;
  };
  
  const p1 = new MyPromise((resolve, reject) => {
    resolve(100);
  });
  
  const p2 = MyPromise.resolve(200);
  const p3 = MyPromise.resolve(300);
  
  const result = MyPromise.race([p2, p3]);
  console.log(result);
  
  // const p11 = p1.then((data1) => {
  //   console.log('data1', data1);
  //   return data + 1;
  // });
  
  // const p12 = p11.then((data2) => {
  //   console.log('data2', data2);
  //   return data2 + 2;
  // });
  