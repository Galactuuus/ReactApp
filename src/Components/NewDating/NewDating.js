import './NewDating.scss';
import React, { Component, useState } from 'react';
import Error from '../Error/Error.js';
import ApiConsumer from '../../Util/ApiConsumer.js';
import {withRouter} from "react-router-dom";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

class NewDating extends Component {
  constructor(props){
    super(props);
    this.state = {
      error:"",
      date:"",
      userID:"",
      doctorID:[],
      status: "Programado",
      detail: ""
    }
  }

  async componentDidMount() {

    let docArray = [];   
    docArray = await ApiConsumer.listDoctors();
    console.log(docArray)
    this.setState({ doctorID: docArray});  
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response= await ApiConsumer.createDating(
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
      <>
      <Header/>
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
                <select name="cars" id="cars">
  
                {this.state.doctorID.map((doc)=>{
                  return(
                    <option value={doc.id}>{doc.name}</option>
                  )
                })}
                </select>

            </label>
            <br/>
            <label>
                Status:
                <br/>
                <input type="text" value="Programado"
                  name="status" enable="false" readOnly="true"/>
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
      <Footer/>
    </>
    )  
  }
}

export default withRouter(NewDating);