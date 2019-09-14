import React from 'react';

const PRestante= props=>{

    return (
        <div className="alert alert-success">
          <label>Restante: RD$ {props.restante}</label>
        </div>
    )
}

export default PRestante;