import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
export default function Login()
{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate('');
  const [errorMessage, setErrorMessage] = useState('');

  const ApiUrl = 'https://dolchempharmaceuticals.com/';
  const handleSubmit = async() =>{
   await fetch(ApiUrl+'login', {
    method: 'POST',
    mode:'cors',
    headers: {
      'Content-Type': 'application/json',
      
    
    },
    body: JSON.stringify({email,password})
  }).then(res => {return res.json()}).then(data => {
  console.log(data);
    if(data.data !== undefined )
    {
    //<Nav to="/dashboard" />
    navigate('/dashboard');
    }
    else
    {
      setErrorMessage('Credential not matched ');
    }


  }).catch(err=>{
    console.log(err)
})
  //console.log(result.json())
  } 
  

    return <aside>
<div className="login-box">
  <div className="login-logo">
    <Link to="/"><img src="https://dolchempharmaceuticals.com/assets/images/DolchemLogo.png" alt="adminLogo"/></Link>
  </div>
 
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Dolchem Admin</p>

      <div className="input-group mb-3">
          <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" value={email} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div className="row">
         
          
          <div className="col-4">
            <button type="button" onClick={handleSubmit} className="btn btn-primary btn-block">Sign In</button>
          </div>
          {errorMessage && <div class="alert alert-danger" role="alert"> {errorMessage} </div>}
        </div>
      

      {/*<div className="social-auth-links text-center mb-3">
        <p>- OR -</p>
        <a href="#" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
        </a>
        <a href="#" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
        </a>
</div> */}
      

      <p className="mb-1">
        <Link to="/forgot-password">I forgot my password</Link>
      </p>
      
    </div>
   
  </div>
</div>

    </aside>
}