import React from "react";
import AppHeader from './AppHeader'
import FooterPage from './FooterPage'

import { Redirect } from "react-router-dom";
import { Component } from "react";

class AboutUs extends Component {
  render(){

  if(localStorage.isloggedIn){
  return (
      <div>
          <AppHeader/>
<br/><br/>
<section id="about">

      <div class="container" data-aos="fade-up">

        <header class="section-header">
          <h3>About Us</h3>
          <p>Five Doctor is a web application that aims to help the user to reach the best doctors and get the best advice. The subscriber in the elite can communicate with doctors outside the region to consult them on some matters related to diseases and treatments.</p>
        </header>

        <div class="row about-container">

          <div class="col-lg-6 content order-lg-1 order-2">
            <p>
            The public library includes many doctors and hospitals that can be collected Log in and learn some things about doctors
.
            </p>

            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div class="icon"><i class="fa fa-shopping-bag"></i></div>
              <h4 class="title" style={{color:'blue'}}>Heart disease</h4>
              <p class="description">Extensive experience with the best doctors specializing in treating heart conditions and knowledge of the latest developments in diseases and treatments</p>
            </div>

            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div class="icon"><i class="fa fa-photo"></i></div>
              <h4 class="title"style={{color:'blue'}}>Diabetes</h4>
              <p class="description">Extensive experience with the best doctors specialized in treating diabetes and knowledge of the latest developments in disease and treatment</p>
            </div>

            <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div class="icon"><i class="fa fa-bar-chart"></i></div>
              <h4 class="title" style={{color:'blue'}}>Epilepsy diseases</h4>
              <p class="description">Extensive experience with the best doctors specializing in the treatment of epilepsy and knowledge of the latest developments in the disease and its treatment</p>
            </div>

          </div>

          <div class="col-lg-6 background order-lg-2" data-aos="zoom-in">
            <img src="./img/1533845191.png" class="img-fluid" alt=""/>
          </div>
        </div>

        <div class="row about-extra">
          <div class="col-lg-6" data-aos="fade-right">
            <img src="./img/cardiology-icon-png-7.png" class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-6 pt-5 pt-lg-0" data-aos="fade-left">
            <h4>Treating heart disease</h4>
            <p>
            In general, treatment for heart disease usually includes: Lifestyle changes. These include eating a low-fat and low-sodium diet, getting at least 30 minutes of moderate exercise on most days of the week, quitting smoking, and limiting alcohol intake. Medications
            </p>
            <p>
            We have the best and most modern laboratories for diagnosing heart disease and the best treatment methods include some changes in the way of life to obtain the best possible results.
            </p>
          </div>
        </div>

        <div class="row about-extra">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
            <img src="./img/PaperPal_MedicalHeroes_SVGMockup.jpg" class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-right">
            <h4>The most modern laboratories and the most skilled doctors and nurses to help treat your disease in the fastest time and without any complications.</h4>
            <p>
            The laboratory is equipped with the latest global laboratory equipment and participates in several local and international quality control programs in addition to the internal quality control that is constantly conducted for all examinations. The laboratory receives outpatients and outpatients, as well as patient samples from inside the hospital, in addition to receiving samples from different laboratories from several regions. From inside and outside the Kingdom, such as Syria and Sudan, the laboratory operates on a 24-hour basis, and the laboratory is characterized by speed and keenness to accurately carry out comprehensive tests, which are developed and updated according to developments in the scientific and practical levels.
            </p>
            
            <p>
            The application provides the advantage of communicating with doctors, the possibility of requesting them to go to you home in emergency cases.
            </p>
          </div>

        </div>

      </div>
    </section>
    <br/><br/>
    <FooterPage/>
    </div>
  );
  }else{
    return <Redirect to="/Signin" />
  }
}
}

export default AboutUs;
 