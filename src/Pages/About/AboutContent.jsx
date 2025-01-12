import React from 'react';
import { Check, Code, Users, Rocket, Palette, Globe, Smartphone, Glasses } from 'lucide-react';

const AboutContent = () => {
  const features = [
    {
      title: "Web Development",
      description: "Creating seamless, responsive, and secure websites that are visually stunning and functionally powerful.",
      icon: <Globe size={24} />
    },
    {
      title: "App Development",
      description: "Building intuitive mobile applications for iOS, Android, and cross-platform that deliver flawless user experiences.",
      icon: <Smartphone size={24} />
    },
    {
      title: "UI/UX Design",
      description: "Crafting engaging, user-friendly interfaces that enhance interaction and ensure market distinction.",
      icon: <Palette size={24} />
    },
    {
      title: "Virtual Reality",
      description: "Developing immersive VR, AR, and MR solutions that redefine experiences across multiple industries.",
      icon: <Glasses size={24} />
    }
  ];

  const services = [
    "Web Development",
    "App Development",
    "Digital Marketing",
    "Virtual Reality Solutions"
  ];

  return (
    <div className="bg-light py-5">
      {/* Mission Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <span className="badge bg-danger px-3 py-2 rounded-pill mb-3">Our Mission</span>
            <h2 className="display-5 fw-bold mb-4">Transforming Businesses Through Innovation</h2>
            <p className="lead mb-4">
              At Synovate Technologies, we are committed to delivering exceptional IT solutions that transform
              businesses and empower innovation. Founded by Muhammad Ali Usman, we specialize in providing innovative,
              reliable, and cutting-edge technology solutions that drive growth and efficiency for our clients.
            </p>
            <ul className="list-unstyled">
              {services.map((item, index) => (
                <li key={index} className="d-flex align-items-center mb-3">
                  <Check className="text-danger me-2" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="row g-4">
              {features.map((feature, index) => (
                <div key={index} className="col-md-6">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <div className="d-inline-flex align-items-center justify-content-center bg-danger bg-opacity-10 rounded-circle p-3 mb-3">
                        <div className="text-danger">
                          {feature.icon}
                        </div>
                      </div>
                      <h3 className="h5 mb-3">{feature.title}</h3>
                      <p className="text-muted mb-0">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CEO Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h3 className="h4 mb-3">Meet Our CEO</h3>
                <p className="mb-0">
                  Muhammad Ali Usman, the visionary founder and CEO of Synovate Technologies, is passionate about
                  leveraging technology to solve real-world problems. With a strong background in software
                  development and entrepreneurship, he has built Synovate Technologies into a trusted name in the IT
                  industry. Under his leadership, Synovate Technologies is not just a service provider but a partner
                  that empowers businesses with creative solutions and actionable results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;