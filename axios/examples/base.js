/*
 * :file description:
 * :name: /axios/examples/base.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-27 09:42:43
 * :last editor: 张德志
 * :date last edited: 2024-09-27 09:42:44
 */
function axios(url, options) {
  const { method, data } = options || {};
  return new Promise((resolve, reject) => {
    // 创建xhr对像
    const xhr = new XMLHttpRequest();

    // 打开链接
    xhr.open(method, url, true);

    // 发送请求
    if (method === "POST") {
      xhr.setRequestHeader("Content-type", "application/json;charset=utf-8");
      xhr.send(JSON.stringify(data));
    } else if (method === "GET") {
      xhr.send();
    }

    // 状态改变的监听
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) {
        return;
      }

      const { status, statusText } = xhr;
      if (status >= 200 && status <= 299) {
        const response = {
          data: JSON.parse(xhr.response),
          status,
          statusText,
        };
        resolve(response);
      } else {
        reject(new Error("request error status is" + status));
      }
    };
  });
}

const baseUrl = "https://cnodejs.org/api/v1";

async function test() {
  const rsp = await axios(`${baseUrl}/topics`, {
    method: "GET",
  });
  console.log("rsp", rsp);
}

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  test();
});
