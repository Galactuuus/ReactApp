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
<<<<<<< HEAD
      doctorArray:[],
      status: "Programada",
      detail: "",
      doctorID: 0
=======
      doctorID:"",
      status: "Programado",
      detail: "",
      doctores:[]
>>>>>>> af8c3812412abeddb65963590e36ca73979c4f23
    }
    this.handleSelect = this.handleSelect.bind(this);

  }

  async componentDidMount() {
    let docArray = [];   
    docArray = await ApiConsumer.listDoctors();
<<<<<<< HEAD
    this.setState({ doctorArray: docArray}); 
  }
=======
    console.log(docArray)
    this.setState({ doctores: docArray});  
  }  
  
>>>>>>> af8c3812412abeddb65963590e36ca73979c4f23
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
<<<<<<< HEAD
          this.setState({ error: null });
          this.props.history.push('/');
=======
          this.setState({ error: response.res });
>>>>>>> af8c3812412abeddb65963590e36ca73979c4f23
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
<<<<<<< HEAD
  handlePuto = (e) => {
    this.setState({ doctorID: e.target.value});
  }
=======

  handleSelect = (e) => {
    this.setState({doctorID: e.target.value});
    console.log(this.state.doctorID);
  };
>>>>>>> af8c3812412abeddb65963590e36ca73979c4f23
  
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
<<<<<<< HEAD
                <select name="doctorID" onChange={this.handlePuto} id="doctors">
                  {
                    this.state.doctorArray.map(doc =>  <option value={doc.id} >{doc.name + ' ' + doc.lastname}</option> )
                  }
                </select>
            </label>
            <br/>
=======
                <select value={this.state.doctorID} name="doctorID" onChange={this.handleSelect} >
                  {this.state.doctores.map((doc, index)=>{
                    return(
                      <option key={index} value={doc.id}>{doc.name}</option>
                    )
                  })}
                </select >

            </label>
            <br/>
            <label>
                Status:
                <br/>
                <input type="text" value="Programado"
                  name="status" enable="false" readOnly={true}/>
            </label>
            <br/>
            <label>
              Detail:
                <br/>
                <input type="text" value={this.state.detail}
                  name="detail" onChange={this.handleChange}/>
            </label>
            <br/><br/>
>>>>>>> af8c3812412abeddb65963590e36ca73979c4f23
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