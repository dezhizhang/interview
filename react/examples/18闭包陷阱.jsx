/*
 * :file description: 
 * :name: /react/examples/18闭包陷阱.jsx
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-15 22:53:00
 * :last editor: 张德志
 * :date last edited: 2024-09-15 22:57:31
 */
import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <p>{num}</p>
      <button
        onClick={() => {
          setTimeout(() => {
            setNum(num=>num + 1);
          }, 1000);
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;



