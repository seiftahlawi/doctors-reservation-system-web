import React from 'react';
import PatientSubmit from './PatientSubmit'
import DoctorsSubmit from './DoctorsSubmit'
import { Component } from 'react';
class  SignUp extends Component {

  constructor(){
    super()
    this.state={
      patientsForm:'block',
      doctorsForm:'none'
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
    
    <DoctorsSubmit/>
    </div>
    <div style={{display:this.state.patientsForm}}>
      
    <PatientSubmit/>
    </div>
</div>
  </div>


  );
}
}

export default SignUp;