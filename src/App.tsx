import Layout from "./Components/layout";
import useFetch from "./hooks/useFetch";
import './styles/app.scss'
import CardsContainer from "./Components/cardsContainer";
function App() {

  return (
    <Layout>
     <CardsContainer/>
    </Layout>
  );
}

export default App;
