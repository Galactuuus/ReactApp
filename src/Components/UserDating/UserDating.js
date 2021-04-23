import SingleDating from '../SingleDating/SingleDating';
import './UserDating.css';
import ApiConsumer from '../../Util/ApiConsumer.js';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Cookies, { set } from 'js-cookie';
import { useHistory } from "react-router";

const UserDating = () => {
  const history = useHistory();
  let [citas, setCitas] = useState([]);
  let [cancelledDating, setCancelledDating] = useState(false);
  let [vacio, setVacio] = useState(false);
  let doctoresID = [];
  let doctoresNombres = [];
  let citasPrecargadas = [];
  let citasProgramadas = [];
  let citasCanceladas = [];
  
  useEffect(async () => {
    const token = Cookies.get('auth');
    if(!token) history.push('/')
    let response = await ApiConsumer.userDating();
    let doctores = await ApiConsumer.listDoctors();
    doctores.map(e => doctoresNombres.push(e));
    if (response === false) setVacio(true);
    else{
      response.map(cita => {
        if(cita.status === 'Programada'){
          doctores.map(doctor => {
        
            if(cita.doctorID === doctor.id) { 
              cita.doctorID = doctor.name;
              citasPrecargadas.push(cita);
            };
          })
        }   
      })
      setCitas(citasPrecargadas);
    }
  },[])

  useEffect(async () => {
    let response = await ApiConsumer.userDating();
    response.map(cita => {
      if(cita.status === 'Programada') citasProgramadas.push(cita);
      if(cita.status === 'Cancelada') citasCanceladas.push(cita);
    })
    if(citasCanceladas.length === response.length) setVacio(true)
    else{
      setCitas(citasProgramadas);
    }
    setCancelledDating(false);
  },[cancelledDating])

  return (
    <>
      <Header/>
      <div className="userDating">
        <div className="titulo">Citas Usuario</div>
        {!vacio && citas.map((cita)=>{
          return (<SingleDating 
            id={cita.id}
            date={cita.date}
            dni= {cita.userID} 
            doctorID= {cita.doctorID}
            status= {cita.status}
            detail= {cita.detail}
            setCancelledDating={setCancelledDating}
          />);
        })}
        {vacio && <div className="noDates"><h1>No tienes ninguna cita ahora mismo</h1></div>}
      </div>
      <Footer/>
    </>
  );
}

export default UserDating;