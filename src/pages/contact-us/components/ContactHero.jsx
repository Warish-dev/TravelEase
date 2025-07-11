import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary to-secondary py-20 lg:py-32">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Icon name="MessageCircle" size={40} color="white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Get in Touch
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
            Have questions about your next adventure? Our travel experts are here to help you plan the perfect journey. Reach out to us anytime!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={20} color="white" />
              <span className="text-lg">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Mail" size={20} color="white" />
              <span className="text-lg">Quick Response</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={20} color="white" />
              <span className="text-lg">Expert Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;