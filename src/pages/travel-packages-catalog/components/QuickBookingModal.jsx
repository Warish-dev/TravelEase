import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const QuickBookingModal = ({ package: pkg, isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [travelers, setTravelers] = useState(2);
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  if (!isOpen || !pkg) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle quick booking submission
    console.log('Quick booking submitted:', {
      package: pkg.id,
      date: selectedDate,
      travelers,
      contact: contactInfo
    });
    onClose();
  };

  const totalPrice = pkg.price * travelers;

  return (
    <div className="fixed inset-0 z-1200 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-surface rounded-2xl shadow-modal w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-surface border-b border-border p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Quick Booking
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-text-secondary hover:bg-surface-hover transition-colors duration-200"
            >
              <Icon name="X" size={24} />
            </button>
          </div>
        </div>

        {/* Package Summary */}
        <div className="p-6 border-b border-border">
          <div className="flex gap-4">
            <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-heading font-semibold text-text-primary mb-1">
                {pkg.title}
              </h3>
              <div className="flex items-center text-text-secondary text-sm mb-2">
                <Icon name="MapPin" size={14} className="mr-1" />
                <span>{pkg.location}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-text-secondary">
                <div className="flex items-center">
                  <Icon name="Calendar" size={14} className="mr-1" />
                  <span>{pkg.duration}</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Users" size={14} className="mr-1" />
                  <span>{pkg.groupSize}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">Rs.{pkg.price}</div>
              <div className="text-sm text-text-secondary">per person</div>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Travel Date */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Travel Date *
              </label>
              <Input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            {/* Number of Travelers */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Number of Travelers *
              </label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setTravelers(Math.max(1, travelers - 1))}
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-surface-hover transition-colors duration-200"
                >
                  <Icon name="Minus" size={16} />
                </button>
                <span className="text-lg font-medium text-text-primary min-w-8 text-center">
                  {travelers}
                </span>
                <button
                  type="button"
                  onClick={() => setTravelers(travelers + 1)}
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-surface-hover transition-colors duration-200"
                >
                  <Icon name="Plus" size={16} />
                </button>
              </div>
            </div>

            {/* Contact Name */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Full Name *
              </label>
              <Input
                type="text"
                placeholder="Enter your full name"
                value={contactInfo.name}
                onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Email Address *
              </label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={contactInfo.email}
                onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                required
              />
            </div>

            {/* Phone */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-text-primary mb-2">
                Phone Number *
              </label>
              <Input
                type="tel"
                placeholder="Enter your phone number"
                value={contactInfo.phone}
                onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                required
              />
            </div>
          </div>

          {/* Price Summary */}
          <div className="mt-6 p-4 bg-surface-hover rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-text-secondary">Price per person:</span>
              <span className="font-medium text-text-primary">Rs.{pkg.price}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-text-secondary">Number of travelers:</span>
              <span className="font-medium text-text-primary">{travelers}</span>
            </div>
            <div className="border-t border-border pt-2 mt-2">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-text-primary">Total:</span>
                <span className="text-2xl font-bold text-primary">Rs.{totalPrice.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Link to="/package-details-booking" className="flex-1">
              <Button variant="ghost" fullWidth>
                View Full Details
              </Button>
            </Link>
            <Button
              type="submit"
              variant="primary"
              className="flex-1"
            >
              Proceed to Book
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuickBookingModal;