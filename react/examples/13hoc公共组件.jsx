import React from "react";

const HOCFactory = (Component) => {
  class HOC extends React.Component {
    // 在此定义多个组件的公共逻辑
    render() {
      return <Component {...this.props} />;
    }
  }
  return HOC;
};

const Info = () => {
  return <div>info</div>;
};

const Info2 = HOCFactory(Info);

function App() {
  return <Info2 />;
}

export default App;
