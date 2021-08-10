
import React from 'react'
import { Component } from 'react'




class FeadBack extends Component{
    constructor(){
        super()
        this.state={
            info:[],
            newcomm:'',
            d:'',
            e:'none',
            edcomm:'',
            FirstName:'',
            count:0
         
        }
    }
    handeleChange=(e)=>{
        this.setState({
          [e.target.name]:e.target.value,
        })
      }

      componentDidMount(){

        fetch("http://localhost:5000/Getfeadeback").then(response => response.json())            
           .then(data=>{ this.setState({info:data})})
          .catch(err => { console.log(err) })
            
        
       }
       componentDidUpdate(){
        fetch("http://localhost:5000/Getfeadeback").then(response => response.json())            
        .then(data=>{ this.setState({info:data})})
       .catch(err => { console.log(err) })
       }

     

 
    render(){


        const feadback=this.state.info.map((fead,index)=>{
        return(   
            
            
            fead.feedback.map((f)=>{

if(this.props.dr==f.email ){
   
    this.state.edcomm=f.comment
   
      if(localStorage.user==fead.Email){
         
          if(this.state.count==0){
           this.state.FirstName=f.comment+this.state.FirstName      
           this.state.count++
          }
     
    return(
       
        <div style={{marginBottom:'5rem'}} class="d-flex flex-row comment-row m-t-0">
     
        <div class="p-2" > <img  src={fead.ProfileChange} alt="user" width="50" class="rounded-circle" /> </div>
        <div class="comment-text w-100"style={{marginLeft:'1rem'}}>
            <h6 class="font-medium">{fead.Email}</h6> <span class="m-b-15 d-block"><div style={{display:this.state.d}} >{f.comment}</div> </span>
            <span   class="m-b-15 d-block"> <input type="text" style={{display:this.state.e}} name="FirstName" value={this.state.FirstName} onChange={this.handeleChange}/> </span>
            <div class="comment-footer" style={{margin:'1rem'}}>   <button type="button" class="btn btn-success btn-sm" style={{display:this.state.d}} onClick={()=>{ this.setState({d:'none',e:''})}}>Edit</button>  <button type="button" style={{display:this.state.e,marginRight:5}}  class="btn btn-success btn-sm" onClick={()=>{this.setState({e:'none',d:''})}}>save</button><button type="button" class="btn btn-danger btn-sm" onClick={
            (e)=>{
             e.preventDefault()
             fetch("http://localhost/DoctorsReservationSystemPHPserver/deletcomment.php",{
                 method:'POST',
                 headers:new Headers({'Content-Type':'application/x-www-form-urlencoded'}),
                 body:'Dremail='+f.email+'&comment='+f.comment+'&pemail='+localStorage.user
               })
               .catch(err => { console.log(err) })
             
            }}>Delete</button> </div>
        </div>
        
    </div>

   
)
        }else{
            return(
        
                <div style={{marginBottom:'5rem'}} class="d-flex flex-row comment-row m-t-0">
                <div class="p-2" > <img  src={fead.ProfileChange} alt="user" width="50" class="rounded-circle" /> </div>
                <div class="comment-text w-100"style={{marginLeft:'1rem'}}>
                    <h6 class="font-medium">{fead.Email}</h6> <span class="m-b-15 d-block"><div  >{f.comment}</div> </span>
                   
             
                </div>
            </div>

            )
        }
    
    
    }
             

/*
 onClick={
       ( e)=>{
        e.preventDefault()
        fetch("http://localhost/DoctorsReservationSystemPHPserver/updatefeadback.php",{
            method:'POST',
            headers:new Headers({'Content-Type':'application/x-www-form-urlencoded'}),
            body:'Dremail='+f.email+'&comment='+f.comment+'&pemail='+localStorage.user+'&newvaluecomm='+this.state.newcomm
          })
          .catch(err => { console.log(err) })
        
       }}

*/

            })) 
   
        
        })
        

    return(
        <div>
     {feadback}
        </div>
    )

}
}

export default FeadBack
