function getSum() {
  let sum = 0;
  for (let i = 0; i < 10000; i++) {
    sum += i;
  }
  return sum;
}


process.on('message',data => {
    console.log('子进程id',process.pid);
    console.log('子进程接受到消息',data);

    const sum = getSum();
    process.send(sum);
})
