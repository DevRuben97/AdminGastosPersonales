import React from 'react';
import '../Styles/App.css';
import Header from './Header';
import FormGastos from './FormGasto';
import List from './List';
import ManagePresupuesto from './ManagePresupuesto';
import '../Styles/bootstrap.min.css';
import Swal from 'sweetalert2';

class App extends React.Component{


  constructor(props){
    super(props);
    this.state= {
      Presupuesto: 0,
      Restante: 0,
      Gastos: {}
    }
  }

  componentWillMount(){
    let valid= false;
    let presupuesto= 0;
    do{
       presupuesto=Number.parseInt(prompt("Ingrese su presupuesto",0));
      if (presupuesto<=0 || isNaN(presupuesto)){
        alert("Debes ingresar un presupuesto");
        valid= false;
      }
      else{
        valid= true;
      }
    }
    while(valid==false)

    this.setState({
      Presupuesto: presupuesto,
      Restante: presupuesto
    })
    
  }
  UpdateGasto= Gasto=> {

    //Agregar el gato al state

    //Tomar una copia del State Actual:
    const Gastos= {...this.state.Gastos};

    //Agregado una llave identificadora al gasto:
    Gastos[`Gasto${Date.now()}`]= Gasto;

    //Agregar el gasto al State:
    this.setState({
      Gastos
    })

    //Reducir el presupuesto:
    this.RestarPresupuesto(Gasto.Valor);
  }
  RestarPresupuesto= Cantidad=> {
    //Restar los gastos del presupuesto:
    
    //Obtener el presupuesto actual:
    let PreActual=this.state.Presupuesto;
    let restante= PreActual- Cantidad;

    //Actualizar el state:
    this.setState({
      Restante: restante
    });
  }
  render(){
    return (
      <div className="App container">
        <Header
         Titulo= "Gasto de la semana"
        ></Header>
        <div className= "contenido-principal conetenido">

        <div className= "row">
        <div className="one-half column">
          <FormGastos
          UpdateGasto= {this.UpdateGasto}
          ></FormGastos>
        </div>
        <div className="one-half column">
          <List gastos={this.state.Gastos}></List>
          <div>
            <ManagePresupuesto 
            Presupuesto= {this.state.Presupuesto}
            Restante= {this.state.Restante}
            ></ManagePresupuesto>
          </div>
        </div>
        </div>

        </div>
      </div>
    );
  }

}

export default App;

