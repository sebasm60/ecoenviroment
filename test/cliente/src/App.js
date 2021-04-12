import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./componentes/home";
import { HomeEmpresas } from "./componentes/homeEmpresas";
import { Dashboard } from "./componentes/dashboard";
import { DetalleProducto} from "./componentes/detalleProducto";
import { Carrito } from "./componentes/carrito";
import { Perfil } from "./componentes/perfil";
import { EditarPerfil } from "./componentes/editarlPerfil";
import { DashVendedor } from "./componentes/dashVendedor";
import { Inventario } from "./componentes/inventarioEmpresas";
import { AgregarProducto } from "./componentes/agregarProducto";
import { AgregarProyecto } from "./componentes/agregarProyecto";
import { Proyectos } from "./componentes/proyectos";
import { ListarProyectos } from "./componentes/listarProyectos";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Empresas" component={HomeEmpresas} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/detalle-producto/:id" component={DetalleProducto}/>
          <Route exact path="/carrito" component={Carrito} />
          <Route exact path="/editarperfil" component={EditarPerfil} />
          <Route exact path="/perfil" component={Perfil} />
          <Route exact path="/dashEmpresa" component={DashVendedor} />
          <Route exact path="/inventario" component={Inventario} />
          <Route exact path="/agregarProducto" component={AgregarProducto} />
          <Route exact path="/agregarProyecto" component={AgregarProyecto} />
          <Route exact path="/proyectos" component={Proyectos} />
          <Route exact path="/listarProyectos" component={ListarProyectos} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
