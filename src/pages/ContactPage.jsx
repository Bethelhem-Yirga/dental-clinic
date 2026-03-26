// pages/ContactPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    preferredTime: 'morning'
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error for this field
    if (formErrors[e.target.name]) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: null
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email',
        preferredTime: 'morning'
      });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setFormErrors(errors);
    }
  };

  const faqs = [
    {
      question: "What insurance do you accept?",
      answer: "We accept most major dental insurance plans including Delta Dental, Cigna, MetLife, and Aetna. Contact us to verify your coverage."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes! We offer flexible payment plans through CareCredit and in-house financing options."
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book online through our patient portal, call us, or use the contact form above."
    },
    {
      question: "What are your COVID-19 safety protocols?",
      answer: "We follow all CDC guidelines including enhanced sterilization, air purification, and screening procedures."
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-teal-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in-up">Contact Us</h1>
          <p className="text-2xl text-blue-100 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            We're here to answer any questions you may have
          </p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="container-custom -mt-10 relative z-20">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:-translate-y-2 transition">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📞</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Call Us</h3>
            <p className="text-gray-600 mb-3">Emergency? Call our 24/7 line</p>
            <a href="tel:+15551234567" className="text-blue-600 font-bold text-xl">
              (555) 123-4567
            </a>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:-translate-y-2 transition">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">✉️</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Email Us</h3>
            <p className="text-gray-600 mb-3">We reply within 24 hours</p>
            <a href="mailto:info@mercy.com" className="text-blue-600 font-bold">
              info@mercy.com
            </a>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:-translate-y-2 transition">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📍</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-3">123 Dental Street, Suite 100</p>
            <p className="text-blue-600 font-bold">City, ST 12345</p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="container-custom py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-2 gradient-text">Send us a Message</h2>
            <p className="text-gray-600 mb-8">We'll get back to you within 24 hours</p>
            
            {submitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl mb-6 flex items-center">
                <span className="text-2xl mr-3">✅</span>
                <div>
                  <strong>Thank you!</strong> Your message has been sent successfully.
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 transition ${
                      formErrors.name ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="John Doe"
                  />
                  {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 transition ${
                      formErrors.email ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="john@example.com"
                  />
                  {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                    placeholder="General Inquiry"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Preferred Contact</label>
                  <select
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="text">Text Message</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Best Time</label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 5PM)</option>
                    <option value="evening">Evening (5PM - 8PM)</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Message *</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 transition ${
                    formErrors.message ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="How can we help you?"
                />
                {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary text-lg py-4"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-blue-100">
                      123 Dental Street<br />
                      Suite 100<br />
                      City, ST 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-blue-100">Main: (555) 123-4567</p>
                    <p className="text-blue-100">Emergency: (555) 123-4568</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-blue-100">info@mercy.com</p>
                    <p className="text-blue-100">appointments@mercy.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Hours</h3>
                    <p className="text-blue-100">Mon-Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-blue-100">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-blue-100">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-xl p-4 h-80">
              <iframe
                title="Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-73.98510768458417!3d40.75889697932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                className="w-full h-full rounded-xl"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="badge badge-primary mb-4">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Find quick answers to common questions</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-blue-600 mr-3 text-xl">Q:</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 pl-8">
                  <span className="text-blue-600 mr-2">A:</span>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-red-600 py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Dental Emergency?</h2>
          <p className="text-xl text-white/90 mb-6">Don't wait - we're here to help 24/7</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+15551234567" className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition">
              📞 Call Emergency Line
            </a>
            <button
              onClick={() => navigate('/login')}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition"
            >
              Book Same-Day Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;