/*
 * :file description: 
 * :name: /react/examples/16Effection.jsx
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-15 20:53:13
 * :last editor: 张德志
 * :date last edited: 2024-09-15 20:53:19
 */
```
useEffect 是异步调用会等主线程，任务执行完成，DOM更新 JS 执行完成视图绘制完成才执行
useLayoutEffect 是同步执行的，执行时机是DOM更新之后，视图绘制完成之前，这个时间可以更方便的修改DOM
useInsertionEffect 比useLayoutEffect执行更早，useInsertionEffect 执行时DOM还没有更新
本质上useInsertionEffect 主要解决 css-in-js 在渲染中注入样式的性能问题
```
