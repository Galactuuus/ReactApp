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
            <div className="singleDate">
            <label>Dating # {props.id}</label>
            <br/>
                <div className="fields" >
                <label>
                    Date: <label>{props.date}</label>
                </label>
                <label>
                    Dni: <label>{props.dni}</label>
                </label>
                <label>
                    Doctor: <label>{props.doctorID}</label>
                </label>
                </div>
                <div className="fields" >
                <label>
                    Status: <label>{props.status}</label>
                </label>
                </div>
                <div className="fields" >
                <label>
                Detail: <label>{props.detail}</label>
                </label>                
                </div>
                <button onClick={cancelate}>Cancelar</button>
            </div>
            <br/>
      </div>
      )
}

export default SingleDating;