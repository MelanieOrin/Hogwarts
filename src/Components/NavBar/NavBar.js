import React from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
    <div className='navbar'>
        <Link to='/' className='navbar-link'>Home</Link>
        <Link to='/students' className='navbar-link'>Students</Link>
        <Link to='/dashboard' className='navbar-link'>Dashboard</Link>
    </div>   
    )
}