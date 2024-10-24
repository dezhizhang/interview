/*
 * :file description: 
 * :name: /react/examples/20useDeferredValue.jsx
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-23 20:32:04
 * :last editor: 张德志
 * :date last edited: 2024-10-23 20:32:05
 */
import React, { useDeferredValue, useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const deferedValue = useDeferredValue(value);

  const handleChange = (ev) => {
    console.log(ev.target.value);
    const value = +ev.target.value;
    setValue(value);
  };

  return (
    <>
      <input type="range" value={value} onChange={handleChange} />
      {deferedValue}
    </>
  );
}

export default App;
