import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='main-div'>

        <div className='logo'>

        </div>
    
        <div className='lists'>
            <ul >

                <li><a href='#'>Home</a></li>
                <li><a href='#'>Contacts</a></li>
                <li><a href='#'>Services</a></li>
              <Link to={"login"} style={{textDecoration:"none"}}>
              <li><a href='#'>Account</a></li>
              </Link>
             

            </ul>
        </div>
    </div>
  )
}
