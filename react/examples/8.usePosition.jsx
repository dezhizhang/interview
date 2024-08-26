import { useState, useEffect } from "react";

function useMousePosition() {
  const [x,setX] = useState(0);
  const [y,setY] = useState(0);

  function handlerMouseMove(event) {
    setX(event.clientX);
    setY(event.clientY);
  }


  useEffect(() => {
    document.body.addEventListener('mousemove',handlerMouseMove);
    return () => document.removeEventListener('mousemove',handlerMouseMove);
  },[]);
  return [x,y];
}

function App() {

  const [x,y] = useMousePosition()

  console.log({x,y})


  return <div>hello</div>
}

export default App;
