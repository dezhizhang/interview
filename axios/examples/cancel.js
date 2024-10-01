/*
 * :file description:
 * :name: /axios/examples/cancel.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-27 21:24:21
 * :last editor: 张德志
 * :date last edited: 2024-09-27 21:24:21
 */
import axios from "axios";

let cancel;

axios
  .get("https://cnodejs.org/api/v1/topics", {
    cancelToken: new axios.CancelToken((c) => {
      cancel = c;
    }),
  })
  .then((rsp) => {
    console.log(rsp.data);
  });

cancel();
