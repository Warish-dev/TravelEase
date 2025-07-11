import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import ContactMap from './components/ContactMap';
import FAQSection from './components/FAQSection';
import SocialMedia from './components/SocialMedia';
import Icon from '../../components/AppIcon';

const ContactUs = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleFormSubmit = (formData) => {
    // Handle form submission
    console.log('Form submitted:', formData);
    setIsFormSubmitted(true);
    
    // Reset form submission state after 3 seconds
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - TravelEase | Get in Touch for Travel Assistance</title>
        <meta 
          name="description" 
          content="Contact TravelEase for travel inquiries, booking assistance, and customer support. Multiple ways to reach us including phone, email, live chat, and contact form." 
        />
        <meta name="keywords" content="contact travel agency, travel support, booking assistance, customer service, travel inquiries" />
        <meta property="og:title" content="Contact TravelEase - Travel Support & Assistance" />
        <meta property="og:description" content="Get in touch with our travel experts for personalized assistance and support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://travelease.com/contact-us" />
        <link rel="canonical" href="https://travelease.com/contact-us" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-16 lg:pt-20">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary to-secondary py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6">
                  Get in Touch
                </h1>
                <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  We're here to help make your travel dreams come true. Reach out to our expert team for personalized assistance and support.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Contact Form */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
                      Send Us a Message
                    </h2>
                    <p className="text-text-secondary text-lg">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>
                  
                  <ContactForm 
                    onSubmit={handleFormSubmit}
                    isSubmitted={isFormSubmitted}
                  />
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <ContactInfo />
                  <SocialMedia />
                </div>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <ContactMap />

          {/* FAQ Section */}
          <FAQSection />

          {/* Emergency Contact */}
          <section className="py-16 bg-red-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                  <Icon name="AlertTriangle" size={32} className="text-red-600" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
                  Emergency Travel Support
                </h2>
                <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
                  For urgent travel-related emergencies or assistance while traveling, contact our 24/7 emergency support line.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+1-555-EMERGENCY" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
                  >
                    <Icon name="Phone" size={20} className="mr-2" />
                    +1 (555) 363-7436
                  </a>
                  <a 
                    href="mailto:emergency@travelease.com" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-semibold rounded-lg border-2 border-red-600 hover:bg-red-50 transition-colors duration-200"
                  >
                    <Icon name="Mail" size={20} className="mr-2" />
                    emergency@travelease.com
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-text-primary text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                    <Icon name="Plane" size={20} className="text-white" />
                  </div>
                  <span className="text-xl font-heading font-bold">TravelEase</span>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Creating extraordinary travel experiences that inspire, connect, and transform lives around the world.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    <span className="sr-only">Facebook</span>
                    <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200">
                      <Icon name="Facebook" size={16} />
                    </div>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    <span className="sr-only">Twitter</span>
                    <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200">
                      <Icon name="Twitter" size={16} />
                    </div>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    <span className="sr-only">Instagram</span>
                    <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200">
                      <Icon name="Instagram" size={16} />
                    </div>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/home-page" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
                  <li><a href="/travel-packages-catalog" className="text-gray-300 hover:text-white transition-colors duration-200">Packages</a></li>
                  <li><a href="/about-us" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
                  <li><a href="/contact-us" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
                  <li><a href="/user-dashboard" className="text-gray-300 hover:text-white transition-colors duration-200">Dashboard</a></li>
                </ul>
              </div>

              {/* Destinations */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Europe</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Asia</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Africa</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Americas</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Oceania</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPin" size={16} className="text-primary mt-1" />
                    <span className="text-gray-300">123 Travel Street, Adventure City, AC 12345</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={16} className="text-primary" />
                    <span className="text-gray-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={16} className="text-primary" />
                    <span className="text-gray-300">info@travelease.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm mb-4 md:mb-0">
                © 2025 TravelEase. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Terms of Service</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactUs;