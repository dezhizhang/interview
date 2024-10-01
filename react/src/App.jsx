import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <p>{num}</p>
      <button
        onClick={() => {
          setTimeout(() => {
            setNum(num + 1);
          }, 1000);
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;



