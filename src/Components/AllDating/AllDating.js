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

  useEffect(async () => {    
    const token = Cookies.get('auth');
    if(!token) history.push( '/')
    let response = await ApiConsumer.allDating();
    setCitas(response);
  },[])

  useEffect(async () => {
    let todasCitas = await ApiConsumer.allDating();
    let sinCitas = true;
    todasCitas.map(cita => {
      if(cita.status === 'Programada') sinCitas=false;
    })
    setVacio(sinCitas)
  },[citas])
  
  useEffect(async () => {
    let response = await ApiConsumer.allDating();
    setCitas(response);
    setCancelledDating(false);
  }, [cancelledDating])
  
    
  return (
    <>
      <Header/>
      <div className="titulo">Todas las citas</div>  
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
      {vacio && <div>No hay citas programadas</div>}
      <Footer/>
    </>
  );
}

export default AllDating;