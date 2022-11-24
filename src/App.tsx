import Layout from "./Components/layout";
import useFetch from "./hooks/useFetch";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss'

import Routing from "./configs/routing";
function App() {

  return (
    <Routing/>
  );
}

export default App;
