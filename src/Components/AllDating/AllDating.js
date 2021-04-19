import SingleDating from '../SingleDating/SingleDating';
import './AllDating.css';

function AllDating() {
  const todasCitas = [
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
    },
    {
      date:"2020/02/02",
      dni:"321654d",
      doctor:3,
      status: "cancelada",
      detail: "protesis"
    },
    {
      date:"2020/03/02",
      dni:"23164d",
      doctor:1,
      status: "programada",
      detail: "revisión"
    }
  ];
  return (
    <>
    <span className="titulo">All Dating</span>
    {todasCitas.map((cita,index)=>{
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

export default AllDating;