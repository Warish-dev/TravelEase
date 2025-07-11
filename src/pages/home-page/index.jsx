import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FeaturedPackages from './components/FeaturedPackages';
import TrustSignals from './components/TrustSignals';
import CompanyOverview from './components/CompanyOverview';
import CallToAction from './components/CallToAction';

const HomePage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>TravelEase - Discover Your Next Adventure | Premium Travel Packages</title>
        <meta 
          name="description" 
          content="Explore the world with TravelEase. Discover premium travel packages, authentic experiences, and unforgettable adventures. Book your dream vacation today with our expert-curated tours." 
        />
        <meta name="keywords" content="travel packages, vacation tours, adventure travel, luxury travel, cultural tours, family vacations, honeymoon packages" />
        <meta property="og:title" content="TravelEase - Discover Your Next Adventure" />
        <meta property="og:description" content="Premium travel packages and authentic experiences worldwide. Start your journey with TravelEase today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://travelease.com/home-page" />
        <link rel="canonical" href="https://travelease.com/home-page" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-16 lg:pt-20">
          {/* Hero Section */}
          <HeroSection />

          {/* Featured Packages */}
          <FeaturedPackages />

          {/* Trust Signals & Statistics */}
          <TrustSignals />

          {/* Company Overview */}
          <CompanyOverview />

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
                    <span className="text-white font-bold text-sm">T</span>
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
                      <span className="text-sm">f</span>
                    </div>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    <span className="sr-only">Twitter</span>
                    <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200">
                      <span className="text-sm">t</span>
                    </div>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    <span className="sr-only">Instagram</span>
                    <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200">
                      <span className="text-sm">i</span>
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
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Blog</a></li>
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
                    <div className="text-primary mt-1">📍</div>
                    <span className="text-gray-300">123 Travel Street, Adventure City, AC 12345</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-primary">📞</div>
                    <span className="text-gray-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-primary">✉️</div>
                    <span className="text-gray-300">info@travelease.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} TravelEase. All rights reserved.
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

export default HomePage;