import React, { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState(100);

  const hadnleClick = () => {
   

    setTimeout(() => {
      setValue(value + 1);
      setValue(value + 1);
      console.log(value);
    },0)

  }

  useEffect(() => {
    document.getElementById('btn').addEventListener('click',() => {
      setValue(value + 1);
      setValue(value + 1);
      console.log(value);
    })
  },[])

  return (
    <div>
      <span>{value}</span>
      <button onClick={hadnleClick}>增加</button>
      <button id='btn'>btn</button>
    </div>
  );
}

export default App;
