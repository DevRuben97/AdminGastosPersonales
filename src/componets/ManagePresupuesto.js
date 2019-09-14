import React from 'react';
import Presupuesto from './Presupuesto';
import PRestante from './PRestantante';

class ManagePresupuesto extends React.Component{

    constructor(props){
        super(props)
    }
    render(){
        return (
            <React.Fragment>
                <Presupuesto  presupuesto={this.props.Presupuesto}></Presupuesto>
                <PRestante restante= {this.props.Restante}></PRestante>
            </React.Fragment>
        )
    }
}

export default ManagePresupuesto;