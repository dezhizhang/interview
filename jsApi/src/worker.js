/*
 * :file description:
 * :name: /jsApi/src/worker.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-05-06 20:42:05
 * :last editor: 张德志
 * :date last edited: 2024-05-06 20:46:59
 */

const set = new Set();

onconnect = (event) => {
  const port = event.ports[0];
  set.add(port);

  port.onmessage = (e) => {
    set.forEach((p) => {
      p.postMessage(e.data);
    });
  };

  port.postMessage('worker.js done');
};
