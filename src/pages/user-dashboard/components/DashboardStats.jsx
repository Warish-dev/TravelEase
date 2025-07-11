import React from 'react';
import Icon from '../../../components/AppIcon';

const DashboardStats = () => {
  const stats = [
    {
      id: 1,
      label: 'Upcoming Trips',
      value: '3',
      icon: 'Calendar',
      color: 'bg-primary',
      trend: '+2 this month'
    },
    {
      id: 2,
      label: 'Total Bookings',
      value: '12',
      icon: 'MapPin',
      color: 'bg-secondary',
      trend: '+4 this year'
    },
    {
      id: 3,
      label: 'Loyalty Points',
      value: '2,450',
      icon: 'Award',
      color: 'bg-accent',
      trend: '+250 earned'
    },
    {
      id: 4,
      label: 'Countries Visited',
      value: '8',
      icon: 'Globe',
      color: 'bg-success',
      trend: '+3 new'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="bg-surface rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-200"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
              <Icon name={stat.icon} size={24} color="white" />
            </div>
            <div className="text-sm text-success font-medium">
              {stat.trend}
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="text-2xl font-bold text-text-primary">
              {stat.value}
            </div>
            <div className="text-sm text-text-secondary">
              {stat.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;