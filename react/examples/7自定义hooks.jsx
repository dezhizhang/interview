import { useState, useEffect } from "react";
import axios from "axios";


function useAxios(url) {
    const [data,setData] = useState();
    const [error,setError] = useState();
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(url)
        .then((res) => setData(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    },[url]);

    return [loading,data,error];
}



function App() {
  const [x, y] = useAxios('https://xiaozhi.shop');

  console.log({ x, y });

  return <div>hello</div>;
}

export default App;
