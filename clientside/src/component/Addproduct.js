import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { productAdd } from "../service/api";
import { useCookies } from "react-cookie";

const Addproduct = () => {
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(["user"]);



  let token_value = cookies.jwtoken;
  const initial = {
    pname: "",
    pcategory: "",
    price: "",
    pstockvalue: "",
    pdescription:""
  };
  const [product, setProduct] = useState(initial);

  const onValueChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(product);
    await productAdd(product, token_value);



  }

  return (
    <>
      <div style={{ "background": "#f2edf3" }}>
        <div className="row">
          <div className="col-lg-12"><Navbar /> </div>
        </div>
        <div className="row">
          <div className="col-lg-3"><Sidebar /> </div>


          <div className="col-lg-9">

            <div className="Register">
              <form onSubmit={handleSubmit}>
                <center>
                  <h2 className='h2 '>Add Product</h2>
                  <table className='Regitable'>
                    <tbody>
                     
                      <tr className='tr'>
                        <td className='td'><input type="text" onChange={(e) => onValueChange(e)} name="pname" className="form-control" placeholder="Productname" /></td>
                        <td className='td'>
                          <select className="form-control" onChange={(e) => onValueChange(e)} name="pcategory">
                            <option value="categories">Categories</option>
                            <option value="Nike">cat_name</option>
                          </select>
                        </td>
                      </tr>

                     
                      <tr className='tr'>
                        <td className='td'><input type="text" onChange={(e) => onValueChange(e)} name="price" className="form-control" placeholder='Price' /></td>
                        <td className='td'><input type="text" onChange={(e) => onValueChange(e)} name="pstockvalue" className="form-control" placeholder='Stockvalue' /></td>
                      </tr>

                      <tr className='tr'>
                        <td className='td' colSpan={2}>
                        <input type="textbox" placeholder='Description' className="form-control" resize ="true" onChange={(e) => onValueChange(e)} name="pdescription"/>
                        </td>
                      </tr>
                    
                    </tbody>
                  </table>
                  
                  <input type="submit" value="Submit" className="button regibutton" />
                </center>
              </form>
            </div>





          </div>
        </div>
      </div>
    </>
  );
};

export default Addproduct;
