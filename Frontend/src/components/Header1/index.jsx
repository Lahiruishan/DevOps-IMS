import React from "react";
import { Button, Heading1 } from "..";
import { useNavigate } from 'react-router-dom'; 

export default function Header1({ ...props }) {
  const navigate = useNavigate();

  const handleLogin = () => {
      navigate('/StudentLoginPage'); 
  };

  return (
    <header
      {...props}
      className={`${props.className} flex justify-between items-center px-4 py-[18px] bg-indigo-200`}
      style={{ perspective: '1000px', fontFamily: "'Roboto', sans-serif" }} // Font and perspective
    >
      {/* Left side: Logo with 3D hover effect */}
      <div className="flex items-center">
        <img
          src="/images/0.jpg"
          alt="Logo"
          className="w-36 h-28 rounded transition-transform duration-500 ease-out shadow-lg hover:scale-110 hover:rotate-x-6 hover:rotate-y-6"
          style={{ transition: 'transform 0.5s, box-shadow 0.5s' }} // Smooth transitions for logo
        />
      </div>

      {/* Right side: Navigation links */}
      <div className="flex items-center">
        <nav>
          <ul className="flex flex-wrap gap-8">
            <li>
              <a href="#" className="group">
                <Heading1 size="xl" as="h5" className="transition-transform duration-500 ease-out group-hover:rotate-x-6 group-hover:rotate-y-6" style={{ color: 'white' }}>
                  Home
                </Heading1>
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer group">
                <Heading1 size="xl" as="h5" className="transition-transform duration-500 ease-out group-hover:rotate-x-6 group-hover:rotate-y-6" style={{ color: 'white' }}>
                  Teachers
                </Heading1>
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer group">
                <Heading1 size="xl" as="h5" className="transition-transform duration-500 ease-out group-hover:rotate-x-6 group-hover:rotate-y-6" style={{ color: 'white' }}>
                  Time Table
                </Heading1>
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer group">
                <Heading1 size="xl" as="h5" className="transition-transform duration-500 ease-out group-hover:rotate-x-6 group-hover:rotate-y-6" style={{ color: 'white' }}>
                  Blog
                </Heading1>
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer group">
                <Heading1 size="xl" as="h5" className="transition-transform duration-500 ease-out group-hover:rotate-x-6 group-hover:rotate-y-6" style={{ color: 'white' }}>
                  Library
                </Heading1>
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer group">
                <Heading1 size="xl" as="h5" className="transition-transform duration-500 ease-out group-hover:rotate-x-6 group-hover:rotate-y-6" style={{ color: 'white' }}>
                  Mini Videos
                </Heading1>
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer group">
                <Heading1 size="xl" as="h5" className="transition-transform duration-500 ease-out group-hover:rotate-x-6 group-hover:rotate-y-6" style={{ color: 'white' }}>
                  Contact Us
                </Heading1>
              </a>
            </li>
          </ul>
        </nav>
        {/* Button with floating effect */}
        <Button
          shape="round"
          className="ml-5 min-w-[96px] font-bold md:ml-0 hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-out"
          onClick={handleLogin}
        >
          Sign In
        </Button>
      </div>
    </header>
  );
}
