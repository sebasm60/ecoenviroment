import React from 'react';
import './styles/navbar.css';
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
    render() {
        return (
           <div className="header">
               <div className="header_toggle">
                   <i className="bx bx-menu" id="header-toggle"></i>
               </div>
               <div className="header__img">
                   
               </div>
           </div>
        );
    };
};
