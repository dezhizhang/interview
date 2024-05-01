# react 面试

### bind 帮定 this

```jsx
import React from 'react';

class App extends React.PureComponent {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this);
  }
  render() {
    return <div onClick={this.handleClick}>hello</div>;
  }
}

export default App;
```

### state 不可变值

```js
import React from 'react';

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    const { count } = this.state;
    // 不可变值
    this.setState({
      count: count + 1,
    });
  }

  render() {
    console.log(this.state);

    return (
      <div>
        {this.state.count}
        <br />
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default App;
```

### setState 对像可能被合并

```js
handleIncrement() {
    // setState 可能被合并
    this.setState({
      count: this.state.count + 1,
    });
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
```

### setState 函数不会合并

```jsx
handleIncrement() {
    // setState 可能被合并
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });

    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });

    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
```
