import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/wealth-health-logo.svg'
import '../styles/css/App.css'


export default function Header() {
  
  return (
    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className='logo'>
        <img src={Logo} className="main-nav-logo-image" alt="HRnet Logo" />
      </div>
    </Link>
  );
}

