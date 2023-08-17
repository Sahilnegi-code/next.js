'use client'
import { button } from 'bootstrap';

const Header = ({setIsAdd}) => {

  return (
    <>

     <div>
        <button className='btn btn-primary' onClick={()=>setIsAdd(true)}>Add</button>
     </div>
    
    </>
      

  )
}

export default Header;
