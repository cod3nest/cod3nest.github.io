import React, { useState, useEffect } from 'react';
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

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

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
      // EmailJS configuration from environment variables
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      
      setFormStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      setFormStatus('error');
    }
  };

  const services = [
    {
      title: "Fractional CTO",
      description: "Technical leadership and strategic guidance for early-stage startups — from architecture decisions to team scaling and investor readiness.",
      image: "https://github.com/cod3nest/cod3nest.github.io/blob/gh-pages/img/pexels-photo-1181354.jpeg?raw=true"
    },
    {
      title: "0→1 Product Builds",
      description: "MVP development using modular, cloud-native templates — fast iteration without sacrificing quality or scalability.",
      image: "https://github.com/cod3nest/cod3nest.github.io/blob/gh-pages/img/pexels-photo-1148820.jpeg?raw=true"
    },
    {
      title: "AI & Data Engineering",
      description: "LLM integration, MLOps, and scalable data pipelines that turn experimental models into production-ready systems.",
      image: "https://github.com/cod3nest/cod3nest.github.io/blob/gh-pages/img/photo-1735494034924-f4fd13af1cea.jpeg?raw=true"
    },
    {
      title: "IaC & GitOps Acceleration",
      description: "Reproducible cloud environments and CI/CD pipelines — enabling fast, reliable iteration from day one.",
      image: "https://github.com/cod3nest/cod3nest.github.io/blob/gh-pages/img/gitops.avif?raw=true"
    },
    {
      title: "Technical Due Diligence",
      description: "Investor readiness assessments, scalability audits, and system design reviews to validate technical foundations.",
      image: "https://github.com/cod3nest/cod3nest.github.io/blob/gh-pages/img/pexels-photo-11035393.jpeg?raw=true"
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
                src="https://github.com/cod3nest/cod3nest.github.io/blob/gh-pages/img/companylogo.png?raw=true"
                alt="codenest logo" 
                className="h-8 w-auto"
              />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#services" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Services</a>
                <a href="#approach" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Approach</a>
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
                <a href="#approach" className="text-gray-700 hover:text-orange-500 block px-3 py-2 text-base font-medium">Approach</a>
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
                From Idea to Scalable Product
                <span className="text-orange-500 block">Technical Leadership for Startups</span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                We help founders build fast and scale smart — combining engineering execution with reproducible IaC and GitOps foundations.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-center">
                  Book a Discovery Call
                </a>
                <a href="#services" className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors text-center">
                  View Services
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://github.com/cod3nest/cod3nest.github.io/blob/gh-pages/img/photo-1489648022186-8f49310909a0.jpeg?raw=true"
                alt="Startup product development"
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
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Technical leadership and engineering execution for startups building their first product
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every engagement begins with a production-grade foundation — so iteration is safe, fast, and measurable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-orange-500 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Discover & Define</h3>
              <p className="text-gray-600 leading-relaxed">
                We clarify your vision, identify user value, and define product scope. This phase ensures alignment on goals and establishes a clear path forward.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-orange-500 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Architect & Accelerate</h3>
              <p className="text-gray-600 leading-relaxed">
                Before writing code, we establish IaC foundations, CI/CD pipelines, and GitOps workflows. This structure enables rapid, reliable iteration from day one.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-orange-500 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Deliver & Handover</h3>
              <p className="text-gray-600 leading-relaxed">
                We launch your MVP with full observability, clean documentation, and knowledge transfer. You own the system and can iterate independently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://github.com/cod3nest/cod3nest.github.io/blob/gh-pages/img/photo-1488229297570-58520851e868.jpeg?raw=true"
                alt="Technical leadership"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent rounded-xl"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">About codenest</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I've spent years building and leading engineering teams in early-stage startups — guiding founders through the critical 0→1 phase where technical decisions can make or break momentum.
                </p>
                <p>
                  What I've learned: speed comes from structure. The fastest-moving teams are those with repeatable systems — Infrastructure as Code, GitOps workflows, and production-grade observability from day one.
                </p>
                <p>
                  This is what codenest delivers. We bring clarity to complexity, reliability to experimentation, and craftsmanship to rapid iteration. Whether you're building your first MVP or scaling to meet demand, we provide the technical leadership and execution that keeps you moving forward.
                </p>
                <p className="text-gray-900 font-semibold">
                  We believe speed comes from structure — Infrastructure as Code and GitOps bring the discipline startups need without slowing innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Let's Discuss Your Next Product Milestone</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're validating an idea, building an MVP, or scaling your architecture — let's talk about how we can help.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
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
                src="https://github.com/cod3nest/cod3nest.github.io/blob/gh-pages/img/companylogo.png?raw=true"
                alt="codenest logo"
              className="h-10 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-400 mb-4">
              Technical leadership for startups — delivering speed and structure through IaC, GitOps, and production-grade engineering.
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
