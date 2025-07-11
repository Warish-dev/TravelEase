import React from 'react';
import Icon from '../../../components/AppIcon';

const CompanyStory = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Story Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-6">
                Founded on a Passion for Discovery
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                TravelEase was born from a simple belief: that travel has the power to transform lives, broaden perspectives, and create lasting connections between people and places.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Since our founding in 2010, we've dedicated ourselves to crafting extraordinary travel experiences that go beyond the ordinary. Our journey began with a small team of passionate travel enthusiasts who wanted to share their love for exploration with the world.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Today, we're proud to be one of the leading travel agencies, having helped over 50,000 travelers discover amazing destinations across all seven continents. Our commitment to excellence, attention to detail, and personalized service has made us the trusted choice for adventurers seeking authentic experiences.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Award" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Award-Winning Service</h3>
                  <p className="text-text-secondary">Recognized for excellence in customer service and travel innovation.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Expert Team</h3>
                  <p className="text-text-secondary">Seasoned travel professionals with decades of combined experience.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Globe" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Global Reach</h3>
                  <p className="text-text-secondary">Partnerships with local guides and vendors in over 100 countries.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Heart" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Personal Touch</h3>
                  <p className="text-text-secondary">Every journey is customized to match your unique travel dreams.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
              <div className="absolute top-4 right-4">
                <Icon name="Quote" size={32} className="text-white/30" />
              </div>
              <blockquote className="text-xl font-medium leading-relaxed mb-6">
                "Travel is not just about reaching a destination—it's about the journey of discovery, the people you meet, and the memories you create along the way."
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon name="User" size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-white/80">Founder & CEO, TravelEase</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-secondary/20 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;