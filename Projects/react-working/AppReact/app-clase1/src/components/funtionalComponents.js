import React from 'react';

export function Comment(props){
    return(
        <div>
            <Photo nombre_imagen="Mi foto"/>
            <label>Nombre del usuario: {props.nombre}</label>
            <input></input>
            <button>Enviar</button>
        </div>

    );
}

export const Photo = (props) => {
    return (
        <div className="card">            
            <div>
                <img alt=""></img>

            </div>
            <span>{props.nombre_imagen}</span>
        </div>

    );
}

export const PersonInformation = (props) =>{
    return (
        <div className="">
            <label>Nombre: {props.name}</label>
            <label>Contraseña: {props.password}</label>
            <img alt="" src={props.image}></img>
        </div>

    )
}