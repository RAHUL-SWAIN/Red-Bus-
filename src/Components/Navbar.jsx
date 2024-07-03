import React from 'react'
import { Link } from 'react-router-dom';
import { GiBus } from "react-icons/gi";


function Navbar() {
  return (
    <div>
        <nav>
        <ul type="none" className='navLink'>
        <GiBus style={{height:"50px",width:"70px",paddingBottom:"20px",alignItems:"center"}} />          
            <Link to="/">
                <li>Bus Tickets</li>
            </Link>
            <Link to="/railways">
                <li>Train Tickets</li>
            </Link>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar
