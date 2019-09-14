import React from 'react';


const Presupuesto= props=>{
    return (
            <div className="alert alert-primary">
                <label>El Presupuesto es: RD$ {props.presupuesto}</label>
            </div>
    )
}

export default Presupuesto;