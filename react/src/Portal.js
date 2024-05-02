/*
 * :file description: 
 * :name: /react/src/Portal.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-26 16:08:06
 * :last editor: 张德志
 * :date last edited: 2024-05-02 15:31:29
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
class Portal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: 'hello',
    };
    this.nameInputRef = React.createRef();
    this.fileInputRef = React.createRef();
  }
  handleAlert = () => {
    console.log(this.nameInputRef.current.value);
  };
  render() {
    return ReactDOM.createPortal(<div className="model">{this.props.children}</div>,document.body);
  }
}

export default Portal;
