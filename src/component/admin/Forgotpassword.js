import React from "react";
import { Link } from "react-router-dom";

export default function Forgotpassword()
{


    return <div>

<div className="card card-outline card-primary" style={{padding : "70px"}}>
    <div className="card-header text-center">
      <span className="h1"><b>Dolchim Admin</b></span>
    </div>
    <div className="card-body">
      <p className="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>
      <form  method="post">
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <button type="submit" className="btn btn-primary btn-block">Request new password</button>
          </div>
         
        </div>
      </form>
      <p className="mt-3 mb-1">
        <Link to="/">Login</Link>
      </p>
    </div>
   
  </div>

    </div>


}