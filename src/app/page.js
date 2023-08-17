'use client'
import { useState , useEffect } from "react";


import Header from "./Header/page"
import List from "./List/page"
import Add from "./Add/page"

export default function Home() {
  const [ isAdd ,setIsAdd] =  useState(false)
  const [ isEdit , setIsEdit ] = useState(false);
const [data , setData ] = useState([]);
  console.log(isAdd);
  useEffect(() => {

  }, [isAdd])
  
  return (
  <>
  {
  // !isAdd && !isEdit && (
  //   <>
  //   <Header setIsAdd = {setIsAdd} />
  //   <List  data={data}/>
  //   </>
 // ) 
  }
  {
    // isAdd && (
    //   <Add setIsAdd={setIsAdd} data ={data} setData = {setData} />
    // )
  }
  
  </>
)
}
