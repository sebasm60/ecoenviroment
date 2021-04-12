import React from "react";
import axios from "axios";
import './styles/inventario.css';
import Nav from "./navVendedor";

export class AgregarProducto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            producto : []
        };
    };

    handleSubmit = async(e) => {

        e.preventDefault();
       try {
        const datos = {
            referencia : this.referencia,
            nombre : this.nombre,
            precio : this.precio,
            empresa : sessionStorage.getItem('nit'),
            cantidad : this.cantidad,
            categoria : this.categoria,
            descripcion : this.descripcion,
            puntos : this.puntos,
            donacion : this.donacion,
            imagen : 'img/default.jpg'
        };
        await axios.post(`http://localhost:5000/producto/agregar`, datos);
       } catch (error) {
           console.error(error);
       }

    };

    render() {        
        return (    
            <>
            <Nav/>
                <div className="container-producto">
                    <h1>Agregar producto</h1>
                    <a href="inventario">
                        <button>Volver</button>
                    </a>
                    <br/>
                    <br/>
                    <form onSubmit={this.handleSubmit}>
                        <label>Referencia</label>
                        <input
                        type="text" 
                        placeholder="referencia"
                        name="referencia"
                        id="referencia"
                        onChange={(e) => (this.referencia = e.target.value)}>
                        </input>

                        <label>Nombre</label>
                        <input
                        type="text" 
                        placeholder="nombre"
                        name="nombre"
                        id="nombre"
                        onChange={(e) => (this.nombre = e.target.value)}>
                        </input>

                        <label>Precio</label>
                        <input
                        type="text" 
                        placeholder="precio"
                        name="precio"
                        id="precio"
                        onChange={(e) => (this.precio = e.target.value)}>
                        </input>

                        <label>Cantidad</label>
                        <input
                        type="text" 
                        placeholder="Cantidad"
                        name="cantidad"
                        id="cantidad"
                        onChange={(e) => (this.cantidad = e.target.value)}>
                        </input>
                        
                        <label>Categoria</label>
                        <input
                        type="text" 
                        placeholder="categoria"
                        name="categoria"
                        id="categoria"
                        onChange={(e) => (this.categoria = e.target.value)}>
                        </input>

                        <label>Descripcion</label>
                        <input
                        type="text" 
                        placeholder="descripcion"
                        name="descripcion"
                        id="descripcion"
                        onChange={(e) => (this.descripcion = e.target.value)}>
                        </input>

                        <label>Puntos</label>
                        <input
                        type="text" 
                        placeholder="puntos"
                        name="puntos"
                        id="puntos"
                        onChange={(e) => (this.puntos = e.target.value)}>
                        </input>

                        <label>% de donacion</label>
                        <input
                        type="text" 
                        placeholder="donacion"
                        name="donacion"
                        id="donacion"
                        onChange={(e) => (this.donacion = e.target.value)}>
                        </input>

                        <button type="submit">Agregar</button>
                    </form>
                </div>
               
            </>        
        );
    };
};