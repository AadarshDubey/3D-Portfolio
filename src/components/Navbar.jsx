import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close, github, linkedin } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex item-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Aadarsh Dubey &nbsp; <span className="sm:block hidden">| Web Developer</span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-6">
          <div className="flex gap-5">
            <a href="https://github.com/AadarshDubey" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="github" className="w-8 h-8 object-contain cursor-pointer hover:opacity-80 transition-opacity" />
            </a>
            <a href="https://www.linkedin.com/in/aadarsh-dubey-551680164/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="linkedin" className="w-7 h-8 object-contain cursor-pointer hover:opacity-80 transition-opacity" />
            </a>
          </div>
          <ul className="list-none flex flex-row gap-8">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Icons */}
        <div className="sm:hidden flex items-center gap-3">
          <div className="flex gap-3">
            <a href="https://github.com/AadarshDubey" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="github" className="w-6 h-6 object-contain cursor-pointer hover:opacity-80 transition-opacity" />
            </a>
            <a href="https://www.linkedin.com/in/aadarsh-dubey-551680164/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="linkedin" className="w-5 h-6 object-contain cursor-pointer hover:opacity-80 transition-opacity" />
            </a>
          </div>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>
        
        <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}> 
          <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;