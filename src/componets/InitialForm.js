import React, {useState, useEffect} from 'react';
import Swal from 'sweetalert2';



export default function InitialForm(props){


    const [Errors, SetErros]= useState(true);
    const [Presupuesto,SetPresupuesto]= useState(0);
    const [MoneyEnd, SetMoneyEnd]= useState(props.Finishedmoney);


    useEffect(()=>{

        if (MoneyEnd){
            Swal.fire({
                title: 'Se ha terminado tu dinero, introduce un nuevo presupuesto',
                type: 'warning'
            });
            SetMoneyEnd(false);
        }
    },[MoneyEnd])


    const HandleChange= event=>{
        SetPresupuesto(Number.parseInt(event.target.value));
        SetErros(Presupuesto<= 0? true: false);
        console.log(Presupuesto);

    }

    const SendPresupuesto= (event)=>{
        event.preventDefault();
        props.ChangePresupuesto(Presupuesto);
    }



    return (
        <div className= "container">
            <div className= "row">
                <div className="col-md">
                <input type="number" className= "form-control" placeholder="Tu presupuesto" onChange= {HandleChange}></input>
                <br />
                </div>
                <button className="btn btn-primary" disabled= {Errors} onClick={SendPresupuesto}>Iniciar</button>
            </div>
        </div>
    )


}