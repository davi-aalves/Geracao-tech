import Header from "./components/Header";
import Banner from "./components/Banner";
import Componente1, {
  Componente2,
  Componente3,
} from "./components/VariosComponentes";
import FormaDeBolo from "./components/FormaDeBolo";

const App = () => {
  return (
    //parte visível do componente
    <>
      {/* <Header />
      <Banner />
      <Componente1 />
      <Componente2 />
      <Componente3 /> */}
      <FormaDeBolo sabor="Cenoura" cobertura="Chocolate" />
    </>
  );
};

export default App;
