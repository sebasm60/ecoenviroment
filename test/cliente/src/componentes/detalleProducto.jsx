import React from "react";
import axios from "axios";
import Nav from "./navbar";
import './styles/detalleProducto.css';

export class DetalleProducto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      producto: [],
    };
  }

  async componentDidMount() {
    const producto = await axios.get(`http://localhost:5000/producto/search/${this.props.match.params.id}`);
    this.setState({ producto: producto.data });
  }

  render() {
    return (
    <>
      <Nav />
        <div className="container-producto" id="productos-container">
          <div className="row-producto">                   
            <div className= "col-md-4 pb-1 pb-md-1 mt-3">
              <div className= "card-body-producto">
                <img className="card-img-top" src ={`/${this.state.producto.imagen}`} id="image"/>				
              </div>
            </div>
            <hr/>
            <div className= "col-md-6 pb-1 pb-md-0 mt-3">
              <div className= "card-body">
                <h1 className="card-title" id="nombre">{this.state.producto.nombre}</h1>
                <h5 className="card-text" id="precio">{this.state.producto.precio}</h5>
                <h5 className="card-text">{this.state.producto.empresa}</h5> 
                <h5 className="card-text" id="referencia">{this.state.producto.referencia}</h5>
                <h5 className="card-text">Disponibles: {this.state.producto.cantidad} unidades.</h5> 
                <p>{this.state.producto.descripcion}</p>
                  <div className="container-producto">
                    <div className="row-producto">
                      <div className="col-md-5 pb-1 pb-md-0 mt-3">
                        <input id="value" type= "number" min="1" max="10"/>
                      </div>
                      <div className="col-md-6 pb-1 pb-md-0 mt-3">
                        <button type="button" id="add" className="btn btn-success btn-outline-dark" >add to car</button> 
                      </div>   
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>      
    </>
    );
  }
}

export default DetalleProducto;
