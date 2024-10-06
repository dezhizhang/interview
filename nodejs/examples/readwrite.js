/*
 * :file description: 
 * :name: /nodejs/examples/readwrite.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-06 19:49:47
 * :last editor: 张德志
 * :date last edited: 2024-10-06 19:49:48
 */
const fs = require("fs");

const buf = Buffer.alloc(10);

fs.open("file.txt", "r", (err, rfd) => {
  fs.read(rfd, buf, 0, 10, 0, (err, readBytes, buffer) => {
    fs.open("text.txt", "w", (err, wfd) => {
      fs.write(wfd, buf, 0, 10, 0, (err, written) => {
        console.log("写入成功");
      });
    });
  });
});
