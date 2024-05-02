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
### React18合并+异步更新
```js
import React, { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState(100);

  const hadnleClick = () => {
    // 合并+异步更新
    setTimeout(() => {
      setValue(value + 1);
      setValue(value + 1);
      console.log(value);
    },0)

  }

  useEffect(() => {
    // 自定义DOM邦定异步更新
    document.getElementById('btn').addEventListener('click',() => {
      setValue(value + 1);
      setValue(value + 1);
      console.log(value);
    })
  },[])

  return (
    <div>
      <span>{value}</span>
      <button onClick={hadnleClick}>增加</button>
      <button id='btn'>btn</button>
    </div>
  );
}

export default App;
```
### 通过ref获取值非受控组件组
```jsx
class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      name: 'hello',
    };
    this.nameInputRef = React.createRef();
    this.fileInputRef = React.createRef();
  }
  handleAlert = () => {
    // 通过ref获取值
    console.log(this.nameInputRef.current.value);
  };
  render() {
    return (
      <div>
        <input defaultValue={this.state.name} ref={this.nameInputRef} />
        <span>state name:{this.state.name}</span>
        <br />
        <button onClick={this.handleAlert}>alert name</button>
      </div>
    );
  }
}

export default App;

```

