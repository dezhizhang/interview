/*
 * @Author: your name
 * @Date: 2021-03-07 20:27:31
 * @LastEditTime: 2021-03-07 22:54:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/promise/lib/promise.js
 */


(function (window){
    function Promise(excutor) {
        const that = this;
        this.status = "pending";
        this.data = undefined;
        this.callbacks = [];
        function resolve(value) {
            if(that.status !== 'pending') return;
            that.status = "resolved";
            that.data = value;
            if(that.callbacks.length > 0) {
                setTimeout(() => {
                    that.callbacks.forEach(item => {
                        item.onResolved(value)
                    })
                },0)
                
            }
        }

        function reject(reason) {
            if(that.status !== 'pending') return;
            that.status = "rejected";
            that.data = reason;
            if(that.callbacks.length > 0) {
                setTimeout(() => {
                    that.callbacks.forEach(item => {
                        item.onRejected(reason);
                    })
                },0)
            }
        }
        try{
            excutor(resolve,reject)
        } catch(error) {
            reject(error);
        }
       
    }

 

    Promise.prototype.then = function(onResolved,onRejected) {
        this.callbacks.push({
            onRejected,
            onResolved
        })
    }

    Promise.prototype.catch = function(onRejected) {
        
    }

    Promise.resolve = function(value) {

    }

    Promise.reject = function(reason) {
        
    }

    /**
     * Promise函数对像的all
     * 返回一个promise，只有当所有promise都成功时才返回成功,否则只要有一个失败就失败
    */

    Promise.all = function(promises) {

    }
    /**
     * Promise函数对像的race方法
     * 返回一个promise,其结果由第一个完成的promise决定
    */
    Promise.race = function() {
        
    }

    window.Promise = Promise;
    
})(window);
