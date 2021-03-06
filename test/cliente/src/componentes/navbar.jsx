import React from 'react';
import './styles/navbar.css';

export default class Nav extends React.Component {

    close = () => {
        sessionStorage.clear();
        localStorage.clear();
        window.location.href = 'http://localhost:3000/';
    };

    render() {
        return (
           <div className="container-nav" id="container-nav">
                <header className="header" id="header">
                    <div className="header__toggle">
                        <i className="bx bx-menu" id="header-toggle"></i>
                    </div>

                    <div className="header__img">
                        <img src={sessionStorage.getItem('imagen')} />
                    </div>
                </header>

                <div className="l-navbar" id="nav-bar">
                    <nav className="nav">
                        <div>
                            <a href="http://localhost:3000/dashboard" className="nav__logo">
                                <i className="bx bx-layer nav__logo-icon"></i>
                                <span className="nav__logo-name">Ecoenviroment</span>
                            </a>

                            <div className="nav__list">
                                <a href="http://localhost:3000/dashboard" className="nav__link active">
                                    <i className="bx bx-grid-alt nav__icon"></i>
                                    <span className="nav__name">Inicio</span>
                                </a>
                                <a href="http://localhost:3000/perfil" className="nav__link">
                                    <i className="bx bx-user nav__icon"></i>
                                    <span className="nav__name">Perfil</span>
                                </a>
                                
                                <a href="http://localhost:3000/listarProyectos" className="nav__link">
                                    <i className="bx bx-folder nav__icon"></i>
                                    <span className="nav__name">Proyectos</span>
                                </a>
                                
                                <a href="http://localhost:3000/carrito" className="nav__link">
                                    <i className="bx bx-cart nav__icon"></i>
                                    <span className="nav__name">Carrito</span>
                                </a>
                            </div>
                        </div>
                        <a className="nav__link" onClick={this.close}>
                            <i className="bx bx-log-out nav__icon"></i>
                            <span className="nav__name">Logout</span>
                        </a>
                    </nav>
                </div>
               
           </div> 
        );
    };
};