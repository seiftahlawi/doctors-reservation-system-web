import React from 'react'
import { Component } from 'react';
import AppHeader from './AppComponant/AppHeader'
import FooterPage from './AppComponant/FooterPage'
import Card from './AppComponant/Card'

import { Redirect } from "react-router-dom";
class PatientsMainPage extends Component {


  constructor(){
    super()
    this.state={
info:[],
isprofile:false,
ishome:true

    }
  }



  componentDidMount(){
   fetch("http://localhost:5000/DoctorRetriveing")
    .then(response =>response.json())            
     .then(data=>{ this.setState({info:data})})
    .catch(err => { console.log(err) })
    
  }

  componentDidUpdate(){
    fetch("http://localhost:5000/DoctorRetriveing")
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
              
  <div style={{display:'flex',flexDirection:'row',padding:'1rem',flexWrap:'wrap',textAlign:'center',margin:'1rem'}}>
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


export default PatientsMainPage