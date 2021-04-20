import './SingleDating.scss';

function SingleDating(props) {
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
            </div>
            <br/>
      </div>
      )
}

export default SingleDating;