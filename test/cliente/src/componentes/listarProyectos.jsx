import React from "react";
import axios from "axios";
import './styles/inventario.css';
import Nav from "./navbar";

export class ListarProyectos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            proyecto : []
        };
    };

    async componentDidMount() {
        const proyecto = await axios.get(`http://localhost:5000/proyecto/listar/`);
        this.setState({proyecto: proyecto.data});
        console.log(this.state.proyecto);
    };

    render() {        
        return (    
            <>
            <Nav/>
                <div className="container-producto">
                    <h1>Proyectos</h1>
                        <br></br>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Numero de proyecto</th>
                                <th>Nombre</th>
                                <th>Meta</th>
                                <th>Avance</th>
                                <th>Descripcion</th>
                                <th>Donar</th>
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
                                        <td><button>Donar</button></td> 
                                        
                                    </tr> 
                                </tbody>
                            ))}
                    </table>
                </div>
            </>        
        );
    };
};