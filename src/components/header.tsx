import React, { useState } from 'react'
import { FaSearch, FaShoppingBag, FaSign, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
let user={_id:"f", role:"admin"}
const [isOpen, setIsOpen]= useState<boolean>(false)
const handleSignOut=()=>{
  console.log("hello")
}
return(
<nav className='header'>
  <Link to={"/"} > Home </Link>
  <Link to={"/search"} > <FaSearch/> </Link>
  <Link to={"/cart"} > <FaShoppingBag/> </Link>
  {
    user?._id?(<><button onClick={()=>setIsOpen((prev)=>!prev)} > <FaUser/> </button>
    <dialog open={isOpen} onBlur={()=>setIsOpen(false)} >
          <div>
            {
              user.role === "admin" && <Link to="/admin/dashboard">Admin</Link>
            }
            <Link to={'/admin/orders'} > Orders </Link>
            <button onClick={handleSignOut} ><FaSignOutAlt/></button>
          </div>
    </dialog>
    </>):(<Link to={"/login"} children={<FaSign/>} /> )
  }
</nav>)
}
export default Header