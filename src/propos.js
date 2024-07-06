import React from 'react';
import { Link } from 'react-router-dom';

function Propos() {
  return (
    <div class="container-fluid text-center">
    <div class="row">
      <div class="col-md-12 d-flex justify-content-between align-items-center shadow p-3 mb-5  header">
        <Link to="/"> <h4 class="text-light" ><strong>Code Wallet</strong> </h4></Link>
        <h6 class="text-light" >info</h6>
      </div>
      <div class="col-md-12 mb-4 ">
       <h3>Functionality</h3>
       <ul>
        <li>Add a code Fragment </li>
        <li>Delete a code Fragment</li>
        <li>Edit a code Fragment</li>
        <li>Copy your code Fragment to clipboard</li>
       </ul>

         <br/>

         <h3>developer information</h3>
         <p>  <strong>Name :</strong>  Gnakale  <strong>LastName:</strong> Jonathan Levi </p>

         <br/>

         <h3>Data management</h3>

         <p>all data are stored in local storage</p>
      </div>
    </div>
  </div>
  );
}

export default Propos;

