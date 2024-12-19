import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header1.css'; 

export default function Header1({ ...props }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/StudentLoginPage'); // Navigates to the login page
  };

  return (
    <header {...props} className={`header-container ${props.className}`}>
      {/* Left side: Logo */}
      <div className="logo-container">
        <img src="/images/0.jpg" alt="Logo" className="logo" />
      </div>

      {/* Right side: Navigation */}
      <div className="nav-container">
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Teacher" className="nav-link">
                Teacher
              </Link>
            </li>
            <li>
              <Link to="/TimeTable" className="nav-link">
                Time Table
              </Link>
            </li>
            <li>
              <Link to="/Blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/Library" className="nav-link">
                Library
              </Link>
            </li>
            <li>
              <Link to="/MiniVideos" className="nav-link">
                Mini Videos
              </Link>
            </li>
            <li>
              <Link to="/ContactUs" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <button className="sign-in-button" onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </header>
  );
}
