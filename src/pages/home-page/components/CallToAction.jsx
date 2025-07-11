import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CallToAction = () => {
  const quickActions = [
    {
      icon: "MapPin",
      title: "Explore Destinations",
      description: "Browse our curated collection of amazing travel packages",
      action: "Browse Packages",
      link: "/travel-packages-catalog",
      color: "primary"
    },
    {
      icon: "Calendar",
      title: "Plan Your Trip",
      description: "Get personalized recommendations based on your preferences",
      action: "Start Planning",
      link: "/travel-packages-catalog",
      color: "secondary"
    },
    {
      icon: "Phone",
      title: "Talk to Expert",
      description: "Speak with our travel specialists for custom itineraries",
      action: "Contact Us",
      link: "/travel-packages-catalog",
      color: "accent"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: {
        bg: "bg-primary-50",
        icon: "text-primary",
        button: "primary"
      },
      secondary: {
        bg: "bg-secondary-50",
        icon: "text-secondary",
        button: "secondary"
      },
      accent: {
        bg: "bg-accent-50",
        icon: "text-accent-700",
        button: "warning"
      }
    };
    return colors[color] || colors.primary;
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 via-background to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="relative bg-gradient-to-r from-primary to-secondary rounded-3xl overflow-hidden mb-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Travel background pattern"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 px-8 lg:px-16 py-12 lg:py-20 text-center">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6">
              Ready for Your Next Adventure?
            </h2>
            
            <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of travelers who have discovered the world with TravelEase. 
              Your perfect journey is just one click away.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link to="/travel-packages-catalog">
                <Button
                  variant="secondary"
                  size="xl"
                  iconName="Plane"
                  iconPosition="right"
                  className="w-full sm:w-auto px-8 py-4 text-lg font-semibold bg-yellow-500 text-primary hover:bg-gray-50"
                >
                  Start Your Journey
                </Button>
              </Link>
              
              <Button
                variant="ghost"
                size="xl"
                iconName="Play"
                iconPosition="left"
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white border-white hover:bg-white/10"
              >
                Watch Our Story
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
              <div className="flex items-center">
                <Icon name="Shield" size={20} className="mr-2" />
                <span className="text-sm">Secure Booking</span>
              </div>
              <div className="flex items-center">
                <Icon name="Clock" size={20} className="mr-2" />
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center">
                <Icon name="Award" size={20} className="mr-2" />
                <span className="text-sm">Best Price Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-text-primary mb-4">
              How Can We Help You Today?
            </h3>
            <p className="text-text-secondary max-w-3xl mx-auto">
              Choose the option that best fits your travel planning needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {quickActions.map((action, index) => {
              const colors = getColorClasses(action.color);
              
              return (
                <div key={index} className="bg-surface rounded-2xl p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-300 border border-border">
                  <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <Icon name={action.icon} size={32} className={colors.icon} />
                  </div>
                  
                  <h4 className="text-xl font-heading font-semibold text-text-primary mb-3">
                    {action.title}
                  </h4>
                  
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {action.description}
                  </p>
                  
                  <Link to={action.link}>
                    <Button
                      variant={colors.button}
                      size="lg"
                      iconName="ArrowRight"
                      iconPosition="right"
                      className="w-full"
                    >
                      {action.action}
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-surface rounded-2xl p-8 lg:p-12 text-center border border-border">
          <div className="max-w-2xl mx-auto">
            <Icon name="Mail" size={48} className="text-primary mx-auto mb-6" />
            
            <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
              Stay Updated with Travel Deals
            </h3>
            
            <p className="text-text-secondary mb-8">
              Subscribe to our newsletter and be the first to know about exclusive offers, 
              new destinations, and travel tips.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <Button
                variant="primary"
                iconName="Send"
                iconPosition="right"
                className="sm:px-6"
              >
                Subscribe
              </Button>
            </div>

            <p className="text-xs text-text-muted mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;