import './DoctorTag.scss';


const DoctorTag = (props) => {

    return (
        <>
            <div>
                <label>{props.name}</label>
                <label>{props.lastname}</label>
                <label>{props.speciality}</label>
                <label>{props.phone}</label>
                <label>{props.schedule}</label>
                <label>{props.name}</label>
                <label>{props.name}</label>
                <label>{props.name}</label>
                <label>{props.name}</label>
            </div>
        </>
    );
}


export default DoctorTag;