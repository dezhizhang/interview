/*
 * :file description: 
 * :name: /react/src/App.jsx
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-05-02 15:25:45
 * :last editor: 张德志
 * :date last edited: 2024-05-02 15:29:50
 */
import React from "react";
import Portal from "./Portal";
import './App.css'

class App extends React.PureComponent{
    render() {
        return <div className="container"><Portal>hello</Portal> </div>
    }
}


export default App;