
import React,{useState} from 'react'

import{Link} from "react-router-dom"

function Card(props){

const [addPatient,setAddPatent]=useState('')
const [renovePatient,setRemovePatent]=useState('none')
  const addPatients=()=>{

    fetch("http://localhost:5000/AddPatientToDoctor",{
      method:'POST',
      headers:new Headers({'Content-Type':'application/x-www-form-urlencoded'}),
      body:'DrJopNumber='+localStorage.user+'&Drpassword='+localStorage.userPassword+'&userId='+props.doctor.Email
    }).then()
    

  }
  
    return(

      <div class="col-lg-6 s">
      <div class="card m-b-30">
          <div class="card-body py-5">
              <div class="row">
                  <div class="col-lg-3 text-center">
                      <img src={props.doctor.ProfileChange} class="img-fluid mb-3" alt="user" />
                  </div>
                  <div class="col-lg-9">
                      <h4>{props.doctor.FirstName+' '+ props.doctor.LastName}</h4>
                      <p>{props.doctor.Email}</p>
                      <div class="button-list mt-4 mb-3">
<button type="button" class="btn  "onClick={addPatients} style={{display:renovePatient}}>Remove Patient</button>

                          <button type="button" class="btn "onClick={addPatients} style={{display:addPatient,backgroundColor:'rgba(80, 111, 228, 0.1)',color:'#506fe4'}}>Add Patient</button>
                         <Link  to={{pathname:'/PatientsProfile',state:{
      userid:props.doctor.Email
    }}}>  <button type="button" class="btn "  style={{backgroundColor:'rgba(80, 111, 228, 0.1)',color:'#43d187',overflow:'hidden',textDecoration:'none'}}>View Patient</button></Link>
                      </div>
                      <div class="table-responsive">
                          <table class="table table-borderless mb-0">
                              <tbody>
                                  <tr>
                                      <th scope="row" class="p-1">chronicDiseases:</th>
                                      <td class="p-1">{props.doctor.diseasesValue?props.doctor.diseasesValue:'there is No chronic Diseases '}</td>
                                  </tr>
                                  <tr>
                                      <th scope="row" class="p-1">is health Insurance</th>
                                      <td class="p-1">{props.doctor.healthInsurance}</td>
                                  </tr>
                                  <tr>
                                      <th scope="row" class="p-1">Address :</th>
                                      <td class="p-1">{props.doctor.Address}</td>
                                  </tr>
                                  <tr>
                                      <th scope="row" class="p-1">Phone Number:</th>
                                      <td class="p-1">{'+'+props.doctor.PhoneNumber}</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <br/> <br/>
  </div>
    )
}

export default Card