import React from 'react';
import Icon from '../../../components/AppIcon';

const TimelineSection = () => {
  const milestones = [
    {
      year: '2012',
      title: 'The Beginning',
      description: 'Founded with a vision to make travel accessible and extraordinary for everyone.',
      icon: 'Zap'
    },
    {
      year: '2015',
      title: 'Going Digital',
      description: 'Launched our first digital platform, revolutionizing how people plan and book travel.',
      icon: 'Smartphone'
    },
    {
      year: '2018',
      title: 'Global Expansion',
      description: 'Expanded to 50+ destinations across 6 continents with local partnerships.',
      icon: 'Globe'
    },
    {
      year: '2020',
      title: 'Sustainable Focus',
      description: 'Committed to carbon-neutral operations and sustainable tourism practices.',
      icon: 'Leaf'
    },
    {
      year: '2022',
      title: 'Community Impact',
      description: 'Launched community support programs in 25+ destinations worldwide.',
      icon: 'Heart'
    },
    {
      year: '2025',
      title: 'Innovation Hub',
      description: 'Opening new innovation center focused on AI-powered travel experiences.',
      icon: 'Cpu'
    }
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-6">
            Our Journey
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From humble beginnings to global impact, here's how we've grown and evolved over the years.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-surface rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                        <Icon name={milestone.icon} size={24} color="white" />
                      </div>
                      <div className="text-2xl font-heading font-bold text-primary">
                        {milestone.year}
                      </div>
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex w-6 h-6 bg-white border-4 border-primary rounded-full relative z-10 mx-auto"></div>

                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;