import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Beautiful mountain landscape with crystal clear lake"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Discover Your Next
            <span className="block text-accent-400">Adventure</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Explore breathtaking destinations, create unforgettable memories, and embark on journeys that will change your perspective forever.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/travel-packages-catalog">
              <Button
                variant="primary"
                size="lg"
                iconName="MapPin"
                iconPosition="right"
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold hover:bg-yellow-500"
              >
                Explore Packages
              </Button>
            </Link>
            
            <Button
              variant="outline"
              size="lg"
              iconName="Play"
              iconPosition="left"
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold  hover:bg-yellow-500"
            >
              Watch Video
            </Button>
          </div>

          {/* Quick Search */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Destination
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Where to?"
                    className="w-full px-4 py-3 pl-10 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                  <Icon name="MapPin" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted" />
                </div>
              </div>
              
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Check-in
                </label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full px-4 py-3 pl-10 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                  <Icon name="Calendar" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted" />
                </div>
              </div>
              
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Travelers
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 pl-10 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary appearance-none">
                    <option>1 Traveler</option>
                    <option>2 Travelers</option>
                    <option>3 Travelers</option>
                    <option>4+ Travelers</option>
                  </select>
                  <Icon name="Users" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted" />
                </div>
              </div>
              
              <div className="md:col-span-1 flex items-end">
                <Link to="/travel-packages-catalog" className="w-full">
                  <Button
                    variant="primary"
                    size="lg"
                    iconName="Search"
                    iconPosition="left"
                    className="w-full py-3"
                  >
                    Search
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white" />
      </div>
    </section>
  );
};

export default HeroSection;