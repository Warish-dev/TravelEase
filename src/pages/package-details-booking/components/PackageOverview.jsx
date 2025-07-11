import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const PackageOverview = ({ packageData }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Info' },
    { id: 'itinerary', label: 'Itinerary', icon: 'MapPin' },
    { id: 'inclusions', label: 'Inclusions', icon: 'Check' },
    { id: 'reviews', label: 'Reviews', icon: 'MessageCircle' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-3">About This Package</h3>
              <p className="text-text-secondary leading-relaxed">{packageData.description}</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <Icon name="Clock" size={24} className="mx-auto mb-2 text-primary" />
                <div className="text-sm font-medium text-text-primary">{packageData.duration}</div>
                <div className="text-xs text-text-secondary">Duration</div>
              </div>
              <div className="text-center p-4 bg-secondary-50 rounded-lg">
                <Icon name="Users" size={24} className="mx-auto mb-2 text-secondary" />
                <div className="text-sm font-medium text-text-primary">{packageData.groupSize}</div>
                <div className="text-xs text-text-secondary">Group Size</div>
              </div>
              <div className="text-center p-4 bg-accent-50 rounded-lg">
                <Icon name="MapPin" size={24} className="mx-auto mb-2 text-accent" />
                <div className="text-sm font-medium text-text-primary">{packageData.destinations}</div>
                <div className="text-xs text-text-secondary">Destinations</div>
              </div>
              <div className="text-center p-4 bg-success-50 rounded-lg">
                <Icon name="Calendar" size={24} className="mx-auto mb-2 text-success" />
                <div className="text-sm font-medium text-text-primary">{packageData.availability}</div>
                <div className="text-xs text-text-secondary">Availability</div>
              </div>
            </div>
          </div>
        );

      case 'itinerary':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Day-by-Day Itinerary</h3>
            {packageData.itinerary.map((day, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {day.day}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-text-primary mb-1">{day.title}</h4>
                    <p className="text-text-secondary text-sm mb-2">{day.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-text-muted">
                      <span className="flex items-center">
                        <Icon name="MapPin" size={12} className="mr-1" />
                        {day.location}
                      </span>
                      <span className="flex items-center">
                        <Icon name="Clock" size={12} className="mr-1" />
                        {day.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'inclusions':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {packageData.inclusions.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                    <span className="text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">What's Not Included</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {packageData.exclusions.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="X" size={16} className="text-error flex-shrink-0" />
                    <span className="text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'reviews':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-text-primary">Customer Reviews</h3>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon
                      key={star}
                      name="Star"
                      size={16}
                      className={star <= packageData.rating ? 'text-accent' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-sm text-text-secondary">
                  {packageData.rating} out of 5 ({packageData.reviewCount} reviews)
                </span>
              </div>
            </div>
            
            <div className="space-y-4">
              {packageData.reviews.map((review, index) => (
                <div key={index} className="border border-border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-text-primary">{review.name}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Icon
                              key={star}
                              name="Star"
                              size={12}
                              className={star <= review.rating ? 'text-accent' : 'text-gray-300'}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-text-muted">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-surface rounded-xl shadow-card p-6">
      <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">
        {packageData.title}
      </h2>

      {/* Tabs */}
      <div className="border-b border-border mb-6">
        <nav className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-3 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'border-primary text-primary' :'border-transparent text-text-secondary hover:text-text-primary'
              }`}
            >
              <Icon name={tab.icon} size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default PackageOverview;