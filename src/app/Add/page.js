'use client'
import React from 'react'
import { useState , useEffect } from 'react';
const Add = ({setData , data , setIsAdd }) => {
  
    const[name , setName] = useState('');
    const [ email , setEmail] = useState('');
    const [phone , setPhone] = useState('');
const handle  = (e) =>{
    e.preventDefault();
    if( !name || !email || !phone ){
        alert('hi');
    }
    const newData  = {
        name , email , phone
    }
    setData([...data, newData ]);
    setIsAdd(false);
}
  return (
    <>
      <form class="needs-validation" onSubmit={handle} novalidate>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationTooltip01">Name</label>
      <input type="text" onChange ={(e)=>setName(e.target.value)} value ={name} class="form-control" id="validationTooltip01"  />
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationTooltip02">Email</label>
      <input type="email"  onChange ={(e)=>setEmail(e.target.value)}  value={email} class="form-control" id="validationTooltip02"  required/>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationTooltip03">Phone no</label>
      <input type="number" onChange ={(e)=>setPhone(e.target.value)} value ={phone} class="form-control" id="validationTooltip03" required/>
      <div class="invalid-tooltip">
        Please provide a valid city.
      </div>
    </div>
   
    
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
    </>
  )
}

export default Add
