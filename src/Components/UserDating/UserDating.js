import SingleDating from '../SingleDating/SingleDating';
import './UserDating.css';
import ApiConsumer from '../../Util/ApiConsumer.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer';

function UserDating() {
  const citasUsuario = [
    {
      date:"2020/02/02",
      dni:"123c",
      doctor:3,
      status: "programada",
      detail: "ortodoncia"
    },
    {
      date:"2020/03/02",
      dni:"123c",
      doctor:1,
      status: "programada",
      detail: "limpieza"
    }
  ];
  return (
    <>
    <span className="titulo">User Dating</span>
    <button onClick={ApiConsumer.userDating}>PEPEPEPE</button>
    {citasUsuario.map((cita,index)=>{
      return (<SingleDating 
      id={index} 
      date={cita.date}
      dni= {cita.dni} 
      doctorID= {cita.doctor}
      status= {cita.status}
      detail= {cita.detail}
      />);
    })}
    </>
  );
}

export default UserDating;