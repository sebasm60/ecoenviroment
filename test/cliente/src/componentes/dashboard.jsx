import React from "react";
import Nav from "./navbar";
import {Productos} from "./productos";

export class Dashboard extends React.Component {
    render() {    
        return ( 
            <>
                <Nav/>
                <Productos/>
            </>
        );
    };
};

export default Dashboard;

