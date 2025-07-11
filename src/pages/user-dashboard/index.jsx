import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import WelcomeSection from './components/WelcomeSection';
import DashboardStats from './components/DashboardStats';
import BookingsList from './components/BookingsList';
import ProfileSettings from './components/ProfileSettings';
import DashboardSidebar from './components/DashboardSidebar';
import Icon from '../../components/AppIcon';

const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setIsSidebarOpen(false);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <WelcomeSection />
            <DashboardStats />
            <BookingsList />
          </div>
        );
      case 'bookings':
        return <BookingsList detailed={true} />;
      case 'profile':
        return <ProfileSettings />;
      default:
        return (
          <div className="space-y-6">
            <WelcomeSection />
            <DashboardStats />
            <BookingsList />
          </div>
        );
    }
  };

  return (
    <>
      <Helmet>
        <title>User Dashboard - TravelEase | Manage Your Travel Bookings</title>
        <meta 
          name="description" 
          content="Manage your travel bookings, view trip details, and update your profile. Access your complete travel dashboard with TravelEase." 
        />
        <meta name="keywords" content="travel dashboard, booking management, trip details, user profile, travel history" />
        <meta property="og:title" content="User Dashboard - TravelEase" />
        <meta property="og:description" content="Manage your travel bookings and profile with TravelEase dashboard." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://travelease.com/user-dashboard" />
        <link rel="canonical" href="https://travelease.com/user-dashboard" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="pt-16 lg:pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Mobile Sidebar Toggle */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
                >
                  <Icon name="Menu" size={20} />
                  <span>Dashboard Menu</span>
                </button>
              </div>

              {/* Sidebar */}
              <div className={`lg:w-64 flex-shrink-0 ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
                <DashboardSidebar 
                  activeSection={activeSection}
                  onSectionChange={handleSectionChange}
                />
              </div>

              {/* Main Content */}
              <div className="flex-1 min-w-0">
                {renderActiveSection()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;