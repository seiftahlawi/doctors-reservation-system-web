import React from 'react';
import { Component } from 'react';
import{Link} from "react-router-dom"
import { Redirect } from "react-router-dom";
import UserContext from '../UserContext'
 class Patients extends Component{
   constructor(){
     super()
     this.state={
      Password:'',
      Email:'',
      Error:'',
      redirectToReferrer: false,
      user:null

     }
   }

   handeleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value,
    })
  }
  PatientLogIn=(e)=>{
     
    e.preventDefault()

      fetch("http://localhost:5000/Login",{
        method:'POST',
        headers:new Headers({'Content-Type':'application/x-www-form-urlencoded'}),
        body:'Email='+this.state.Email+'&Password='+this.state.Password
      }).then(response => response.json())            
       .then(data=>{ this.setState({Error:data.msg,redirectToReferrer:data.rd})})
      .catch(err => { console.log(err) })
        

               
        
  }


   render(){
    

    if (this.state.redirectToReferrer) {
      localStorage.setItem('isloggedIn',this.state.redirectToReferrer);
      localStorage.setItem('user',this.state.Email)
   
      console.log( this.context.patients)
        return (
        
        <Redirect to="/PatientsMainPage" />
       
        
        )
    }

    
     
    return(
      


        <form className='p-5 inwidth' onSubmit={this.PatientLogIn}>
<h3>Patients</h3>
<br/><br/>
<div style={{color:'red'}}>{this.state.Error}</div>
  <div class="mb-3" >
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" required  className="form-control " name='Email' value={this.state.Email}  onChange={this.handeleChange}/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" required className="form-control" name='Password' value={this.state.Password}  onChange={this.handeleChange}/>
  </div>

 <Link to='/'> <button  className="btn btn-danger back">Back</button></Link>
 <button type="submit" className="btn btn-primary">Log In</button>
 <br/><br/>
 <p>Don't Have an Account? <a href='/SignUp'>Register Now</a></p>
</form>




    )
 
  }
}
Patients.contextType=UserContext
export default Patients