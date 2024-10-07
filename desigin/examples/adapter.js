/*
 * :file description:
 * :name: /desigin/examples/adapter.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-07 10:50:15
 * :last editor: 张德志
 * :date last edited: 2024-10-07 10:50:22
 */
// 第三方库提供的类
class ThirdPartyApi {
  send() {
    return "Sending data via ThirdPartyApi";
  }
}

// 我们系统需要的接口
class MySystemApi {
  request() {
    return `Sending data via MySystemApi`;
  }
}

// 适配器类，适配第三方 API 到我们的系统
class ApiAdapter {
  constructor(thirdPartyApi) {
    this.thirdPartyApi = thirdPartyApi;
  }
  request() {
    //调用第三方 API 的 send 方法，但暴露给客户端的是 request 方法
    return this.thirdPartyApi.send();
  }
}

const thirdPartyApi = new ThirdPartyApi();
const adaptedApi = new ApiAdapter(thirdPartyApi);

console.log(adaptedApi.request());
