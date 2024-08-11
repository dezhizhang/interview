module.exports = {
  presets: [
    "@babel/preset-env",
    {
      targets: "> 0.25%, not dead",
      corejs: { version: 3, proposals: true }, // 设置corejs版本
      useBuiltIns: 'usage', // 根据使用情况引入polyfill
    },
  ],
  plugins: [],
};
