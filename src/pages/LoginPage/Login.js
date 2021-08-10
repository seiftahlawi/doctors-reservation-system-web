import React from 'react';

import Patients from './users/Patients'
import Doctors from './users/Doctors'
import { Component } from 'react';
import { Redirect } from "react-router-dom";
class  Login extends Component {

  constructor(){
    super()
    this.state={
      patientsForm:'block',
      doctorsForm:'none',
      
    }
  }

  changeUserPatients=()=>{
    this.setState({
      patientsForm:'block',
      doctorsForm:'none'
    })
  }
  changeUserDoctors=()=>{
    this.setState({
      patientsForm:'none',
      doctorsForm:'block'
    })
  }
  
  render(){

  return (


<div className=' container' >

<div className='loginChoos'>
      <button className=' btnChoose' onClick={this.changeUserPatients}>Patients portal</button>
      <button className=' btnChoose' onClick={this.changeUserDoctors}>Doctors portal</button>
    </div>
  <div className='login logincon p-5'>

    <div style={{display:this.state.doctorsForm}}>
    
    <Doctors/>
    </div>
    <div style={{display:this.state.patientsForm}}>
      
    <Patients/>
    </div>
</div>
  </div>


  );

}
}


export default Login;