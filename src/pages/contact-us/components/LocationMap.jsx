import React from 'react';
import Icon from '../../../components/AppIcon';

const LocationMap = () => {
  return (
    <section className="py-20 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-6">
            Find Us
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Visit our offices or explore our global presence through our interactive map.
          </p>
        </div>

        <div className="bg-surface rounded-xl shadow-card overflow-hidden">
          {/* Map Placeholder */}
          <div className="h-96 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={32} color="white" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                Interactive Map
              </h3>
              <p className="text-text-secondary">
                Explore our office locations worldwide
              </p>
            </div>
          </div>

          {/* Office Cards */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Building" size={24} color="white" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">New York HQ</h3>
                <p className="text-text-secondary text-sm">123 Travel Street</p>
                <p className="text-text-secondary text-sm">New York, NY 10001</p>
              </div>

              <div className="text-center p-4 bg-background rounded-lg">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Building" size={24} color="white" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Los Angeles</h3>
                <p className="text-text-secondary text-sm">456 Adventure Ave</p>
                <p className="text-text-secondary text-sm">Los Angeles, CA 90210</p>
              </div>

              <div className="text-center p-4 bg-background rounded-lg">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Building" size={24} color="white" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Miami</h3>
                <p className="text-text-secondary text-sm">789 Vacation Blvd</p>
                <p className="text-text-secondary text-sm">Miami, FL 33101</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;