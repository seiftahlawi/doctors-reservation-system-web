
import React from 'react'
import { Redirect } from "react-router-dom";
import{Link} from "react-router-dom"

function Card(props){
  
    return(

        <div className="card"  style={{width:'15rem',margin:'1rem'}}  >
        <img src={props.doctor.img} class="card-img-top" alt="..." height="250px"/>
        <div className="card-body">
          <h5 className="card-title">{props.doctor.FirstName+' '+ props.doctor.LastName}  </h5>
          <p className="card-text">specialty: {props.doctor.specialty}</p>
          <div>Phone Number: {props.doctor.PhoneNumber}</div>
        </div>
        <div className="list-group list-group-flush">
          <p className="list-group-item">Experience: {props.doctor.Experience} years</p>
  
        </div>
        <div className="card-body">
        <Link  to={{pathname:'/DoctorProfile',state:{
          userid:props.doctor.Email
        }}}> <button type="button" className="btn btn-primary" >View Doctor Details</button></Link>

        </div>
      </div>
    )
}

export default Card