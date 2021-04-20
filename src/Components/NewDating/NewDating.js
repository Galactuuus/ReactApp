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
      doctorArray:[],
      status: "Programada",
      detail: "",
      doctorID: 0
    }

  }

  async componentDidMount() {
    let docArray = [];   
    docArray = await ApiConsumer.listDoctors();
    this.setState({ doctorArray: docArray}); 
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response= await ApiConsumer.createDating(
          this.state.date, 
          this.state.userID,
          this.state.doctorID);
      if (response.error){
          this.setState({ error: response.error });  
      }else{
          this.setState({ error: null });
          this.props.history.push('/');
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
  handleDoctor = (e) => {
    this.setState({ doctorID: e.target.value});
  }
  
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
                  name="date" onChange={(e) => this.setState({date: e.target.value})}/>
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
                Doctores:
                <br/>
                <select name="doctorID" onChange={this.handleDoctor} id="doctors">
                  {
                    this.state.doctorArray.map(doc =>  <option value={doc.id} >{doc.name + ' ' + doc.lastname}</option> )
                  }
                </select>
            </label>
            <br/>
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