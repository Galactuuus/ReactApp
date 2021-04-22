import SingleDating from '../SingleDating/SingleDating';
import './UserDating.css';
import ApiConsumer from '../../Util/ApiConsumer.js';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Cookies from 'js-cookie';
import { useHistory } from "react-router";

const UserDating = () => {
  const history = useHistory();
  let [citas, setCitas] = useState([]);
  let [cancelledDating, setCancelledDating] = useState(false)
  let citasPrecargadas = [];
  let citasProgramadas = [];
  
  useEffect(async () => {
    const token = Cookies.get('auth');
    if(!token) history.push( '/')
    citas = await ApiConsumer.userDating();
    citas.map(cita => {
      if(cita.status === 'Programada') citasPrecargadas.push(cita);
    })
    setCitas(citasPrecargadas);
  },[])

  useEffect(async () => {
    citas = await ApiConsumer.userDating();
    citas.map(cita => {
      if(cita.status === 'Programada') citasProgramadas.push(cita);
    })
    setCitas(citasProgramadas);
    setCancelledDating(false); 
  },[cancelledDating])

  return (
    <>
      <Header/>
      <div className="userDating">
        <div className="titulo">Citas Usuario</div>
        {citas.map((cita)=>{
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
      </div>
      <Footer/>
    </>
  );
}

export default UserDating;