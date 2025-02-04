import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Search, Globe, Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [searchActive, setSearchActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState('0px');
  const menuRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuRef.current) {
      const height = isMenuOpen ? menuRef.current.scrollHeight + 'px' : '0px';
      setMenuHeight(height);
    }
  }, [isMenuOpen]);

  const mainMenuItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Contact', path: '/contact' }
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? 'shadow-lg bg-white navbar-light' : 'navbar-dark bg-transparent'
      } transition-all duration-300`}>
        <div className="container-fluid px-4">
          <NavLink to="/" className="navbar-brand me-0 py-3">
            <span className={`fw-bold fs-4 ${!scrolled && 'text-white'}`}>
              <span className="text-danger">Syn</span>ovate
            </span>
          </NavLink>

          <button
            className="navbar-toggler border-0 px-0"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-controls="navbarMain"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? 
              <X className={scrolled ? 'text-dark' : 'text-white'} size={24} /> :
              <Menu className={scrolled ? 'text-dark' : 'text-white'} size={24} />
            }
          </button>

          <div 
            ref={menuRef}
            className="navbar-collapse" 
            id="navbarMain"
            style={{
              height: menuHeight,
              overflow: 'hidden',
              transition: 'height 0.3s ease-in-out'
            }}
          >
            <ul className="navbar-nav mx-auto align-items-lg-center">
              {mainMenuItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => `nav-link px-3 d-flex align-items-center ${
                      scrolled ? 'text-dark' : 'text-white'
                    } ${isActive ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>

            <ul className="navbar-nav align-items-lg-center">
              <li className="nav-item me-2">
                <button
                  className={`btn btn-link nav-link px-2 ${
                    scrolled ? 'text-dark' : 'text-white'
                  }`}
                  onClick={() => {
                    setSearchActive(true);
                    closeMenu();
                  }}
                >
                  <Search size={20} />
                </button>
              </li>
              <li className="nav-item me-2">
                <button
                  className={`btn btn-link nav-link px-2 ${
                    scrolled ? 'text-dark' : 'text-white'
                  }`}
                  onClick={() => setIsDark(!isDark)}
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </li>
              <li className="nav-item me-2">
                <button
                  className={`btn btn-link nav-link px-2 ${
                    scrolled ? 'text-dark' : 'text-white'
                  }`}
                >
                  <Globe size={20} />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {searchActive && (
        <div className="position-fixed top-0 start-0 w-100 h-100 bg-white animate__animated animate__fadeIn"
             style={{ zIndex: 1050 }}>
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-lg-8 mx-auto">
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control form-control-lg border-0 border-bottom rounded-0 shadow-none pb-3"
                    placeholder="Search for products, solutions, and resources..."
                    autoFocus
                  />
                  <button
                    className="btn btn-link position-absolute end-0 top-50 translate-middle-y text-danger"
                    onClick={() => setSearchActive(false)}
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 992px) {
          .navbar-collapse {
            height: auto !important;
            overflow: visible !important;
          }
        }
        
        @media (max-width: 991.98px) {
          .navbar-nav {
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
        }
        
        .hover-translate {
          transition: transform 0.2s ease-in-out;
        }
        .hover-translate:hover {
          transform: translateX(5px);
        }
        .dropdown-menu {
          animation-duration: 0.2s;
        }
      `}</style>
    </>
  );
};

export default Navbar;