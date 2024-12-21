import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      id: 1,
      icon: <Mail size={24} />,
      title: 'Email Us',
      content: 'info@company.com'
    },
    {
      id: 2,
      icon: <Phone size={24} />,
      title: 'Call Us',
      content: '+1 (555) 123-4567'
    },
    {
      id: 3,
      icon: <MapPin size={24} />,
      title: 'Visit Us',
      content: '123 Tech Street, Silicon Valley, CA'
    },
    {
      id: 4,
      icon: <Clock size={24} />,
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="bg-dark py-5">
      <div className="container py-5">
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <span className="badge bg-danger px-3 py-2 rounded-pill mb-3">
              Contact Us
            </span>
            <h2 className="display-5 fw-bold mb-3 text-white">
              Let's Build Your Next Big Thing
            </h2>
            <p className="lead text-white-50">
              Ready to transform your ideas into reality? Our team of experts is here to help
              you achieve your digital goals.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {/* Contact Information */}
          <div className="col-lg-4">
            <div className="card h-100 bg-dark border-danger border-opacity-25 shadow">
              <div className="card-body p-4">
                <h4 className="text-white mb-4">Get in Touch</h4>
                
                {contactInfo.map((info) => (
                  <div key={info.id} className="d-flex align-items-center mb-4">
                    <div className="bg-danger bg-opacity-10 rounded-circle p-3 me-3">
                      <div className="text-danger">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-1 text-white">{info.title}</h6>
                      <p className="text-white-50 mb-0">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <div className="card bg-dark border-danger border-opacity-25 shadow">
              <div className="card-body p-4">
                <h4 className="text-white mb-4">Send Us a Message</h4>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control bg-dark text-white border-danger"
                          id="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                        <label className="text-white-50">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control bg-dark text-white border-danger"
                          id="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                        <label className="text-white-50">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control bg-dark text-white border-danger"
                          id="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        />
                        <label className="text-white-50">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <textarea
                          className="form-control bg-dark text-white border-danger"
                          id="message"
                          placeholder="Your Message"
                          style={{ height: '150px' }}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                        ></textarea>
                        <label className="text-white-50">Your Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button 
                        type="submit" 
                        className="btn btn-danger btn-lg rounded-pill px-5 py-3"
                      >
                        Send Message
                        <Send className="ms-2" size={20} />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-7 text-center">
            <h4 className="text-white mb-4">Ready to Start Your Project?</h4>
            <p className="text-white-50 mb-4">
              Get in touch with us today and let's make something amazing together.
            </p>
            <button className="btn btn-outline-danger btn-lg rounded-pill px-5 py-3">
              Schedule a Call
              <Phone className="ms-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;