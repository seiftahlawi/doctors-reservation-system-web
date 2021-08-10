
import React from 'react'
import { Component } from 'react'
import AppHeader from '../PatientsMainPage/AppComponant/AppHeader'
import FooterPage from '../PatientsMainPage/AppComponant/FooterPage'
import { Redirect } from "react-router-dom";
import axios from 'axios';
class User extends Component{
    constructor(){
        super()
        this.state={
            info:{},
            img:"./img/default-user.png",
            imgs:"",
            btnchange:'none',
            FirstName:'',
            LastName:'',
            Email:'',
            PhoneNumber:"",
            Password:"",
            file:'',
            data:{ name: "", path: "" },
            changeimage:"none",
            imgshow:'',
           
        }
    }

      componentDidMount(){

        fetch("http://localhost:5000/ProfilePatient",{
            method:'POST',
            headers:new Headers({'Content-Type':'application/x-www-form-urlencoded'}),
            body:'Email='+localStorage.user
          }).then(response => response.json())            
           .then(data=>{ this.setState({info:data,FirstName:data.FirstName,LastName:data.LastName,Email:data.Email,PhoneNumber:data.PhoneNumber,specialty:data.specialty,Password:data.Password})})
          .catch(err => { console.log(err) })
            
        
       }
       buttondis =()=>{
        document.getElementById("x").disabled = false;
        this.setState({
            btnchange:'',
            changeimage:""
          })
    }
    cancelbtn=()=>{
        document.getElementById("x").disabled = true;
        this.setState({
            btnchange:'none',
            FirstName:this.state.info.FirstName,
            LastName:this.state.info.LastName,
            Email:this.state.info.Email,
            PhoneNumber: this.state.info.PhoneNumber,
           
            Password:this.state.info.Password,
            changeimage:'none'
          })
    }
    handeleChange=(e)=>{
        this.setState({
          [e.target.name]:e.target.value,
        })
      }
      m(){
          
        fetch("http://localhost:5000/UpdatePatients",{
            method:'POST',
            headers:new Headers({'Content-Type':'application/x-www-form-urlencoded'}),
            body:'FirstName='+this.state.FirstName+'&LastName='+this.state.LastName+'&Email='+this.state.Email+'&PhoneNumber='+this.state.PhoneNumber+'&Password='+this.state.Password+'&oldEmail='+this.state.info.Email+'&oldPassword='+this.state.info.Password+'&img='+this.state.data.path
          }).then(this.setState({btnchange:'none', changeimage:'none' })).then(document.getElementById("x").disabled = true)
          
      }
      async s() {
       
        const formData = new FormData();       
        formData.append('file', this.state.imgs); // appending file
        await  axios.post('http://localhost:5000/upload', formData, {
         
       }).then(res => {
           console.log(res);
           this.setState({
  data:{ name: res.data.name,
   path: 'http://localhost:5000' + res.data.path
  }
           })
          
       }).catch(err => console.log(err))

       this.m()
      }
      

    
       updateprofile=()=>{

        if(this.state.imgs!=""){
            this.s()

        }else{
            this.state.data.path=this.state.img
            this.m()
        }
  
   
    
 

   
      
        
        
   
        
       }



      
       handleChange=(event)=> {
        event.preventDefault();
    
        this.setState({
          imgshow: URL.createObjectURL(event.target.files[0]),
          img:'',
          imgs:event.target.files[0]

        })
    
      
       
      }
    render(){
if(localStorage.isloggedIn){
    
if(this.state.imgshow===''){
    this.state.img=this.state.info.ProfileChange
}else{
  
    this.state.img=this.state.imgshow
}


    return(
        <div>
        <AppHeader/>
<div className="container emp-profile">

            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={this.state.img} alt=""/>
                            <div className="file btn btn-lg btn-primary" style={{display:this.state.changeimage}}>
                                Change Photo
                                <input type="file" name="file" onChange={this.handleChange}/>
                               
                            </div>
                            <br/><br/>
                           
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                        {this.state.info.FirstName+' '+this.state.info.LastName}
                                     
                                    </h5>
                                   
                            
                                   
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                            
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <input type="button" class="profile-edit-btn" name="btnAddMore" value="Edit Profile" onClick={this.buttondis}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                     <fieldset  id="x" disabled>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>FirstName</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p><input name="FirstName" value={this.state.FirstName} onChange={this.handeleChange}/></p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>LastName</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p><input name="LastName" value={this.state.LastName} onChange={this.handeleChange}/></p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p><input name="Email" value={this.state.Email} onChange={this.handeleChange}/></p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p><input  name="PhoneNumber" value={this.state.PhoneNumber} onChange={this.handeleChange}/></p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Password</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p><input type="password" name="Password" value={this.state.Password} onChange={this.handeleChange}/></p>
                                            </div>
                                        </div>
                                        </fieldset> 
                            </div>
                            
                           
                            
                        </div>
                        <br/><br/>
                        <button type="button" class="btn btn-danger" style={{display:this.state.btnchange}} onClick={this.cancelbtn}>Cancel</button>
                        <button type="button" class="btn btn-primary m-5 " style={{display:this.state.btnchange}} onClick={this.updateprofile}>Save Changes</button>
                    </div>
                   
                </div>
                
            </form>           
        </div>
        <FooterPage/>
        </div>
    )
}else{
    return <Redirect to="/Signin" />
}
}
}

export default User