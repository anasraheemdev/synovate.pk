import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Code, Database, Cloud, Cpu, Shield, ArrowRight } from 'lucide-react';

const ServicesHero = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const services = [
    {
      icon: <Code size={24} />,
      title: "Custom Software",
      description: "Tailored solutions for your unique business needs"
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services"
    },
    {
      icon: <Cpu size={24} />,
      title: "AI & ML",
      description: "Intelligent automation and data analytics"
    }
  ];

  return (
    <div className="position-relative min-vh-100 bg-black" style={{ marginTop: '-72px' }}>
      {/* Particles Background */}
      <Particles
              className="position-absolute w-100 h-100"
              init={particlesInit}
              options={{
                background: {
                  color: {
                    value: "transparent",
                  },
                },
                particles: {
                  color: {
                    value: "#dc3545",
                  },
                  links: {
                    color: "#dc3545",
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                  },
                  move: {
                    enable: true,
                    speed: 2,
                  },
                  number: {
                    density: {
                      enable: true,
                      area: 800,
                    },
                    value: 80,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  size: {
                    value: { min: 1, max: 3 },
                  },
                },
              }}
            />

      {/* Main Content */}
      <div className="position-relative min-vh-100 d-flex align-items-center" style={{ paddingTop: '140px' }}>
        <div className="container py-5">
          {/* Hero Content */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              {/* Services Badge */}
              <div className="mb-4">
                <span className="badge bg-danger bg-opacity-25 text-danger px-4 py-2 rounded-pill fs-6">
                  Our Services
                </span>
              </div>

              {/* Main Title */}
              <h1 className="display-3 fw-bold text-white mb-4">
                Innovative Solutions for
                <span className="d-block text-danger mt-2">Digital Success</span>
              </h1>

              {/* Description */}
              <p className="lead text-white-50 mb-5">
                We offer cutting-edge technology solutions to help businesses transform, 
                innovate, and stay ahead in the digital age.
              </p>

              {/* CTA Buttons */}
              <div className="d-flex justify-content-center gap-3 mb-5">
                <button className="btn btn-danger btn-lg rounded-pill px-4 py-3 d-inline-flex align-items-center gap-2">
                  Explore Services <ArrowRight size={20} />
                </button>
                <button className="btn btn-outline-light btn-lg rounded-pill px-4 py-3">
                  Get a Quote
                </button>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="bg-dark bg-opacity-50 rounded-4 p-4 h-100 border border-danger border-opacity-25 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="d-inline-flex align-items-center justify-content-center bg-danger bg-opacity-10 rounded-circle p-3 mb-3">
                    <div className="text-danger">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="h4 text-white mb-3">{service.title}</h3>
                  <p className="text-white-50 mb-0">{service.description}</p>
                  <div className="mt-4">
                    <a href="#" className="text-danger text-decoration-none d-inline-flex align-items-center gap-2">
                      Learn More <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;