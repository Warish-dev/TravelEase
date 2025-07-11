import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Breadcrumb = ({ customItems = null }) => {
  const location = useLocation();

  const defaultBreadcrumbMap = {
    '/home-page': [
      { label: 'Home', path: '/home-page' }
    ],
    '/travel-packages-catalog': [
      { label: 'Home', path: '/home-page' },
      { label: 'Travel Packages', path: '/travel-packages-catalog' }
    ],
    '/package-details-booking': [
      { label: 'Home', path: '/home-page' },
      { label: 'Travel Packages', path: '/travel-packages-catalog' },
      { label: 'Package Details', path: '/package-details-booking' }
    ]
  };

  const breadcrumbItems = customItems || defaultBreadcrumbMap[location.pathname] || [];

  if (breadcrumbItems.length <= 1) {
    return null;
  }

  return (
    <nav className="flex items-center space-x-2 text-sm mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          
          return (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <Icon 
                  name="ChevronRight" 
                  size={16} 
                  className="text-text-muted mx-2" 
                />
              )}
              
              {isLast ? (
                <span className="text-text-primary font-medium">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="text-text-secondary hover:text-primary transition-colors duration-200 ease-out"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;