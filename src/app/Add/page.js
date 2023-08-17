'use client'
import React from 'react'
import { useState  } from 'react';
const Add = ({setData , data , setIsAdd }) => {
  
    const[name , setName] = useState('');
    const [ email , setEmail] = useState('');
    const [phone , setPhone] = useState('');
const handle  = (e) =>{
    e.preventDefault();
  
  
    const newData  = {
        name , email , phone
    }
    setData([...data, newData ]);
    setIsAdd(false);
}
  return (
    <>
    <div className='   d-flex align-content-center justify-content-center h-100 w-100'  >
      <div className='d-flex align-items-center'   >
      <form className="needs-validation"  style={{border:'2px solid grey' ,padding:'50px'}} onSubmit={handle} novalidate>
  <div className="form-row">
    <div className="col-md-12 mb-3">
      <label for="validationTooltip01">Name</label>
      <input type="text" onChange ={(e)=>setName(e.target.value)} value ={name} className="form-control" id="validationTooltip01"  />
      <div className="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div className="col-md-12 mb-3">
      <label for="validationTooltip02">Email</label>
      <input type="email"  onChange ={(e)=>setEmail(e.target.value)}  value={email} className="form-control" id="validationTooltip02"  required/>
      <div className="valid-tooltip">
        Looks good!
      </div>
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-12 mb-3">
      <label for="validationTooltip03">Phone no</label>
      <input type="number" onChange ={(e)=>setPhone(e.target.value)} value ={phone} className="form-control" id="validationTooltip03" required/>
      <div className="invalid-tooltip">
        Please provide a valid city.
      </div>
    </div>
   
    
  </div>
  <button className="btn btn-primary" type="submit">Submit form</button>
</form>
      </div>
    
    </div>
   
    </>
  )
}

export default Add
