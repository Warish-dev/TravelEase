import React from 'react';
import Icon from '../../../components/AppIcon';

const Statistics = () => {
  const stats = [
    {
      icon: 'Users',
      number: '50,000+',
      label: 'Happy Travelers',
      description: 'Customers who have experienced unforgettable journeys with us'
    },
    {
      icon: 'MapPin',
      number: '150+',
      label: 'Destinations',
      description: 'Countries and regions we offer expertly curated travel packages to'
    },
    {
      icon: 'Calendar',
      number: '15+',
      label: 'Years of Experience',
      description: 'Years of creating exceptional travel experiences and memories'
    },
    {
      icon: 'Star',
      number: '4.9/5',
      label: 'Customer Rating',
      description: 'Average rating from thousands of customer reviews and testimonials'
    },
    {
      icon: 'Award',
      number: '25+',
      label: 'Industry Awards',
      description: 'Recognition for excellence in travel services and customer satisfaction'
    },
    {
      icon: 'Globe',
      number: '7',
      label: 'Continents',
      description: 'All continents covered with local expertise and trusted partnerships'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            These numbers represent more than statistics—they represent dreams fulfilled, adventures experienced, and memories created.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-6">
                  <Icon name={stat.icon} size={32} className="text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-heading font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-white mb-4">
                  {stat.label}
                </div>
                <p className="text-white/90 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Context */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center">
            <Icon name="TrendingUp" size={48} className="text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
              Growing Every Day
            </h3>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Our numbers continue to grow because we never stop improving. Every trip we organize, every customer we serve, and every destination we explore teaches us something new. This commitment to continuous growth and learning ensures that we always deliver the best possible travel experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;