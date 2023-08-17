'use client'
import './page.module.css'
import { useState , useEffect } from "react";
import Header from "./Header/page"
import List from "./List/page"
import Add from "./Add/page"
import Edit from './Edit/page'

export default function Home() {
  const [ isAdd ,setIsAdd] =  useState(false)
  const [ isEdit , setIsEdit ] = useState(false);
  const [emp, setEmp] = useState();
const [data , setData ] = useState([]);

const handleEdit = (obj)=>{
  
  
  const [employee]  = data.filter(curr => curr === obj);

  console.log(employee)
  setEmp(employee);
  setIsEdit(true);
  handleDelete(obj)
}

const handleDelete = (obj)=>{
  
  setData(data.filter(curr=> curr !== obj) );
}
  console.log(emp);
  useEffect(() => {

  }, [isAdd, emp , handleEdit])
  
  return (
  <>
  <div className='container'>
    <div className='w-100' style={{height:'100vh'}}>
    {
  !isAdd && !isEdit && (
    <>
    <div className='center_div'>

      <div style={{width:'100%',height:'100vh' , marginTop:'20px'}}>
        
      <Header setIsAdd = {setIsAdd} />
    <List  setEmp ={setEmp} handleDelete={handleDelete} handleEdit={handleEdit} data={data} />
      </div>
    
    </div>
    
    </>
 ) 
  }
  {
    isAdd && (
      <Add setIsAdd={setIsAdd} data ={data} setData = {setData} />
    )
  }
  {
    isEdit && (
      <Edit setData= {setData}  setIsEdit ={setIsEdit} data = {data} handleDelete ={handleDelete} handleEdit={handleEdit} Emp ={emp}  />
    )
  }
    </div>

  </div>

  
  </>
)
}
