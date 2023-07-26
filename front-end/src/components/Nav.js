import React from 'react'
import { Link, useNavigate }  from "react-router-dom"

const Nav = () => {
  
  // =================== this code is to remove signin btn after user successfuly signs in ==========================//

  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout =()=>{
    localStorage.clear();
    navigate("/signup");
  }


  return (

   // ====================== react navbar created using react router dom =======================//

    <div className='navb'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" alt="logo" />
        { auth ? <ul className='nav-ul'>
            <li><Link to="/" >Products</Link></li>
            <li><Link to="/add" >Add Products</Link></li>
            <li><Link to="/update" >Update Products</Link></li>
            <li><Link to="/profile" >Profile</Link></li>
            <li><Link onClick={logout} to="/signup" >Logout</Link></li>

        </ul>
        :
        <ul className='nav-ul nav-rt'>
        <li><Link to="/signup" >signup</Link></li>
        <li><Link to="/login">Login</Link></li>
        </ul>
        }
    </div>
  )
}

export default Nav