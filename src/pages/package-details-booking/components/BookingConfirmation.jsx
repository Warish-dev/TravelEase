import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BookingConfirmation = ({ bookingData, onClose }) => {
  const bookingReference = `TRV${Date.now().toString().slice(-8)}`;
  
  return (
    <div className="fixed inset-0 z-1200 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-surface rounded-2xl shadow-modal w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-success-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" size={32} className="text-success" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-text-primary mb-2">
              Booking Confirmed!
            </h2>
            <p className="text-text-secondary">
              Your travel package has been successfully booked. We've sent a confirmation email to {bookingData.email}
            </p>
          </div>

          {/* Booking Reference */}
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-primary mb-1">Booking Reference</h3>
                <p className="text-2xl font-bold text-primary font-mono">{bookingReference}</p>
              </div>
              <Button
                variant="ghost"
                onClick={() => navigator.clipboard.writeText(bookingReference)}
                iconName="Copy"
                iconSize={16}
                className="text-primary hover:bg-primary-100"
              >
                Copy
              </Button>
            </div>
          </div>

          {/* Booking Details */}
          <div className="space-y-6">
            {/* Package Information */}
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-semibold text-text-primary mb-3">Package Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Package:</span>
                  <span className="text-text-primary font-medium">{bookingData.packageTitle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Duration:</span>
                  <span className="text-text-primary">{bookingData.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Destinations:</span>
                  <span className="text-text-primary">{bookingData.destinations}</span>
                </div>
              </div>
            </div>

            {/* Travel Details */}
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-semibold text-text-primary mb-3">Travel Information</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-text-secondary block">Check-in Date</span>
                  <span className="text-text-primary font-medium">
                    {new Date(bookingData.checkIn).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div>
                  <span className="text-text-secondary block">Check-out Date</span>
                  <span className="text-text-primary font-medium">
                    {new Date(bookingData.checkOut).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div>
                  <span className="text-text-secondary block">Travelers</span>
                  <span className="text-text-primary font-medium">
                    {bookingData.adults} Adults
                    {bookingData.children > 0 && `, ${bookingData.children} Children`}
                    {bookingData.infants > 0 && `, ${bookingData.infants} Infants`}
                  </span>
                </div>
                <div>
                  <span className="text-text-secondary block">Total Amount</span>
                  <span className="text-primary font-bold text-lg">Rs.{bookingData.totalAmount}</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-semibold text-text-primary mb-3">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-text-secondary block">Primary Contact</span>
                  <span className="text-text-primary font-medium">
                    {bookingData.firstName} {bookingData.lastName}
                  </span>
                </div>
                <div>
                  <span className="text-text-secondary block">Email</span>
                  <span className="text-text-primary">{bookingData.email}</span>
                </div>
                <div>
                  <span className="text-text-secondary block">Phone</span>
                  <span className="text-text-primary">{bookingData.phone}</span>
                </div>
                <div>
                  <span className="text-text-secondary block">Emergency Contact</span>
                  <span className="text-text-primary">
                    {bookingData.emergencyName} - {bookingData.emergencyPhone}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mt-8 bg-background-alt rounded-lg p-4">
            <h3 className="font-semibold text-text-primary mb-3">What's Next?</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Icon name="Mail" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="font-medium text-text-primary">Confirmation Email</span>
                  <p className="text-text-secondary">
                    You'll receive a detailed confirmation email within 5 minutes with your e-tickets and itinerary.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="FileText" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="font-medium text-text-primary">Travel Documents</span>
                  <p className="text-text-secondary">
                    Ensure your passport is valid for at least 6 months from your travel date.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="Phone" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="font-medium text-text-primary">Pre-Travel Call</span>
                  <p className="text-text-secondary">
                    Our travel coordinator will call you 48 hours before departure with final details.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button
              variant="outline"
              onClick={() => window.print()}
              iconName="Printer"
              iconSize={16}
              fullWidth
            >
              Print Confirmation
            </Button>
            <Button
              variant="primary"
              onClick={onClose}
              iconName="Home"
              iconSize={16}
              fullWidth
            >
              Back to Home
            </Button>
          </div>

          {/* Support Information */}
          <div className="mt-6 text-center text-sm text-text-secondary">
            <p>Need help? Contact our support team at</p>
            <div className="flex items-center justify-center space-x-4 mt-2">
              <a
                href="tel:+15551234567"
                className="flex items-center space-x-1 text-primary hover:text-primary-700 transition-colors duration-200"
              >
                <Icon name="Phone" size={14} />
                <span>+1 (555) 123-4567</span>
              </a>
              <a
                href="mailto:support@travelease.com"
                className="flex items-center space-x-1 text-primary hover:text-primary-700 transition-colors duration-200"
              >
                <Icon name="Mail" size={14} />
                <span>support@travelease.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;