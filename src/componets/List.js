import React from 'react';
import Gasto from './Gasto';

class List extends React.Component{

    constructor(props){
        super(props);
    }
    render(){

        return (
            <div className="gastos-realizados">
                <h2>Listado</h2>
                {Object.keys(this.props.gastos).map(key=>(
                    <Gasto gasto={this.props.gastos[key]} key={key}></Gasto>
                ))}
            </div>
        )
    }
}

export default List;