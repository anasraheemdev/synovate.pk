import React, { useState } from 'react';
import { Code, Cloud, Globe, Shield, Database, Cpu } from 'lucide-react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      icon: <Code size={40} />,
      title: 'Custom Software Development',
      description: 'Build scalable custom software tailored to your business needs with cutting-edge technologies and best practices.',
      features: ['Web Applications', 'Mobile Solutions', 'API Integration', 'Legacy System Modernization']
    },
    {
      icon: <Cloud size={40} />,
      title: 'Cloud Solutions',
      description: 'Transform your business with secure, scalable, and reliable cloud infrastructure and migration services.',
      features: ['Cloud Migration', 'DevOps Solutions', 'Cloud Security', 'Infrastructure Management']
    },
    {
      icon: <Shield size={40} />,
      title: 'Cybersecurity Services',
      description: 'Protect your digital assets with comprehensive security solutions and continuous monitoring.',
      features: ['Security Audits', 'Threat Detection', 'Compliance Solutions', 'Security Training']
    },
    {
      icon: <Database size={40} />,
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with advanced analytics and machine learning solutions.',
      features: ['Big Data Solutions', 'Predictive Analytics', 'Data Visualization', 'Business Intelligence']
    },
    {
      icon: <Globe size={40} />,
      title: 'Digital Transformation',
      description: 'Accelerate your digital journey with innovative solutions that drive growth and efficiency.',
      features: ['Process Automation', 'Digital Strategy', 'Enterprise Solutions', 'Innovation Consulting']
    },
    {
      icon: <Cpu size={40} />,
      title: 'AI & Machine Learning',
      description: 'Leverage the power of AI to automate processes and gain competitive advantages.',
      features: ['ML Models', 'AI Integration', 'Natural Language Processing', 'Computer Vision']
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container py-5">
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
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
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div 
                className={`card h-100 border-0 shadow-sm rounded-4 overflow-hidden animate__animated ${
                  activeService === index ? 'animate__pulse' : 'animate__fadeIn'
                }`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transition: 'all 0.3s ease-in-out',
                  transform: activeService === index ? 'translateY(-10px)' : 'none'
                }}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                {/* Card Header with Gradient */}
                <div className="card-body p-5">
                  <div className="mb-4">
                    <div 
                      className={`d-inline-flex align-items-center justify-content-center rounded-circle p-3 mb-3 ${
                        activeService === index ? 'bg-danger text-white' : 'bg-danger bg-opacity-10 text-danger'
                      }`}
                      style={{ transition: 'all 0.3s ease-in-out' }}
                    >
                      {service.icon}
                    </div>
                    <h3 className="h4 mb-3">{service.title}</h3>
                    <p className="text-muted mb-4">{service.description}</p>
                  </div>

                  {/* Features List */}
                  <ul className="list-unstyled mb-0">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="mb-2 d-flex align-items-center">
                        <div className="bg-success bg-opacity-10 rounded-circle p-1 me-2">
                          <svg width="6" height="6" viewBox="0 0 6 6">
                            <circle cx="3" cy="3" r="3" fill="currentColor" className="text-success" />
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect Overlay */}
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

        {/* CTA Section */}
        <div className="row justify-content-center mt-5 pt-5">
          <div className="col-lg-7 text-center">
            <h4 className="mb-4">Ready to Transform Your Business?</h4>
            <button className="btn btn-danger btn-lg rounded-pill px-5 py-3 animate__animated animate__fadeIn">
              Schedule a Consultation
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ms-2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Add required CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .card {
          backface-visibility: hidden;
          -webkit-font-smoothing: subpixel-antialiased;
        }
        
        .animate__animated {
          animation-duration: 0.8s;
          animation-fill-mode: both;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;