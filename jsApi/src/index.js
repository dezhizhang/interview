/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-04-24 22:53:00
 */

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(new Error('图片加载失败'));
    };
    img.src = url;
  });

}

loadImage('https://avatars.githubusercontent.com/u/5820929?v=4&s=120').then((res) => {
  document.body.appendChild(res);
  console.log(res)
})
