// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// emitter.on('greet', () => {
//   console.log('Hello, World!');
// });

// emitter.emit('greet');  // 输出: Hello, World!

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// emitter.on('greet',() => {
//     console.log('Hello world');
// });

// emitter.emit('greet');

// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(3000, () => {
//   console.log('Server running at http://127.0.0.1:3000/');
// });

const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(300, () => {
  console.log("Server running at http://127.0.0.1:3000/");
});
