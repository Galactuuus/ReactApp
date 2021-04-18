import './Error.css';

const Error = (props) => {
    return (
        <div>
            <h4 className="error">{props.msg}</h4>
        </div>
    )
}

export default Error;