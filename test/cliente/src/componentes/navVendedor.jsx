import React from 'react';
import './styles/navbar.css';

export default class NavVendedor extends React.Component {

    close = () => {
        sessionStorage.clear();
        localStorage.clear();
        window.location.href = 'http://localhost:3000/empresas';
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
                            <a href="http://localhost:3000/dashEmpresa" className="nav__logo">
                                <i className="bx bx-layer nav__logo-icon"></i>
                                <span className="nav__logo-name">Ecoenviroment</span>
                            </a>

                            <div className="nav__list">
                                <a href="http://localhost:3000/dashEmpresa" className="nav__link active">
                                    <i className="las la-igloo"></i>
                                    <span className="nav__name">Dashboard</span>
                                </a>
                                <a href="http://localhost:3000/proyectos" className="nav__link">
                                    <i className="las la-clipboard-list nav__icon"></i>
                                    <span className="nav__name">Projects</span>
                                </a>
                                <a href="http://localhost:3000/inventario" className="nav__link">
                                    <i className="las la-receipt nav__icon"></i>
                                    <span className="nav__name">Inventory</span>
                                </a>
                            </div>
                        </div>
                        <a className="nav__link">
                            <i className="bx bx-log-out nav__icon" onClick={this.close}></i>
                            <span className="nav__name">Logout</span>
                        </a>
                    </nav>
                </div>
               
           </div> 
        );
    };
};