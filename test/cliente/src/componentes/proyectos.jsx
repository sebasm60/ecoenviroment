import React from "react";
import axios from "axios";
import './styles/inventario.css';
import Nav from "./navVendedor";

export class Proyectos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            proyecto : []
        };
    };

    async componentDidMount() {
        const proyecto = await axios.get(`http://localhost:5000/proyecto/listarPorEmpresa/${sessionStorage.getItem('nit')}`);
        this.setState({proyecto: proyecto.data});
        console.log(this.state.proyecto);
    };

    render() {        
        return (    
            <>
            <Nav/>
                <div className="container-producto">
                    <h1>Proyectos</h1>
                    <br/><br/>
                     <a href="http://localhost:3000/agregarProyecto">
                         <button>Agregar proyecto</button>
                     </a>
                    <br/><br/>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Numero de proyecto</th>
                                <th>Nombre</th>
                                <th>Meta</th>
                                <th>Avance</th>
                                <th>Descripcion</th>
                                <th>Eliminar</th>
                                <th>Editar</th>
                            </tr>
                        </thead>
                            {this.state.proyecto.map((proyecto, index) => (
                                <tbody key={index}>
                                    <tr>
                                        <td>{proyecto.numeroDeProyecto}</td>
                                        <td>{proyecto.nombre}</td>
                                        <td>{proyecto.meta}</td>
                                        <td>{proyecto.avance}</td>
                                        <td>{proyecto.descripcion}</td>                                 
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