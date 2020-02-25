import React, { Component } from 'react'
import {Route, BrowserRouter as Router } from 'react-router-dom'
import Inicio from './Inicio';
import Registro from './Registro';

const Navegacion = (
    <Router>
        <Route path="/Login" component={Inicio}></Route>
        <Route path="/Registro" component={Registro}></Route>
    </Router>

)

class Main extends Component {
        
    render() {
        return (
            <div className="main-container">
                {
                    Navegacion

                }
            </div>
        )
    }
}

export default Main;
