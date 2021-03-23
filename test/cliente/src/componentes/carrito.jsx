import React from "react";
import axios from "axios";
import Nav from "./navbar";
import './styles/inicio.css';

export class Carrito extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            productos : [],
            total : 0
        };
    };

    async componentDidMount() {
        const producto = JSON.parse(localStorage.getItem('producto'));         
        this.setState({productos : producto});
        let tot = 0;
        for (let i = 0; i < producto.length; i++) {
            tot += JSON.parse(producto[1][0].precio);
        };
       this.setState({total : tot});
        
    };

    render() {
        const renderCarrito = () => {
            if (this.state.productos === null) {
                return <h1>Carrito Vacio</h1>
            } else {      
                return <div className="container-productos" id="productos-container">                        
                            <div className="row col-md-6">
                                {this.state.productos.map((producto, index) => (                                
                                <div className="card" key={index}>
                                    <div className="warpper">
                                        <div className="color_bg batman"></div>
                                        <div className="card_img">
                                            <img src={`${producto[0].imagen}`}/>
                                        </div>
                                      <h5 >Nombre: {producto[0].nombre}</h5>
                                        <h5 id="referencia">Referencia: {producto[0].referencia}</h5>
                                        <h5>Cantidad: {producto[0].cantidad}</h5>
                                        <h5>Precio unidad: {producto[0].precio}</h5>
                                        <h5>Total : {producto[0].cantidad * producto[0].precio}</h5>
                                    <button id={`delete_${producto[0].referencia}`}>Quitar</button>
                                      </div>
                                </div>
                                ))}
                            </div>
                            <div className="col-md-4">
                                <h1>Pagar</h1>
                                <h1>Total: {this.state.total}</h1>
                                <button>Pagar</button>
                            </div>
                        </div>    
            }
        };
        return (
            <>
                <Nav/>
                {renderCarrito()}
            </>
        );
    };
};

export default Carrito;