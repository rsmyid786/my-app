import React from "react";
import Dashboard from "./component/admin/Dashboard";
import Homeslider from "./component/admin/Homeslider";
import Login from "./component/admin/Login";
import Forgotpassword from "./component/admin/Forgotpassword";
import { Routes, Route } from "react-router-dom";
import DocumentUpload from "./component/admin/DoucmentUpload";
import Gallery from "./component/admin/Gallery";
import ProductSlider from "./component/admin/ProductSlider";
import CsvExport from "./component/admin/CsvExport";
import Blog from "./component/admin/Blog";
function App() {
  return (
    <div className="App">
      
      <Routes>
      
        <Route exact path="/dashboard" element={<Dashboard />} />

        <Route exact path="/homeslider" element={<Homeslider />} />
        
        <Route exact path="/forgot-password" element={<Forgotpassword />} />
        <Route exact path="/document-upload" element={<DocumentUpload />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/product-slider" element={<ProductSlider />} />
        <Route exact path="/upload-csv" element={<CsvExport />} />
        <Route exact path="/add-blog" element={<Blog />} />

        

        <Route exact path="/" element={<Login />} />
      </Routes>
     
    </div>
  );
}

export default App;
