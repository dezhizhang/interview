/*
 * :file description:
 * :name: /react/src/index.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-07-25 22:20:46
 * :last editor: 张德志
 * :date last edited: 2024-10-27 21:27:17
 */
import React from "./react";
import ReactDOM from "./react-dom";


const element = React.createElement('h1',{
  className:'title',
  style:{
    color:'red'
  }
},'hello world');

console.log(element);


ReactDOM.render(element,document.querySelector('#root'));
