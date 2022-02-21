import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
    return (
        <nav>
            <div className="Page-news">
                <Link to="/">New News</Link>
            </div>
            <div className="Sign-in">
                <Link to="/signin">SIGN-IN</Link>
            </div>
        </nav>
    )
}

export default Navbar