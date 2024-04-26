/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-04-26 21:25:07
 */

const div1 = document.getElementById('div1');


function throttle(fn,delay = 200) {
  let timer = null;
  return function() {
    if(timer) {
      return
    }
    timer = setTimeout(() => {
      fn.apply(this,arguments);
      timer = null
    },delay)
  }
}

div1.addEventListener('drag',throttle((event) => {
  console.log(event.offsetX);
}))