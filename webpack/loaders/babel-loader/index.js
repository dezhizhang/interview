/*
 * :file description:
 * :name: /webpack/loaders/babel-loader/index.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-30 15:53:53
 * :last editor: 张德志
 * :date last edited: 2024-09-30 16:18:11
 */
const schema = require("./schema.json");
const babel = require("@babel/core");

module.exports = function (content) {
  const callback = this.async();
  const options = this.getOptions(schema);
  
  console.log('options',options);
  

  babel.transform(content, options, function (err, result) {
    if (err) callback(err);
    else callback(null, result.code);
  });
};
