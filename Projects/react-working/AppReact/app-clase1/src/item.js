import React from 'react';

export function Item(props){
return (
    <div className="card">
        <label>Nuevo Item con id {props.idItem}</label>
        <button className="btn btn-success">seleccionar</button>
    </div>
    
)
}

export const Item2 = (props) => {
    return <spam>Nuevo Item 2 </spam>
}

//export default Item;