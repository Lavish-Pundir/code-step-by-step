import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>      
                 <li><Link to="about">About</Link></li>  
                 <li><Link to="contact">Contact</Link></li>  
                 <li><Link to="user/anil">Anil</Link></li>  
                 <li><Link to="user/peter">Peter</Link></li>  
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
