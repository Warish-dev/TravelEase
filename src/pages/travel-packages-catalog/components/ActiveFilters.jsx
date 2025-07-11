import React from 'react';
import Icon from '../../../components/AppIcon';

const ActiveFilters = ({ filters, onRemoveFilter, onClearAll }) => {
  const getActiveFilters = () => {
    const active = [];
    
    if (filters.search) {
      active.push({ key: 'search', label: `Search: "${filters.search}"`, value: filters.search });
    }
    if (filters.destination && filters.destination !== 'All Destinations') {
      active.push({ key: 'destination', label: `Destination: ${filters.destination}`, value: filters.destination });
    }
    if (filters.priceRange && filters.priceRange !== 'All Prices') {
      active.push({ key: 'priceRange', label: `Price: ${filters.priceRange}`, value: filters.priceRange });
    }
    if (filters.duration && filters.duration !== 'All Durations') {
      active.push({ key: 'duration', label: `Duration: ${filters.duration}`, value: filters.duration });
    }
    if (filters.packageType && filters.packageType !== 'All Types') {
      active.push({ key: 'packageType', label: `Type: ${filters.packageType}`, value: filters.packageType });
    }
    if (filters.rating && filters.rating !== 'All Ratings') {
      active.push({ key: 'rating', label: `Rating: ${filters.rating}`, value: filters.rating });
    }

    return active;
  };

  const activeFilters = getActiveFilters();

  if (activeFilters.length === 0) {
    return null;
  }

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-text-primary">
          Active Filters ({activeFilters.length})
        </h3>
        <button
          onClick={onClearAll}
          className="text-sm text-primary hover:text-primary-700 font-medium transition-colors duration-200"
        >
          Clear All
        </button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {activeFilters.map((filter) => (
          <div
            key={filter.key}
            className="flex items-center bg-primary-50 text-primary px-3 py-1 rounded-full text-sm"
          >
            <span className="mr-2">{filter.label}</span>
            <button
              onClick={() => onRemoveFilter(filter.key)}
              className="hover:bg-primary-100 rounded-full p-1 transition-colors duration-200"
              aria-label={`Remove ${filter.label} filter`}
            >
              <Icon name="X" size={12} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveFilters;