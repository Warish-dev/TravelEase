import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SortDropdown = ({ currentSort, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const sortOptions = [
    { value: 'popularity', label: 'Most Popular', icon: 'TrendingUp' },
    { value: 'price-low', label: 'Price: Low to High', icon: 'ArrowUp' },
    { value: 'price-high', label: 'Price: High to Low', icon: 'ArrowDown' },
    { value: 'rating', label: 'Highest Rated', icon: 'Star' },
    { value: 'duration-short', label: 'Duration: Short to Long', icon: 'Clock' },
    { value: 'duration-long', label: 'Duration: Long to Short', icon: 'Clock' },
    { value: 'newest', label: 'Newest First', icon: 'Calendar' }
  ];

  const currentOption = sortOptions.find(option => option.value === currentSort) || sortOptions[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSortSelect = (sortValue) => {
    onSortChange(sortValue);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full sm:w-auto min-w-48 px-4 py-2 bg-surface border border-border rounded-lg hover:bg-surface-hover transition-colors duration-200 focus:ring-2 focus:ring-primary focus:border-primary"
      >
        <div className="flex items-center">
          <Icon name={currentOption.icon} size={16} className="mr-2 text-text-secondary" />
          <span className="text-sm font-medium text-text-primary">
            {currentOption.label}
          </span>
        </div>
        <Icon 
          name="ChevronDown" 
          size={16} 
          className={`ml-2 text-text-secondary transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 sm:right-auto sm:w-64 mt-1 bg-surface border border-border rounded-lg shadow-lg z-50 py-1">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSortSelect(option.value)}
              className={`w-full flex items-center px-4 py-3 text-left hover:bg-surface-hover transition-colors duration-200 ${
                currentSort === option.value ? 'bg-primary-50 text-primary' : 'text-text-primary'
              }`}
            >
              <Icon 
                name={option.icon} 
                size={16} 
                className={`mr-3 ${
                  currentSort === option.value ? 'text-primary' : 'text-text-secondary'
                }`}
              />
              <span className="text-sm font-medium">{option.label}</span>
              {currentSort === option.value && (
                <Icon name="Check" size={16} className="ml-auto text-primary" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;