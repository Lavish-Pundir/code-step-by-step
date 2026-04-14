import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <ul className='navbar'>
                <li><NavLink className="nav-bar-link" to="/">Home</NavLink></li>      
                 <li><NavLink className="nav-bar-link" to="/about">About</NavLink></li>  
                 <li><NavLink className="nav-bar-link" to="/contact">Contact</NavLink></li>  
                 <li><NavLink className="nav-bar-link" to="/filter">Filter</NavLink></li>  
                 <li><NavLink className="nav-bar-link" to="/login">Login</NavLink></li>  


                 {/* <li><Link to="/user/anil">Anil</Link></li>  
                 <li><Link to="/user/peter">Peter</Link></li>   */}

                    {/* ye react component hai is mai component render hota hai website load nahi hoti */}

                {/* <li><a href="/">Home</a></li>
                <li><a href="about">About</a></li>    
                <li><a href="contact">Contact</a></li>   */}
                {/* ye ankir tag hai is mai pura web load hota hai html ki trha is leya react mai use nahi krtai */}
            </ul>
        </>
    )
}

export default NavBar
