import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Users, Award, ArrowRight } from 'lucide-react';

const AboutUsHero = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="position-relative min-vh-100 overflow-hidden bg-black">
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
              opacity: 0.15,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 50,
            },
            opacity: {
              value: 0.3,
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
        }}
      />

      {/* Main Content - Added pt-5 mt-5 for navbar spacing */}
      <div className="position-relative min-vh-100 d-flex align-items-center pt-5 mt-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center">
              {/* About Badge */}
              <div className="mb-4">
                <span className="badge bg-danger bg-opacity-25 text-danger px-4 py-2 rounded-pill fs-6">
                  About Us
                </span>
              </div>

              {/* Main Title */}
              <h1 className="display-3 fw-bold text-white mb-4 lh-sm">
                Transforming Ideas Into
                <span className="d-block text-danger mt-2">Digital Reality</span>
              </h1>

              {/* Description */}
              <p className="lead text-white-50 mb-5 mx-auto" style={{ maxWidth: '700px' }}>
                We're a team of innovators dedicated to delivering cutting-edge solutions 
                that drive business success.
              </p>

              {/* Action Buttons */}
              <div className="d-flex justify-content-center gap-3 mb-5">
                <button className="btn btn-danger btn-lg rounded-pill px-4 py-3 d-flex align-items-center gap-2">
                  Our Story <ArrowRight size={20} />
                </button>
                <button className="btn btn-outline-danger btn-lg rounded-pill px-4 py-3">
                  Meet the Team
                </button>
              </div>

              {/* Quick Stats */}
              <div className="row g-4 justify-content-center mt-2">
                <div className="col-md-5">
                  <div className="bg-dark bg-opacity-50 rounded-4 p-4 border border-danger border-opacity-25">
                    <div className="d-inline-flex align-items-center justify-content-center bg-danger bg-opacity-10 rounded-circle p-3 mb-3">
                      <Users size={28} className="text-danger" />
                    </div>
                    <h3 className="text-white h1 mb-1">100+</h3>
                    <p className="text-white-50 mb-0">Expert Team Members</p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="bg-dark bg-opacity-50 rounded-4 p-4 border border-danger border-opacity-25">
                    <div className="d-inline-flex align-items-center justify-content-center bg-danger bg-opacity-10 rounded-circle p-3 mb-3">
                      <Award size={28} className="text-danger" />
                    </div>
                    <h3 className="text-white h1 mb-1">15+</h3>
                    <p className="text-white-50 mb-0">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;