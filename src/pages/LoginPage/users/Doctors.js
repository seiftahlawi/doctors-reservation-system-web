import React from 'react';
import { Component } from 'react';
import { Redirect } from "react-router-dom";
import{Link} from "react-router-dom"
import UserContext from '../UserContext'
 class Doctors extends Component
 {
   constructor(){
     super()
     this.state={
      JopNumber:'',
      password:'',
      redirectToReferrer: false,
      Error:'',
     }
   }

   handeleChange=(e)=>{
     this.setState({
       [e.target.name]:e.target.value,
     })
   }


    
   PatientLogIn=(e)=>{
     
    e.preventDefault()

      fetch("http://localhost:5000/LoginDoctor",{
        method:'POST',
        headers:new Headers({'Content-Type':'application/x-www-form-urlencoded'}),
        body:'JopNumber='+this.state.JopNumber+'&password='+this.state.password
      }).then(response => response.json())
       .then(data=>{ this.setState({Error: data.msg,redirectToReferrer:data.rd,info:data })})
      .catch(err => { console.log(err) })
        
           
         
    
             
       
        
               
        
  }
  
 render(){
 
  if (this.state.redirectToReferrer) {
    localStorage.setItem('isloggedIn',this.state.redirectToReferrer);
    localStorage.setItem('user',this.state.JopNumber)
    localStorage.setItem('userPassword',this.state.password)
 console.log(localStorage.user)
      return (
      
      <Redirect to="/AllPatients" />
     
      
      )
  }

  
    return(
        <form className='p-5 inwidth' onSubmit={this.PatientLogIn}>
  <h3>Doctors</h3>
  <br/><br/>
  <div style={{color:'red'}}>{this.state.Error}</div>

  <div className="mb-3">
    
    <label for="JobNumber" className="form-label">Job Number</label>
    <input className="form-control " name='JopNumber'  value={this.state.JopNumber} onChange={this.handeleChange}/>
   
  </div>
  <div className="mb-3">
    <label for="password" className="form-label">Password</label>
    <input type="password" className="form-control " name='password' value={this.state.password}  onChange={this.handeleChange}  />
  </div>

 <Link to='/'> <button  className="btn btn-danger back">Back</button></Link>
  <button type="submit" className="btn btn-primary">Log In</button> 
  <br/>  <br/>
  <p>Don't Have an Account? <a href='/SignUp'>Register Now</a></p>
  
</form>
    )
  }
}

Doctors.contextType=UserContext
export default Doctors