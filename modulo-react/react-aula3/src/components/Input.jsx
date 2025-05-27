import { useRef } from "react";

const Input = () => {
  const nomeRef = useRef(null);

  const mostrarNome = () => {
    console.log(nomeRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={nomeRef} placeholder="Digite seu nome" />
      <button onClick={mostrarNome}>Mostrar Nome</button>
    </div>
  );
};

export default Input;
