


import React, { useState, useEffect, useRef } from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import Logo from '/public/assets/logo.svg';

export function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleResize);

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { href: "/", label: "About Me" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#certification", label: "Certification" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact Me" }
  ];

  const handleNavItemClick = () => {
    setOpenNav(false);
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navItems.map((item) => (
        <li key={item.href} className="p-1 transition-colors hover:text-teal-600 font-medium text-right">
          <a href={item.href} className="flex items-center" onClick={handleNavItemClick}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="sticky top-0 z-20 bg-teal-700 text-black shadow-md" ref={navRef}>
      <div className="container mx-auto px-1 py-3">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="h-16 w-auto text-white-200" />
          </a>
          <div className="hidden lg:block">{navList}</div>
          <div className="lg:hidden">
            <button
              onClick={() => {
                setOpenNav(!openNav);
                setIsHeartFilled(!isHeartFilled);
              }}
              className="p-2 focus:outline-none"
            >
              <i className={`fas fa-heart text-2xl ${isHeartFilled ? 'text-red-500' : 'text-white'}`}></i>
            </button>
          </div>
        </div>
      </div>
      {openNav && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navList}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;