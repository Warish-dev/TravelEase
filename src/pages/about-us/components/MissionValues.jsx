import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionValues = () => {
  const values = [
    {
      icon: 'Compass',
      title: 'Authentic Experiences',
      description: 'We believe in creating genuine connections with local cultures and communities, ensuring every journey offers authentic, meaningful experiences.'
    },
    {
      icon: 'Shield',
      title: 'Safety First',
      description: 'The safety and security of our travelers is our top priority. We maintain the highest standards of safety protocols and emergency preparedness.'
    },
    {
      icon: 'Leaf',
      title: 'Sustainable Travel',
      description: 'We are committed to responsible tourism that protects the environment and benefits local communities for future generations.'
    },
    {
      icon: 'Star',
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from initial planning to post-trip support, ensuring exceptional service at every touchpoint.'
    },
    {
      icon: 'Heart',
      title: 'Personal Service',
      description: 'Every traveler is unique, and we provide personalized service tailored to individual preferences, needs, and travel styles.'
    },
    {
      icon: 'TrendingUp',
      title: 'Innovation',
      description: 'We embrace new technologies and innovative approaches to enhance the travel experience and make planning more convenient.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-6">
            Our Mission & Values
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Icon name="Target" size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed">
                To inspire and enable people to explore the world by creating extraordinary travel experiences that foster personal growth, cultural understanding, and lasting memories. We strive to make travel accessible, safe, and transformative for every adventurer who trusts us with their journey.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-text-primary text-center mb-12">
            What We Stand For
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-6">
                  <Icon name={value.icon} size={28} className="text-white" />
                </div>
                <h4 className="text-xl font-heading font-bold text-text-primary mb-4">
                  {value.title}
                </h4>
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-white text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Icon name="Eye" size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-heading font-bold mb-4">
              Our Vision
            </h3>
            <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
              To become the world's most trusted travel partner, known for creating transformative journeys that connect cultures, preserve environments, and inspire global citizenship. We envision a world where travel serves as a bridge between communities, fostering understanding, respect, and lasting friendships across all boundaries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionValues;