import React, { Component } from 'react';
import './SignUp.scss';
import Error from '../Error/Error.js';
import ApiConsumer from '../../Util/ApiConsumer.js';
import { Link,withRouter, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      error:"",
      dni:"",
      phone:"",
      name:"",
      lastname: "",
      history: ""
    }
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await ApiConsumer.createUser(
        this.state.dni, 
        this.state.phone,
        this.state.name,
        this.state.lastname,
        this.state.history);
      if (response.error){
        this.setState({ error: response.error });  
      }else{
        this.setState({ error: null });
        this.props.history.push('/signin');   
      }
    } catch(e) {
        if(e.message === "Failed to fetch") {
            this.setState({ error: "Ha ocurrido un error de conexión"});
        }else{
            this.setState({ error: "Ha ocurrido un error inesperdo"})
        }            
    }
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };
  
  render() {
    return(
      <>
        <Header/>
        <div className="formContainer"> 
          {this.state.error  && <Error msg={this.state.error}/>}       
          <form className="loginForm" onSubmit={this.handleSubmit}>
            <label>Registrarse</label>
            <br/>
            <label>
                Dni:
                <br/>
                <input type="text" value={this.state.dni}
                  name="dni" onChange={this.handleChange}/>
            </label>
            <br/>
            <label>
                Telefono:
                <br/>
                <input type="text" value={this.state.phone}
                  name="phone" onChange={this.handleChange}/>
            </label>
            <br/>
            <label>
                Nombre:
                <br/>
                <input type="text" value={this.state.name}
                  name="name" onChange={this.handleChange}/>
            </label>
            <br/>
            <label>
                Apellido:
                <br/>
                <input type="text" value={this.state.lastname}
                  name="lastname" onChange={this.handleChange}/>
            </label>
            <br/>
            <input id="submit" type="submit" value="Enviar"/>
            <h4 className="registerinsingin">¿Estas registrado?</h4>
            <Link to="/signin">Identifícate</Link>
          </form>
        </div>
        <Footer/>
      </>
    )  
  }
}

export default withRouter(SignUp);
