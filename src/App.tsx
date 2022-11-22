import Layout from "./Components/layout";
import useFetch from "./hooks/useFetch";
import './styles/app.scss'
import CardsContainer from "./Components/cardsContainer";
import CardsContainerStandings from "./Components/cardsContainerStandings";
function App() {

  return (
    <Layout>
      <CardsContainerStandings/>
     <CardsContainer/>
    </Layout>
  );
}

export default App;
