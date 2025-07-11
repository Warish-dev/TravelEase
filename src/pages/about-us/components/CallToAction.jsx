import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToAction = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 lg:p-16 text-white text-center">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <Icon name="MapPin" size={64} className="mx-auto mb-6 text-white" />
              <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
                Ready to Start Your Next Adventure?
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Let our experienced team help you create memories that will last a lifetime. From exotic destinations to local gems, we're here to make your travel dreams come true.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/travel-packages-catalog">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-yellow-500 text-primary hover:bg-gray-100 font-semibold"
                >
                  <Icon name="Search" size={20} className="mr-2" />
                  Explore Packages
                </Button>
              </Link>
              <Link to="/contact-us">
                <Button
                  // variant="outline"
                  size="lg"
                  className="bg-primary-600 text-white  hover:text-white font-semibold hover:bg-secondary"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Plan My Trip
                </Button>
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Clock" size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                <p className="text-white/80">Round-the-clock assistance whenever you need it</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Shield" size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Secure Booking</h3>
                <p className="text-white/80">Safe and secure payment processing</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Award" size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Best Price Guarantee</h3>
                <p className="text-white/80">We match competitor prices for the same package</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Icon name="Phone" size={28} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-heading font-bold text-text-primary mb-4">
              Call Us
            </h3>
            <p className="text-text-secondary mb-6">
              Speak with our travel experts for personalized assistance
            </p>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              +1 (555) 123-4567
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Icon name="Mail" size={28} className="text-green-600" />
            </div>
            <h3 className="text-xl font-heading font-bold text-text-primary mb-4">
              Email Us
            </h3>
            <p className="text-text-secondary mb-6">
              Send us your travel questions and we'll respond within 24 hours
            </p>
            <a
              href="mailto:info@travelease.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              <Icon name="Mail" size={20} className="mr-2" />
              info@travelease.com
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Icon name="MessageCircle" size={28} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-heading font-bold text-text-primary mb-4">
              Live Chat
            </h3>
            <p className="text-text-secondary mb-6">
              Get instant answers to your questions with our live chat support
            </p>
            <button className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Start Chat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;