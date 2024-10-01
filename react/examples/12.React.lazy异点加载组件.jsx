import React from "react";

const ContextDemo = React.lazy(() => import("./ReactLazy"));

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
      <div>
        <React.Suspense>
          <ContextDemo fallback={<div>loading...</div>} />
        </React.Suspense>
      </div>
    );
  }
}

export default App;
