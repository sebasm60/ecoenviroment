import React from 'react';
import './styles/editarPerfil.css';
import Nav from "./navbar";
import axios from 'axios';

export class EditarPerfil extends React.Component {
    handleSubmit = async(e) => {
        
        const datos = {          
          nombres : this.nombres,
          apellidos : this.apellidos,
          identificacion : this.identificacion ,
          correo : this.correo,
        };
        await axios.put(`http://localhost:5000/usuario/update/${sessionStorage.getItem('correo')}`, datos);
      };
    render() {
        return (
            <>
            <Nav/>
            <form onSubmit={this.handleSubmit}>
            <div className="container-productos mt-5">
                <div className="col-md-6">      
                    <div className="card-editar" >
                        <div className="warpper-editar">
                            <div className="card_img-editar">
                                <img src={sessionStorage.getItem('imagen')}/>
                            </div>   
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input  type="file" name="image"/>
                                        <button type="submit">Subir</button>
                                    </div>
                                </div>						
					        </div>                               
                        </div>
                    </div>
                 </div>

                <div className="col-md-6"> 
                    <h1>Actializa tus datos</h1>        
                    <div className="input-field col s12">
                        <label>Nombres: </label>
                        <input
                        type="text"
                        name="nombres"
                        className="form-control"
                        defaultValue={sessionStorage.getItem('nombres')}
                        onChange={(e) => (this.nombres = e.target.value)}
                        />
                    </div>
                    <div className="input-field col s12">
                        <label>Apellidos: </label>
                        <input
                        type="text"
                        name="apellidos"
                        className="form-control"
                        defaultValue={sessionStorage.getItem('apellidos')}
                        onChange={(e) => (this.apellidos = e.target.value)}
                        />
                    </div>
                    <div className="input-field col s12">
                        <label>Correo: </label>
                        <input
                        type="email"
                        name="correo"
                        className="form-control"
                        defaultValue={sessionStorage.getItem('correo')}
                        onChange={(e) => (this.correo = e.target.value)}
                        />
                    </div>
                    <div className="input-field col s12">
                        <label>Identificacion: </label>
                        <input
                        type="text"
                        name="identificacion"
                        className="form-control"
                        defaultValue={sessionStorage.getItem('identificacion')}
                        onChange={(e) => (this.identificacion = e.target.value)}
                        />
                    </div>
                    <div className="input-field col s12">
                        <label>Contraseña: </label>
                        <input
                        type="password"
                        name="contraseña"
                        className="form-control"
                        defaultValue={sessionStorage.getItem('')}
                        onChange={(e) => (this.identificacion = e.target.value)}
                        />
                    </div>                    
                    <div>
                        <button type="submit" className="ml-2">
                        Actializar datos
                        </button>                       
                     </div>
                </div>    
            </div>
            </form>
            <a href="perfil">
                <button className="mt-2">Regresar</button>
            </a>
            </>
        );
    };
};

export default EditarPerfil;