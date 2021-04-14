import './login.css';

const Login = () => {

    let data = { dni: "", phone: "" }
    const search = async () => {

        await fetch('127.0.0.1:5000/users', { headers: { dni: data.dni, phone: data.phone } });
        return console.log('f');
    }
    return(
        <div>
            <label>DNI: <br></br>
                <input type="text" onInput={(e) => data.dni = e.target.value } />
            </label>
            <label>Nº Teléfono:0
                <input type="number" onInput={(e) => data.phone = e.target.value } />
            </label>
            <button onSubmit={search}>Enviar</button>
            <div>Datos Incorrectos</div>
        </div>
    )
}

export default Login;
