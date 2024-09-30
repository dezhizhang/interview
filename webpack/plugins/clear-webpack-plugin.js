/*
 * :file description:
 * :name: /webpack/plugins/clear-webpack-plugin.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-30 20:18:09
 * :last editor: 张德志
 * :date last edited: 2024-09-30 20:45:30
 */

class ClearWebpackPlugin {
  constructor() {}
  apply(compiler) {
    // 获取打包输出目录
    const outputPath = compiler.options.output.path;
    
    const fs = compiler.outputFileSystem;

    // 注册钩子，在打包输出之前 emit
    compiler.hooks.emit.tap("ClearWebpackPlugin", (compilation) => {
      this.removeFiles(fs, outputPath);
    });
  }
  removeFiles(fs, filePath) {
    // 想要删除打包输出目录下所有资源，需要先将目录下的资源删除，才能删除这个目录
    // 1. 读取当前目录下所有资源
    if (fs?.readdirSync(filePath)) {
      const files = filePath && fs.readdirSync(filePath);

      files.forEach((file) => {
        const path = `${filePath}/${file}`;
        const fileStat = fs.statSync(path);

        if (fileStat.isDirectory()) {
          this.removeFiles(fs, path);
        } else {
          fs.unlinkSync(path);
        }
      });
    }
  }
}

module.exports = ClearWebpackPlugin;
