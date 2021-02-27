/*
 * @Author: your name
 * @Date: 2021-02-27 14:32:30
 * @LastEditTime: 2021-02-27 14:47:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/data/queue/index2.js
 */



let RecentCounter = function() {
    this.queue = [];
}

RecentCounter.prototype.ping = function(t) {
    this.queue.push(t);
    while(this.queue[0] < t- 300) {
        this.queue.shift();
    }
    return this.queue.length;
}

let r = new RecentCounter();


["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]


console.log(r.ping(t))



