import React from 'react';
import { Check, Code, Users, Target, Rocket } from 'lucide-react';

const AboutContent = () => {
  const features = [
    {
      title: "Technical Excellence",
      description: "Our team brings deep expertise across modern technologies and frameworks.",
      icon: <Code size={24} />
    },
    {
      title: "Dedicated Teams",
      description: "Committed professionals working together to deliver outstanding results.",
      icon: <Users size={24} />
    },
    {
      title: "Strategic Focus",
      description: "We align our solutions with your business objectives and goals.",
      icon: <Target size={24} />
    },
    {
      title: "Innovation First",
      description: "Constantly exploring new technologies to keep you ahead of the curve.",
      icon: <Rocket size={24} />
    }
  ];

  const milestones = [
    { year: "2008", event: "Company Founded" },
    { year: "2012", event: "International Expansion" },
    { year: "2015", event: "Cloud Division Launch" },
    { year: "2019", event: "AI Innovation Center" },
    { year: "2023", event: "Digital Transform Hub" }
  ];

  return (
    <div className="bg-light py-5">
      {/* Mission Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <span className="badge bg-danger px-3 py-2 rounded-pill mb-3">Our Mission</span>
            <h2 className="display-5 fw-bold mb-4">Empowering Businesses Through Technology</h2>
            <p className="lead mb-4">
              We're dedicated to transforming businesses with innovative technology solutions that drive growth and success.
            </p>
            <ul className="list-unstyled">
              {[
                "Custom Software Development",
                "Cloud Solutions & Migration",
                "Digital Transformation",
                "AI & Machine Learning"
              ].map((item, index) => (
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
      </div>
    </div>
  );
};

export default AboutContent;