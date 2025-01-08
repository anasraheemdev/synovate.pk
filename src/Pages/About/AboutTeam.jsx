import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const OurProfessionals = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const professionals = [
    {
      name: "Ali Usman",
      role: "Chief Executive Officer",
      image: "https://synovate.pk/img/butt%20bhi.png",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "mailto:aliusman@synovate.pk"
      }
    },
    {
      name: "Anas Raheem",
      role: "Lead Software Engineer",
      image: "https://synovate.pk/img/anas%20bhi.png",
      socials: {
        linkedin: "#",
        github: "#",
        email: "anasraheem@synovate.pk"
      }
    },
    {
      name: "Ibrahim Khan",
      role: "AI Research Director",
      image: "https://www.shutterstock.com/image-photo/headshot-portrait-happy-millennial-man-600nw-1548802709.jpg",
      socials: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:emma@example.com"
      }
    }
  ];

  return (
    <div className="position-relative min-vh-100 bg-black py-5">

      <div className="container position-relative z-10 py-5">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="badge bg-danger bg-opacity-25 text-danger px-4 py-2 rounded-pill fs-6 mb-3">
            Our Team
          </span>
          <h2 className="display-4 fw-bold text-white mb-4">
            Meet Our <span className="text-danger">Professionals</span>
          </h2>
          <p className="lead text-white-50 mx-auto" style={{ maxWidth: '700px' }}>
            Driven by innovation and powered by expertise, our team of professionals brings diverse skills and experience to deliver exceptional results.
          </p>
        </div>

        {/* Team Grid */}
        <div className="row g-4 justify-content-center">
          {professionals.map((professional, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="bg-dark bg-opacity-50 rounded-4 p-4 border border-danger border-opacity-25 text-center hover:shadow-lg transition-all duration-300">
                {/* Profile Image */}
                <div className="position-relative mb-4">
                  <img
                    src={professional.image}
                    alt={professional.name}
                    className="rounded-circle mx-auto"
                    style={{ width: '160px', height: '160px', objectFit: 'cover' }}
                  />
                  <div className="position-absolute w-full h-full top-0 start-0 bg-danger bg-opacity-10 rounded-circle" />
                </div>

                {/* Profile Info */}
                <h3 className="h4 text-white mb-2">{professional.name}</h3>
                <p className="text-danger mb-4">{professional.role}</p>

                {/* Social Links */}
                <div className="d-flex justify-content-center gap-3">
                  {professional.socials.linkedin && (
                    <a href={professional.socials.linkedin} className="text-white-50 hover:text-danger transition-colors">
                      <Linkedin size={20} />
                    </a>
                  )}
                  {professional.socials.github && (
                    <a href={professional.socials.github} className="text-white-50 hover:text-danger transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                  {professional.socials.twitter && (
                    <a href={professional.socials.twitter} className="text-white-50 hover:text-danger transition-colors">
                      <Twitter size={20} />
                    </a>
                  )}
                  {professional.socials.email && (
                    <a href={professional.socials.email} className="text-white-50 hover:text-danger transition-colors">
                      <Mail size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProfessionals;