import React from 'react';
import { Mail, Phone, MessageSquare, Send, Clock } from 'lucide-react';

const ContactFormSection = () => {
  return (
    <div className="bg-black py-5">
      <div className="container py-5">
        <div className="row g-5">
          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="bg-dark bg-opacity-50 rounded-4 p-4 p-md-5 border border-danger border-opacity-25">
              <h2 className="text-white mb-4">Send Us a Message</h2>
              <form>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="text-white-50 mb-2">Your Name</label>
                      <input 
                        type="text" 
                        className="form-control border-0 bg-black bg-opacity-50 text-white py-3 px-4" 
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="text-white-50 mb-2">Your Email</label>
                      <input 
                        type="email" 
                        className="form-control border-0 bg-black bg-opacity-50 text-white py-3 px-4" 
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label className="text-white-50 mb-2">Subject</label>
                      <input 
                        type="text" 
                        className="form-control border-0 bg-black bg-opacity-50 text-white py-3 px-4" 
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label className="text-white-50 mb-2">Message</label>
                      <textarea 
                        className="form-control border-0 bg-black bg-opacity-50 text-white py-3 px-4" 
                        rows="6" 
                        placeholder="Write your message here..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-danger btn-lg rounded-pill px-5 py-3 d-inline-flex align-items-center gap-2">
                      Send Message <Send size={20} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-lg-5">
            <div className="h-100 d-flex flex-column justify-content-between">
              {/* Quick Contact Info */}
              <div className="mb-5">
                <h2 className="text-white mb-4">Quick Contact</h2>
                <p className="text-white-50 mb-4">
                  Have a question or need assistance? Our team is here to help. Fill out the form or contact us directly through any of these channels.
                </p>
                
                <div className="d-flex flex-column gap-4">
                  {/* Email */}
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-danger bg-opacity-10 rounded-circle p-3">
                      <Mail size={24} className="text-danger" />
                    </div>
                    <div>
                      <h5 className="text-white mb-1">Email Us</h5>
                      <p className="text-white-50 mb-0">support@synovate.pk</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-danger bg-opacity-10 rounded-circle p-3">
                      <Phone size={24} className="text-danger" />
                    </div>
                    <div>
                      <h5 className="text-white mb-1">Call Us</h5>
                      <p className="text-white-50 mb-0">+92 (334) 5546272</p>
                    </div>
                  </div>

                  {/* Live Chat */}
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-danger bg-opacity-10 rounded-circle p-3">
                      <MessageSquare size={24} className="text-danger" />
                    </div>
                    <div>
                      <h5 className="text-white mb-1">Live Chat</h5>
                      <p className="text-white-50 mb-0">Chat with our support team</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-dark bg-opacity-50 rounded-4 p-4 border border-danger border-opacity-25">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="bg-danger bg-opacity-10 rounded-circle p-3">
                    <Clock size={24} className="text-danger" />
                  </div>
                  <h3 className="h5 text-white mb-0">Business Hours</h3>
                </div>
                <div className="d-flex justify-content-between text-white-50 mb-2">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="d-flex justify-content-between text-white-50 mb-2">
                  <span>Saturday:</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="d-flex justify-content-between text-white-50">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;