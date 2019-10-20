import React from 'react';
import Presupuesto from './Presupuesto';
import PRestante from './PRestantante';

function ManagePresupuesto(props){
    return (
        <React.Fragment>
            <Presupuesto  presupuesto={props.Presupuesto}></Presupuesto>
            <PRestante restante= {props.Restante}></PRestante>
        </React.Fragment>
    )
}

export default ManagePresupuesto;