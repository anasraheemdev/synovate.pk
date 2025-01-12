import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, Clock, MapPin, AlertCircle } from 'lucide-react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState({ type: '', message: '' });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add your form submission logic here
        setFormStatus({
            type: 'success',
            message: 'Thank you for your message. We will get back to you soon!'
        });
    };

    return (
        <div className="min-vh-100">
            {/* Hero Section */}
            <div className="bg-black py-4 py-md-5">
                <div className="container">
                    <div className="row justify-content-center text-center mb-4 mb-md-5">
                        <div className="col-12 col-lg-8">
                            <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 rounded-pill mb-3">
                                Get In Touch
                            </span>
                            <h1 className="display-5 fw-bold text-white mb-3">
                                We'd Love to Hear From You
                            </h1>
                            <p className="lead text-white-50">
                                Have a question, comment, or great idea? Drop us a message, and our team will get back to you as soon as possible.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-black py-4 py-md-5">
                <div className="container">
                    <div className="row g-4 g-lg-5">
                        {/* Contact Form */}
                        <div className="col-12 col-lg-7 order-2 order-lg-1">
                            <div className="bg-dark bg-opacity-50 rounded-4 p-4 p-md-5 border border-danger border-opacity-25 h-100">
                                <h2 className="text-white mb-4">Send Us a Message</h2>

                                {formStatus.message && (
                                    <div className={`alert ${formStatus.type === 'success' ? 'alert-success' : 'alert-danger'} d-flex align-items-center`}>
                                        <AlertCircle size={20} className="me-2" />
                                        {formStatus.message}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="row g-4">
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <label className="text-white-50 mb-2">Your Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="form-control border-0 bg-black bg-opacity-50 text-white py-3 px-4"
                                                    placeholder="John Doe"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <label className="text-white-50 mb-2">Your Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-control border-0 bg-black bg-opacity-50 text-white py-3 px-4"
                                                    placeholder="john@example.com"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label className="text-white-50 mb-2">Subject</label>
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    className="form-control border-0 bg-black bg-opacity-50 text-white py-3 px-4"
                                                    placeholder="How can we help?"
                                                    value={formData.subject}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label className="text-white-50 mb-2">Message</label>
                                                <textarea
                                                    name="message"
                                                    className="form-control border-0 bg-black bg-opacity-50 text-white py-3 px-4"
                                                    rows="6"
                                                    placeholder="Write your message here..."
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-danger btn-lg rounded-pill px-5 py-3 d-inline-flex align-items-center gap-2">
                                                Send Message <Send size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="col-12 col-lg-5 order-1 order-lg-2">
                            <div className="h-100 d-flex flex-column justify-content-between">
                                {/* Quick Contact Info */}
                                <div className="mb-4 mb-lg-5">
                                    <h2 className="text-white mb-4">Quick Contact</h2>
                                    <p className="text-white-50 mb-4">
                                        Need immediate assistance? Reach out to us through any of these channels, and we'll be happy to help you.
                                    </p>

                                    <div className="d-flex flex-column gap-4">
                                        {/* Location */}
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="bg-danger bg-opacity-10 rounded-circle p-3">
                                                <MapPin size={24} className="text-danger" />
                                            </div>
                                            <div>
                                                <h5 className="text-white mb-1">Visit Us</h5>
                                                <p className="text-white-50 mb-0">Synovate PVT LTD Islamabad, Pakistan</p>
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="bg-danger bg-opacity-10 rounded-circle p-3">
                                                <Mail size={24} className="text-danger" />
                                            </div>
                                            <div>
                                                <h5 className="text-white mb-1">Email Us</h5>
                                                <p className="text-white-50 mb-0">info@synovate.pk</p>
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
        </div>
    );
};

export default ContactUs;