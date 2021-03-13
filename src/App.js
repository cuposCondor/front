import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Login from "./components/login/Login"
import Consulta from './components/consulta/Consulta';
function App() {
  return (
    <Switch>
      <Route patch="/login">
        <Login/>
      </Route>
      <Route patch="/consulta">
        <Consulta/>
      </Route>
      <Route patch="/home"/>

      <Route patch="/">

      </Route>
    </Switch>
  );
}

export default App;
