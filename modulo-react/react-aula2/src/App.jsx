import Header from "./components/Header";
import Banner from "./components/Banner";
import Componente1, {
  Componente2,
  Componente3,
} from "./components/VariosComponentes";
import FormaDeBolo from "./components/FormaDeBolo";
import Card from "./components/Card";

const App = () => {
  return (
    //parte visível do componente
    <>
      {/* <Header />
      <Banner />
      <Componente1 />
      <Componente2 />
      <Componente3 />
      <FormaDeBolo sabor="Cenoura" cobertura="Chocolate" /> */}
      <Card
        title={"Card 1"}
        category={"Categoria 1"}
        text={"Texto para teste."}
      />
    </>
  );
};

export default App;
