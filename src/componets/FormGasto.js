import React, {Component} from 'react';

class FormGatos extends Component{


    constructor(props){
        super(props);
        //Crear las referencias:
        this.Nombre= React.createRef();
        this.Gasto= React.createRef();
    }
    AddGasto= event=>{
        event.preventDefault();
        
        //Creando el objeto:
        const Gasto= {
            NombreGasto: this.Nombre.current.value,
            Valor: this.Gasto.current.value
        };
        this.props.UpdateGasto(Gasto);

        //Linpiar el formulario:
        this.Nombre.current.value= '';
        this.Gasto.current.value= '';
    }

    render(){

        return(
            <form method="post" onSubmit={this.AddGasto}>
                <h2>Ingrese sus Gastos</h2>
                <div className= "campo">
                    <label>Nombre del Gasto</label>
                    <input className="u-full-width" type="text" placeholder="Ej: Trasporte" ref= {this.Nombre}/>
                </div>
                <div className= "campo">
                    <label>Cantidad</label>
                    <input className="u-full-width" type='text' placeholder="RD: $0.00" ref={this.Gasto}/>    
                </div>

                <input className= "button-primary u-full-width" type="submit" value="Agregar"/>
            </form>
        )
    }
}

export default FormGatos;