import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar()
{

    return <aside><aside className="main-sidebar sidebar-dark-primary elevation-4">
    
    <Link to="/" className="brand-link">
      <img src="assets/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"/>
      <span className="brand-text font-weight-light">Dolchim Admin</span>
    </Link>

   
    <div className="sidebar">
     
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <input type="image" img src="https://dolchempharmaceuticals.com/assets/images/DolchemLogo.png" className="img-circle elevation-2" alt="UserImage" style={{ width : '70px'}}/>
        </div>
        
      </div>

     
      

     
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          
          <li className="nav-item menu-open">
            <Link to="/dashboard" className="nav-link active"><i className="nav-icon fas fa-tachometer-alt"></i><p>Dashboard</p></Link>
            
          </li>
           <li className="nav-item">
           <Link to="/homeslider" className="nav-link"><i className="nav-icon fas fa-image"></i>
              <p>
                Home Slider
              </p></Link>
             
          </li>
         <li className="nav-item">
            <Link to="/document-upload" className="nav-link">
              <i className="nav-icon fas fa-book"></i>
              <p>
              Document Upload
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/upload-csv" className="nav-link">
              <i className="nav-icon fas fa-image"></i>
              <p>
              Product List
              </p>
            </Link>
          </li>
          {/*<li className="nav-item">
            <Link to="/gallery" className="nav-link">
              <i className="nav-icon fas fa-image"></i>
              <p>
                Gallery
              </p>
            </Link>
          </li> */}
          <li className="nav-item">
            <Link to="/add-blog" className="nav-link">
              <i className="nav-icon fas fa-image"></i>
              <p>
                Blog
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/product-slider" className="nav-link">
              <i className="nav-icon fas fa-image"></i>
              <p>
                Product Slider
              </p>
            </Link>
</li> 
        
          
          
        </ul>
      </nav>
     
    </div>
    
  </aside>
  </aside>
    
}