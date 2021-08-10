import React,{useState} from 'react'
import { Component } from 'react'

import{Link} from "react-router-dom"


class CardAdeddPatient extends Component{
constructor(Props){
    super(Props)
    this.state={
        info:{},
        patient:this.props.patients
        
    }
}
componentDidMount(){

    fetch("http://localhost:5000/RetrevingPatientToDoctor",{
        method:'POST',
        headers:new Headers({'Content-Type':'application/x-www-form-urlencoded'}),
        body:'patient='+this.state.patient
      }).then(response => response.json())            
       .then(data=>{ this.setState({info:data})})
      .catch(err => { console.log(err) })
        
    
   }
render(){
  
    return(

                            <li style={{width:'100%'}}>
                                               <Link  to={{pathname:'/PatientsProfile',state:{
      userid:this.state.info.Email
    }}}>
                                    <div class="friend-img"><img src={this.state.info.ProfileChange} alt="" /></div>
                                    <div class="friend-info">
                                        <h4>{`${this.state.info.FirstName}  ${this.state.info.LastName}`} </h4>
                                        <p style={{fontSize:16}}>{this.state.info.Email}</p>
                                    </div>
                                    </Link>
                                    <hr/>
                            </li>
                            
                          
        

    )
}
}

export default CardAdeddPatient