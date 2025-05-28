import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    console.log("useEffect foi chamado");
  });
  return (
    <>
      <h1>Hello World!</h1>
    </>
  );
};

export default App;
