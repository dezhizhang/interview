/*
 * :file description:
 * :name: /jsApi/examples/ajax.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-20 19:44:55
 * :last editor: 张德志
 * :date last edited: 2024-10-20 19:51:59
 */
// function ajax(url, callback) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", url, false);
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       callback(xhr.responseText);
//     }
//   };
//   xhr.send(null);
// }

function ajax(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}

ajax(
  "https://www.shuqin.cc/api/v1/article/list?page=1&classify=digitwin&size=10",
  (result) => {
    console.log(result);
  }
);
