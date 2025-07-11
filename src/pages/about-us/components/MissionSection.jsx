import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionSection = () => {
  const values = [
    {
      icon: 'Heart',
      title: 'Passionate Service',
      description: 'We pour our hearts into every travel experience, ensuring each journey exceeds expectations and creates lasting memories.'
    },
    {
      icon: 'Globe',
      title: 'Global Expertise',
      description: 'Our extensive network and deep local knowledge help you discover authentic experiences in destinations worldwide.'
    },
    {
      icon: 'Users',
      title: 'Community First',
      description: 'We believe in building meaningful connections between travelers and local communities, fostering mutual understanding.'
    },
    {
      icon: 'Leaf',
      title: 'Sustainable Travel',
      description: 'We are committed to responsible tourism practices that protect and preserve the destinations we love to visit.'
    }
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-6">
            Our Mission & Values
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            At TravelEase, we believe that travel has the power to transform lives, build bridges between cultures, and create a more connected world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Target" size={24} color="white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-text-primary">
                Our Mission
              </h3>
            </div>
            <p className="text-lg text-text-secondary leading-relaxed">
              To inspire and facilitate meaningful travel experiences that enrich lives, foster cultural understanding, and contribute to sustainable tourism development worldwide. We strive to make every journey a transformative adventure that connects travelers with the beauty, diversity, and wonder of our planet.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <Icon name="Eye" size={24} color="white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-text-primary">
                Our Vision
              </h3>
            </div>
            <p className="text-lg text-text-secondary leading-relaxed">
              To be the world's most trusted travel companion, known for creating extraordinary, authentic, and sustainable travel experiences that inspire wanderlust and promote global understanding. We envision a future where travel brings people together and helps preserve the world's cultural and natural heritage.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-surface rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name={value.icon} size={32} color="white" />
              </div>
              <h4 className="text-xl font-heading font-semibold text-text-primary mb-4">
                {value.title}
              </h4>
              <p className="text-text-secondary leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;