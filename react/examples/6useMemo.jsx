import React, { memo, useMemo, useState } from "react";

const Child = memo(({ userInfo }) => {
  console.log({ userInfo });
  return <div>hello</div>;
});

const App = () => {
  const [name, setName] = useState();
  const userInfo = useMemo(() => {
    return { name: "hello" };
  }, [name]);
  return <Child onClick={() => setName("hello1")} userInfo={userInfo} />;
};

export default App;
