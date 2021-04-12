import React from "react";
import axios from "axios";
import './styles/inventario.css';
import Nav from "./navVendedor";

export class AgregarProyecto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            proyecto : []
        };
    };

    handleSubmit = async(e) => {
        e.preventDefault();
       try {
        const datos = {
            numeroDeProyecto : this.numeroDeProyecto,
            nombre : this.nombre,
            meta : this.meta,
            avance : this.avance,
            descripcion : this.descripcion,
            empresa : sessionStorage.getItem('nit')
        };
        await axios.post(`http://localhost:5000/proyecto/agregar`, datos);
       } catch (error) {
           console.error(error);
       }

    };

    render() {        
        return (    
            <>
            <Nav/>
                <div className="container-producto">
                    <h1>Agregar proyecto</h1>
                    <a href="proyectos">
                        <button>Volver</button>
                    </a>
                    <br/>
                    <br/>
                    <form onSubmit={this.handleSubmit}>
                        <label>Numero de proyecto</label>
                        <input
                        type="text" 
                        placeholder="Numero de proyecto"
                        name="NroProyecto"
                        id="NroProyecto"
                        onChange={(e) => (this.numeroDeProyecto = e.target.value)}>
                        </input>

                        <label>Nombre</label>
                        <input
                        type="text" 
                        placeholder="Nombre"
                        name="nombre"
                        id="nombre"
                        onChange={(e) => (this.nombre = e.target.value)}>
                        </input>

                        <label>Descripcion</label>
                        <input
                        type="text" 
                        placeholder="Descripcion"
                        name="descripcion"
                        id="descripcion"
                        onChange={(e) => (this.descripcion = e.target.value)}>
                        </input>

                        <label>Meta</label>
                        <input
                        type="text" 
                        placeholder="Meta"
                        name="meta"
                        id="meta"
                        onChange={(e) => (this.meta = e.target.value)}>
                        </input>

                        <label>Avance</label>
                        <input
                        type="text" 
                        placeholder="Avance"
                        name="avance"
                        id="avance"
                        onChange={(e) => (this.avance = e.target.value)}>
                        </input>

                        <button type="submit">Agregar</button>
                    </form>
                </div>
               
            </>        
        );
    };
};