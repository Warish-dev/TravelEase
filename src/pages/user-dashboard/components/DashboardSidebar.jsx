import React from 'react';
import Icon from '../../../components/AppIcon';

const DashboardSidebar = ({ activeSection, onSectionChange }) => {
  const menuItems = [
    {
      id: 'overview',
      label: 'Overview',
      icon: 'LayoutDashboard',
      description: 'Dashboard overview'
    },
    {
      id: 'bookings',
      label: 'My Bookings',
      icon: 'Calendar',
      description: 'View all bookings'
    },
    {
      id: 'profile',
      label: 'Profile Settings',
      icon: 'User',
      description: 'Manage your profile'
    },
    {
      id: 'payments',
      label: 'Payment Methods',
      icon: 'CreditCard',
      description: 'Manage payments'
    },
    {
      id: 'preferences',
      label: 'Travel Preferences',
      icon: 'Settings',
      description: 'Your preferences'
    },
    {
      id: 'history',
      label: 'Booking History',
      icon: 'History',
      description: 'Past bookings'
    }
  ];

  return (
    <div className="bg-surface rounded-xl p-6 shadow-card">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <Icon name="User" size={20} color="white" />
        </div>
        <div>
          <h3 className="font-semibold text-text-primary">John Doe</h3>
          <p className="text-sm text-text-secondary">Premium Member</p>
        </div>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
              activeSection === item.id
                ? 'bg-primary text-white' :'text-text-secondary hover:bg-background hover:text-text-primary'
            }`}
          >
            <Icon 
              name={item.icon} 
              size={20} 
              color={activeSection === item.id ? 'white' : 'currentColor'}
            />
            <div>
              <div className="font-medium">{item.label}</div>
              <div className={`text-xs ${
                activeSection === item.id ? 'text-white/80' : 'text-text-muted'
              }`}>
                {item.description}
              </div>
            </div>
          </button>
        ))}
      </nav>

      <div className="mt-6 pt-6 border-t border-border">
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 text-error hover:bg-error-50">
          <Icon name="LogOut" size={20} color="currentColor" />
          <div>
            <div className="font-medium">Sign Out</div>
            <div className="text-xs text-error/80">Logout from account</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;