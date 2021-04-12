import React from 'react';
import './styles/perfil.css';
import Nav from "./navbar";

export class Perfil extends React.Component {
    render() {
        return (
            <>
            <Nav/>
                <div className="seccion-perfil-usuario">
                    <div className="perfil-usuario-header">
                        <div className="perfil-usuario-portada">
                            <div className="perfil-usuario-avatar">
                               <img src={sessionStorage.getItem('imagen')}/>                   
                            </div>
                        </div>
                    </div>
                    <div className="perfil-usuario-body">
                        <div className="perfil-usuario-bio">
                            <h3 className="titulo">{sessionStorage.getItem('nombres') + " " + sessionStorage.getItem('apellidos')}</h3>                        
                        </div>
                        <div className="perfil-usuario-footer center">
                            <ul className="lista-datos">
                                <li><i className="icono bx bx-directions"></i> Direccion: {sessionStorage.getItem('direccion')}</li>
                                <li><i className="icono bx bx-phone"></i> Telefono: {sessionStorage.getItem('telefono')}</li>
                                <li><i className="icono bx bx-mail-send"></i> Correo: {sessionStorage.getItem('correo')}</li>
                                <li><i className="icono fas fa-map-marker-alt"></i> Ubicacion: {sessionStorage.getItem('departamento')}, {sessionStorage.getItem('ciudad')},{sessionStorage.getItem('barrio')}</li>
                                
                            </ul>
                            <ul className="lista-datos">   
                                <li>
                                    <a href="editarperfil">
                                        <button type="button">Actualizar datos</button> 
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            
            </>
        );
    };
};

export default Perfil;