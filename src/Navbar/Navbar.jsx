import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Globe, Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainMenuItems = [
    {
      title: 'Products',
      megamenu: {
        featured: {
          title: 'Featured Products',
          items: [
            { name: 'Enterprise Suite', description: 'Complete business solution', icon: '🚀' },
            { name: 'Cloud Platform', description: 'Scalable infrastructure', icon: '☁️' }
          ]
        },
        columns: [
          {
            title: 'Development Tools',
            items: ['Cloud IDE', 'Version Control', 'CI/CD Pipeline', 'Testing Suite']
          },
          {
            title: 'Business Solutions',
            items: ['Analytics Platform', 'Security Suite', 'Team Collaboration', 'API Management']
          },
          {
            title: 'Enterprise Tools',
            items: ['Data Processing', 'ML Operations', 'IoT Platform', 'Blockchain Solutions']
          }
        ]
      }
    },
    {
      title: 'Solutions',
      submenu: [
        { title: 'For Startups', description: 'Scale your business fast' },
        { title: 'Enterprise', description: 'Large-scale solutions' },
        { title: 'Government', description: 'Public sector tools' },
        { title: 'Healthcare', description: 'HIPAA-compliant systems' }
      ]
    },
    {
      title: 'Resources',
      submenu: [
        { title: 'Documentation', badge: 'Updated' },
        { title: 'API Reference', badge: 'New' },
        { title: 'Community Forums' },
        { title: 'Training & Certification' }
      ]
    },
    {
      title: 'Company',
      submenu: [
        { title: 'About Us' },
        { title: 'Careers', badge: 'We\'re Hiring' },
        { title: 'Press Room' },
        { title: 'Contact' }
      ]
    }
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? 'shadow-lg bg-white navbar-light' : 'navbar-dark bg-transparent'
      } transition-all duration-300`}>
        <div className="container-fluid px-4">
          {/* Logo */}
          <a className="navbar-brand me-0 py-3" href="#">
            <span className={`fw-bold fs-4 ${
              !scrolled && 'text-white'
            }`}>
              <span className="text-danger">Syn</span>ovate
            </span>
          </a>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler border-0 px-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
            aria-controls="navbarMain"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Menu className={scrolled ? 'text-dark' : 'text-white'} size={24} />
          </button>

          {/* Main Navigation */}
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav mx-auto align-items-lg-center">
              {mainMenuItems.map((item, index) => (
                <li key={index} className={`nav-item ${item.megamenu ? 'position-static' : 'dropdown'}`}>
                  <a
                    className={`nav-link px-3 d-flex align-items-center ${
                      scrolled ? 'text-dark' : 'text-white'
                    }`}
                    href="#"
                    data-bs-toggle={item.megamenu ? 'mega-menu' : 'dropdown'}
                  >
                    {item.title}
                    <ChevronDown size={14} className="ms-1 opacity-75" />
                  </a>

                  {item.megamenu ? (
                    <div className="dropdown-menu mega-menu w-100 border-0 rounded-0 mt-0 p-0 animate__animated animate__fadeIn">
                      <div className="container-fluid">
                        <div className="row g-4 p-4">
                          {/* Featured Section */}
                          <div className="col-lg-3">
                            <h6 className="text-danger fw-bold mb-3">
                              {item.megamenu.featured.title}
                            </h6>
                            {item.megamenu.featured.items.map((featured, idx) => (
                              <a
                                key={idx}
                                href="#"
                                className="d-block p-3 rounded-3 mb-2 text-decoration-none border bg-light hover-lift"
                              >
                                <span className="fs-4 mb-2 d-block">{featured.icon}</span>
                                <h6 className="mb-1">{featured.name}</h6>
                                <small className="text-muted">{featured.description}</small>
                              </a>
                            ))}
                          </div>

                          {/* Menu Columns */}
                          {item.megamenu.columns.map((column, idx) => (
                            <div key={idx} className="col-lg-3">
                              <h6 className="text-danger fw-bold mb-3">{column.title}</h6>
                              <ul className="list-unstyled mb-0">
                                {column.items.map((subItem, subIdx) => (
                                  <li key={subIdx}>
                                    <a
                                      href="#"
                                      className="dropdown-item py-2 ps-0 hover-translate"
                                    >
                                      {subItem}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <ul className="dropdown-menu animate__animated animate__fadeIn">
                      {item.submenu.map((subItem, subIdx) => (
                        <li key={subIdx}>
                          <a className="dropdown-item py-2" href="#">
                            <div className="d-flex align-items-center">
                              <div>
                                {subItem.title}
                                {subItem.description && (
                                  <small className="d-block text-muted">
                                    {subItem.description}
                                  </small>
                                )}
                              </div>
                              {subItem.badge && (
                                <span className="badge bg-danger ms-2">{subItem.badge}</span>
                              )}
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Right Menu */}
            <ul className="navbar-nav align-items-lg-center">
              <li className="nav-item me-2">
                <button
                  className={`btn btn-link nav-link px-2 ${
                    scrolled ? 'text-dark' : 'text-white'
                  }`}
                  onClick={() => setSearchActive(true)}
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

      {/* Search Overlay */}
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
        .hover-lift {
          transition: transform 0.2s ease-in-out;
        }
        .hover-lift:hover {
          transform: translateY(-3px);
        }
        .hover-translate {
          transition: transform 0.2s ease-in-out;
        }
        .hover-translate:hover {
          transform: translateX(5px);
        }
        .mega-menu {
          animation-duration: 0.2s;
        }
        .dropdown-menu {
          animation-duration: 0.2s;
        }
      `}</style>
    </>
  );
};

export default Navbar;