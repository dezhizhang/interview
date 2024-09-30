/*
 * :file description:
 * :name: /webpack/plugins/banner-webpack-plugin.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-30 19:55:04
 * :last editor: 张德志
 * :date last edited: 2024-09-30 20:12:41
 */

class BannerWebpackPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    // 在资源输入之前触发
    compiler.hooks.emit.tapAsync("BannerWebpackPlugin", (compilation,callback) => {
      const extensions = ["css", "js"];
      const assets = Object.keys(compilation.assets).filter((path) => {
        const splitted = path.split(".");
        // 获取文件扩展名
        const extension = splitted[splitted.length - 1];
        return extensions.includes(extension);
      });

      const prefix = `
        /*
        * :file description:
        * :name: /webpack/plugins/banner-webpack-plugin.js
        * :author:张德志
        * :copyright: (c) 2024, Xiaozhi
        * :date created: 2024-09-30 19:55:04
        * :last editor: 张德志
        * :date last edited: 2024-09-30 20:04:03
        */
      `;

      // 遍历资源添加注释
      assets.forEach((asset) => {
        const source = compilation.assets[asset].source;

        const content = prefix + source;

        // 修改资源
        compilation.assets[asset] = {
          source() {
            return content;
          },
          size() {
            return content.length;
          },
        };
      });
      callback();
    });
  }
}

module.exports = BannerWebpackPlugin;
