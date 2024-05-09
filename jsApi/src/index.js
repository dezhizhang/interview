/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-05-10 06:17:45
 */
class MyStatis {
  constructor(productId) {
    this.productId = productId;

    //
    this.performance();
  }

  // 发送统计数据
  send(url, params = {}) {
    params.productId = this.productId;

    const paramsArr = [];
    for (let key in params) {
      const value = params[key];

      paramsArr.push(`${key}=${value}`);

      const newUrl = `${url}?${paramsArr.join('&')}`;

      // 用<img> 发送1. 可跨域;2.兼容性非常好
      const img = document.createElement('img');
      img.src = newUrl;
    }
  }

  // 初始化性能统计
  initPerformance() {
    const url = 'xxxx';
    this.send(url, performance.timing);
  }

  // 初始化错误监控
  initError() {
    // js错误
    window.addEventListener('error', (event) => {
      const { error, lineno, colno } = event;
      this.error(error, { lineno, colno });
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.error(new Error(event.reason), { type: 'unhandledrejection' });
    });
  }

  pv() {
    this.event('pv');
  }

  event(key, value) {
    const url = 'xxx';
    this.send(url, { key, value });
  }

  error(err, info) {
    const url = 'xxx';
    const { message, stack } = err;
    this.send(url, { message, stack, ...info });
  }
}
