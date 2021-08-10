import React from 'react';
import Login from "../../LoginPage/Login.js"
import{Link} from "react-router-dom"
function Header() {
  
  return (


<div className='header' >
  <div className="logo-box">
<img src=".\img\heart-beat-512.png" className='header' alt="Logo" className="logo"/>
</div>
<div className="text-box">
<span className="heading-primary-main">With you</span>
<span className="heading-primary-sub">Your doctor is in your hands</span>

<Link to='/Signin'> <button type="button" className="btn  btn-light  m-5 p-2 rounded-3 btnws">Sign in</button></Link>
<Link to='/SignUp'><button type="button" className="btn  btn-primary m-5 p-2 rounded-3 btnws">Sign up</button></Link>



</div>
  </div>


  );
}

export default Header;