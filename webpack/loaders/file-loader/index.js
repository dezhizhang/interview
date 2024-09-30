/*
 * :file description:
 * :name: /webpack/loaders/file-loader/index.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-30 16:35:29
 * :last editor: 张德志
 * :date last edited: 2024-09-30 17:14:55
 */
const loaderUtils = require("loader-utils");

module.exports = function (content) {
  const interpolateName = loaderUtils.interpolateName(
    this,
    "[hash],[ext][query]",
    {
      content,
    }
  );
  console.log("interpolateName", interpolateName);
  this.emitFile(interpolateName, content);

  return `module.exports=${interpolateName}`;
};

module.exports.raw = true;
