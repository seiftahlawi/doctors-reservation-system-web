import React,{ createRef } from 'react';
import { Component } from 'react';
import{Link} from "react-router-dom"

import axios from 'axios';

//const [file, setFile] = useState(''); // storing the uploaded file    // storing the recived file from backend
 // const [data, getFile] = useState({ name: "", path: "" });    
 //const [progress, setProgess] = useState(0); // progess bar
 class DoctorsSubmit extends Component{
  constructor(props){
    super(props)
    this.state={
 isformone:true,
 FirstName:'',
 LastName:'',
 JobNumber:'',
 Password:'',
Email:'',
day:'0',
month:'0',
Year:'0',
specialty:'0',
confirmPassword:'',
YourAddress:'',
    location:'',
    university:'',
    Experience:'',
    FirstNameError:'',
 LastNameError:'',
 JobNumberError:'',
 PasswordError:'',
EmailError:'',
confirmPasswordError:'',
AddressError:'',
locationError:'',
universityError:'',
ExperienceError:'',
imgshow:null,
img:'',

 PhoneNumberError:'',

PhoneNumber:'',
file:'',
data:{ name: "", path: "" },
progress:0,
    }
    this.buttonRef = createRef()
    
  }

  validateEmail=()=>{
  
    if(this.state.Email===''){
      this.setState({EmailError:' email is  Required '})
      return false
    }else if(!this.state.Email.includes('@')  ){
  
      this.setState({EmailError:'invalid email must contain @ '})
         return false
    }else{
      return true
    }
    
   
  }
  validateFirstName=()=>{
    
    if(this.state.FirstName===''){
      this.setState({FirstNameError:' First Name is  Required '})
      return false
    }else{
      return true
    }
    
   
  }
  validateAddress=()=>{
    
    if(this.state.YourAddress===''){
      this.setState({AddressError:' Address is  Required '})
      return false
    }else{
      return true
    }
    
  }
  validateuniversity=()=>{
    
    if(this.state.university===''){
      this.setState({universityError:' university is  Required '})
      return false
    }else{
      return true
    }
    
  }
  validatelocation=()=>{
    
    if(this.state.location===''){
      this.setState({locationError:' location is  Required '})
      return false
    }else{
      return true
    }
    
  }
  validateExperience=()=>{
    
    if(this.state.Experience===''){
      this.setState({ExperienceError:' Experience is  Required '})
      return false
    }else{
      return true
    }
    
  }
  validateJobNumber=()=>{
    
    if(this.state.JobNumber===''){
      this.setState({JobNumberError:' Job Number is  Required '})
      return false
    }else{
      return true
    }
    
  }
  validateLastName=()=>{
    
    if(this.state.LastName===''){
      this.setState({LastNameError:' Last Name is  Required '})
      return false
    }else{
      return true
    }
    
   
  }
  validatePassword=()=>{
    
    if(this.state.Password===''){
      this.setState({PasswordError:' Password is  Required '})
      return false
    }else{
      return true
    }
    
   
  }
  validateconfirmPassword=()=>{
    
    if(this.state.confirmPassword===''){
      this.setState({confirmPasswordError:' Confirm Password is  Required '})
      return false
    }else if(!(this.state.confirmPassword===this.state.Password)){
      this.setState({confirmPasswordError:' Confirm Password must equal Password '})
    }else{
      return true
    }
    
    
   
  }


  handeleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value,
    })
  }
  changePatientsform=(e)=>{
    e.preventDefault()
    const isEmailValid=this.validateEmail();
    const isFirstNameValid=this.validateFirstName();
    const isLastNameValid=this.validateLastName();
    const isPasswordValid=this.validatePassword();
    const isconfirmPasswordValid=this.validateconfirmPassword();
    const isJobNumberValid=this.validateJobNumber();
    const isPhoneNumberValid=this.validatePhoneNumber();
    if(isEmailValid&&isFirstNameValid&&isLastNameValid&&isPasswordValid&&isconfirmPasswordValid&&isJobNumberValid&&isPhoneNumberValid){
      if(this.state.isformone==true){
        this.setState({
            isformone:false
        })
      }else{
        this.setState({
            isformone:true
        })
      }
    }
  
  }

  dayOB=(start, end)=> {
    const options = [];

    for(let i = start; i <= end; i++) {
        options.push(<option value={i} key={i}>{i}</option>)
    }

    return options;
}

YearOB=(start, end)=> {
  const options = [];

  for(let i=start; i >=end; i--) {
      options.push(<option value={i} key={i}>{i}</option>)
  }

  return options;
}

  registerDoctor=()=>{

    const isAddressValid=this.validateAddress();
    const isuniversityValid =this.validateuniversity();
    const islocationValied =this.validatelocation()
    const isExperiencValed=this.validateExperience()
    if(isAddressValid&&isuniversityValid&&islocationValied&&isExperiencValed){

  
    fetch("http://localhost:5000/DoctorsSignUp",{
      method:'POST',
      headers:new Headers({'Content-Type':'application/x-www-form-urlencoded'}),
      body:'FirstName='+this.state.FirstName+'&LastName='+this.state.LastName+'&Email='+this.state.Email+'&PhoneNumber='+this.state.PhoneNumber+'&JobNumber='+this.state.JobNumber+'&Password='+this.state.Password+'&YourAddress='+this.state.YourAddress+'&location='+this.state.location+'&Experience='+this.state.Experience+'&university='+this.state.university+'&day='+this.state.day+'&month='+this.state.month+'&Year='+this.state.Year+'&specialty='+this.state.specialty+'&fileToUpload='+this.state.data.path
    })
  }
  }
  validatePhoneNumber=()=>{
    if(this.state.PhoneNumber===''){
      this.setState({PhoneNumberError:' Phone Number is  Required '})
      return false
    }else{
      return true
    }
  }
  
  handleChange=(event)=> {
    event.preventDefault();

    this.setState({
      imgshow: URL.createObjectURL(event.target.files[0]),
      img:event.target.files[0]
    })
    
   
   
  }

render(){

  
  const el = this.inputRef; // accesing input element
  const handleChange = (e) => {
    this.setState({
      progress:0
    })
    
     
      const file = e.target.files[0]; // accesing file
      console.log(file);
      this.setState({
        file:file
      })
     
  }
  const uploadFile = (event) => {
      event.preventDefault();
      const formData = new FormData();        formData.append('file', this.state.file); // appending file
      axios.post('http://localhost:5000/upload', formData, {
          onUploadProgress: (ProgressEvent) => {
              let progress = Math.round(
              ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
              this.setState({
                progress:progress
              })
             
          }
      }).then(res => {
          console.log(res);
          this.setState({
data:{ name: res.data.name,
  path: 'http://localhost:5000' + res.data.path
}
          })
         
      }).catch(err => console.log(err))} 

    if(this.state.isformone){
        return(
        
            <form className='p-5 inwidth' id='D1'>
            <h3>Doctors</h3>
            <br/><br/>
            <div className="mb-3">
                <label for="FirstName" className="form-label">First Name</label>
                <input type="text"  className="form-control " name='FirstName' value={this.state.FirstName} onBlur={this.validateFirstName}  onChange={this.handeleChange}/>
                <div style={{color:'red',fontSize:12}}>{this.state.FirstNameError}</div>
              </div>
              <div className="mb-3">
                <label for="FirstName" className="form-label">Last Name</label>
                <input type="text"  className="form-control " name='LastName' value={this.state.LastName}onBlur={this.validateLastName}  onChange={this.handeleChange}/>
                <div style={{color:'red',fontSize:12}}>{this.state.LastNameError}</div>
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email"  className="form-control " name='Email' value={this.state.Email} onBlur={this.validateEmail} onChange={this.handeleChange}/>
                <div style={{color:'red',fontSize:12}}>{this.state.EmailError}</div>
              </div>
              <div className="mb-3">
          <label for="JobNumber" className="form-label">Job Number</label>
          <input type="JobNumber"  className="form-control " name='JobNumber' value={this.state.JobNumber} onBlur={this.validateJobNumber}  onChange={this.handeleChange}/>
          <div style={{color:'red',fontSize:12}}>{this.state.JobNumberError}</div>
        </div>
       <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">Phone Number</label>
    <input type="tel"  className="form-control " name='PhoneNumber' value={this.state.PhoneNumber} onBlur={this.validatePhoneNumber}  onChange={this.handeleChange}/>
    <div style={{color:'red',fontSize:12}}>{this.state.PhoneNumberError}</div>
  </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" name='Password' value={this.state.Password} onBlur={this.validatePassword} onChange={this.handeleChange}/>
                <div style={{color:'red',fontSize:12}}>{this.state.PasswordError}</div>
              </div>
              <div className="mb-3">
                <label for="confirm password" className="form-label">confirm password</label>
                <input type="password" className="form-control" name='confirmPassword' value={this.state.confirmPassword} onBlur={this.validateconfirmPassword} onChange={this.handeleChange}/>
                <div style={{color:'red',fontSize:12}}>{this.state.confirmPasswordError}</div>
              </div>
              <Link to='/'> <button  className="btn btn-danger back">Back</button></Link>
         <button type="submit" className="btn btn-primary" onClick={this.changePatientsform}>Next</button> 
              
            </form>


       )
    }else{
        return(
 
          
            <form className='p-5 inwidth'onSubmit={this.registerDoctor} encType='multipart/form-data'>
            <h3>Doctors</h3>
            <br/><br/>
            <div className="mb-3">
                <label for="YourAddress" className="form-label">Your Address</label>
                <input type="text"  className="form-control " name='YourAddress' value={this.state.YourAddress} onBlur={this.validateAddress} onChange={this.handeleChange}/>
                <div style={{color:'red',fontSize:12}}>{this.state.AddressError}</div>
              </div>
            
            
            <div class="mb-3">
                <label for="location" className="form-label">The location of the clinic or hospital</label>
                <input type="text"  className="form-control " name='location' onBlur={this.validatelocation} value={this.state.location} onChange={this.handeleChange}/>
                <div style={{color:'red',fontSize:12}}>{this.state.locationError}</div>
              </div>
              <div class="mb-3">
                <label for="FirstName" className="form-label">specialty</label>
            
                <select name="specialty" onChange={this.handeleChange} value={this.state.specialty} className='dw'>
            <option value='specialty'>specialty</option>
            <option value='General Medicine'>General Medicine</option>
            <option value='dentist'>dentist</option>
            <option value='Psychologist'>Psychologist</option>
            <option value='Ophthalmologist'>Ophthalmologist</option>
            <option value='Reproductive doctor'>Reproductive doctor</option>
            <option value='Dermatologist'>Dermatologist</option>
            <option value='Plastic surgeries'>Plastic surgeries</option>
            </select>
               
              </div>
              <div className="mb-3">
                <label for="FirstName" className="form-label">The university you graduated from</label>
                <input type="text"  className="form-control " name='university' value={this.state.university} onBlur={this.validateuniversity} onChange={this.handeleChange}/>
                <div style={{color:'red',fontSize:12}}>{this.state.universityError}</div>
              </div>
              <div className="mb-3">
                <label for="FirstName" className="form-label">Years of Experience</label>
                <input type="text"  className="form-control " name='Experience' value={this.state.Experience} onBlur={this.validateExperience} onChange={this.handeleChange}/>
                <div style={{color:'red',fontSize:12}}>{this.state.ExperienceError}</div>
              </div>
              <div className="mb-3">
    <label for="FirstName" className="form-label">Date Of Birth</label>
<br/>
<select name="day" className='dw' value={this.state.day}  onChange={this.handeleChange}>
<option key='0'>day</option>
{this.dayOB(1, 31)}
    
</select>

<select name="month" className='dw' value={this.state.month}  onChange={this.handeleChange}>
      <option value="0">Month</option>
      <option value="1">January</option>
      <option value="2">February</option>
      <option value="3">March</option>
      <option value="4">April</option>
      <option value="5">May</option>
      <option value="6">June</option>
      <option value="7">July</option>
      <option value="8">August</option>
      <option value="9">September</option>
      <option value="10">October</option>
      <option value="11">November</option>
      <option value="12">December</option>
    </select>

<select name="Year" className='dw' value={this.state.Year}  onChange={this.handeleChange}>
<option key='0'>Year</option>
{this.YearOB(2021,1930)}
    
</select>
  </div>
            
            
              <div>
              <label for="img">insert your Profile Photo</label>
              <br/>
              </div>
              <div className="input-group mb-3">
              
              <div>
            <div className="file-upload">
                <input type="file" ref={el} onChange={handleChange} /> 
                <button onClick={uploadFile} className="upbutton"> Upload</button>               
                   < div className="progessBar" style={{ width:this.state. progress }}>
                   {this.state.progress}
                </div>
                
                
             

            {/* displaying received image*/}
            {this.state.data.path && <img src={this.state.data.path} width='54%' height='250px' alt={this.state.data.name} />}
            </div>
        </div>

              <br/>
            </div>
            <br/>

           
         <button  className="btn btn-danger back" onClick={this.changePatientsform}>Back</button>
             <button type="submit" className="btn btn-primary">Next</button>
              
            
            </form>
    

     
    
    
        )
    }
       
    
    }
    
  
}
export default DoctorsSubmit