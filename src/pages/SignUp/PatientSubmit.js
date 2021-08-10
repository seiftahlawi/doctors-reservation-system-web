import React,{ createRef } from 'react';
import { Component } from 'react';
import{Link} from "react-router-dom"
import SimpleReactValidator from 'simple-react-validator';
import { Redirect } from "react-router-dom";
import axios from 'axios';

 class PatientSubmit extends Component{
  constructor(props){

    super(props)
    this.validator = new SimpleReactValidator();
    this.state={
 isformone:true,
     Address:'',
     diseasesValue:'',
     chronicDiseases: "No",
     day:'0',
     month:'0',
     Year:'0',
     healthInsurance:"No",
     FirstName:'',
     LastName:'',
     Password:'',
    Email:'',
    PhoneNumber:'',
    confirmPassword:'',
    FirstNameError:'',
    LastNameError:'',
    PasswordError:'',
   EmailError:'',
   confirmPasswordError:'',
   selectedFile:null,
   ProfileChange:null,
   AddressError:'',
   redirectToReferrer: false,
   PhoneNumberError:'',
   file:'',
   ProfileChange:'',
   dataProfile:{ name: "", path: "" },
data:{ name: "", path: "" },
progress:0,
progress2:0,
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
  
  if(this.state.Address===''){
    this.setState({AddressError:' Address is  Required '})
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
validatePhoneNumber=()=>{
  if(this.state.PhoneNumber===''){
    this.setState({PhoneNumberError:' Phone Number is  Required '})
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
    const isPhoneNumberValid=this.validatePhoneNumber();
    if(isEmailValid&&isFirstNameValid&&isLastNameValid&&isPasswordValid&&isconfirmPasswordValid&&isPhoneNumberValid){

      if(this.state.isformone===true){
        this.setState({
            isformone:false
        })
      }else{
        this.setState({
            isformone:true
        })
      }

    }else{
      return isEmailValid
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

  registerPatient=(e)=>{
    e.preventDefault()
    const isAddressValid=this.validateAddress();
    
    if(isAddressValid){
      fetch("http://localhost:5000/PatientSignUp",{
        method:'POST',
        headers:new Headers({'Content-Type':'application/x-www-form-urlencoded'}),
        body:'FirstName='+this.state.FirstName+'&LastName='+this.state.LastName+'&Email='+this.state.Email+'&PhoneNumber='+this.state.PhoneNumber+'&Password='+this.state.Password+'&Address='+this.state.Address+'&chronicDiseases='+this.state.chronicDiseases+'&diseasesValue='+this.state.diseasesValue+'&day='+this.state.day+'&month='+this.state.month+'&Year='+this.state.Year+'&healthInsurance='+this.state.healthInsurance+'&fileToUpload='+this.state.data.path+"&ProfileChange="+this.state.dataProfile.path
      }
     
      ).then(response => response.json())            
      .then(data=>{ this.setState({redirectToReferrer:data.rd })})
     .catch(err => { console.log(err) })
      
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
  const x = this.inputRef; // accesing input element
  const handleChangeProfile = (e) => {
    this.setState({
      progress2:0
    })
    
     
      const file = e.target.files[0]; // accesing file
      console.log(file);
      this.setState({
        ProfileChange:file
      })
     
  }
  const onProfileChange = (event) => {
    event.preventDefault();
    const formData = new FormData();        formData.append('file', this.state.ProfileChange); // appending file
    axios.post('http://localhost:5000/upload', formData, {
        onUploadProgress: (ProgressEvent) => {
            let progress = Math.round(
            ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
            this.setState({
              progress2:progress
            })
           
        }
    }).then(res => {
        console.log(res);
        this.setState({
          dataProfile:{ name: res.data.name,
path: 'http://localhost:5000' + res.data.path
}
        })
       
    }).catch(err => console.log(err))} 


    
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

  const redirectToReferrer = this.state.redirectToReferrer;
  if (redirectToReferrer) {
      return <Redirect to="/Signin" />
  }

    if(this.state.isformone){
        return(
        
     <form className='p-5 inwidth' onSubmit = {this.changePatientsform} >
<h3>Patients</h3>
<br/><br/>
<div className="mb-3">
    <label for="FirstName" className="form-label">First Name</label>
    <input type="text"  className="form-control " name='FirstName'  value={this.state.FirstName} onBlur={this.validateFirstName} onChange={this.handeleChange} />
   <div style={{color:'red',fontSize:12}}>{this.state.FirstNameError}</div>
  </div>
  <div className="mb-3">
    <label for="LastName" className="form-label">Last Name</label>
    <input type="text"  className="form-control " name='LastName' value={this.state.LastName} onBlur={this.validateLastName} onChange={this.handeleChange}/>
    <div style={{color:'red',fontSize:12}}>{this.state.LastNameError}</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email"  className="form-control " name='Email' value={this.state.Email} onBlur={this.validateEmail}  onChange={this.handeleChange}/>
    <div style={{color:'red',fontSize:12}}>{this.state.EmailError}</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Phone Number</label>
    <input type="tel"  className="form-control " name='PhoneNumber' value={this.state.PhoneNumber} onBlur={this.validatePhoneNumber}  onChange={this.handeleChange}/>
    <div style={{color:'red',fontSize:12}}>{this.state.PhoneNumberError}</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='Password' value={this.state.Password} onBlur={this.validatePassword} onChange={this.handeleChange} />
    <div style={{color:'red',fontSize:12}}>{this.state.PasswordError}</div>
  </div>
  <div class="mb-3">
    <label for="confirm password" className="form-label">confirm password</label>
    <input type="password" className="form-control" name='confirmPassword' value={this.state.confirmPassword} onBlur={this.validateconfirmPassword} onChange={this.handeleChange}/>
    <div style={{color:'red',fontSize:12}}>{this.state.confirmPasswordError}</div>
  </div>
 <Link to='/'> <button  className="btn btn-danger back">Back</button></Link>
<button className="btn btn-primary">Next</button>
  
</form>
    


       )
    }else{
        return(
 
  
        
          <form className='p-5 inwidth' onSubmit={this.registerPatient}>
<h3>Patients</h3>
<br/><br/>
<div className="mb-3">
    <label for="FirstName" className="form-label">Address</label>
    <input type="text"  className="form-control " name='Address' onBlur={this.validateAddress}  value={this.state.Address} onChange={this.handeleChange}/>
   <div style={{color:'red',fontSize:12}}>{this.state.AddressError}</div>
  </div>

  <div className="mb-3" >
    <label for="FirstName" className="form-label">Do you have chronic diseases?</label>
<br/>
    <input type="radio" className="radeo" name="chronicDiseases" value="Yes" onChange={this.handeleChange} checked={this.state.chronicDiseases==='Yes'}/>
  <label >  Yes  </label>
  <input type="radio" className="radeo" name="chronicDiseases" value="No" onChange={this.handeleChange} checked={this.state.chronicDiseases==='No'}/>
  <label>  No  </label>


  </div>

  
  <div className="mb-3">
    <label for="FirstName" className="form-label">If you have mention it </label>
    <br/>
    <textarea  name='diseasesValue' value={this.diseasesValue} onChange={this.handeleChange}/>


<br/>
    


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
  <label for="img">Do you have health insurance?</label>
  <br/>
  <input type="radio" className="radeo" name="healthInsurance" value="Yes" onChange={this.handeleChange} checked={this.state.healthInsurance ==='Yes'}/>
  <label >  Yes  </label>
  <input type="radio" className="radeo" name="healthInsurance" value="No" onChange={this.handeleChange} checked={this.state.healthInsurance ==='No'}/>
  <label >  No  </label>
<br/>
<label for="img">If you have insert image of health insurance </label>
  
  </div>
<div className="file-upload">
                <input type="file" ref={el} onChange={handleChange} /> 
                <button onClick={uploadFile} className="upbutton"> Upload</button>               
                   < div className="progessBar" style={{ width:this.state. progress }}>
                   {this.state.progress}
                </div>
                
            </div>
  <div>
  <label for="img">insert your Profile Photo</label>
  <br/>
  </div>

<div className="file-upload">
                <input type="file" ref={x} onChange={handleChangeProfile} /> 
                <button onClick={onProfileChange} className="upbutton"> Upload</button>               
                   < div className="progessBar" style={{ width:this.state. progress2 }}>
                   {this.state.progress2}
                </div>
                
            </div>
<br/>
 <button  className="btn btn-danger back" onClick={this.changePatientsform}>Back</button>
 <button type="submit" className="btn btn-primary">Next</button>
  

</form>

     
    
    
        )
    }
       
    
    }
    
  
}
export default PatientSubmit