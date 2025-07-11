import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustSignals = () => {
  const trustFeatures = [
    {
      icon: 'Shield',
      title: 'Secure Booking',
      description: 'SSL encrypted payment processing'
    },
    {
      icon: 'Clock',
      title: 'Free Cancellation',
      description: 'Cancel up to 24 hours before departure'
    },
    {
      icon: 'Award',
      title: 'Best Price Guarantee',
      description: 'We match any lower price you find'
    },
    {
      icon: 'Headphones',
      title: '24/7 Support',
      description: 'Round-the-clock customer assistance'
    }
  ];

  const paymentMethods = [
    { name: 'Visa', logo: 'CreditCard' },
    { name: 'Mastercard', logo: 'CreditCard' },
    { name: 'American Express', logo: 'CreditCard' },
    { name: 'PayPal', logo: 'Wallet' }
  ];

  const certifications = [
    {
      name: 'IATA Certified',
      description: 'International Air Transport Association member'
    },
    {
      name: 'ATOL Protected',
      description: 'Your money is protected when you book with us'
    },
    {
      name: 'TripAdvisor Excellence',
      description: 'Certificate of Excellence 2023'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Trust Features */}
      <div className="bg-surface rounded-xl shadow-card p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Why Book With Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trustFeatures.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                <Icon name={feature.icon} size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-text-primary text-sm">{feature.title}</h4>
                <p className="text-text-secondary text-xs mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-surface rounded-xl shadow-card p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Accepted Payment Methods</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {paymentMethods.map((method, index) => (
            <div key={index} className="flex items-center justify-center p-3 border border-border rounded-lg hover:border-primary transition-colors duration-200">
              <Icon name={method.logo} size={24} className="text-text-secondary" />
              <span className="ml-2 text-sm text-text-secondary">{method.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-center space-x-2 text-xs text-text-muted">
          <Icon name="Lock" size={14} />
          <span>256-bit SSL encryption ensures your payment data is secure</span>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-surface rounded-xl shadow-card p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Our Certifications</h3>
        <div className="space-y-3">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-success-50 rounded-lg">
              <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
              <div>
                <h4 className="font-medium text-text-primary text-sm">{cert.name}</h4>
                <p className="text-text-secondary text-xs">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Support */}
      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6">
        <div className="text-center">
          <Icon name="Headphones" size={32} className="mx-auto mb-3 text-primary" />
          <h3 className="text-lg font-semibold text-text-primary mb-2">Need Help?</h3>
          <p className="text-text-secondary text-sm mb-4">
            Our travel experts are available 24/7 to assist you with your booking
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={16} className="text-primary" />
              <span className="text-text-primary font-medium">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Mail" size={16} className="text-primary" />
              <span className="text-text-primary font-medium">support@travelease.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cancellation Policy */}
      <div className="bg-surface rounded-xl shadow-card p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Cancellation Policy</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-start space-x-3">
            <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-medium text-text-primary">Free cancellation</span>
              <span className="text-text-secondary"> up to 24 hours before departure</span>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Icon name="Clock" size={16} className="text-warning flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-medium text-text-primary">50% refund</span>
              <span className="text-text-secondary"> for cancellations 24-48 hours before departure</span>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Icon name="XCircle" size={16} className="text-error flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-medium text-text-primary">No refund</span>
              <span className="text-text-secondary"> for cancellations less than 24 hours before departure</span>
            </div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-info-50 rounded-lg">
          <p className="text-info text-xs">
            <Icon name="Info" size={14} className="inline mr-1" />
            Travel insurance is recommended to protect against unforeseen circumstances
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrustSignals;