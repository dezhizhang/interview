import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    // 可能被合并
    this.setState({
      count: this.state.count + 1,
    });

    this.setState({
      count: this.state.count + 1,
    });

    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleIncrement}>累加</button>
      </div>
    );
  }
}

export default App;
