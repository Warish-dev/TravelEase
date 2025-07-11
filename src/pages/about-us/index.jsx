import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import CompanyStory from './components/CompanyStory';
import MissionValues from './components/MissionValues';
import TeamSection from './components/TeamSection';
import Statistics from './components/Statistics';
import Timeline from './components/Timeline';
import CallToAction from './components/CallToAction';
import Icon from '../../components/AppIcon';

const AboutUs = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us - TravelEase | Our Story, Mission & Values</title>
        <meta 
          name="description" 
          content="Learn about TravelEase's journey, mission, and values. Discover how we've been creating extraordinary travel experiences and connecting people with amazing destinations worldwide." 
        />
        <meta name="keywords" content="about travel agency, travel company story, mission values, travel team, travel expertise" />
        <meta property="og:title" content="About TravelEase - Our Story & Mission" />
        <meta property="og:description" content="Discover our passion for travel and commitment to creating extraordinary experiences for our customers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://travelease.com/about-us" />
        <link rel="canonical" href="https://travelease.com/about-us" />
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
                  Our Story
                </h1>
                <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Passionate about travel. Committed to excellence. Creating memories that last a lifetime.
                </p>
              </div>
            </div>
          </section>

          {/* Company Story */}
          <CompanyStory />

          {/* Mission & Values */}
          <MissionValues />

          {/* Statistics */}
          <Statistics />

          {/* Timeline */}
          <Timeline />

          {/* Team Section */}
          <TeamSection />

          {/* Call to Action */}
          <CallToAction />
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

export default AboutUs;