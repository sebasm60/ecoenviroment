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

        if (producto) {
            for (let i = 0; i < producto.length; i++) {
                tot += JSON.parse(producto[i][0].precio * producto[i][0].cantidad) ;
            };
        };

       this.setState({total : tot});
    };

    render() {
        const renderCarrito = () => {
            if (this.state.productos === null || this.state.productos.length < 1) {
                return <div className="container-producto" id="productos-container">
                            <h1>Tu carro esta vacio</h1>
                            <a href="/dashboard">
                                <span>Ir de compras</span>
                            </a>
                        </div>
            } else {      
                return <div className="container-productos" id="productos-container">                        
                            <div className="row col-md-6" id="delete">
                                {this.state.productos.map((producto, index) => (                                
                                <div className="card" key={index} >
                                    <div className="warpper" >
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