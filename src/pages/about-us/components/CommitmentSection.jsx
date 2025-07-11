import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CommitmentSection = () => {
  const commitments = [
    {
      icon: 'Shield',
      title: 'Safety First',
      description: 'Your safety is our top priority. We maintain the highest safety standards and provide 24/7 support during your travels.'
    },
    {
      icon: 'Leaf',
      title: 'Sustainable Tourism',
      description: 'We are committed to protecting the environment and supporting local communities through responsible travel practices.'
    },
    {
      icon: 'Heart',
      title: 'Community Support',
      description: 'We invest in local communities, supporting education, conservation, and economic development in the destinations we visit.'
    },
    {
      icon: 'Award',
      title: 'Quality Assurance',
      description: 'Every aspect of your journey is carefully vetted and monitored to ensure exceptional quality and authentic experiences.'
    }
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-6">
            Our Commitment to You
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We promise to deliver exceptional service while making a positive impact on the world through responsible tourism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {commitments.map((commitment, index) => (
            <div key={index} className="bg-surface rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={commitment.icon} size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
                    {commitment.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {commitment.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 md:p-12 text-center text-white">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Icon name="MessageCircle" size={32} color="white" />
            </div>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Ready to Start Your Adventure?
          </h3>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied travelers who have trusted us with their dream destinations. Let's create your perfect journey together.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              variant="secondary"
              size="lg"
              iconName="Plane"
              iconSize={20}
              className="bg-white text-primary hover:bg-white/90"
            >
              Explore Packages
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Phone"
              iconSize={20}
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;