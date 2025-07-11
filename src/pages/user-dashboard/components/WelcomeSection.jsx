import React from 'react';
import Icon from '../../../components/AppIcon';

const WelcomeSection = () => {
  const currentTime = new Date().getHours();
  const greeting = currentTime < 12 ? 'Good Morning' : currentTime < 17 ? 'Good Afternoon' : 'Good Evening';
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Icon name="User" size={32} color="white" />
          </div>
          <div>
            <h1 className="text-2xl font-heading font-bold">
              {greeting}, John!
            </h1>
            <p className="text-white/80 mt-1">
              {currentDate}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-2xl font-bold">4.9</div>
            <div className="text-sm text-white/80">Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">12</div>
            <div className="text-sm text-white/80">Trips</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">2,450</div>
            <div className="text-sm text-white/80">Points</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;