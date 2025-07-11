import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CompanyOverview = () => {
  const features = [
    {
      icon: "Globe",
      title: "Global Reach",
      description: "Access to 150+ destinations worldwide with local expertise and authentic experiences."
    },
    {
      icon: "Users",
      title: "Expert Guides",
      description: "Professional, certified guides who bring destinations to life with local knowledge."
    },
    {
      icon: "Shield",
      title: "Safe & Secure",
      description: "Comprehensive travel insurance and 24/7 support for peace of mind."
    },
    {
      icon: "Heart",
      title: "Personalized Service",
      description: "Tailored itineraries designed to match your interests and travel style."
    }
  ];

  const values = [
    {
      title: "Sustainability",
      description: "We\'re committed to responsible tourism that benefits local communities and preserves natural environments.",
      icon: "Leaf"
    },
    {
      title: "Authenticity",
      description: "We create genuine connections with local cultures, offering experiences beyond typical tourist attractions.",
      icon: "Compass"
    },
    {
      title: "Excellence",
      description: "Every detail is carefully planned and executed to exceed your expectations and create lasting memories.",
      icon: "Award"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-6">
              Your Journey Begins with 
              <span className="text-gradient block">TravelEase</span>
            </h2>
            
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              For over a decade, TravelEase has been crafting extraordinary travel experiences 
              that go beyond the ordinary. We believe that travel has the power to transform 
              lives, broaden perspectives, and create connections that last a lifetime.
            </p>
            
            <p className="text-text-secondary mb-8 leading-relaxed">
              Our mission is simple: to make the world more accessible and meaningful for every 
              traveler. Whether you're seeking adventure, relaxation, cultural immersion, or spiritual renewal, we're here to turn your travel dreams into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                iconName="Users"
                iconPosition="left"
              >
                Meet Our Team
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="FileText"
                iconPosition="left"
              >
                Our Story
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="TravelEase team planning travel experiences"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-surface rounded-2xl p-6 shadow-xl border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-text-secondary">Years Experience</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-surface rounded-2xl p-6 shadow-xl border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary mb-1">99%</div>
                <div className="text-sm text-text-secondary">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-text-primary mb-4">
              Why Choose TravelEase?
            </h3>
            <p className="text-text-secondary max-w-3xl mx-auto">
              We combine years of expertise with innovative technology to deliver 
              unparalleled travel experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon} size={32} className="text-primary" />
                </div>
                <h4 className="text-xl font-heading font-semibold text-text-primary mb-3">
                  {feature.title}
                </h4>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-surface rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-text-primary mb-4">
              Our Core Values
            </h3>
            <p className="text-text-secondary max-w-3xl mx-auto">
              These principles guide everything we do and shape every experience we create.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-background rounded-2xl p-6 border border-border">
                <div className="w-12 h-12 bg-secondary-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={value.icon} size={24} className="text-secondary" />
                </div>
                <h4 className="text-xl font-heading font-semibold text-text-primary mb-3">
                  {value.title}
                </h4>
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;