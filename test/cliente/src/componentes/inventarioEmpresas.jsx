import React from "react";
import axios from "axios";
import './styles/inventario.css';
import Nav from "./navVendedor";

export class Inventario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            producto : []
        };
    };

    async componentDidMount() {
        const producto = await axios.get(`http://localhost:5000/producto/listarPorEmpresa/${sessionStorage.getItem('nit')}`);
        this.setState({producto: producto.data});
        console.log(this.state.producto);
    };

    render() {        
        return (    
            <>
            <Nav/>
                <div className="container-producto">
                    <h1>Inventario</h1>
                    <br/><br/>
                     <a href="http://localhost:3000/agregarProducto">
                         <button>Agregar producto</button>
                     </a>
                    <br/><br/>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Referencia</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th>Categoria</th>
                                <th>Descripcion</th>
                                <th>Puntos</th>
                                <th>% de donacion</th>
                                <th>Eliminar</th>
                                <th>Editar</th>
                            </tr>
                        </thead>
                            {this.state.producto.map((producto, index) => (
                                <tbody key={index}>
                                    <tr>
                                        <td>{producto.referencia}</td>
                                        <td>{producto.nombre}</td>
                                        <td>{producto.precio}</td>
                                        <td>{producto.cantidad}</td>
                                        <td>{producto.descripcion}</td>
                                        <td>{producto.categoria}</td>
                                        <td>{producto.puntos}</td>
                                        <td>{producto.donacion}</td>                                    
                                        <td><img src="https://img.icons8.com/ios/50/26e07f/delete-sign--v3.png"/></td> 
                                        <td><img src="https://img.icons8.com/material-sharp/50/26e07f/edit--v3.png"/></td> 
                                    </tr> 
                                </tbody>
                            ))}
                    </table>
                </div>
            </>        
        );
    };
};