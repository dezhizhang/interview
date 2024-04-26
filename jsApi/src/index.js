/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-04-26 21:08:30
 */
// function ajax(url) {
//   return new Promise((resolve,reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET',url,true);
//     xhr.onreadystatechange = () => {
//       if(xhr.readyState === 4 && xhr.status === 200) {
//         resolve(JSON.parse(xhr.responseText))
//       }else if(xhr.status === 400) {
//         reject(new Error('请求出错'))
//       }

//     }
//     xhr.send(null)
//   })
// }

// ajax('https://cnodejs.org/api/v1/topics')

const oInput = document.getElementById('input');

function debounce(fn, delay = 500) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
}

oInput.addEventListener('keyup',debounce(() => {
  console.log(oInput.value);
}));

