import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import { useEffect,useState } from "react";
import DocumentList from "./DocumentList";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 

const DocumentUpload = () => {
    const [title, setTitle] = useState("");
    
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
      };
      const ApiUrl = 'https://dolchempharmaceuticals.com/';
      const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
       formData.append("title", title);
        let result = await fetch(ApiUrl+"documentUpload", {
          method: "POST",
          
          body: formData,
        });
        console.log(result.data);
       
        getpdata();
      };
      const [Data, setData] = useState([]);
  const getpdata = async (e) => {
    await fetch(ApiUrl+"documentUploadList", {
      method: "GET",
      
    }).then(res => res.json()).then(data => {
      setData(data.data);
        })
  };
    useEffect(() => {
      getpdata();
       }, []);
       const deleteuser = async (id) => {
        confirmAlert({
          title: 'Confirm to delete',
          message: 'Are you sure to do this.',
          buttons: [
            {
              label: 'Yes',
              onClick: () =>  fetch(ApiUrl+`documentUploadDelete`, {
                method: "DELETE",
                mode:'cors',
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify({id})
              }).then(res => res.json()).then(data => {
                console.log(data.data)
             if(data.error === true)
             {
              alert('data deleted successfully');
              getpdata()
             }
             else
             {
              alert('data not deleted please try again');
             }
                //getpdata()
            
              })
            },
            {
              label: 'No'
            }
          ]
        });
        
    }

        return (
            <>
            <Header />
    <Sidebar />
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Document Uplaod</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <span>Home</span>
                  </li>
                  <li className="breadcrumb-item active">Docuement Upload</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
            
              <div className="col-md-6">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Add Document</h3>
                  </div>

                  <form enctype="multipart/form-data">
                    <div className="card-body">
                      <div className="form-group">
                        <label for="exampleInputEmail1">Title</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          onChange={(e)=>setTitle(e.target.value)}
                          placeholder="Enter Title"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label for="exampleInputFile">File input</label>
                        <div className="input-group">
                          <div className="custom-file">
                            <input
                              type="file"
                              className="custom-file-input"
                              id="exampleInputFile"
                              name="SliderImage"
                              onChange={saveFile}
                            />
                            <label
                              className="custom-file-label"
                              for="exampleInputFile"
                            >
                              Choose file
                            </label>
                          </div>
                          <div className="input-group-append">
                            <span className="input-group-text">Upload</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card-footer">
                      <button type="button" onClick={handleSubmit} className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              
              <DocumentList  Data = {Data} DeletaData = {deleteuser}/>


            </div>
          </div>
        </section>
      </div>
      <Footer/>
            
            </>
        )




}

export default DocumentUpload;