import React from 'react';
import Icon from '../../../components/AppIcon';
import SortDropdown from './SortDropdown';

const ResultsHeader = ({ 
  totalResults, 
  currentSort, 
  onSortChange, 
  viewMode, 
  onViewModeChange,
  loading 
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      {/* Results Count */}
      <div className="flex items-center">
        <Icon name="Package" size={20} className="mr-2 text-primary" />
        <span className="text-lg font-medium text-text-primary">
          {loading ? (
            <span className="animate-pulse">Loading packages...</span>
          ) : (
            <>
              {totalResults} {totalResults === 1 ? 'Package' : 'Packages'} Found
            </>
          )}
        </span>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        {/* View Mode Toggle */}
        <div className="hidden sm:flex items-center bg-surface border border-border rounded-lg p-1">
          <button
            onClick={() => onViewModeChange('grid')}
            className={`p-2 rounded transition-colors duration-200 ${
              viewMode === 'grid' ?'bg-primary text-primary-foreground' :'text-text-secondary hover:text-text-primary hover:bg-surface-hover'
            }`}
            aria-label="Grid view"
          >
            <Icon name="Grid3X3" size={16} />
          </button>
          <button
            onClick={() => onViewModeChange('list')}
            className={`p-2 rounded transition-colors duration-200 ${
              viewMode === 'list' ?'bg-primary text-primary-foreground' :'text-text-secondary hover:text-text-primary hover:bg-surface-hover'
            }`}
            aria-label="List view"
          >
            <Icon name="List" size={16} />
          </button>
        </div>

        {/* Sort Dropdown */}
        <SortDropdown 
          currentSort={currentSort} 
          onSortChange={onSortChange} 
        />
      </div>
    </div>
  );
};

export default ResultsHeader;