/*
 * :file description:
 * :name: /webpack/plugins/test-plugin.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-30 18:14:46
 * :last editor: 张德志
 * :date last edited: 2024-09-30 19:43:40
 */

class TestPlugin {
  constructor() {
    console.log("testPlugin constructor");
  }
  apply(compiler) {
    compiler.hooks.make.tapAsync("TestPlugin", (compilation, callback) => {
      setTimeout(() => {
        console.log("callback");
        callback();
      }, 1000);
    });
  }
}

module.exports = TestPlugin;
