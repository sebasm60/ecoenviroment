import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./componentes/home";
import { Dashboard } from "./componentes/dashboard";
import {DetalleProducto} from "./componentes/detalleProducto";
import {Carrito} from "./componentes/carrito";
import {Perfil} from "./componentes/perfil";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/detalle-producto/:id" component={DetalleProducto}/>
          <Route exact path="/carrito" component={Carrito} />
          <Route exact path="/perfil" component={Perfil} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
