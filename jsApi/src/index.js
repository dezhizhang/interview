/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-04-25 22:55:47
 */

const xhr = new XMLHttpRequest();
xhr.open('GET','https://cnodejs.org/api/v1/topics',false);
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) {
    if(xhr.status === 200) {
      console.log(xhr.responseText);
    }
  }
}

xhr.send(null);
