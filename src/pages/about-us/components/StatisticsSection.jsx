import React from 'react';
import Icon from '../../../components/AppIcon';

const StatisticsSection = () => {
  const stats = [
    {
      number: '50,000+',
      label: 'Happy Travelers',
      icon: 'Users',
      color: 'from-primary to-primary-600'
    },
    {
      number: '12',
      label: 'Years Experience',
      icon: 'Calendar',
      color: 'from-secondary to-secondary-600'
    },
    {
      number: '150+',
      label: 'Destinations',
      icon: 'MapPin',
      color: 'from-accent to-accent-600'
    },
    {
      number: '4.9',
      label: 'Customer Rating',
      icon: 'Star',
      color: 'from-success to-success-700'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            These numbers represent the trust our customers place in us and the experiences we've created together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <Icon name={stat.icon} size={32} color="white" />
              </div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-lg text-text-secondary font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-surface rounded-xl p-8 shadow-card">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Icon name="Award" size={32} color="white" />
              </div>
            </div>
            <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
              Award-Winning Service
            </h3>
            <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
              Recognized as "Best Travel Agency" for three consecutive years by the International Travel Awards. Our commitment to excellence drives everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;