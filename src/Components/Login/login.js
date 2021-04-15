import React, { Component } from 'react';
import './login.css';
import Error from '../Error/error.js';


class Login extends Component {

    constructor(props){
        super(props)

        this.state = {
            error: false,
            dni: "",
            phone: ""
        }
    }

    search = async () => {
        try {
            let response = await fetch('http://127.0.0.1:5000/users', { method: 'GET', headers: { dni: this.state.dni, phone:  this.state.phone }});
            response = await response.json();
        } catch {
            this.setState({ error: true })
        }
    }

    render() {
        return(
            <div>
                {this.state.error  && <Error msg='DNI o Contraseña erroneas'/>}
                <label>DNI: 
                    <br></br>
                    <input type="text" onInput={(e) => this.setState({ dni: e.target.value})} />
                </label> 
                <br></br>
                <label>Nº Teléfono: 
                    <br></br>
                    <input type="number" onInput={(e) => this.setState( { phone: e.target.value }) } />
                </label>
                <br></br>
                <button onClick={this.search}>Enviar</button>
            </div>
        )  
    }
}

export default Login;
