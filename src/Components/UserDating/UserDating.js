import SingleDating from '../SingleDating/SingleDating';
import './UserDating.css';
import ApiConsumer from '../../Util/ApiConsumer.js';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const UserDating = () => {
  let [citas, setCitas] = useState([]);

  useEffect(async () => {
    citas = await ApiConsumer.userDating();
    setCitas(citas);
  },[])
  return (
    <>
      <Header/>
      <span className="titulo">User Dating</span>
      {citas.map((cita)=>{
        return (<SingleDating 
          id={cita.id}
          date={cita.date}
          dni= {cita.userID} 
          doctorID= {cita.doctorID}
          status= {cita.status}
          detail= {cita.detail}
        />);
      })}
      <Footer/>
    </>
  );
}

export default UserDating;