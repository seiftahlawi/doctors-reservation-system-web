import React from 'react';
import Login from "../../LoginPage/Login.js"
import{Link} from "react-router-dom"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Mid() {
  
  return (
<div>
<section id="features">
    <div class="row">

<div class="feature-box col-lg-4">
  <i class="icon fas fa-check-circle fa-4x"></i>
  <h3>Easy to use.</h3>
    <p>So easy to use,even the old people can use it.</p> 
</div>
   
<div class="feature-box col-lg-4 ">
  <i class="icon fas fa-bullseye fa-4x"></i>
  <h3>Elite Clientele</h3>
    <p>They can get medical advice from outside the country.</p>
</div>
    <div class="feature-box col-lg-4 ">
      <i class="icon fas fa-heart fa-4x"></i>
       <h3>Guaranteed to work.</h3>
    <p>Find the best specialist doctors and their locations.</p>  
    </div>

 
</div>
  </section>
  <section id="cta">

<h3 class="cta-heading">Find the best medical professionals and their locations and get their advice.</h3>
<button class="btn btn-lg  btn-dark Download-button " type="button"><i class="fab fa-apple"></i> Download</button>
<button class="btn btn-lg  btn-light Download-button" type="button"><i class="fab fa-google-play"></i> Download</button>

</section>
<div>
    <br/>
    <MDBFooter color="cyan" className="font-small darken-3 pt-0">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="py-5 so" >
            <div className="mb-5 flex-center">
              <a className="fb-ic">
                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="tw-ic">
                <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="li-ic">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="pin-ic">
                <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.FiveDoctors.com"> Five Doctors </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  </div>


  );
}

export default Mid;