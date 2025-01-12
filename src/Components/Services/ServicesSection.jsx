import React, { useState } from 'react';
import { Code, Smartphone, Palette, Megaphone, Boxes, Users } from 'lucide-react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      icon: <Code size={32} />,
      title: 'Web Development',
      description: 'From dynamic websites to robust e-commerce platforms, creating seamless, responsive, and secure websites that are visually stunning and functionally powerful.',
      features: ['Web Applications', 'Mobile Solutions', 'API Integration', 'Legacy System Modernization']
    },
    {
      icon: <Smartphone size={32} />,
      title: 'App Development',
      description: 'Build intuitive, high-performing mobile applications for iOS, Android, or cross-platform that offer flawless user experience and connect with customers on the go.',
      features: ['Cloud Migration', 'DevOps Solutions', 'Cloud Security', 'Infrastructure Management']
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description: 'Creating engaging, user-friendly interfaces that enhance user interaction and ensure your product stands out in the market.',
      features: ['Security Audits', 'Threat Detection', 'Compliance Solutions', 'Security Training']
    },
    {
      icon: <Megaphone size={32} />,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies, including SEO, social media marketing, and content creation, designed to boost your online presence.',
      features: ['Big Data Solutions', 'Predictive Analytics', 'Data Visualization', 'Business Intelligence']
    },
    {
      icon: <Boxes size={32} />,
      title: 'Virtual Reality',
      description: 'Developing immersive solutions using VR, AR, and MR for gaming, education, healthcare, real estate, and entertainment industries.',
      features: ['Process Automation', 'Digital Strategy', 'Enterprise Solutions', 'Innovation Consulting']
    },
    {
      icon: <Users size={32} />,
      title: 'HR and Recruitment',
      description: 'Specialized HR and Recruitment Services connecting businesses with top talent in VR/AR/MR, Unity development, web and mobile app development.',
      features: ['ML Models', 'AI Integration', 'Natural Language Processing', 'Computer Vision']
    }
  ];

  return (
    <section className="py-4 py-md-5 bg-light">
      <div className="container py-2 py-md-5">
        {/* Header Section */}
        <div className="row justify-content-center mb-4 mb-md-5">
          <div className="col-lg-7 col-md-9 text-center">
            <span className="badge bg-danger px-3 py-2 rounded-pill mb-3 animate__animated animate__fadeIn">
              Our Services
            </span>
            <h2 className="display-5 fw-bold mb-3 animate__animated animate__fadeIn">
              Transforming Ideas into Digital Reality
            </h2>
            <p className="lead text-muted animate__animated animate__fadeIn">
              Leverage our expertise in cutting-edge technologies to drive your business forward
              with innovative solutions tailored to your needs.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="row g-3 g-md-4">
          {services.map((service, index) => (
            <div key={index} className="col-6 col-lg-4">
              <div 
                className={`card h-100 border-0 shadow-sm rounded-4 overflow-hidden animate__animated ${
                  activeService === index ? 'animate__pulse' : 'animate__fadeIn'
                }`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transition: 'all 0.3s ease-in-out',
                  transform: activeService === index ? 'translateY(-5px)' : 'none'
                }}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="card-body p-3 p-md-4">
                  <div className="mb-3 mb-md-4">
                    <div 
                      className={`d-inline-flex align-items-center justify-content-center rounded-circle p-2 p-md-3 mb-3 ${
                        activeService === index ? 'bg-danger text-white' : 'bg-danger bg-opacity-10 text-danger'
                      }`}
                      style={{ transition: 'all 0.3s ease-in-out' }}
                    >
                      {service.icon}
                    </div>
                    <h3 className="h5 mb-2 mb-md-3">{service.title}</h3>
                    <p className="text-muted small mb-3 mb-md-4">{service.description}</p>
                  </div>

                  <ul className="list-unstyled mb-0 small">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="mb-2 d-flex align-items-center">
                        <div className="bg-success bg-opacity-10 rounded-circle p-1 me-2">
                          <svg width="4" height="4" viewBox="0 0 4 4">
                            <circle cx="2" cy="2" r="2" fill="currentColor" className="text-success" />
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div 
                  className="position-absolute bottom-0 start-0 w-100 h-1"
                  style={{
                    background: 'linear-gradient(90deg, #dc3545 0%, #fd7e14 100%)',
                    transition: 'height 0.3s ease-in-out',
                    height: activeService === index ? '4px' : '1px'
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="row justify-content-center mt-4 mt-md-5 pt-2 pt-md-5">
          <div className="col-lg-7 text-center">
            <h4 className="h5 mb-4">Ready to Transform Your Business?</h4>
            <button className="btn btn-danger rounded-pill px-4 py-2 py-md-3 animate__animated animate__fadeIn">
              Schedule a Consultation
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ms-2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767.98px) {
          .card {
            font-size: 0.875rem;
          }
          .card-body {
            padding: 1rem !important;
          }
          .display-5 {
            font-size: calc(1.2rem + 1.5vw);
          }
          .lead {
            font-size: 1rem;
          }
        }
        
        .animate__animated {
          animation-duration: 0.8s;
          animation-fill-mode: both;
        }

        .card {
          backface-visibility: hidden;
          -webkit-font-smoothing: subpixel-antialiased;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;