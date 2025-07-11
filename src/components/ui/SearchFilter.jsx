import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import Input from './Input';

const SearchFilter = ({ onFilterChange = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    search: '',
    destination: '',
    priceRange: '',
    duration: '',
    packageType: '',
    rating: ''
  });

  const location = useLocation();
  const navigate = useNavigate();

  const destinationOptions = [
    'All Destinations',
    'Europe',
    'Asia',
    'North America',
    'South America',
    'Africa',
    'Australia & Oceania'
  ];

  const priceRangeOptions = [
    'All Prices',
    'Under $500',
    '$500 - $1000',
    '$1000 - $2000',
    '$2000 - $5000',
    'Over $5000'
  ];

  const durationOptions = [
    'All Durations',
    '1-3 days',
    '4-7 days',
    '1-2 weeks',
    '2-4 weeks',
    'Over 1 month'
  ];

  const packageTypeOptions = [
    'All Types',
    'Adventure',
    'Cultural',
    'Relaxation',
    'Family',
    'Luxury',
    'Budget'
  ];

  const ratingOptions = [
    'All Ratings',
    '4+ Stars',
    '3+ Stars',
    '2+ Stars'
  ];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const newFilters = {
      search: params.get('search') || '',
      destination: params.get('destination') || '',
      priceRange: params.get('priceRange') || '',
      duration: params.get('duration') || '',
      packageType: params.get('packageType') || '',
      rating: params.get('rating') || ''
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  }, [location.search, onFilterChange]);

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
    
    const params = new URLSearchParams();
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value && value !== 'All Destinations' && value !== 'All Prices' && 
          value !== 'All Durations' && value !== 'All Types' && value !== 'All Ratings') {
        params.set(key, value);
      }
    });

    const searchString = params.toString();
    navigate(`${location.pathname}${searchString ? `?${searchString}` : ''}`, { replace: true });
    onFilterChange(newFilters);
  };

  const handleInputChange = (field, value) => {
    const newFilters = { ...filters, [field]: value };
    updateFilters(newFilters);
  };

  const clearAllFilters = () => {
    const clearedFilters = {
      search: '',
      destination: '',
      priceRange: '',
      duration: '',
      packageType: '',
      rating: ''
    };
    updateFilters(clearedFilters);
  };

  const hasActiveFilters = Object.values(filters).some(value => 
    value && value !== 'All Destinations' && value !== 'All Prices' && 
    value !== 'All Durations' && value !== 'All Types' && value !== 'All Ratings'
  );

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-6">
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          iconName="Filter"
          iconSize={20}
          fullWidth
        >
          Filters {hasActiveFilters && `(${Object.values(filters).filter(v => v && !v.startsWith('All')).length})`}
        </Button>
      </div>

      {/* Desktop Sidebar / Mobile Overlay */}
      <div className={`
        lg:block lg:w-80 lg:flex-shrink-0
        ${isOpen ? 'block' : 'hidden'}
        ${isOpen ? 'fixed inset-0 z-1100 lg:relative lg:inset-auto' : ''}
      `}>
        {/* Mobile Overlay Background */}
        {isOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Filter Panel */}
        <div className={`
          bg-surface rounded-xl shadow-card p-6 h-fit
          ${isOpen ? 'fixed right-4 top-4 bottom-4 w-80 overflow-y-auto lg:relative lg:right-auto lg:top-auto lg:bottom-auto' : ''}
        `}>
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-heading font-semibold text-text-primary">
              Filter Packages
            </h3>
            <div className="flex items-center space-x-2">
              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  onClick={clearAllFilters}
                  className="text-xs text-text-secondary hover:text-primary"
                >
                  Clear All
                </Button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="lg:hidden p-1 rounded-lg text-text-secondary hover:bg-surface-hover transition-colors duration-200"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-text-primary mb-2">
              Search Packages
            </label>
            <div className="relative">
              <Input
                type="search"
                placeholder="Search destinations, activities..."
                value={filters.search}
                onChange={(e) => handleInputChange('search', e.target.value)}
                className="pl-10"
              />
              <Icon 
                name="Search" 
                size={18} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted"
              />
            </div>
          </div>

          {/* Destination Filter */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-text-primary mb-2">
              Destination
            </label>
            <select
              value={filters.destination}
              onChange={(e) => handleInputChange('destination', e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 bg-surface"
            >
              {destinationOptions.map(option => (
                <option key={option} value={option === 'All Destinations' ? '' : option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range Filter */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-text-primary mb-2">
              Price Range
            </label>
            <select
              value={filters.priceRange}
              onChange={(e) => handleInputChange('priceRange', e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 bg-surface"
            >
              {priceRangeOptions.map(option => (
                <option key={option} value={option === 'All Prices' ? '' : option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Duration Filter */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-text-primary mb-2">
              Duration
            </label>
            <select
              value={filters.duration}
              onChange={(e) => handleInputChange('duration', e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 bg-surface"
            >
              {durationOptions.map(option => (
                <option key={option} value={option === 'All Durations' ? '' : option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Package Type Filter */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-text-primary mb-2">
              Package Type
            </label>
            <select
              value={filters.packageType}
              onChange={(e) => handleInputChange('packageType', e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 bg-surface"
            >
              {packageTypeOptions.map(option => (
                <option key={option} value={option === 'All Types' ? '' : option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Rating Filter */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-text-primary mb-2">
              Minimum Rating
            </label>
            <select
              value={filters.rating}
              onChange={(e) => handleInputChange('rating', e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 bg-surface"
            >
              {ratingOptions.map(option => (
                <option key={option} value={option === 'All Ratings' ? '' : option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Apply Button (Mobile) */}
          <div className="lg:hidden">
            <Button
              variant="primary"
              fullWidth
              onClick={() => setIsOpen(false)}
            >
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchFilter;