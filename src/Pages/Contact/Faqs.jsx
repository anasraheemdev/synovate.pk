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
      <div className="container py-5">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <span className="badge bg-danger bg-opacity-10 text-danger px-4 py-2 rounded-pill fs-6 mb-3">
              About Our Company
            </span>
            <h2 className="display-5 fw-bold mb-4">
              Building Tomorrow's Technology Today
            </h2>
            <p className="lead text-muted mb-5">
              With over 15 years of excellence in technology innovation, we've been at the forefront of digital transformation, helping businesses evolve and succeed in the digital age.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="row g-4 mb-5"> 
          {stats.map((stat, index) => (
            <div key={index} className="col-md-3">
              <div className="text-center p-4 rounded-4 shadow-sm hover:shadow-lg transition-all" >
                <div className="d-inline-flex align-items-center justify-content-center bg-danger bg-opacity-10 rounded-circle p-3 mb-3">
                  <div className="text-danger">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="h2 fw-bold text-danger mb-2">{stat.number}</h3>
                <p className="text-muted mb-0">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="row g-4 mb-5">
          {values.map((value, index) => (
            <div key={index} className="col-md-6">
              <div className="p-4 rounded-4 shadow-sm h-100">
                <div className="d-inline-flex align-items-center justify-content-center bg-danger bg-opacity-10 rounded-circle p-3 mb-3">
                  <div className="text-danger">
                    {value.icon}
                  </div>
                </div>
                <h3 className="h4 mb-3">{value.title}</h3>
                <p className="text-muted mb-0">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <span className="badge bg-danger bg-opacity-10 text-danger px-4 py-2 rounded-pill fs-6 mb-3">
              Common Questions
            </span>
            <h2 className="display-6 fw-bold mb-4">
              Frequently Asked Questions
            </h2>
            
            <div className="accordion">
              {faqs.map((faq, index) => (
                <div key={index} className="border-bottom">
                  <div
                    className="py-4 d-flex justify-content-between align-items-center cursor-pointer"
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <h3 className="h5 mb-0">{faq.question}</h3>
                    {openFaq === index ? <ChevronUp /> : <ChevronDown />}
                  </div>
                  <div className={`overflow-hidden transition-all ${openFaq === index ? 'mb-4' : ''}`}
                       style={{ maxHeight: openFaq === index ? '200px' : '0' }}>
                    <p className="text-muted mb-0">{faq.answer}</p>
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

export default CompanyInfoSection;