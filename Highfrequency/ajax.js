/*
 * @Author: your name
 * @Date: 2021-03-12 15:11:42
 * @LastEditTime: 2021-03-12 15:14:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/Highfrequency/ajax.js
 */


let xhr = new XMLHttpRequest();
//连接服务器
xhr.open('get',URL,true);
xhr.send(null);
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        if(xhr.status === 200) {
            success(xhr.responseText);
        } else {
            fail && fail(xhr.status)
        }
    }
}