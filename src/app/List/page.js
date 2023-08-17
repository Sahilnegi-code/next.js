'use client'
import React from 'react'

const List = ({data }) => {
  return (
    <>
    <div>
    <table class="table">
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
        {/* <button>Edit</button>
        <button>Delete</button> */}
      </td>
    </tr>
            </>
            )
        }
            
            )
    }
  
  </tbody>
</table>
    </div>
    
    </>
  )
}

export default List;
