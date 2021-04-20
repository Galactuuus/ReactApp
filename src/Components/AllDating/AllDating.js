import SingleDating from '../SingleDating/SingleDating';
import './AllDating.css';
import ApiConsumer from '../../Util/ApiConsumer.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';


const AllDating = () => {

  let [citas, setCitas] = useState([]);

  useEffect(async () => {
    citas = await ApiConsumer.allDating();
    setCitas(citas);
    console.log(citas);
  },[])
  
  
    
  return (
    <>
      <Header/>
      <span className="titulo">All Dating</span>  
      {citas.map((cita)=>{ 
        return (<SingleDating 
        id={cita.NumCita}
        date={cita.FechaCita}
        dni= {cita.DNI} 
        doctorID= {cita.Doctor}
        status= {cita.Estado}
        detail= {cita.DetalleCita}
        />);
      })}
      <Footer/>
    </>
  );
}

export default AllDating;