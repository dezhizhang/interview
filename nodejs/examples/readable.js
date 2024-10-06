/*
 * :file description: 
 * :name: /nodejs/examples/readable.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-06 09:53:57
 * :last editor: 张德志
 * :date last edited: 2024-10-06 09:53:58
 */
process.stdin.setEncoding("utf-8");
process.stdin.on("readable", () => {
  let chunk = process.stdin.read();
  if (chunk != null) {
    process.stdout.write("data " + chunk);
  }
});