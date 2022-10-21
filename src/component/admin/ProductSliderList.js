import React from "react";


const ProductSliderList = (props) =>
{

return (
    <>
    <div className="col-md-6">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">View Product Slider</h3>
                  </div>

                  <table className="table table-bordered">
                    <thead>
                      <tr>
                       
                       <th>Image</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    {Array.isArray(props.Data) ? props.Data.map((elem) => {

                        return (<>
                        <tbody>
                        <tr key={elem.id}>
                       <td><img src={`https://dolchempharmaceuticals.com/assets/ProductSlider/${elem.img}`} style={{ width : '50px'}} alt="ProductList"/></td>
                        <td><button type="button" className="btn btn-danger" onClick={() => { props.DeletaData(elem.id) }}>Delete</button></td>
                        
                        
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
export default ProductSliderList;