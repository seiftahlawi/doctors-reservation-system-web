
import React from 'react'
import { Component } from 'react'
import AppHeader from '../PatientsMainPage/AppComponant/AppHeader'
import FooterPage from '../PatientsMainPage/AppComponant/FooterPage'
import { Redirect } from "react-router-dom";
import FeadBack from './FeadBack'
class DoctorProfile extends Component{
    constructor(){
        super()
        this.state={
            img:"./img/default-user.png",
            info:{},
            comment:''
        }
    }

      componentDidMount(){

const {userid}=this.props.location.state
       

        fetch("http://localhost:5000/HomeDoctors",{
            method:'POST',
            headers:new Headers({'Content-Type':'application/x-www-form-urlencoded'}),
            body:'Email='+userid
          }).then(response => response.json())            
           .then(data=>{ this.setState({info:data})})
          .catch(err => { console.log(err) })
        
       }

       addcomment=( e)=>{
        e.preventDefault()
        fetch("http://localhost/DoctorsReservationSystemPHPserver/addComment.php",{
            method:'POST',
            headers:new Headers({'Content-Type':'application/x-www-form-urlencoded'}),
            body:'Dremail='+this.state.info.Email+'&comment='+this.state.comment+'&pemail='+localStorage.user
          })
          .catch(err => { console.log(err) })
        
       }

       

       handeleChange=(e)=>{
        this.setState({
          [e.target.name]:e.target.value,
        })
      }
       
    render(){
if(localStorage.isloggedIn){
    
    return(
        <div>
        <AppHeader/>

        <div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src={this.state.info.img} alt=""/>
                         
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                    {this.state.info.FirstName+' '+this.state.info.LastName}
                                    </h5>
                                    <h6>
                                        {this.state.info.specialty}
                                    </h6>
                                    <p class="proile-rating">RANKINGS : <span>8/10</span></p>
                                    <p class="proile-rating">Experience : <span>{this.state.info.Experience+' Years'}</span></p>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Location</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#feedback" role="tab" aria-controls="feedback" aria-selected="false">feedback</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                     
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            <p>To communicate</p>
                            <a href="">Facebook</a><br/>
                            <a href="">whatsapp</a><br/>
                            <a href="">skype</a>
                           
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.info.FirstName+' '+this.state.info.LastName}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.info.Email}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.info.PhoneNumber}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.info.specialty}</p>
                                            </div>
                                        </div>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h2>{this.state.info.location}</h2>
                                <br/>
                                        <div class="row">
                                        <div class="col-lg-8">
            <div class="map mb-5 mb-lg-0">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style={{border:0,width:'100%',height:312,}} allowfullscreen></iframe>
            </div>
          </div>
                                        </div>
                                      
                            </div>
                            <div class="tab-pane fade" id="feedback" role="tabpanel" aria-labelledby="feedback-tab">
                               
                                <br/>
                                        <div class="row">
                                        <div class="col-lg-8">
                                        <FeadBack dr={this.state.info.Email}/>
                                       
                                  
                                        <textarea name="comment" cols="40" rows="2" value={this.state.comment} onChange={this.handeleChange}></textarea>
                                        <br/>
                                        <button onClick={this.addcomment} >Send</button>
                                   

                                        
          </div>
                                        </div>
                                      
                            </div>
                        </div>
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

export default DoctorProfile