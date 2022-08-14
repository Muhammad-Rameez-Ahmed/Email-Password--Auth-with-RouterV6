import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Navbar = () => {
    return (
        <>

            <nav>
                <div className="nav-wrapper blue">
                    <a href="#" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                        <li><Link to="/signin">Signin</Link></li>
                        

                    </ul>
                </div>
            </nav>

        </>

    )
}


export default Navbar