import React, { Component } from 'react';
import './Login.css';
import Error from '../Error/Error.js';
import ApiConsumer from '../../Util/ApiConsumer.js';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      error:"",
      dni:"",
      phone:"",
    }
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response= await ApiConsumer.login(this.state.dni, this.state.phone);
      console.log(response);
      if (response.error){
          this.setState({ error: response.error });  
      }else{
          this.setState({ error: null });
      }
    } catch(e) {
        console.log(e);
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
        <form onSubmit={this.handleSubmit}>
          <label>Login</label>
          <br/>
          <label>
              Dni:
              <input type="text" value={this.state.dni}
                name="dni" onChange={this.handleChange}/>
          </label>
          <br/>
          <label>
              Phone:
              <input type="text" value={this.state.phone}
                name="phone" onChange={this.handleChange}/>
          </label>   
          <br/>       
          <input type="submit" value="Submit"/>
        </form>
        {this.state.error  && <Error msg={this.state.error}/>}
    </>
    )  
  }
}

export default Login;