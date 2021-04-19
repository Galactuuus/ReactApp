import './NewDating.scss';
import React, { Component } from 'react';
import Error from '../Error/Error.js';
import ApiConsumer from '../../Util/ApiConsumer.js';
import {withRouter} from "react-router-dom";



class NewDating extends Component {
  constructor(props){
    super(props);
    this.state = {
      error:"",
      date:"",
      userID:"",
      doctorID:"",
      status: "",
      detail: ""
    }
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response= await ApiConsumer.create(
          this.state.date, 
          this.state.userID,
          this.state.doctorID,
          this.state.status,
          this.state.detail);
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
      <div className="formContainer">        
        <form className="datingForm" onSubmit={this.handleSubmit}>
          <label>New date</label>
          <br/>
          <label>
              Date:
              <br/>
              <input type="date" value={this.state.date}
                name="date" onChange={this.handleChange}/>
          </label>
          <br/>
          <label>
              Dni:
              <br/>
              <input type="text" value={this.state.userID}
                name="userID" onChange={this.handleChange}/>
          </label>
          <br/>
          <label>
              Doctor id:
              <br/>
              <input type="text" value={this.state.doctorID}
                name="doctorID" onChange={this.handleChange}/>
          </label>
          <br/>
          <label>
              Status:
              <br/>
              <input type="text" value={this.state.status}
                name="status" onChange={this.handleChange}/>
          </label>
          <br/>
          <label>
            Detail:
              <br/>
              <input type="text" value={this.state.detail}
                name="detail" onChange={this.handleChange}/>
          </label>
          <br/><br/>
          <input id="submit" type="submit" value="Enviar"/>
        </form>
        {this.state.error  && <Error msg={this.state.error}/>}
    </div>
    )  
  }
}

export default withRouter(NewDating);