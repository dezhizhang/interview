/*
 * :file description: 手写bind
 * :name: /jsApi/examples/bind.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-21 22:01:22
 * :last editor: 张德志
 * :date last edited: 2024-04-21 22:54:23
 */
Function.prototype.mybind = function() {
    // 将参数拆解为数组
    const args = Array.prototype.slice.call(arguments);

    // 获取 this 数组第一项
    const t = args.shift();
    
    const self = this;

    return function() {
        return self.apply(t,args);
    }
}
