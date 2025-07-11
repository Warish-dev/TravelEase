import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BookingsList = ({ detailed = false }) => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const bookings = {
    upcoming: [
      {
        id: 1,
        destination: 'Paris, France',
        dates: 'Jul 15-22, 2025',
        status: 'Confirmed',
        price: 'Rs.2,499',
        image: '/assets/images/no_image.png',
        bookingRef: 'TE-2025-001'
      },
      {
        id: 2,
        destination: 'Tokyo, Japan',
        dates: 'Aug 10-17, 2025',
        status: 'Pending',
        price: 'Rs.3,299',
        image: '/assets/images/no_image.png',
        bookingRef: 'TE-2025-002'
      },
      {
        id: 3,
        destination: 'Bali, Indonesia',
        dates: 'Sep 5-12, 2025',
        status: 'Confirmed',
        price: 'Rs.1,899',
        image: '/assets/images/no_image.png',
        bookingRef: 'TE-2025-003'
      }
    ],
    completed: [
      {
        id: 4,
        destination: 'Rome, Italy',
        dates: 'May 20-27, 2025',
        status: 'Completed',
        price: 'Rs.2,199',
        image: '/assets/images/no_image.png',
        bookingRef: 'TE-2025-004'
      },
      {
        id: 5,
        destination: 'Barcelona, Spain',
        dates: 'Mar 15-22, 2025',
        status: 'Completed',
        price: 'Rs.1,799',
        image: '/assets/images/no_image.png',
        bookingRef: 'TE-2025-005'
      }
    ]
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-success text-white';
      case 'Pending':
        return 'bg-warning text-white';
      case 'Completed':
        return 'bg-text-secondary text-white';
      default:
        return 'bg-text-secondary text-white';
    }
  };

  const currentBookings = bookings[activeTab] || [];

  return (
    <div className="bg-surface rounded-xl p-6 shadow-card">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
        <h2 className="text-xl font-heading font-semibold text-text-primary mb-4 sm:mb-0">
          {detailed ? 'All Bookings' : 'Recent Bookings'}
        </h2>
        
        {detailed && (
          <div className="flex bg-background rounded-lg p-1">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                activeTab === 'upcoming' ?'bg-primary text-white' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                activeTab === 'completed'
                  ? 'bg-primary text-white' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              Completed
            </button>
          </div>
        )}
      </div>

      <div className="space-y-4">
        {currentBookings.slice(0, detailed ? undefined : 3).map((booking) => (
          <div
            key={booking.id}
            className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 p-4 bg-background rounded-lg hover:shadow-md transition-shadow duration-200"
          >
            <div className="w-full sm:w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src={booking.image}
                alt={booking.destination}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full hidden bg-gray-200 rounded-lg items-center justify-center">
                <Icon name="MapPin" size={24} className="text-gray-400" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                <div className="mb-2 sm:mb-0">
                  <h3 className="font-semibold text-text-primary text-lg">
                    {booking.destination}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {booking.dates}
                  </p>
                  <p className="text-text-muted text-xs mt-1">
                    Ref: {booking.bookingRef}
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-lg font-bold text-text-primary">
                      {booking.price}
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
              <Button
                variant="outline"
                size="sm"
                iconName="Eye"
                iconSize={16}
                className="w-full sm:w-auto"
              >
                View Details
              </Button>
              {booking.status === 'Confirmed' && (
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Download"
                  iconSize={16}
                  className="w-full sm:w-auto"
                >
                  Download
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      {!detailed && currentBookings.length > 3 && (
        <div className="mt-6 text-center">
          <Button variant="outline" iconName="ArrowRight" iconSize={16}>
            View All Bookings
          </Button>
        </div>
      )}
    </div>
  );
};

export default BookingsList;