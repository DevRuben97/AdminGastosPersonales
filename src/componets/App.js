import React, {useState} from 'react';
import '../Styles/App.css';
import Header from './Header';
import FormGastos from './FormGasto';
import List from './List';
import ManagePresupuesto from './ManagePresupuesto';
import '../Styles/bootstrap.min.css';
import InitialForm from './InitialForm';
import Swal from 'sweetalert2';


export default function App(){

  const [Presupuesto, SetPresupuesto]= useState({
    Actual: 0,
    Restante: 0,
    Gastos: {}
  });



 const UpdateGasto= Gasto=> {

    //Agregar el gato al state
    function ExecuteGasto(){
       //Tomar una copia del State Actual:
      const presupuesto = { ...Presupuesto };
      let {Gastos}= presupuesto;
      //Agregado una llave identificadora al gasto:
      Gastos[`Gasto${Date.now()}`] = Gasto;

      presupuesto.Gastos= Gastos;
      //Agregar el gasto al State:
      SetPresupuesto(presupuesto);

      //Reducir el presupuesto:
      RestarPresupuesto(Gasto.Valor);
    }
    //Validacion en caso de que el gasto se demasiado grande.
    if (Gasto.Valor>= Presupuesto.Restante){
      Swal.fire({
        title: 'Agregar Gasto',
        text: 'El gasto introducido supera al presupuesto actual. ¿Quieres continuar?',
        type: 'question',
        showCancelButton: true,
        confirmButtonText: 'continuar' 
      }).then((result)=>{
        if (result.value){
          ExecuteGasto();
        }
      })
    }
    else{
      ExecuteGasto();
    }
    
  }

 const RestarPresupuesto= Cantidad=> {
    //Restar los gastos del presupuesto:

    //Obtener el presupuesto actual:
    let Actual= {...Presupuesto};
    Actual.Restante-= Cantidad;

    //Actualizar el state:
    SetPresupuesto(Actual);
  }

  const ChangePresupuesto= (Data)=>{

    var pres= {...Presupuesto};
    pres.Actual= Data;
    pres.Restante= Data;
    SetPresupuesto(pres);
  }

  //Render:
  if (Presupuesto.Restante<= 0){


    const Title= Presupuesto.Restante===0 && Presupuesto.Actual? 'Ingresa un nuevo presupuesto': 'Introduce tu presupuesto inicial';
    const Finishedmoney= Presupuesto.Restante===0 && Presupuesto.Actual? true: false;

    return (
      <div className= "App container">
       <Header Title={Title}></Header>

       <div className="contenido-principal contenido">
          <InitialForm ChangePresupuesto={ChangePresupuesto} Finishedmoney={Finishedmoney}></InitialForm>
       </div>
      </div>
    )
  }
  else{
    
    return (
      <div className="App container">
        <Header
         Title= "Gasto de la semana"
        ></Header>
        <div className= "contenido-principal conetenido">
  
        <div className= "row">
        <div className="one-half column">
          <FormGastos
          UpdateGasto= {UpdateGasto}
          ></FormGastos>
        </div>
        <div className="one-half column">
          <List Gastos={Presupuesto.Gastos}></List>
          <div>
            <ManagePresupuesto 
            Presupuesto= {Presupuesto.Actual}
            Restante= {Presupuesto.Restante}
            ></ManagePresupuesto>
          </div>
        </div>
        </div>
  
        </div>
      </div>
    );
  }

}

  