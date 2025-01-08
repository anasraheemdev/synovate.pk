import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

const ContactHero = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      details: [
        "+1 (555) 123-4567",
        "+1 (555) 765-4321"
      ]
    },
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      details: [
        "support@example.com",
        "info@example.com"
      ]
    },
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      details: [
        "123 Innovation Drive",
        "Silicon Valley, CA 94025"
      ]
    },
    {
      icon: <Clock size={24} />,
      title: "Working Hours",
      details: [
        "Mon - Fri: 9:00 - 18:00",
        "Sat: 10:00 - 14:00"
      ]
    }
  ];

  return (
    <div className="position-relative min-vh-100 overflow-hidden bg-black" style={{ marginTop: '-72px' }}>
      {/* Particles Background */}
      <Particles
        id="tsparticles"
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
              opacity: 0.15,
              width: 1,
            },
            move: {
              enable: true,
              direction: "none",
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
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

      {/* Main Content */}
      <div className="position-relative min-vh-100 d-flex align-items-center" style={{ paddingTop: '120px' }}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-5">
              {/* Contact Badge */}
              <div className="mb-4">
                <span className="badge bg-danger bg-opacity-25 text-danger px-4 py-2 rounded-pill fs-6">
                  Contact Us
                </span>
              </div>

              {/* Main Title */}
              <h1 className="display-3 fw-bold text-white mb-4">
                Get in Touch with
                <span className="d-block text-danger mt-2">Our Team</span>
              </h1>

              {/* Description */}
              <p className="lead text-white-50 mb-5">
                Have questions or need assistance? We're here to help! Reach out to our team through any of the channels below.
              </p>

              {/* CTA Button */}
              <button className="btn btn-danger btn-lg rounded-pill px-4 py-3 d-inline-flex align-items-center gap-2 mb-5">
                Schedule a Meeting <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="row g-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="bg-dark bg-opacity-50 rounded-4 p-4 h-100 border border-danger border-opacity-25 text-center hover:transform hover:scale-105 transition-transform duration-300">
                  <div className="d-inline-flex align-items-center justify-content-center bg-danger bg-opacity-10 rounded-circle p-3 mb-3">
                    <div className="text-danger">
                      {info.icon}
                    </div>
                  </div>
                  <h3 className="h5 text-white mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-white-50 mb-1">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;