import React from "react";

const ThemeContext = React.createContext("light");

function ThemeLink(props) {
  return (
    <ThemeContext.Consumer>
      {(value) => <p>link's theme is {value}</p>}
    </ThemeContext.Consumer>
  );
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      theme: "light",
    };
    this.inputRef = React.createRef();
  }

  handleClick = () => {
    const name = this.inputRef.current.value;
    console.log("name", name);
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <ThemeLink />
        <button onClick={() => this.setState({ theme: "dark" })}>
          click me
        </button>
      </ThemeContext.Provider>
    );
  }
}

export default App;
