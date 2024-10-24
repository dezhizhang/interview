/*
 * :file description: 
 * :name: /react/examples/automaticBatching.tsx
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-23 19:52:24
 * :last editor: 张德志
 * :date last edited: 2024-10-23 19:52:38
 */
import { useState } from "react";
import { flushSync } from "react-dom";

function App() {
  const [count, setCount] = useState(1);
  const [flag, setFlag] = useState(false);
  const handleClick = () => {
    flushSync(() => {
      setCount((c) => c + 1);
    });

    flushSync(() => {
      setFlag((f) => !f);
    });
  };

  console.log('hello');
  
  return (
    <div onClick={handleClick}>
      +{count}
      {flag}
    </div>
  );
}

export default App;
