import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

export default function Dashboard()
{
    return <><Header />
    <Sidebar /><aside><div className="content-wrapper">
    <div className="content-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="m-0">Dashboard</h1>
          </div>
          
        </div>
      </div>
    </div>
   
    <section className="content">
      <div className="container-fluid">
        
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12">
            <p>Welcome to dolchem Dashboard</p>
           
          </div>
         
          
         
          <div className="clearfix hidden-md-up"></div>

         
        
          
          
        </div>
       

        
        
      </div>
    </section>
   
  </div>
    </aside>
    <Footer/>
    </>
}