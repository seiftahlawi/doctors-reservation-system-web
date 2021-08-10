import React from 'react'
import { Component } from 'react';
import AppHeader from './AppHeader'
import FooterPage from './FooterPage'
import Card from './Card'

import { Redirect } from "react-router-dom";
class Patients extends Component {


  constructor(){
    super()
    this.state={
info:[],
isprofile:false,
ishome:true

    }
  }



  componentDidMount(){
   fetch("http://localhost:5000/PatientRetriveing")
    .then(response =>response.json())            
     .then(data=>{ this.setState({info:data})})
    .catch(err => { console.log(err) })
    
  }

  componentDidUpdate(){
    fetch("http://localhost:5000/PatientRetriveing")
    .then(response =>response.json())            
     .then(data=>{ this.setState({info:data})})
    .catch(err => { console.log(err) })
  
  }

    render(){


      const Doctors = this.state.info.map((doctors,index)=><Card doctor={doctors} key={index} />)
      
      
           

if(localStorage.isloggedIn){

return(

  <div >
  <AppHeader />
              
  <div style={{display:'flex',flexDirection:'row',padding:'1rem',justifyContent:"left",flexWrap:'wrap'}}>
  {Doctors}
  </div>
  <FooterPage/>
  </div>

)

}
else
{
return <Redirect to="/Signin" />
}
             
            
      
          
        
       
          
        
      
 
        
    
}
}


export default Patients