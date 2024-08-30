const PV_URL_SET = new Set();

class MyStatic {
  constructor(productId) {
    this.productId = productId;

    this.initPerformance();
    this.initError();
  }

  // 发送数据
  send(url, params = {}) {
    console.log(this.productId)
    params.productId = this.productId

    const paramsArr = [];

    for (let key in params) {
      const val = params[key];
      paramsArr.push(`${key}=${val}`);
    }
    const newUrl = `${url}?${paramsArr.join("&")}`;

    // 1. 可跨域，2兼容性非常好
    const img = document.createElement("img");
    img.src = newUrl;
  }
  // 初始化性能统计
  initPerformance() {
    const url = "https://xiaozhi.shop";
    this.send(url, performance.timing);
  }
  // 初始化错误监控
  initError() {
    window.addEventListener("error", (event) => {
      const { error, lineno, colno } = event;
      this.error(error, { lineno, colno });
    });
    // Promise 未catch住的报错
    window.addEventListener("unhandledrejection", (event) => {
      this.error(new Error(event.reason), { type: "unhandledrejection" });
    });
  }

  pv() {
    const href = location.href;
    // 不重复发送pv
    if (PV_URL_SET.get(href)) return;

    this.event("pv");
    PV_URL_SET.add(href);
  }

  event(key, val) {
    // 自定义事件
    const url = "https://xiaozhi.shop";
    this.send(url, { key, val });
  }
  error(error, info) {
    const url = "https://xiaozhi.shop";
    const { message, stack } = error;
    this.send(url, { message, stack, ...info });
  }
}

const my = new MyStatic('xiaozhi');
my.send('vip',{'close':'hello'});

