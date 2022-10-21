import React from "react";

const CsvList = (props) =>{

    return (
    <>
    <div className="col-md-12">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">View Csv List</h3>
                  </div>

                  <table className="table table-bordered">
                    <thead>
                      <tr>
                       
                        <th>Name</th>
                        <th>Description</th>
                        <th>Package 1</th>
                        <th>Gst</th>
                        <th>Mrp</th>
                        <th>Product Image</th>
                      </tr>
                    </thead>
                    {Array.isArray(props.Data) ? props.Data.map((elem) => {

                        return (<>
                        <tbody>
                        
                        <tr key={elem.id}>
                        <td>{elem.p_name}</td>
                        <td>{elem.p_description}</td>
                        <td>{elem.packaging_1}</td>
                        <td>{elem.packaging_2}</td>
                        <td>{elem.sub_category}</td>
                        <td>{(elem.rate) ? <img src={`https://dolchempharmaceuticals.com/assets/CsvVisual/${elem.rate}`} style={{ width : '150px'}} alt="DocumentList"/> : '' } <input
                              type="file"
                              id="exampleInputFile"
                              name="CsvVisualImage"
                              onChange={props.saveFile}
                            /></td>
                        
                        <td><button type="button" className="btn btn-success" onClick={() => { props.UpdateData(elem.id) }}>Edit</button></td>
                        
                        
                    </tr>
                    
                    </tbody>
                    


                        </>)

                        }) : null } 
                    
                        
           
                        
                   
                  </table>
                </div>
              </div>
    </>
    )

}
export default CsvList;