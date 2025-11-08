import React, { useEffect, useRef, useState } from 'react';
import { navbar_assets } from '../assets/navbar/navbar_assets.js';

const NavbarSection = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(16rem)';
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 select-none ${
          isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm' : ''
        }`}
      >
        <a href="#home" className="cursor-pointer select-none">
          <img
            src={navbar_assets.profile_logo}
            alt="Profile Logo"
            className="w-28 mr-14 pointer-events-auto"
            draggable="false"
          />
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? '' : 'bg-white shadow-sm bg-opacity-50 border border-gray-500'
          }`}
        >
          {['home', 'about', 'tech', 'project'].map((item, i) => (
            <li key={i} className="cursor-pointer select-none">
              <a href={`#${item}`} className="cursor-pointer select-none">
                {item === 'home'
                  ? 'Home'
                  : item === 'about'
                  ? 'About Me'
                  : item === 'tech'
                  ? 'Tech Stack'
                  : 'My Projects'}
              </a>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 cursor-pointer select-none"
          >
            Contact Me
            <img src={navbar_assets.upward_arrow} alt="Upward Arrow" className="w-3 pointer-events-none" />
          </a>

          {!isMenuOpen && (
            <button
              className="block md:hidden ml-3 cursor-pointer select-none"
              onClick={openMenu}
            >
              <img src={navbar_assets.menu_open} alt="Menu Open" className="w-6 pointer-events-none" />
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-8 px-10 fixed -right-64 top-2 w-48 z-50 bg-gray-100 transition duration-500 select-none border rounded-xl"
        >
          <div className="absolute right-6 top-6 cursor-pointer" onClick={closeMenu}>
            <img src={navbar_assets.menu_close} alt="Menu Close" className="w-5 pointer-events-none" />
          </div>

          {['home', 'about', 'tech', 'project', 'contact'].map((item, i) => (
            <li key={i} className="cursor-pointer">
              <a
                href={`#${item}`}
                className="cursor-pointer select-none"
                onClick={closeMenu}
              >
                {item === 'home'
                  ? 'Home'
                  : item === 'about'
                  ? 'About Me'
                  : item === 'tech'
                  ? 'Tech Stack'
                  : item === 'project'
                  ? 'My Projects'
                  : 'Contact Me'}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavbarSection;
