import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import PackageHero from './components/PackageHero';
import PackageOverview from './components/PackageOverview';
import BookingForm from './components/BookingForm';
import TrustSignals from './components/TrustSignals';
import BookingConfirmation from './components/BookingConfirmation';
import Icon from '../../components/AppIcon';

const PackageDetailsBooking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookingData, setBookingData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock package data - in real app this would come from API/props
  const packageData = {
    id: 'pkg-001',
    title: 'Magical European Adventure',
    description: `Embark on an unforgettable journey through Europe's most enchanting destinations. This carefully curated package takes you through the romantic streets of Paris, the historic charm of Rome, the artistic beauty of Florence, and the vibrant culture of Barcelona.\n\nExperience world-class museums, savor authentic local cuisines, and create memories that will last a lifetime. Our expert guides will ensure you discover hidden gems and local secrets that most tourists never see.`,
    price: 2499,
    rating: 4.8,
    reviewCount: 342,
    duration: '12 Days, 11 Nights',groupSize: 'Up to 16 people',destinations: '4 Cities, 3 Countries',availability: 'Year Round',
    images: [
      'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800&h=600&fit=crop','https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&h=600&fit=crop','https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop','https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&h=600&fit=crop'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Paris',description: 'Welcome to the City of Light! Check into your hotel and enjoy a welcome dinner with your group.',location: 'Paris, France',duration: 'Full Day'
      },
      {
        day: 2,
        title: 'Paris City Tour',description: 'Explore iconic landmarks including the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral.',location: 'Paris, France',duration: '8 hours'
      },
      {
        day: 3,
        title: 'Versailles Day Trip',description: 'Visit the magnificent Palace of Versailles and its stunning gardens.',location: 'Versailles, France',duration: '6 hours'
      },
      {
        day: 4,
        title: 'Travel to Rome',description: 'High-speed train journey to Rome. Evening walking tour of the historic center.',location: 'Rome, Italy',duration: 'Full Day'
      },
      {
        day: 5,
        title: 'Ancient Rome',description: 'Explore the Colosseum, Roman Forum, and Palatine Hill with skip-the-line access.',location: 'Rome, Italy',duration: '6 hours'
      },
      {
        day: 6,
        title: 'Vatican City',description: 'Private tour of Vatican Museums, Sistine Chapel, and St. Peter\'s Basilica.',
        location: 'Vatican City',
        duration: '5 hours'
      }
    ],
    inclusions: [
      'Accommodation in 4-star hotels',
      'Daily breakfast and 6 dinners',
      'Professional English-speaking guide',
      'All entrance fees and skip-the-line tickets',
      'High-speed train between cities',
      'Airport transfers',
      'Small group experience (max 16 people)',
      'Travel insurance',
      'Welcome and farewell dinners',
      'Free Wi-Fi on transportation'
    ],
    exclusions: [
      'International flights',
      'Lunches (except where specified)',
      'Personal expenses and souvenirs',
      'Optional activities and excursions',
      'Alcoholic beverages (except at included dinners)',
      'Tips for guides and drivers',
      'Visa fees (if applicable)',
      'Travel insurance upgrades',
      'Single room supplement',
      'Laundry services'
    ],
    reviews: [
      {
        name: 'Sarah Johnson',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Absolutely incredible experience! The itinerary was perfectly planned and our guide Maria was fantastic. Every detail was taken care of and we saw so much more than we could have on our own.'
      },
      {
        name: 'Michael Chen',
        rating: 5,
        date: '1 month ago',
        comment: 'This trip exceeded all expectations. The small group size made it feel personal, and the skip-the-line access saved us hours. Highly recommend for first-time visitors to Europe!'
      },
      {
        name: 'Emma Rodriguez',
        rating: 4,
        date: '6 weeks ago',
        comment: 'Great value for money. Hotels were comfortable, food was delicious, and we covered all the major highlights. Only minor issue was some tight scheduling, but overall fantastic.'
      }
    ]
  };

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleBookingSubmit = async (formData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Calculate total amount
      const basePrice = packageData.price * formData.adults;
      const childPrice = packageData.price * 0.7 * formData.children;
      const infantPrice = packageData.price * 0.1 * formData.infants;
      const subtotal = basePrice + childPrice + infantPrice;
      const tax = subtotal * 0.1;
      const totalAmount = (subtotal + tax).toFixed(2);

      const booking = {
        ...formData,
        packageTitle: packageData.title,
        duration: packageData.duration,
        destinations: packageData.destinations,
        totalAmount
      };

      setBookingData(booking);
      setShowConfirmation(true);
    } catch (error) {
      console.error('Booking error:', error);
      // Handle error - show error message
    }
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
    navigate('/home-page');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
              <div className="h-96 bg-gray-200 rounded-xl mb-8"></div>
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="h-64 bg-gray-200 rounded-xl"></div>
                </div>
                <div className="h-96 bg-gray-200 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
          
          {/* Package Hero Section */}
          <div className="mb-8">
            <PackageHero packageData={packageData} />
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Package Details */}
            <div className="lg:col-span-2 space-y-8">
              <PackageOverview packageData={packageData} />
            </div>

            {/* Right Column - Booking Form & Trust Signals */}
            <div className="space-y-8">
              {/* Sticky Booking Form */}
              <div className="lg:sticky lg:top-24">
                <BookingForm 
                  packageData={packageData}
                  onBookingSubmit={handleBookingSubmit}
                />
              </div>
              
              {/* Trust Signals */}
              <TrustSignals />
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* FAQ Section */}
            <div className="bg-surface rounded-xl shadow-card p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-text-primary text-sm mb-1">
                    What's the best time to book?
                  </h4>
                  <p className="text-text-secondary text-xs">
                    We recommend booking at least 60 days in advance for the best rates and availability.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary text-sm mb-1">
                    Is travel insurance included?
                  </h4>
                  <p className="text-text-secondary text-xs">
                    Basic travel insurance is included. Comprehensive coverage upgrades are available.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary text-sm mb-1">
                    What if I need to cancel?
                  </h4>
                  <p className="text-text-secondary text-xs">
                    Free cancellation up to 24 hours before departure. See our cancellation policy for details.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-surface rounded-xl shadow-card p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Need Help?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} className="text-primary" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">Call Us</p>
                    <p className="text-xs text-text-secondary">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={16} className="text-primary" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">Email Us</p>
                    <p className="text-xs text-text-secondary">support@travelease.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MessageCircle" size={16} className="text-primary" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">Live Chat</p>
                    <p className="text-xs text-text-secondary">Available 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel Tips */}
            <div className="bg-surface rounded-xl shadow-card p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Travel Tips
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Icon name="CheckCircle" size={14} className="text-success flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-text-secondary">
                    Pack comfortable walking shoes for city tours
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="CheckCircle" size={14} className="text-success flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-text-secondary">
                    Bring a portable charger for your devices
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="CheckCircle" size={14} className="text-success flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-text-secondary">
                    Download offline maps before traveling
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="CheckCircle" size={14} className="text-success flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-text-secondary">
                    Keep copies of important documents
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Confirmation Modal */}
      {showConfirmation && bookingData && (
        <BookingConfirmation
          bookingData={bookingData}
          onClose={handleConfirmationClose}
        />
      )}
    </div>
  );
};

export default PackageDetailsBooking;