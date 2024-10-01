/*
 * :file description: 
 * :name: /react/examples/17HocHistory.jsx
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-15 21:09:00
 * :last editor: 张德志
 * :date last edited: 2024-09-15 21:09:27
 */
import React, { createContext } from "react";

const NavContext = createContext(null);
const history = window.history;

function App() {
  return (
    <NavContext.Provider>
      <ChildRouter />
    </NavContext.Provider>
  );
}


function withRouter(Component) {
  return function WidthRouterComponent() {
    return <Component history={history} />;
  };
}

const ChildRouter = withRouter(Child);

function Child({ history }) {
  return (
    <button onClick={() => history.pushState({}, undefined, "/hello")}>
      to hello
    </button>
  );
}

export default App;
