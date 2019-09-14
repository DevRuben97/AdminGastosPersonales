import React from 'react';


const Gasto= props=>{

    const {NombreGasto, Valor}= props.gasto;
    return (
        <li className="gastos">
            <p>
                {NombreGasto}
                <span className="gasto">RD$ {Valor}</span>
            </p>

        </li>
    )
}


export default Gasto;