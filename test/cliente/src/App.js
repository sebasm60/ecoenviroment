import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Login } from "./componentes/login";
import { Signup } from "./componentes/signup";
import { Home } from "./componentes/home";
import { Inicio } from "./componentes/inicio";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/inicio" component={Inicio} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
