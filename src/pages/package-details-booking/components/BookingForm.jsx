import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const BookingForm = ({ packageData, onBookingSubmit }) => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Travel Details
    checkIn: '',
    checkOut: '',
    adults: 2,
    children: 0,
    infants: 0,
    
    // Special Requirements
    specialRequests: '',
    dietaryRequirements: '',
    
    // Emergency Contact
    emergencyName: '',
    emergencyPhone: '',
    
    // Payment
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    billingAddress: '',
    city: '',
    zipCode: '',
    country: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    { id: 1, title: 'Travel Details', icon: 'Calendar' },
    { id: 2, title: 'Personal Info', icon: 'User' },
    { id: 3, title: 'Payment', icon: 'CreditCard' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.checkIn) newErrors.checkIn = 'Check-in date is required';
      if (!formData.checkOut) newErrors.checkOut = 'Check-out date is required';
      if (formData.adults < 1) newErrors.adults = 'At least 1 adult is required';
    }

    if (step === 2) {
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.phone) newErrors.phone = 'Phone number is required';
      if (!formData.emergencyName) newErrors.emergencyName = 'Emergency contact name is required';
      if (!formData.emergencyPhone) newErrors.emergencyPhone = 'Emergency contact phone is required';
    }

    if (step === 3) {
      if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
      if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
      if (!formData.cvv) newErrors.cvv = 'CVV is required';
      if (!formData.cardholderName) newErrors.cardholderName = 'Cardholder name is required';
      if (!formData.billingAddress) newErrors.billingAddress = 'Billing address is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.zipCode) newErrors.zipCode = 'ZIP code is required';
      if (!formData.country) newErrors.country = 'Country is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const calculateTotal = () => {
    const basePrice = packageData.price * formData.adults;
    const childPrice = packageData.price * 0.7 * formData.children;
    const infantPrice = packageData.price * 0.1 * formData.infants;
    const subtotal = basePrice + childPrice + infantPrice;
    const tax = subtotal * 0.1;
    return {
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      total: (subtotal + tax).toFixed(2)
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    try {
      await onBookingSubmit(formData);
    } catch (error) {
      console.error('Booking submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-text-primary">Travel Details</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Check-in Date *
                </label>
                <Input
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) => handleInputChange('checkIn', e.target.value)}
                  className={errors.checkIn ? 'border-error' : ''}
                />
                {errors.checkIn && (
                  <p className="text-error text-xs mt-1">{errors.checkIn}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Check-out Date *
                </label>
                <Input
                  type="date"
                  value={formData.checkOut}
                  onChange={(e) => handleInputChange('checkOut', e.target.value)}
                  className={errors.checkOut ? 'border-error' : ''}
                />
                {errors.checkOut && (
                  <p className="text-error text-xs mt-1">{errors.checkOut}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-4">
                Number of Travelers
              </label>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-text-secondary mb-2">Adults (12+) *</label>
                  <div className="flex items-center space-x-3">
                    <button
                      type="button"
                      onClick={() => handleInputChange('adults', Math.max(1, formData.adults - 1))}
                      className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-surface-hover transition-colors duration-200"
                    >
                      <Icon name="Minus" size={14} />
                    </button>
                    <span className="w-8 text-center font-medium">{formData.adults}</span>
                    <button
                      type="button"
                      onClick={() => handleInputChange('adults', formData.adults + 1)}
                      className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-surface-hover transition-colors duration-200"
                    >
                      <Icon name="Plus" size={14} />
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs text-text-secondary mb-2">Children (2-11)</label>
                  <div className="flex items-center space-x-3">
                    <button
                      type="button"
                      onClick={() => handleInputChange('children', Math.max(0, formData.children - 1))}
                      className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-surface-hover transition-colors duration-200"
                    >
                      <Icon name="Minus" size={14} />
                    </button>
                    <span className="w-8 text-center font-medium">{formData.children}</span>
                    <button
                      type="button"
                      onClick={() => handleInputChange('children', formData.children + 1)}
                      className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-surface-hover transition-colors duration-200"
                    >
                      <Icon name="Plus" size={14} />
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs text-text-secondary mb-2">Infants (0-1)</label>
                  <div className="flex items-center space-x-3">
                    <button
                      type="button"
                      onClick={() => handleInputChange('infants', Math.max(0, formData.infants - 1))}
                      className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-surface-hover transition-colors duration-200"
                    >
                      <Icon name="Minus" size={14} />
                    </button>
                    <span className="w-8 text-center font-medium">{formData.infants}</span>
                    <button
                      type="button"
                      onClick={() => handleInputChange('infants', formData.infants + 1)}
                      className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-surface-hover transition-colors duration-200"
                    >
                      <Icon name="Plus" size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Special Requests
              </label>
              <textarea
                value={formData.specialRequests}
                onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                placeholder="Any special requests or requirements..."
                rows={3}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 resize-none"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-text-primary">Personal Information</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  First Name *
                </label>
                <Input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="Enter first name"
                  className={errors.firstName ? 'border-error' : ''}
                />
                {errors.firstName && (
                  <p className="text-error text-xs mt-1">{errors.firstName}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Last Name *
                </label>
                <Input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Enter last name"
                  className={errors.lastName ? 'border-error' : ''}
                />
                {errors.lastName && (
                  <p className="text-error text-xs mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter email address"
                  className={errors.email ? 'border-error' : ''}
                />
                {errors.email && (
                  <p className="text-error text-xs mt-1">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Phone Number *
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="Enter phone number"
                  className={errors.phone ? 'border-error' : ''}
                />
                {errors.phone && (
                  <p className="text-error text-xs mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Dietary Requirements
              </label>
              <Input
                type="text"
                value={formData.dietaryRequirements}
                onChange={(e) => handleInputChange('dietaryRequirements', e.target.value)}
                placeholder="Any dietary restrictions or preferences"
              />
            </div>

            <div className="border-t border-border pt-6">
              <h4 className="text-md font-medium text-text-primary mb-4">Emergency Contact</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Contact Name *
                  </label>
                  <Input
                    type="text"
                    value={formData.emergencyName}
                    onChange={(e) => handleInputChange('emergencyName', e.target.value)}
                    placeholder="Emergency contact name"
                    className={errors.emergencyName ? 'border-error' : ''}
                  />
                  {errors.emergencyName && (
                    <p className="text-error text-xs mt-1">{errors.emergencyName}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Contact Phone *
                  </label>
                  <Input
                    type="tel"
                    value={formData.emergencyPhone}
                    onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                    placeholder="Emergency contact phone"
                    className={errors.emergencyPhone ? 'border-error' : ''}
                  />
                  {errors.emergencyPhone && (
                    <p className="text-error text-xs mt-1">{errors.emergencyPhone}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-text-primary">Payment Information</h3>
            
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Shield" size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">Secure Payment</span>
              </div>
              <p className="text-xs text-text-secondary">
                Your payment information is encrypted and secure. We accept all major credit cards.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Card Number *
              </label>
              <Input
                type="text"
                value={formData.cardNumber}
                onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                placeholder="1234 5678 9012 3456"
                className={errors.cardNumber ? 'border-error' : ''}
              />
              {errors.cardNumber && (
                <p className="text-error text-xs mt-1">{errors.cardNumber}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Expiry Date *
                </label>
                <Input
                  type="text"
                  value={formData.expiryDate}
                  onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                  placeholder="MM/YY"
                  className={errors.expiryDate ? 'border-error' : ''}
                />
                {errors.expiryDate && (
                  <p className="text-error text-xs mt-1">{errors.expiryDate}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  CVV *
                </label>
                <Input
                  type="text"
                  value={formData.cvv}
                  onChange={(e) => handleInputChange('cvv', e.target.value)}
                  placeholder="123"
                  className={errors.cvv ? 'border-error' : ''}
                />
                {errors.cvv && (
                  <p className="text-error text-xs mt-1">{errors.cvv}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Cardholder Name *
              </label>
              <Input
                type="text"
                value={formData.cardholderName}
                onChange={(e) => handleInputChange('cardholderName', e.target.value)}
                placeholder="Name as it appears on card"
                className={errors.cardholderName ? 'border-error' : ''}
              />
              {errors.cardholderName && (
                <p className="text-error text-xs mt-1">{errors.cardholderName}</p>
              )}
            </div>

            <div className="border-t border-border pt-6">
              <h4 className="text-md font-medium text-text-primary mb-4">Billing Address</h4>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Address *
                  </label>
                  <Input
                    type="text"
                    value={formData.billingAddress}
                    onChange={(e) => handleInputChange('billingAddress', e.target.value)}
                    placeholder="Street address"
                    className={errors.billingAddress ? 'border-error' : ''}
                  />
                  {errors.billingAddress && (
                    <p className="text-error text-xs mt-1">{errors.billingAddress}</p>
                  )}
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      City *
                    </label>
                    <Input
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      placeholder="City"
                      className={errors.city ? 'border-error' : ''}
                    />
                    {errors.city && (
                      <p className="text-error text-xs mt-1">{errors.city}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      ZIP Code *
                    </label>
                    <Input
                      type="text"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      placeholder="ZIP"
                      className={errors.zipCode ? 'border-error' : ''}
                    />
                    {errors.zipCode && (
                      <p className="text-error text-xs mt-1">{errors.zipCode}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Country *
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 bg-surface ${
                        errors.country ? 'border-error' : 'border-border'
                      }`}
                    >
                      <option value="">Select Country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="IT">Italy</option>
                      <option value="ES">Spain</option>
                    </select>
                    {errors.country && (
                      <p className="text-error text-xs mt-1">{errors.country}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const pricing = calculateTotal();

  return (
    <div className="bg-surface rounded-xl shadow-card">
      {/* Step Indicator */}
      <div className="border-b border-border p-6">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors duration-200 ${
                currentStep >= step.id
                  ? 'bg-primary border-primary text-white' :'border-border text-text-muted'
              }`}>
                {currentStep > step.id ? (
                  <Icon name="Check" size={16} />
                ) : (
                  <Icon name={step.icon} size={16} />
                )}
              </div>
              <div className="ml-3 hidden sm:block">
                <div className={`text-sm font-medium ${
                  currentStep >= step.id ? 'text-primary' : 'text-text-muted'
                }`}>
                  Step {step.id}
                </div>
                <div className={`text-xs ${
                  currentStep >= step.id ? 'text-text-primary' : 'text-text-secondary'
                }`}>
                  {step.title}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className={`w-12 h-0.5 mx-4 ${
                  currentStep > step.id ? 'bg-primary' : 'bg-border'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="p-6">
        {renderStepContent()}

        {/* Pricing Summary */}
        <div className="mt-8 bg-background-alt rounded-lg p-4">
          <h4 className="font-medium text-text-primary mb-3">Booking Summary</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-text-secondary">
                Adults ({formData.adults}) × Rs.{packageData.price}
              </span>
              <span className="text-text-primary">
                Rs.{(packageData.price * formData.adults).toFixed(2)}
              </span>
            </div>
            {formData.children > 0 && (
              <div className="flex justify-between">
                <span className="text-text-secondary">
                  Children ({formData.children}) × Rs.{(packageData.price * 0.7).toFixed(2)}
                </span>
                <span className="text-text-primary">
                  Rs.{(packageData.price * 0.7 * formData.children).toFixed(2)}
                </span>
              </div>
            )}
            {formData.infants > 0 && (
              <div className="flex justify-between">
                <span className="text-text-secondary">
                  Infants ({formData.infants}) × Rs.{(packageData.price * 0.1).toFixed(2)}
                </span>
                <span className="text-text-primary">
                  Rs.{(packageData.price * 0.1 * formData.infants).toFixed(2)}
                </span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-text-secondary">Subtotal</span>
              <span className="text-text-primary">Rs.{pricing.subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Taxes & Fees</span>
              <span className="text-text-primary">Rs.{pricing.tax}</span>
            </div>
            <div className="border-t border-border pt-2 flex justify-between font-semibold">
              <span className="text-text-primary">Total</span>
              <span className="text-primary text-lg">Rs.{pricing.total}</span>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            iconName="ChevronLeft"
            iconPosition="left"
          >
            Previous
          </Button>

          {currentStep < 3 ? (
            <Button
              type="button"
              variant="primary"
              onClick={nextStep}
              iconName="ChevronRight"
              iconPosition="right"
            >
              Next Step
            </Button>
          ) : (
            <Button
              type="submit"
              variant="primary"
              loading={isSubmitting}
              iconName="CreditCard"
              iconPosition="left"
            >
              {isSubmitting ? 'Processing...' : `Pay Rs.${pricing.total}`}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default BookingForm;