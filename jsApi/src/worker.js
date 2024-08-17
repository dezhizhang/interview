const set = new Set();

onconnect = (event) => {
  const port = event.ports[0];

  set.add(port);

  port.onmessage = e => {
    // 广播消息
    set.forEach(p => {
      p.postMessage(e.data);
    })
  }

  // 发送消息
  port.postMessage('worker.js done');
}


