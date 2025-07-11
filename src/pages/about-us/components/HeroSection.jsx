import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary to-secondary py-20 lg:py-32">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Icon name="Heart" size={40} color="white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Our Story
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
            We're passionate about creating extraordinary travel experiences that connect people with the world's most incredible destinations, cultures, and adventures.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              variant="secondary"
              size="lg"
              iconName="Users"
              iconSize={20}
              className="bg-white text-primary hover:bg-white/90"
            >
              Meet Our Team
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="MapPin"
              iconSize={20}
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Our Locations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;