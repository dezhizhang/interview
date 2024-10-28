/*
 * :file description:
 * :name: /react/src/index.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-07-25 22:20:46
 * :last editor: 张德志
 * :date last edited: 2024-10-28 08:16:44
 */
import React from "./react";
import ReactDOM from "./react-dom";

function App({name}) {
  return React.createElement('h1',{
    style:{
      color:'red'
    }
  },'hello world')
}

const element = <App name="hello world"/>;

console.log('element',element);




ReactDOM.render(element,document.querySelector('#root'));
