import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { useCookies } from 'react-cookie';
function Home() {
  const [cookies, setCookie] = useCookies(['user']);
    let token_value=cookies.jwtoken;
  return (
    <>
      <div style={{"background":"#f2edf3"}}> 
      <div className="row">
         <div className="col-lg-12"><Navbar /> </div>  
      </div>
      <div className= "row">
        <div className="col-lg-3"><Sidebar /> </div>
        <div className="col-lg-9"> 
              <div className="row">
              <div className="col-lg-4 p-2 mt-3">
              <div className="card text-white" style={{"background":"#f96868"}}  >
                      <div className="card-body p-4">
                       <h4 className="card-title">Total User  <i className="fa-solid fa-chart-line px-5" ></i></h4>
                       <p className="h3 p-2"> 200</p>
                              <p className="card-text">Total User Of Months</p>
                       </div>
              </div>
              </div>
              <div className="col-lg-4 p-2 mt-3">
              <div className="card text-white " style={{"background":"#5e50f9"}}>
                      <div className="card-body p-4">
                          <h4 className="card-title">Total Sales <i class="fa-regular fa-bookmark px-5"></i> </h4>
                            <p className="h3 p-2"> $ 20,000</p>
                              <p className="card-text">Total Sales Of Month</p>
                       </div>
              </div>
              </div>
              <div className="col-lg-4 p-2 mt-3"  >
              <div className="card text-white "style={{"background":"#1bcfb4"}} >
                      <div className="card-body p-4">
                          <h4 className="card-title">Total Order <i className="fa-regular fa-diamond px-5"></i> </h4>
                          <p className="h3 p-2">  20</p>
                              <p className="card-text">Total Order Of Month</p>
                       </div>
              </div>
              </div>
              </div>
              
               <div className="px-3 py-5">  
                <div className="row p-3" >
                
                <table className="table " style={{"background":"white"}}>
                   
                    <thead>
                    
                       <tr style={{"background":"#f96868"}} >
                       <th>S.No</th>
                         <th>User</th>
                         <th>Problem</th>
                         <th > Status</th>
                         
                         <th >Ticket Id</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                   <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
    <tr>
      <td >2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <td >4</td>
      <td>Jacob</td>
      <td>the Bird</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

</div>
                </div>

         </div>
      </div>
      </div>
    </>
      )
}

export default Home