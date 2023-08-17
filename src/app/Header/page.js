'use client'
import { button } from 'bootstrap';

const Header = ({setIsAdd}) => {

  return (
    <>

     <div style={{margin:'10px 10px'}}>
        <button className='btn btn-primary' onClick={()=>setIsAdd(true)}>Add</button>
     </div>
    
    </>
      

  )
}

export default Header;
