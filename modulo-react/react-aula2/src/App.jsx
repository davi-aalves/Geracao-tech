import Header from "./components/Header";
import Banner from "./components/Banner";
import Componente1, {
  Componente2,
  Componente3,
} from "./components/VariosComponentes";

const App = () => {
  return (
    //parte visível do componente
    <>
      <Header />
      <Banner />
      <Componente1 />
      <Componente2 />
      <Componente3 />
    </>
  );
};

export default App;
