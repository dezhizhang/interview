/*
 * @Author: your name
 * @Date: 2021-03-11 22:51:37
 * @LastEditTime: 2021-03-11 23:25:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/Highfrequency/promise.js
 */


// const PENDING = 'pending';
// const RESOLVED = 'resolved';
// const REJECTED = 'rejected';

// function MyPromise(fn) {
//     const that = this;
//     this.state = PENDING
//     this.value = null;

//     this.resolvedCallbacks = [];
//     this.rejectedCallbacks = [];

//     function resolve(value) {
//         if(that.state === PENDING) {
//             this.state = RESOLVED;
//             this.value = value;
//             this.rejectedCallbacks.map(cb => cb(that.value))
//         }
//     }

//     function reject(value) {
//         if(that.state === PENDING) {
//             that.state = REJECTED;
//             that.value = value;
//             that.rejectedCallbacks.map(cb => cb(that.value))
//         }
//     }

//     try{
//         fn(resolve,reject)
//     } catch(e) {
//         reject(e)
//     }
// }


// MyPromise.prototype.then = function(onResolved,onRejected) {
//     const that = this;
//     onRejected = typeof onResolved === 'function' ? onResolved: v => v;
//     onResolved = typeof onRejected === 'function' ? onRejected: e => {
//          throw e
//     };

//     if(this.state === PENDING) {
//         that.resolvedCallbacks.push(onResolved)
//         that.resolvedCallbacks.push(onRejected)
//     }
//     if(this.state === RESOLVED) {
//         onResolved(that.value);
//     }
//     if(this.state === REJECTED) {
//         onRejected(that.value)
//     }
// }

// function MyPromise(fn) {
//     const that = this;
//     this.state = 'pending';
//     this.value = null;

//     this.resolvedCallbacks = [];
//     this.rejectedCallbacks = [];

//     function resolve(value) {
//         if(that.state === 'pending') {
//             that.state = 'resolved';
//             that.value = value;

//             that.resolvedCallbacks.map(cb => cb(that.value))
//         }
//     }

//     function reject(value) {
//         if(that.state === 'pending') {
//             that.state = 'rejected';
//             that.value = value;
//             that.rejectedCallbacks.map(cb => cb(that.value))
//         }
//     }

//     try{
//         fn(resolve,reject)
//     } catch(e) {
//         reject(e)
//     }
// }


// MyPromise.prototype.then = function(onResolved,onRejected) {
//     const that = this;
//     onResolved = typeof onResolved === 'function' ? onResolved: v => v
//     onRejected = typeof onRejected === 'function' ? onRejected: v => {
//         throw e
//     }
//     if(this.state === 'pending') {
//         this.resolvedCallbacks.push(onRejected);
//         this.rejectedCallbacks.push(onRejected);
//     }

//     if(this.state === 'resolved') {
//         onResolved(that.value);
//     }
//     if(this.state === 'rejected') {
//         onRejected(that.value);
//     }
// } 


function MyPromise(fn) {
    const that = this;
    this.state = 'pending';
    this.value = null;
    this.resolveCallbas= [];
    this.rejectCallbas = [];

    function resolve(value) {
        if(this.state === 'pending') {
            that.state ==='resolved';
            that.value = value;
            that.resolveCallbas.push(cb=> cb(that.value));
        }
    }

    function rejected(value) {
        if(this.state === 'pending') {
            that.state === 'rejected';
            that.value = value;
            that.rejectCallbas.push(cb => cb(that.value));
        }
    }

    try{
        fn(resolve,rejected);
    }catch(e) {
        rejected(e)
    }

}

MyPromise.prototype.then = function(onResolved,onRejected) {
    onResolved = typeof onResolved === 'function' ? onResolved:v => v;
    onRejected = typeof onRejected === 'function' ? onRejected: e => {
        throw e
    }
    if(this.state === 'pending') {
        this.resolveCallbas.push(onResolved);
        this.resolveCallbas.push(onResolved);
    }
    if(this.state === 'redolved') {
        onResolved(that.value)
    }
    if(this.state === 'rejected') {
        onRejected(that.value);
    }
}