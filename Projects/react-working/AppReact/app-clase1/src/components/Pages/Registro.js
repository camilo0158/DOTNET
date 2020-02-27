import React, { Component } from 'react'
import {PersonInformation} from '../funtionalComponents'
import Api from 'axios';

class Registro extends Component {
    constructor(props) {
        super(props);
        this.state = {

            rows: [],
            name:"",
            password:""
        }
        
        this.filledMail = this.filledMail.bind(this);
        this.newItem = this.newItem.bind(this);
    }

    filledMail = (e) => {
        //console.log(e.target.id);
        console.log(e.target.value);
        let id =  e.target.id;
        if(id === "mail"){
            this.setState({name:e.target.value});
        }else{
            this.setState({password:e.target.value});
        }

    }

    newItem = (e) => {
        e.preventDefault();

        let item = {
            name: this.state.name,
            password: this.state.password,
            image: ""
        }
        this.setState({rows: this.state.rows.push(item)})
    }

    async consumirApi (){
        try{
            var response = await Api.get("https://pokeapi.co/api/v2/pokemon");
            console.log(response);
        }
        catch(error){
            console.log(error);
        }
        
    }


    render() {
        return (
            <div className="container row">
            <div className="card form-card col-4">
            <button onClick={this.consumirApi} type="submit" class="btn btn-primary">Consumir</button>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onChange={this.filledMail}  type="email" class="form-control" id="mail" aria-describedby="emailHelp"></input>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input onChange={this.filledMail} type="password" class="form-control" id="password"></input>
                    </div>
                    <div class="form-group form-check">
                        <input  type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button onClick={this.newItem} type="submit" class="btn btn-primary">Guardar</button>
                </form>
            </div>
            <div  className="card form-card col">
                {
                    this.state.rows.map((item, i) => {
                        return <PersonInformation name={item.name} password={item.password}></PersonInformation>

                    }
                    
                    )

                }

            </div>

            </div>
        )
    }
}

export default Registro;
