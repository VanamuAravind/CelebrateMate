import React, { useState, useSyncExternalStore } from 'react'
import bg from '../images/bg.png'
import bg1 from '../images/bg1.jpg'
import './Login.css'
import CustomInput from '../components/CustomInput'
const Login = () => {
  const [state,setState] = useState("signup")
  return (
    <div className='login-main-container'>
      <div className='login-left-container'>
        <div className='login-header'>
            <label className='login-title-name' style={{color:"black",fontWeight:"bold"}}>CelebrateMate</label>
            <label>Home</label>
            <label>Join</label>
        </div>
        <div className='login-form-container'>
            <label className='common-grey-medium-bold'>START FOR FREE</label>
            <label className='common-big-heading' style={{width:'fit-content'}}>Create new account</label>
            <label className='common-grey-font'>
              {state === "signup" ? "Already A Member?" : "Dont have an account"}
              <span className='hyper-link' onClick={() => setState(state === "signup" ? "login" : "signup")}>
                {state === "signup" ? " Login" : " Create account"}
              </span>
            </label>

            <div style={{width:"55%",marginTop:"20px",display:(state=="signup")?"flex":"none"}}>
              <CustomInput heading="firstname" icon={<i class="fa-solid fa-address-card"></i>} width="50%"/>
              <CustomInput heading="lastname" icon={<i class="fa-solid fa-address-card"></i>} width="50%"/>
            </div>
            <div style={{width:"55%"}}>
              <CustomInput heading="email" icon={<i class="fa-solid fa-envelope"></i>} width="100%"/>
            </div>
            <div style={{width:"55%"}}>
              <CustomInput heading="password" icon={<i class="fa-solid fa-eye"></i>} width="100%" encrypt={true}/>
            </div>
            <div style={{width:"55%"}}>
              <button>{(state === "signup")?"Create Account":"Login"}</button>
            </div>
        </div>
      </div>
      <div className='login-right-container'>
        <img src={bg1}/>
      </div>
    </div>
  )
}

export default Login
