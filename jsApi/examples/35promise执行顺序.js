

Promise.resolve()
.then(() => {
  console.log(0);
  return Promise.resolve(4);
}).then((res) => {
  console.log(res);
});


Promise.resolve()
.then(() => {
  console.log(1);
}).then(() => {
  console.log(2);
}).then(() => {
  console.log(3);
}).then(() => {
  console.log(5);
}).then(() => {
  console.log(6);
})

// 0,1,2,3,4,5,6
// fulfilled then交替执行
// then返回promise实例，会出现慢两拍效果
// 第一拍 promise 需要由pending变志fulfilled
// 第二拍 then函数挂载到MicoTaskQueue