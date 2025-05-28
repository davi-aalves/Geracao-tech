import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function boasVindas() {
    alert("Boas vindas!");
  }

  useEffect(() => {
    console.log("useEffect foi chamado");
  });

  useEffect(() => {
    boasVindas();
    console.log("useEffect que é chamado somente uma vez");
  }, []);

  useEffect(() => {
    console.log(`useEffect ativado somente por dependências`);
  }, [count]);

  return (
    <>
      <h1>Hello World!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        necessitatibus dolore, ab obcaecati distinctio deleniti neque illum
        molestias eligendi, a reprehenderit vero quo quia nulla alias cupiditate
        quos aspernatur magni.
      </p>

      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>

      <h2>Contador 2: {count2}</h2>
      <button onClick={() => setCount2(count2 + 1)}>Add</button>
    </>
  );
};

export default App;
