import React , { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar'
import {auth} from '../firbase';

const Signin = () => {
    const [email, setEmail ]= useState();
    const [password, setPassword ]= useState();
    const navigate=useNavigate();
   

const emailhandler=(e)=>{
setEmail(e.target.value);

}

const passwordhandler=(event)=>{
    setPassword(event.target.value);
   
}
 const handlesubmit=async(e)=>{
    e.preventDefault();
    console.log(password)
    console.log(email)
    try{
      const result=await auth.signInWithEmailAndPassword(email,password)
      window.M.toast({html: `welcome ${result.user.email}`})
      navigate("/home")
    
    }catch(error){
      window.M.toast({html: error.message})

    }
   
}



const ResetEmail=async(e)=>{
try{
  const result1 = await auth.sendPasswordResetEmail(email)
  window.M.toast({html: `Sended`})
}catch(error){
  window.M.toast({html: error.message})
}
}





  



  return (
    <>
    <Navbar/>
    <div className='center container'>
    <h3>     Than Signin ✔️ !</h3>
    
        <form onSubmit={handlesubmit}>
      
        <div className="input-field col s6">
      
          <input placeholder="  Enter Your Email" value={email} type='email'  onChange={emailhandler}/>
          <input placeholder=" Enter Your Password" value={password} type='password'  onChange={passwordhandler}/>
          
        </div>
        <button type='submit' className='btn bkue'>Signin</button><br></br><br></br>
     
        </form>
        <div className="resetPassword-main">
        <button type='submit'  onClick={ResetEmail} className='btn red'>Forget Password</button>
   

    </div>
        </div>
    </>
  )
}

export default Signin