'use client'
import React, { useEffect } from 'react'
import { useState } from 'react';
const Edit = ({data ,setIsEdit ,handleEdit ,Emp , handleDelete ,setData}) => {
    const[name , setName] = useState(Emp.name);
    const [ email , setEmail] = useState(Emp.email);
    const [phone , setPhone] = useState(Emp.phone);
console.log(Emp);

const handle  = (e) =>{
    e.preventDefault();
    if( !name || !email || !phone ){
        alert('hi');
    }
    const newData  = {
        name , email , phone 
    }
    for (let i = 0; i < data.length; i++) {
        if (data[i] === Emp) {
            data.splice(i, 1, data);
            break;
        }
    }
    setData([...data, newData])
setIsEdit(false);
}
useEffect(()=>{
    
},[])
  return (
    <div className='   d-flex align-content-center justify-content-center h-100 w-100'  >
    <div className='d-flex align-items-center' style={{border:'2px solid red'}} >
          <form className="needs-validation" onSubmit={handle} novalidate>
  <div className="form-row">
    <div className="col-md-12 mb-3">
      <label for="validationTooltip01">Name</label>
      <input type="text" onChange={(e)=>setName(e.target.value)} value ={name } className="form-control" id="validationTooltip01"  />
      <div className="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div className="col-md-12 mb-3">
      <label for="validationTooltip02">Email</label>
      <input type="email"   onChange={(e)=>setEmail(e.target.value)} value ={ email} className="form-control" id="validationTooltip02"  required/>
      <div className="valid-tooltip">
        Looks good!
      </div>
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-12 mb-3">
      <label for="validationTooltip03">Phone no</label>
      <input type="number"  onChange={(e)=>setPhone(e.target.value)} value ={ phone} className="form-control" id="validationTooltip03" required/>
      <div className="invalid-tooltip">
        Please provide a valid city.
      </div>
    </div>
   
    
  </div>
  <button className="btn btn-primary" type="submit" >Submit form</button>
</form>
</div>
    </div>
  )
}

export default Edit
