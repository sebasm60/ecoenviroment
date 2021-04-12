import React from "react";
import axios from "axios";
import './styles/inicio.css';

export class Productos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            producto : []
        };
    };

    async componentDidMount() {
        const producto = await axios.get(`http://localhost:5000/producto/listar`);
        this.setState({producto: producto.data});
    };

    render() {        
        return (            
                <div className="container-productos" id="productos-container">                        
                    <div className="row">                    
                    {this.state.producto.map((product, index) => (
                    <div className="card" key={index}>                        
                        <div className="warpper">
                            <div className="color_bg batman"></div>
                            <div className="card_img">
                                <img id={`image_${product.referencia}`}src={`/${product.imagen}`}></img>
                            </div>
                             <div className="heart">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                    <path d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z">
                                    </path>
                                </svg>
                            </div>
                            <div className="cardInfo">
                                <h1 id={`nombre_${product.referencia}`}>{product.nombre}</h1>
                                <p className="date_">{product.descripcion}</p>
                                <div className="action">
                                    <div className="priceGroup">
                                        <p className="price new_price" id={`referencia_${product.referencia}`}>{product.referencia}</p>
                                        <p className="price new_price" id={`precio_${product.referencia}`}>{product.precio}</p>
                                        
                                    </div>                                    
                                    <div className="cart">
                                        <svg className="outCart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                            <path id={`cart_${product.referencia}`} d="M2 6h10l10 40h32l8-24H16"></path>
                                            <circle cx="23" cy="54" r="4"></circle>
                                            <circle cx="49" cy="54" r="4"></circle>
                                        </svg>
                                    </div>                                    
                                </div>
                                <a href={`./detalle-producto/${product._id}`}>
                                    <button>Details</button>
                                </a>
                            </div>
                        </div>                        
                    </div>            
                    ))}
                    </div>
                </div>
                     
        );
    };
};

