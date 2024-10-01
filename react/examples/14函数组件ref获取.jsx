/*
 * :file description: 
 * :name: /react/examples/14函数组件ref获取.jsx
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-15 19:53:08
 * :last editor: 张德志
 * :date last edited: 2024-09-15 19:53:18
 */
import React,{ createRef } from "react";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.divRef = createRef(null);
  }

  componentDidMount() {
    if(this.divRef.current) {
      console.log(this.divRef.current);
    }
  }
  render() {
    return <div ref={this.divRef}> this is the divRef dom in class</div>
  }
}

export default App;

