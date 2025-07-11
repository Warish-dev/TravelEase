import React from 'react';
import PackageCard from './PackageCard';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';



const PackageGrid = ({ packages, loading, onBookNow }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(9)].map((_, index) => (
          <div key={index} className="bg-surface rounded-xl shadow-card overflow-hidden animate-pulse">
            <div className="h-48 bg-surface-hover"></div>
            <div className="p-4 space-y-3">
              <div className="h-4 bg-surface-hover rounded w-3/4"></div>
              <div className="h-3 bg-surface-hover rounded w-1/2"></div>
              <div className="flex gap-2">
                <div className="h-3 bg-surface-hover rounded w-1/4"></div>
                <div className="h-3 bg-surface-hover rounded w-1/4"></div>
              </div>
              <div className="flex gap-2 pt-2">
                <div className="h-8 bg-surface-hover rounded flex-1"></div>
                <div className="h-8 bg-surface-hover rounded flex-1"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (packages.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto mb-4 bg-surface-hover rounded-full flex items-center justify-center">
          <Icon name="Search" size={32} className="text-text-muted" />
        </div>
        <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
          No packages found
        </h3>
        <p className="text-text-secondary mb-4">
          Try adjusting your filters or search terms to find more packages.
        </p>
        <Button variant="primary" onClick={() => window.location.reload()}>
          Reset Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {packages.map((pkg) => (
        <PackageCard
          key={pkg.id}
          package={pkg}
          onBookNow={onBookNow}
        />
      ))}
    </div>
  );
};

export default PackageGrid;