import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Login from "./components/login/Login"
import Consulta from './components/consulta/Consulta';
function App() {
  return (
    <Switch>
      <Route path="/consulta">
        <Consulta/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/login/register">
        Soy home!
      </Route>
      <Route path="*">
        404
      </Route>
    </Switch>
  );
}

export default App;
