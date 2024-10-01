/*
 * :file description: 
 * :name: /jsApi/examples/56闭包中this指向问题.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-31 17:21:35
 * :last editor: 张德志
 * :date last edited: 2024-08-31 17:21:50
 */
var object = {
    name:'My Object',
    getNameFunc:function() {
        var that = this;
        return function() {
            console.log('this',this);
            return that.name;
        }
    }
}

console.log(object.getNameFunc()());


