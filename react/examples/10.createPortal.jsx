import React from "react";
import ReactDOM from "react-dom";

class PortalDemo extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <div>{this.props.children}</div>,
      document.body
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "hello",
    };
    this.inputRef = React.createRef();
  }

  handleClick = () => {
    const name = this.inputRef.current.value;
    console.log("name", name);
  };

  render() {
    return <PortalDemo>hello world</PortalDemo>;
  }
}

export default App;
