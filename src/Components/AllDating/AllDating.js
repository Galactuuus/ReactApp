import SingleDating from '../SingleDating/SingleDating';
import './AllDating.css';
import ApiConsumer from '../../Util/ApiConsumer.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';


const AllDating = () => {

  let [citas, setCitas] = useState([]);
  let [cancelledDating, setCancelledDating] = useState(false)

  useEffect(async () => {
    citas = await ApiConsumer.allDating();
    setCitas(citas);
  },[])
  
  useEffect(async () => {
    citas = await ApiConsumer.allDating();
    setCitas(citas);
    setCancelledDating(false);
  }, [cancelledDating])
  
    
  return (
    <>
      <Header/>
      <span className="titulo">All Dating</span>  
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

export default AllDating;