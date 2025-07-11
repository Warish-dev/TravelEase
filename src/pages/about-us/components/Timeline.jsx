import React from 'react';
import Icon from '../../../components/AppIcon';

const Timeline = () => {
  const milestones = [
    {
      year: '2010',
      title: 'The Beginning',
      description: 'TravelEase was founded by Sarah Johnson with a vision to make extraordinary travel accessible to everyone.',
      icon: 'Rocket',
      color: 'bg-blue-500'
    },
    {
      year: '2012',
      title: 'First International Expansion',
      description: 'Launched our first international packages to Europe and Asia, establishing partnerships with local guides.',
      icon: 'Globe',
      color: 'bg-green-500'
    },
    {
      year: '2015',
      title: 'Digital Innovation',
      description: 'Launched our online booking platform, making it easier for customers to plan and book their dream trips.',
      icon: 'Smartphone',
      color: 'bg-purple-500'
    },
    {
      year: '2017',
      title: 'Award Recognition',
      description: 'Received our first "Best Travel Agency" award and reached 10,000 satisfied customers.',
      icon: 'Award',
      color: 'bg-yellow-500'
    },
    {
      year: '2019',
      title: 'Sustainable Tourism Initiative',
      description: 'Launched our sustainability program, partnering with eco-friendly accommodations and local communities.',
      icon: 'Leaf',
      color: 'bg-green-600'
    },
    {
      year: '2021',
      title: 'Pandemic Adaptation',
      description: 'Pivoted to virtual travel experiences and enhanced safety protocols for when travel resumed.',
      icon: 'Shield',
      color: 'bg-red-500'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded to all seven continents and reached 50,000 travelers served milestone.',
      icon: 'MapPin',
      color: 'bg-indigo-500'
    },
    {
      year: '2025',
      title: 'AI-Powered Personalization',
      description: 'Launched AI-driven trip planning tools for personalized travel recommendations.',
      icon: 'Zap',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-6">
            Our Journey Through Time
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From a small startup to a global travel company, every milestone has been driven by our passion for creating extraordinary experiences.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full hidden lg:block"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${milestone.color} rounded-full flex items-center justify-center mr-4`}>
                        <Icon name={milestone.icon} size={24} className="text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-heading font-bold text-primary">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary">
                          {milestone.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Spacer */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-white">
            <Icon name="ArrowRight" size={48} className="mx-auto mb-6 text-white" />
            <h3 className="text-2xl font-heading font-bold mb-4">
              Looking Ahead
            </h3>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Our journey continues as we explore new technologies, expand to emerging destinations, and find innovative ways to make travel more accessible, sustainable, and memorable for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;