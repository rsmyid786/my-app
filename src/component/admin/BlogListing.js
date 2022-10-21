import React from "react";
import parse from "html-react-parser";

export default function BlogListing(props)
{
    
    return ( <>
        
        
                 
        <div className="col-md-12">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">View Blogs</h3>
                  </div>

                  <table className="table table-bordered">
                    <thead>
                      <tr>
                       
                        <th>Title</th>
                        <th>Content</th>
                        <th>Image</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    {Array.isArray(props.Data) ? props.Data.map((elem) => {

                        return (<>
                        <tbody>
                        <tr key={elem.id}>
                        <td>{elem.title}</td>
                        <td style={{ color : 'white'}}>{parse(elem.description)}</td>
                        <td><img src={`https://dolchempharmaceuticals.com/assets/Blog/${elem.img}`} style={{ width : '70px'}} alt="SliderList" /></td>
                        <td><button type="button" className="btn btn-danger" onClick={() => { props.DeletaData(elem.id) }}>Delete</button></td>
                        
                        
                    </tr>
                    
                    </tbody>


                        </>)

                        }) : null } 
                    
                        
           
                        
                   
                  </table>
                </div>
              </div>
        
        
        </>
    );



}