import React from "react";
import axios from "axios";
import Nav from "./navVendedor";
import './styles/dashVendedor.css';

export class DashVendedor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      producto: [],
    };
  };
  
  render() {
    return (
    <>
      <Nav/>
        <main>
            <div className="cards">            
                <div className="card-single">
                    <div>
                        <h1>54</h1>
                        <span>Customers</span>
                    </div>
                    <div>
                        <span className="las la-users"></span>
                    </div>
                </div>
                <div className="card-single">
                    <div>
                        <h1>79</h1>
                        <span>Projects</span>
                    </div>
                    <div>
                        <span className="las la-clipboard"></span>
                    </div>
                </div>
                <div className="card-single">
                    <div>
                        <h1>124</h1>
                        <span>Orders</span>
                    </div>
                    <div>
                        <span className="las la-shopping-bag"></span>
                    </div>
                </div>
                <div className="card-single">
                    <div>
                        <h1>6K</h1>
                        <span>Income</span>
                    </div>
                    <div>
                        <span className="las la-google-wallet"></span>
                    </div>
                </div>
            </div>

            <div className="recent-grid">
                <div className="projects">
                    <div className="card-dash">
                        <div className="card-header-dash">
                            <h2>Proyectos recientes.</h2>
                            <button> See all 
                                <span className="las la-arrow-right"></span>
                            </button>
                        </div>
                        <div className="card-body-dash">
                            <table >
                                <thead>
                                    <tr>
                                        <td>Nombre del proyecto</td>
                                        <td>Deparatamento</td>
                                        <td>Estado</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>UI/UX desing</th>
                                        <th>Ui teamt</th>
                                        <th>
                                            <span className="status"></span>
                                            Review
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>Web development</td>
                                    </tr>
                                    <tr>
                                        <td>Ushop App</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="customers">

                </div>
            </div>
        </main>  
    </>
    );
  }
}

export default DashVendedor;
