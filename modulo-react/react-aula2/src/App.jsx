import Header from "./components/Header";
import Banner from "./components/Banner";
import Componente1, {
  Componente2,
  Componente3,
} from "./components/VariosComponentes";
import FormaDeBolo from "./components/FormaDeBolo";
import Card from "./components/Card";
import CardDinamico from "./components/CardDinamico";

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
        image={
          "https://www.sunlife.co.id/content/dam/sunlife/regional/indonesia/images/Article%202.jpeg"
        }
        title={"Card 1"}
        category={"Categoria 1"}
        text={"Texto para teste."}
        type={"A"}
      />
      <Card
        title={"Card 2"}
        category={"Categoria 2"}
        text={"Texto para teste."}
      />
      <Card
        title={"Card 3"}
        category={"Categoria 3"}
        text={"Texto para teste."}
      />

      <CardDinamico>
        <h1>Amo a Lívia</h1>
      </CardDinamico>
    </>
  );
};

export default App;
