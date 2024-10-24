/*
 * :file description: 
 * :name: /react/examples/21ErrorBoundary.jsx
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-24 11:51:16
 * :last editor: 张德志
 * :date last edited: 2024-10-24 11:51:27
 */
import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hasError: false,
      };
    }
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      console.log("error", error);
    }
    render() {
      if (this.state.hasError) {
        return <h1>something went wrong</h1>;
      }
      return this.props.children;
    }
  }
  
  class Widget extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return (
        <div
          onClick={() => {
            console.log("hello");
          }}
        >
          hello
        </div>
      );
    }
  }
  
  function App() {
    return (
      <ErrorBoundary>
        <Widget />
      </ErrorBoundary>
    );
  }
  
  export default App;
  