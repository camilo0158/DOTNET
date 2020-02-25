import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            // <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <nav class="navbar navbar-dark bg-dark">
                <a class="navbar-brand" href="#">{this.props.nombre}</a>
                <a href="/Login" className="item-menu">Iniciar Sesion</a>
                <a href="/Registro" className="item-menu">Registrar</a>
            </nav>
        )
    }
}


