import React from 'react';
import './styles/perfil.css';
import Nav from "./navbar";

export class Perfil extends React.Component {
    render() {
        return (
            <>
            <Nav/>
                <div class="seccion-perfil-usuario">
                    <div class="perfil-usuario-header">
                        <div class="perfil-usuario-portada">
                            <div class="perfil-usuario-avatar">
                               <img src="/img/perfil.jpg"/>                   
                            </div>
                        </div>
                    </div>
                    <div class="perfil-usuario-body">
                        <div class="perfil-usuario-bio">
                            <h3 class="titulo">{sessionStorage.getItem('nombres') + " " + sessionStorage.getItem('apellidos')}</h3>                        
                        </div>
                        <div class="perfil-usuario-footer center">
                            <ul class="lista-datos">
                                <li><i class="icono bx bx-directions"></i> Direccion de usuario:</li>
                                <li><i class="icono bx bx-phone"></i> Telefono:</li>
                                <li><i class="icono bx bx-mail-send"></i> Correo: {sessionStorage.getItem('correo')}</li>
                                <li><i class="icono fas fa-building"></i> Cargo</li>
                            </ul>
                            <ul class="lista-datos">
                                <li><i class="icono fas fa-map-marker-alt"></i> Ubicacion.</li>
                                <li><i class="icono fas fa-calendar-alt"></i> Fecha nacimiento.</li>
                                <li><i class="icono fas fa-user-check"></i> Registro.</li>
                                <li><i class="icono fas fa-share-alt"></i> Redes sociales.</li>
                                <li><a href="#editar"><button class="btn mt-3 align">Editar datos</button></a></li>
                            </ul>                   
                        </div>
                    </div>
                </div>

                <div id="editar" class="modal">
                    <div class="modal-contenido">
                        
                        <h2>Mi primer Modal</h2>
                        <p>Este es mi primera ventana modal sin utilizar JavaScript.</p>
                        <h2>Mi primer Modal</h2>
                        <p>Este es mi primera ventana modal sin utilizar JavaScript.</p>
                        <h2>Mi primer Modal</h2>
                        <p>Este es mi primera ventana modal sin utilizar JavaScript.</p>
                        <h2>Mi primer Modal</h2>
                        <p>Este es mi primera ventana modal sin utilizar JavaScript.</p>
                        <a href="#">X</a>
                    </div>  
                </div>
            
            </>
        );
    };
};

export default Perfil;