'use client'
import React, { useEffect } from 'react'

const List = ({data,setEmp, handleEdit, handleDelete }) => {


useEffect(()=>{

},[setEmp , handleDelete])
  return (
    <>
    <div>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">E-mail</th>
      <th scope="col">Phone no</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {
      data.length !==  0  && (
        data.map((curr, id)=>
        {
            return (
                <>
                {console.log(curr)}
              <tr>
      <th scope="row">{id}</th>
      <td>{curr.name}</td>
      <td>{curr.email}</td>
      <td>{curr.phone}</td>
      <td>
        <button className='btn btn-primary' onClick={ ()=> handleEdit(curr ) }>Edit</button>{ " " }
        <button className='btn btn-primary' onClick={()=>handleDelete(curr )}>Delete</button>
      </td>
    </tr>
            </>
            )
        }
            
            )
      )
    }
    
  
  </tbody>
</table>
    </div>
    
    </>
  )
}

export default List;
