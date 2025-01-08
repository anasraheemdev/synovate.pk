import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-5">
      <div className="container animate__animated animate__fadeIn">
        {/* Main Footer Content */}
        <div className="row g-4 pb-5">
          {/* Company Info */}
          <div className="col-lg-4 animate__animated animate__fadeInLeft">
            <h3 className="h2 mb-4">Synovate</h3>
            <p className="text-white-50 mb-4">
              Transforming ideas into powerful digital solutions. We craft innovative 
              software that drives business growth and user engagement.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="btn btn-outline-danger rounded-circle p-2 animate__animated animate__bounceIn">
                <Facebook size={20} />
              </a>
              <a href="#" className="btn btn-outline-danger rounded-circle p-2 animate__animated animate__bounceIn animate__delay-1s">
                <Twitter size={20} />
              </a>
              <a href="#" className="btn btn-outline-danger rounded-circle p-2 animate__animated animate__bounceIn animate__delay-2s">
                <Instagram size={20} />
              </a>
              <a href="#" className="btn btn-outline-danger rounded-circle p-2 animate__animated animate__bounceIn animate__delay-3s">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 animate__animated animate__fadeInUp">
            <h5 className="mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              {['About Us', 'Services', 'Projects', 'Blog', 'Careers'].map((link, index) => (
                <li key={index} className="mb-3">
                  <a 
                    href="#" 
                    className="text-white-50 text-decoration-none hover-text-danger animate__animated animate__fadeInRight"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-2 col-md-6 animate__animated animate__fadeInUp animate__delay-1s">
            <h5 className="mb-4">Services</h5>
            <ul className="list-unstyled">
              {['Web Development', 'Mobile Apps', 'Cloud Solutions', 'AI & ML', 'UI/UX Design'].map((service, index) => (
                <li key={index} className="mb-3">
                  <a 
                    href="#" 
                    className="text-white-50 text-decoration-none hover-text-danger animate__animated animate__fadeInRight"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 animate__animated animate__fadeInRight">
            <h5 className="mb-4">Contact Info</h5>
            <div className="d-flex align-items-center mb-3">
              <div className="bg-danger bg-opacity-10 rounded-circle p-2 me-3">
                <MapPin className="text-danger" size={20} />
              </div>
              <span className="text-white-50">Islamabad, Pakistan</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <div className="bg-danger bg-opacity-10 rounded-circle p-2 me-3">
                <Phone className="text-danger" size={20} />
              </div>
              <span className="text-white-50">+92 (334) 5546272</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <div className="bg-danger bg-opacity-10 rounded-circle p-2 me-3">
                <Mail className="text-danger" size={20} />
              </div>
              <span className="text-white-50">info@synovate.pk</span>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="row justify-content-center py-5 border-top border-danger border-opacity-25 animate__animated animate__fadeInUp">
          <div className="col-lg-6 text-center">
            <h4 className="mb-3">Subscribe to Our Newsletter</h4>
            <p className="text-white-50 mb-4">Stay updated with our latest news and updates</p>
            <form className="d-flex gap-2 justify-content-center">
              <input 
                type="email" 
                className="form-control bg-dark text-white border-danger"
                placeholder="Enter your email"
                style={{ maxWidth: '300px' }}
              />
              <button type="submit" className="btn btn-danger">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="row py-4 border-top border-danger border-opacity-25">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-white-50">
              © 2025 Synovate. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <button 
              onClick={scrollToTop}
              className="btn btn-outline-danger rounded-circle p-2 animate__animated animate__bounce animate__infinite"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Add required styles for animations */}
      <style jsx>{`
        .hover-text-danger {
          transition: color 0.3s ease;
        }
        .hover-text-danger:hover {
          color: #dc3545 !important;
        }
      `}</style>
    </footer>
  );
};

export default FooterSection;