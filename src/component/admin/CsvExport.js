import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import CsvList from "./CsvList";
import { useEffect,useState } from "react";

const CsvExport = () => {
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
      };
      const ApiUrl = 'https://dolchempharmaceuticals.com/';
      const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("csv_file", file);
        formData.append("fileName", fileName);
      
        await fetch(ApiUrl+"CsvUpload", {
          method: "POST",
          
          body: formData,
        }).then(res => {return res.json()}).then(data => {
            console.log(data);
              if(data.error === true)
              {
                setErrorMessage('Csv Uploade Successfully');
              }
              else
              {
                setErrorMessage('csv not uploade');
              }
          
          
            });
        //console.log(result.data);
       
      };

      const [Data, setData] = useState([]);
  const getpdata = async (e) => {
    await fetch(ApiUrl+"GetCsvList", {
      method: "GET",
      
    }).then(res => res.json()).then(data => {
      setData(data.data);
        })
  };
  useEffect(() => {
    getpdata();
     }, []);
  const updateUser = async (id) => {
    const formUpdateData = new FormData();
    formUpdateData.append("file", file);
    formUpdateData.append("fileName", fileName);
    formUpdateData.append("id", id);
    await fetch(ApiUrl+`UpdateCsvImages`, {
        method: "POST",
        body: formUpdateData,
      }).then(res => res.json()).then(data => {
     if(data.error === false)
     {
      getpdata();
     }
     else
     {
      alert(data.message);
     }
        //getpdata()
    
      })
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
                <h1>Upload Csv</h1>
              </div>
              
            </div>
          </div>
        </section>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
            
              <div className="col-md-12">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Upload Csv</h3>
                    <a href = {`${ApiUrl}admin/DownloadCsv`} style ={{float:'right'}} className="btn btn-warning">Csv Format</a>
                  </div>

                  <form enctype="multipart/form-data">
                    <div className="card-body">
                     
                      
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
                  {errorMessage && <div class="alert alert-danger" role="alert"> {errorMessage} </div>}
                </div>
              </div>
              
              <CsvList  Data = {Data} UpdateData = {updateUser} saveFile = {saveFile}/>


            </div>
          </div>
        </section>
      </div>
      <Footer/>
            
            </>
        )




}

export default CsvExport;