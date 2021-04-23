import SingleDating from '../SingleDating/SingleDating';
import './AllDating.css';
import ApiConsumer from '../../Util/ApiConsumer.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useHistory } from "react-router";

const AllDating = () => {
  const history = useHistory();
  let [citas, setCitas] = useState([]);
  let [cancelledDating, setCancelledDating] = useState(false); 
  let [vacio, setVacio] = useState(false);
  let citasCanceladas = [];
  let citasPrecargadas = [];
  let doctoresNombres = [];

  useEffect(async () => {    
    const token = Cookies.get('auth');
    if(!token) history.push( '/')
    let response = await ApiConsumer.allDating();
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
    setCitas(response);
  },[])
  
  useEffect(async () => {
    let response = await ApiConsumer.allDating();
    response.map(cita => {
      if(cita.status === 'Cancelada') citasCanceladas.push(cita);
    })
    if(citasCanceladas.length === response.length) setVacio(true)
    else setCitas(response);
    setCancelledDating(false);
  }, [cancelledDating])
  
    
  return (
    <>
      <Header/>
      <div className="allDating">
        <div className="titulo">Todas las citas</div>  
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
        {vacio && <div className="noDates"><h1>No hay ninguna cita ahora mismo</h1></div>}
      </div>
      <Footer/>
    </>
  );
}

export default AllDating;