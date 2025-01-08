import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { 
  BookOpenCheck, 
  Globe, 
  Code2, 
  Workflow, 
  Terminal, 
  Glasses, 
  Armchair, 
  Smartphone, 
  Database, 
  Figma,
  ArrowRight 
} from 'lucide-react';

const MoreServices = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const additionalServices = [
    {
      icon: <Globe size={24} />,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies"
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android"
    },
    {
      icon: <Code2 size={24} />,
      title: "API Integration",
      description: "Seamless integration services to connect your systems and streamline operations"
    },
    {
      icon: <BookOpenCheck size={24} />,
      title: "Digital Marketing",
      description: "Strategic digital marketing solutions to grow your online presence and drive conversions"
    },
    {
      icon: <Figma size={24} />,
      title: "UI/UX Design",
      description: "Best UI/UX Designs for your web and mobile applications to enhance user experience" 
    },
    {
      icon: <Glasses size={24} />,
      title: "VR & AR Development",
      description: "Immersive virtual and augmented reality experiences for your business"
    },
    {
      icon: <Terminal size={24} />,
      title: "Legacy Modernization",
      description: "Transform legacy systems into modern, efficient applications"
    },
    {
      icon: <Armchair size={24} />,
      title: "HR & Recruitment",
      description: "End-to-end HR and recruitment solutions to streamline your hiring process"
    },
    {
      icon: <Database size={24} />,
      title: "Database Solutions",
      description: "Optimized database design and management services"
    }
  ];

  return (
    <div className="position-relative bg-white py-5">
      <Particles
        id="moreServicesParticles"
        className="position-absolute w-100 h-100"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#dc3545",
            },
            links: {
              color: "#dc3545",
              distance: 150,
              enable: true,
              opacity: 0.05,
              width: 1,
            },
            move: {
              enable: true,
              direction: "none",
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: 0.1,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }}
      />

      <div className="container position-relative">
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <div className="mb-4">
              <span className="badge bg-danger bg-opacity-10 text-danger px-4 py-2 rounded-pill fs-6">
                Comprehensive Solutions
              </span>
            </div>
            <h2 className="display-5 fw-bold text-dark mb-4">
              Complete Range of
              <span className="d-block text-danger mt-2">Technology Services</span>
            </h2>
            <p className="lead text-muted mb-0">
              From development to security, we provide end-to-end solutions to drive your digital transformation journey
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {additionalServices.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="bg-light rounded-4 p-4 h-100 border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="d-inline-flex align-items-center justify-content-center bg-danger bg-opacity-10 rounded-circle p-3 mb-3">
                  <div className="text-danger">
                    {service.icon}
                  </div>
                </div>
                <h3 className="h5 fw-bold mb-3">{service.title}</h3>
                <p className="text-muted mb-0">{service.description}</p>
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
  );
};

export default MoreServices;