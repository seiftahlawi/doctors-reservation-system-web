import React,{Component} from 'react'
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
  import { BrowserRouter as Router } from 'react-router-dom';
  import UserContext from '../../LoginPage/UserContext'
import { Redirect } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
class AppHeader extends Component {
  state = {
    isOpen: false,
    isprofile:false,
    
  };
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  logout=()=>{

    localStorage.removeItem('isloggedIn')
    localStorage.removeItem('user')
    localStorage.removeItem('token')
   
    this.context.loggedin=null
   
    window.location.reload(false);
  }
  render(){

    return(
 
      <Navbar bg="light" expand="lg" className='UserHeader'>
      <Navbar.Brand href="/PatientsMainPage" style={{color:'#fff'}}>Five Doctorsp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/PatientsMainPage" style={{color:'#fff'}}>Home</Nav.Link>
          <Nav.Link href="/AboutUs" style={{color:'#fff'}}>About us</Nav.Link>
          <NavDropdown title="Specialty" id="basic-nav-dropdown" >
            <NavDropdown.Item href="/GeneralMedicine">General Medicine</NavDropdown.Item>
            <NavDropdown.Item href="/Dentist">dentist</NavDropdown.Item>
            <NavDropdown.Item href="/Psychologist">Psychologist</NavDropdown.Item>
            <NavDropdown.Item href="/Ophthalmologist">Ophthalmologist</NavDropdown.Item>
            <NavDropdown.Item href="/ReproductiveDoctor">Reproductive doctor</NavDropdown.Item>
            <NavDropdown.Item href="/Dermatologist">Dermatologist</NavDropdown.Item>
            <NavDropdown.Item href="/PlasticSurgeries">Plastic surgeries</NavDropdown.Item>
                  
                 
                  

          </NavDropdown>
        </Nav>
        <Form inline className="mr-auto">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{textAlign:'center',width:'20rem'}} />
          <Button variant="outline-success"style={{color:'#fff'}}>Search</Button>
        </Form>
        <Nav className="mr-auto" style={{color:'#fff'}} >
          <Nav.Link href="/AllPatients"> <a className="waves-effect waves-light s" href="https://twitter.com/">
              <i class="fab fa-twitter"></i>
             
              </a></Nav.Link>
              <Nav.Link href="/AllPatients">  <a className="waves-effect waves-light s" href='https://www.instagram.com/' style={{color:'#c13584'}}>
              <i class="fab fa-instagram"></i>
              </a></Nav.Link>
         
              
              <MDBDropdown className="ddl">
           
              <MDBDropdownToggle nav caret>
                <i class="fas fa-user"></i>
           
                </MDBDropdownToggle>
              
                <MDBDropdownMenu  className="dropdown-default  dbd" >
                  <MDBDropdownItem href="/Profile" >See Your Profile</MDBDropdownItem>  
  
 
             
                  <MDBDropdownItem onClick={this.logout}>Log Out</MDBDropdownItem>
                </MDBDropdownMenu>
                
              </MDBDropdown>
            
        </Nav>
      </Navbar.Collapse>
    </Navbar>
)
  }

}
AppHeader.contextType=UserContext

export default AppHeader

/*
    
<Router>
      <MDBNavbar dark expand="md" className='UserHeader headerlink'>
      <a href='/PatientsMainPage' className=' Five' >
          <strong className="white-text">Five Doctors</strong>
          </a>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <a href='/PatientsMainPage' className='s' >Home</a>
            </MDBNavItem>
            <MDBNavItem>
            <a href='/AboutUs' className='s'>  About us</a>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className=" d-md-inline">specialty</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="/GeneralMedicine">General Medicine</MDBDropdownItem>
                  <MDBDropdownItem href="/Dentist">dentist</MDBDropdownItem>
                  <MDBDropdownItem href="/Psychologist">Psychologist</MDBDropdownItem>
                  <MDBDropdownItem href="/Ophthalmologist">Ophthalmologist</MDBDropdownItem>
                  <MDBDropdownItem href="/ReproductiveDoctor">Reproductive doctor</MDBDropdownItem>
                  <MDBDropdownItem href="/Dermatologist">Dermatologist</MDBDropdownItem>
                  <MDBDropdownItem href="/PlasticSurgeries">Plastic surgeries</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <a className="waves-effect waves-light s" href="https://twitter.com/">
              <i class="fab fa-twitter"></i>
             
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a className="waves-effect waves-light s" href='https://www.instagram.com/'>
              <i class="fab fa-instagram"></i>
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown className="ddl">
           
              <MDBDropdownToggle nav caret>
                <i class="fas fa-user"></i>
           
                </MDBDropdownToggle>
              
                <MDBDropdownMenu  className="dropdown-default  " >
                  <MDBDropdownItem href="/Profile" >See Your Profile</MDBDropdownItem>  
  
 
             
                  <MDBDropdownItem onClick={this.logout}>Log Out</MDBDropdownItem>
                </MDBDropdownMenu>
                
              </MDBDropdown>
            </MDBNavItem>
            <div style={{width:"76px"}}>

            </div>
           
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>


*/