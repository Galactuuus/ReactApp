import { useEffect } from 'react';
import ApiConsumer from '../../Util/ApiConsumer';
import './SingleDating.scss';

function SingleDating(props) {
    
    const cancelate = async () =>{
       await ApiConsumer.cancel(props.id);
       props.setCancelledDating(true);
    }
    return(
        <div className="datingContainer" key={props.id}>   
        <br/>
            <div className="singleDate" key={props.id}>
                <label>Cita # {props.id}</label>
                <br/>
                <div className="fields" >
                    <div className="title">
                        <label>
                            Fecha: <div className="data"><label>{props.date.slice(0, 10)}</label></div>
                        </label>
                    </div>
                    <div className="title">
                        <label>
                            Dni: <div className="data"><label>{props.dni}</label></div>
                        </label>
                    </div>
                    <div className="title">
                        <label>
                            Doctor: <div className="data"><label>{props.doctorID}</label></div>
                        </label>
                    </div>
                    <div className="title">
                        <label>
                            Estado: <div className="data"><label>{props.status}</label></div>
                        </label>
                    </div>
                    <div className="title">
                        <label>
                            Detalles: <div className="data"><label>{props.detail}</label></div>
                        </label>
                    </div>                
                </div>
                <button className="cancelBtn" onClick={cancelate}>Cancelar</button>
                <br/>
            </div>
      </div>
      )
}

export default SingleDating;