import React from 'react';
import Gasto from './Gasto';

export default function List(props){

    return (
        <div className="gastos-realizados">
         <h2>Listado</h2>
            {Object.keys(props.Gastos).map(key=>(
                <Gasto gasto={props.Gastos[key]} key={key}></Gasto>
            ))}
        </div>
    )
}