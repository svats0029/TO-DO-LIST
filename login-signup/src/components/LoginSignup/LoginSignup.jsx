import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
const LoginSignup = () => {
    const[action,setAction] = useState("LOGIN");
  return (
    <div className='container'>
        <div className='header'>
          <div className='text'>{action}</div>
          <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action==="LOGIN"?<div> </div>:<div className='input'>
            <img src={user_icon} alt="" />
            <input type="text" placeholder="NAME" />
        </div>}
        <div className='input'>
            <img src={email_icon} alt="" />
            <input type="email" placeholder="EMAIL-ID"/>
        </div>
        <div className='input'>
            <img src={password_icon} alt="" />
            <input type="password" placeholder="PASSWORD"/>
        </div>
    </div>
    {action==="SIGN UP"?<div></div>:<div className="forgot-password">LOST PASSWORD? <span> CLICK HERE!</span></div>}
    <div className="submit-container">
        <div className={action==="LOGIN"?"submit gray":"submit"} onClick={()=>{setAction("SIGN UP")}}>SIGN UP</div>
        <div className={action==="SIGN UP"?"submit gray":"submit"} onClick={()=>{setAction("LOGIN")}}>LOGIN</div>
    </div>

</div>
  )
}

export default LoginSignup;
