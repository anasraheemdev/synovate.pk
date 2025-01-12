import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Building, Award, Trophy, Target, Briefcase } from 'lucide-react';

const CompanyInfoSection = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const stats = [
    { icon: <Users size={24} />, number: "10+", label: "Team Members" },
    { icon: <Building size={24} />, number: "3+", label: "Global Offices" },
    { icon: <Award size={24} />, number: "50+", label: "Awards Won" },
    { icon: <Trophy size={24} />, number: "150+", label: "Projects Completed" }
  ];

  const values = [
    {
      icon: <Target size={24} />,
      title: "Our Mission",
      description: "To deliver innovative technology solutions that empower businesses and enhance lives through digital transformation."
    },
    {
      icon: <Briefcase size={24} />,
      title: "Our Vision",
      description: "To be the global leader in creating transformative digital experiences that shape the future of technology."
    }
  ];

  const faqs = [
    {
      question: "What services does your company provide?",
      answer: "We offer a comprehensive range of technology solutions including software development, cloud services, AI implementation, digital transformation consulting, and cybersecurity solutions."
    },
    {
      question: "How do you ensure project quality?",
      answer: "Our quality assurance process includes rigorous testing, code reviews, continuous integration, and regular client feedback loops to ensure the highest standards of delivery."
    },
    {
      question: "What is your project development methodology?",
      answer: "We follow an agile development methodology with sprint-based delivery, ensuring flexibility, transparency, and continuous improvement throughout the project lifecycle."
    },
    {
      question: "How do you handle project communication?",
      answer: "We maintain clear communication channels through regular status updates, scheduled meetings, and dedicated project managers who serve as your primary point of contact."
    }
  ];

  return (
    <div className="bg-white">
      {/* Company Overview */}
      <div className="container py-4 py-md-5">
        <div className="row justify-content-center mb-4 mb-md-5">
          <div className="col-12 col-lg-8 text-center px-3">
            <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 rounded-pill mb-3">
              About Our Company
            </span>
            <h2 className="display-6 display-md-5 fw-bold mb-3 mb-md-4">
              Building Tomorrow's Technology Today
            </h2>
            <p className="lead text-muted mb-4 fs-6">
              With over 15 years of excellence in technology innovation, we've been at the forefront of digital transformation, helping businesses evolve and succeed in the digital age.
            </p>
          </div>
        </div>

        {/* Stats - 2 per row on mobile */}
        <div className="row row-cols-2 row-cols-md-4 g-3 g-md-4 mb-4 mb-md-5 px-2"> 
          {stats.map((stat, index) => (
            <div key={index} className="col">
              <div className="text-center p-3 p-md-4 rounded-4 shadow-sm h-100" 
                   style={{ transition: 'all 0.3s ease' }}>
                <div className="d-inline-flex align-items-center justify-content-center bg-danger bg-opacity-10 rounded-circle p-2 p-md-3 mb-2 mb-md-3">
                  <div className="text-danger">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="h3 h2-md fw-bold text-danger mb-1 mb-md-2">{stat.number}</h3>
                <p className="text-muted mb-0 small">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="row g-3 g-md-4 mb-4 mb-md-5 px-2">
          {values.map((value, index) => (
            <div key={index} className="col-12 col-md-6">
              <div className="p-3 p-md-4 rounded-4 shadow-sm h-100">
                <div className="d-inline-flex align-items-center justify-content-center bg-danger bg-opacity-10 rounded-circle p-2 p-md-3 mb-2 mb-md-3">
                  <div className="text-danger">
                    {value.icon}
                  </div>
                </div>
                <h3 className="h5 h4-md mb-2 mb-md-3">{value.title}</h3>
                <p className="text-muted mb-0 small">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 px-3">
            <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 rounded-pill mb-3">
              Common Questions
            </span>
            <h2 className="h3 h2-md fw-bold mb-3 mb-md-4">
              Frequently Asked Questions
            </h2>
            
            <div className="accordion">
              {faqs.map((faq, index) => (
                <div key={index} className="border-bottom">
                  <div
                    className="py-3 py-md-4 d-flex justify-content-between align-items-center"
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <h3 className="h6 h5-md mb-0 pe-2">{faq.question}</h3>
                    {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                  <div 
                    className="overflow-hidden transition-all"
                    style={{ 
                      maxHeight: openFaq === index ? '300px' : '0',
                      transition: 'max-height 0.3s ease-in-out'
                    }}
                  >
                    <p className="text-muted mb-3 small">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .display-6 {
            font-size: 1.75rem;
          }
          .lead {
            font-size: 1rem;
          }
        }
        .shadow-sm:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.1) !important;
        }
      `}</style>
    </div>
  );
};

export default CompanyInfoSection;