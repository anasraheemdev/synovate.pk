import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase"; // Make sure this path matches your project structure

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const contactInfo = [
    {
      id: 1,
      icon: <Mail size={24} />,
      title: 'Email Us',
      content: 'info@synovate.pk'
    },
    {
      id: 2,
      icon: <Phone size={24} />,
      title: 'Call Us',
      content: '+92 (334) 5546272'
    },
    {
      id: 3,
      icon: <MapPin size={24} />,
      title: 'Visit Us',
      content: 'Islamabad, Pakistan'
    },
    {
      id: 4,
      icon: <Clock size={24} />,
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 5:00 PM'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("Please fill in all fields");
      return;
    }
  
    setIsSubmitting(true);
    setError(null);
  
    try {
      const submissionData = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        createdAt: new Date().toISOString(), // Use ISO string instead of serverTimestamp
        status: 'unread'
      };
  
      // Log the attempt
      console.log("Attempting to send message:", submissionData);
  
      // Send to Firebase
      const docRef = await addDoc(collection(db, "contact_messages"), submissionData);
      
      console.log("Message sent successfully with ID:", docRef.id);
  
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
  
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
  
    } catch (err) {
      console.error("Detailed error:", {
        message: err.message,
        code: err.code,
        fullError: err
      });
      setError(`Failed to send message: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    // Clear error when user starts typing
    if (error) setError(null);
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
                
                {isSubmitted && (
                  <div className="alert alert-success d-flex align-items-center mb-4" role="alert">
                    <div>Message sent successfully! We'll get back to you soon.</div>
                  </div>
                )}
                
                {error && (
                  <div className="alert alert-danger d-flex align-items-center mb-4" role="alert">
                    <div>{error}</div>
                  </div>
                )}

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
                          onChange={handleInputChange}
                          required
                        />
                        <label htmlFor="name" className="text-white-50">Your Name</label>
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
                          onChange={handleInputChange}
                          required
                        />
                        <label htmlFor="email" className="text-white-50">Your Email</label>
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
                          onChange={handleInputChange}
                          required
                        />
                        <label htmlFor="subject" className="text-white-50">Subject</label>
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
                          onChange={handleInputChange}
                          required
                        ></textarea>
                        <label htmlFor="message" className="text-white-50">Your Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button 
                        type="submit" 
                        className="btn btn-danger btn-lg rounded-pill px-5 py-3"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
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