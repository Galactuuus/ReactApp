import SingleDating from '../SingleDating/SingleDating';
import './UserDating.css';
import ApiConsumer from '../../Util/ApiConsumer.js';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const UserDating = () => {
  let [citas, setCitas] = useState([]);
  let [cancelledDating, setCancelledDating] = useState(false)
  let citasProgramadas = [];
  let doctor = "";
  
  useEffect(async () => {
    
    citas = await ApiConsumer.userDating();
    citas.map(cita => {
      if(cita.status === 'Programada') citasProgramadas.push(cita);
    })
    setCitas(citasProgramadas);

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
      <Footer/>
    </>
  );
}

export default UserDating;