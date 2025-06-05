import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      // EmailJS configuration - user will need to set these up
      await emailjs.send(
        'YOUR_SERVICE_ID', // User needs to replace
        'YOUR_TEMPLATE_ID', // User needs to replace
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY' // User needs to replace
      );
      
      setFormStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      setFormStatus('error');
    }
  };

  const services = [
    {
      title: "Cloud Solutions",
      description: "Scalable cloud architecture and migration services for modern businesses",
      icon: "☁️",
      image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg"
    },
    {
      title: "GitOps",
      description: "Infrastructure as code and automated deployment pipelines",
      icon: "🔄",
      image: "https://images.unsplash.com/photo-1648134859211-4a1b57575f4e"
    },
    {
      title: "Automation",
      description: "Streamline your processes with intelligent automation solutions",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1735494034924-f4fd13af1cea"
    },
    {
      title: "DevOps",
      description: "Continuous integration and deployment for faster software delivery",
      icon: "⚙️",
      image: "https://images.pexels.com/photos/11035393/pexels-photo-11035393.jpeg"
    },
    {
      title: "Java Backend",
      description: "Robust and scalable Java application development and architecture",
      icon: "☕",
      image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="https://codenest.uk/img/companylogo.png" 
                alt="codenest logo" 
                className="h-8 w-auto"
              />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#services" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Services</a>
                <a href="#about" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#contact" className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-500 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <a href="#home" className="text-gray-700 hover:text-orange-500 block px-3 py-2 text-base font-medium">Home</a>
                <a href="#services" className="text-gray-700 hover:text-orange-500 block px-3 py-2 text-base font-medium">Services</a>
                <a href="#about" className="text-gray-700 hover:text-orange-500 block px-3 py-2 text-base font-medium">About</a>
                <a href="#contact" className="text-orange-500 block px-3 py-2 text-base font-medium">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Automation-First
                <span className="text-orange-500 block">IT Solutions</span>
              </h1>
              <p className="text-lg text-orange-600 font-semibold mt-4 mb-4">
                Where GitOps meets real-world delivery
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                We deliver scalable, GitOps-driven solutions with Java-based backends, Kubernetes orchestration, and cloud-native infrastructure that teams trust.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-center">
                  Get Started
                </a>
                <a href="#services" className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors text-center">
                  Our Services
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1489648022186-8f49310909a0" 
                alt="Digital transformation" 
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver comprehensive IT solutions that drive business growth and operational excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose codenest?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-orange-500 text-white p-2 rounded-lg mr-4 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Cutting-Edge Technology</h3>
                    <p className="text-gray-600">We stay ahead of the curve with the latest technologies and best practices in cloud computing, automation, and software development.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-500 text-white p-2 rounded-lg mr-4 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Track Record</h3>
                    <p className="text-gray-600">Our experienced team has successfully delivered complex IT projects across various industries, ensuring reliable and scalable solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-500 text-white p-2 rounded-lg mr-4 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">End-to-End Support</h3>
                    <p className="text-gray-600">From initial consultation to deployment and ongoing maintenance, we provide comprehensive support throughout your digital transformation journey.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488229297570-58520851e868" 
                alt="Professional technology" 
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business with innovative IT solutions? Get in touch with our expert team.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Tell us about your project and requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {formStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              {formStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
                  Sorry, there was an error sending your message. Please try again or contact us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <img 
              src="https://codenest.uk/img/companylogo.png" 
              alt="codenest logo" 
              className="h-10 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-400 mb-4">
              Expert IT consultancy for cloud, GitOps, automation, DevOps, and Java backend solutions.
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 codenest. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;