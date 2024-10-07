/*
 * :file description:
 * :name: /desigin/examples/proxy.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-07 11:38:45
 * :last editor: 张德志
 * :date last edited: 2024-10-07 11:50:55
 */

class RealSubject {
  request() {
    return `Request from RealSubject`;
  }
}

// 代理对像
class ProxySubject {
  constructor(realSubject) {
    this.realSubject = realSubject;
  }
  request() {
    // 执行一些额外的操作
    console.log("Proxy: Checking access before forwarding the request.");
    // 调用真实对象的请求
    const result = this.realSubject.request();
    // 执行一些后续操作
    console.log("Proxy: Logging the result after forwarding the request.");
    return result;
  }
}

const realSubject = new RealSubject();
const proxy = new ProxySubject(realSubject);

console.log(proxy.request());
