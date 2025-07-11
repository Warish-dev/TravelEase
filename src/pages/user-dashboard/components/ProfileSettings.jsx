import React, { useState } from 'react';

import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    alert('Profile updated successfully!');
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    alert('Password updated successfully!');
  };

  const renderPersonalInfo = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            First Name
          </label>
          <Input
            type="text"
            defaultValue="John"
            className="w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Last Name
          </label>
          <Input
            type="text"
            defaultValue="Doe"
            className="w-full"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">
          Email Address
        </label>
        <Input
          type="email"
          defaultValue="john.doe@email.com"
          className="w-full"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">
          Phone Number
        </label>
        <Input
          type="tel"
          defaultValue="+1 (555) 123-4567"
          className="w-full"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">
          Date of Birth
        </label>
        <Input
          type="date"
          defaultValue="1990-01-15"
          className="w-full"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">
          Address
        </label>
        <Input
          type="text"
          defaultValue="123 Main Street"
          className="w-full"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            City
          </label>
          <Input
            type="text"
            defaultValue="New York"
            className="w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Country
          </label>
          <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-text-primary focus:ring-2 focus:ring-primary focus:border-primary">
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="UK">United Kingdom</option>
            <option value="AU">Australia</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          variant="primary"
          loading={isLoading}
          iconName="Save"
          iconSize={16}
        >
          Save Changes
        </Button>
      </div>
    </form>
  );

  const renderPasswordSettings = () => (
    <form onSubmit={handlePasswordSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">
          Current Password
        </label>
        <Input
          type="password"
          className="w-full"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">
          New Password
        </label>
        <Input
          type="password"
          className="w-full"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">
          Confirm New Password
        </label>
        <Input
          type="password"
          className="w-full"
          required
        />
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          variant="primary"
          loading={isLoading}
          iconName="Key"
          iconSize={16}
        >
          Update Password
        </Button>
      </div>
    </form>
  );

  const renderNotifications = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-text-primary">Email Notifications</h3>
            <p className="text-sm text-text-secondary">Receive booking updates and offers</p>
          </div>
          <Input type="checkbox" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-text-primary">SMS Notifications</h3>
            <p className="text-sm text-text-secondary">Get important travel alerts</p>
          </div>
          <Input type="checkbox" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-text-primary">Marketing Emails</h3>
            <p className="text-sm text-text-secondary">Promotional offers and deals</p>
          </div>
          <Input type="checkbox" />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-text-primary">Push Notifications</h3>
            <p className="text-sm text-text-secondary">Mobile app notifications</p>
          </div>
          <Input type="checkbox" defaultChecked />
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          variant="primary"
          iconName="Save"
          iconSize={16}
        >
          Save Preferences
        </Button>
      </div>
    </div>
  );

  return (
    <div className="bg-surface rounded-xl p-6 shadow-card">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
        <h2 className="text-xl font-heading font-semibold text-text-primary mb-4 sm:mb-0">
          Profile Settings
        </h2>
      </div>

      <div className="border-b border-border mb-6">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('personal')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
              activeTab === 'personal' ?'border-primary text-primary' :'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            Personal Info
          </button>
          <button
            onClick={() => setActiveTab('password')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
              activeTab === 'password' ?'border-primary text-primary' :'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            Password
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
              activeTab === 'notifications'
                ? 'border-primary text-primary' :'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            Notifications
          </button>
        </nav>
      </div>

      <div>
        {activeTab === 'personal' && renderPersonalInfo()}
        {activeTab === 'password' && renderPasswordSettings()}
        {activeTab === 'notifications' && renderNotifications()}
      </div>
    </div>
  );
};

export default ProfileSettings;