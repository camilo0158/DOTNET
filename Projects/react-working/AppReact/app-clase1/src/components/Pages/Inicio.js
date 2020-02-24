import React, {Component} from 'react';

class Inicio extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
            elementos: []
        }
        this.actualizarContador = this.actualizarContador.bind(this);
    }

    componentDidMount(){
        this.setState({contador:1});
    }

    actualizarContador(){
        this.setState({contador:this.state.contador+1})
    }

    render(){
        return(
            <div>
                <label>{this.props.multiplicar(this.state.contador)}</label>
            <div className = "alert alert-primary">
                <button onClick={this.actualizarContador}>Incrementar</button>
                <label>Contador: {this.state.contador}</label>
            </div>
            </div>
        );
    };
}

export default Inicio;
