import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ContactMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  const officeLocations = [
    {
      name: 'Main Office',
      address: '123 Travel Street, Adventure City, AC 12345',
      phone: '+1 (555) 123-4567',
      email: 'info@travelease.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM'
    },
    {
      name: 'Downtown Branch',
      address: '456 Explorer Ave, Adventure City, AC 12346',
      phone: '+1 (555) 123-4568',
      email: 'downtown@travelease.com',
      hours: 'Mon-Sat: 10:00 AM - 8:00 PM'
    }
  ];

  const handleMapLoad = () => {
    setMapLoaded(true);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4">
            Visit Our Locations
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Find us at our convenient locations across the city. Our friendly team is ready to help you plan your perfect adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Interactive Map */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-96 bg-gray-200 relative">
              {/* Placeholder for actual map integration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Map" size={48} className="text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg font-medium">Interactive Map</p>
                  <p className="text-gray-400 text-sm">
                    Integrate with Google Maps, MapBox, or similar service
                  </p>
                </div>
              </div>
              
              {/* Map Controls */}
              <div className="absolute top-4 right-4 space-y-2">
                <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors duration-200">
                  <Icon name="Plus" size={20} className="text-gray-600" />
                </button>
                <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors duration-200">
                  <Icon name="Minus" size={20} className="text-gray-600" />
                </button>
              </div>
            </div>
            
            {/* Map Actions */}
            <div className="p-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-700 transition-colors duration-200">
                  <Icon name="Navigation" size={20} className="mr-2" />
                  Get Directions
                </button>
                <button className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-white text-primary border border-primary rounded-lg hover:bg-primary-50 transition-colors duration-200">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  View on Maps
                </button>
              </div>
            </div>
          </div>

          {/* Office Locations */}
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-text-primary">
              Our Locations
            </h3>
            
            {officeLocations.map((location, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mr-4">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary">
                        {location.name}
                      </h4>
                      <p className="text-text-secondary">{location.address}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Icon name="Phone" size={16} className="text-primary mr-3" />
                    <a 
                      href={`tel:${location.phone.replace(/\D/g, '')}`}
                      className="text-text-secondary hover:text-primary transition-colors duration-200"
                    >
                      {location.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Mail" size={16} className="text-primary mr-3" />
                    <a 
                      href={`mailto:${location.email}`}
                      className="text-text-secondary hover:text-primary transition-colors duration-200"
                    >
                      {location.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Clock" size={16} className="text-primary mr-3" />
                    <span className="text-text-secondary">{location.hours}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-700 transition-colors duration-200">
                    <Icon name="Navigation" size={16} className="mr-2" />
                    Get Directions to {location.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;