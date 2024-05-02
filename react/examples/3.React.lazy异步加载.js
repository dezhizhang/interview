/*
 * :file description: 
 * :name: /react/examples/3.异点加载.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-05-02 15:46:53
 * :last editor: 张德志
 * :date last edited: 2024-05-02 15:46:55
 */
import React from 'react';

const ReactLazy = React.lazy(() => import('./ReactLazy'));

class App extends React.PureComponent {
  render() {
    return (
      <React.Suspense fallback={<div>loaing...</div>}>
        <ReactLazy />
      </React.Suspense>
    );
  }
}

export default App;
