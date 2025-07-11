import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PackageCard = ({ package: pkg, onBookNow }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Icon key={i} name="Star" size={14} className="text-accent fill-current" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Icon key="half" name="Star" size={14} className="text-accent fill-current opacity-50" />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Icon key={`empty-${i}`} name="Star" size={14} className="text-border" />
      );
    }

    return stars;
  };

  return (
    <div className="bg-surface rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 ease-out overflow-hidden group">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
        />
        
        {/* Badge */}
        {pkg.badge && (
          <div className="absolute top-3 left-3">
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
              pkg.badge.type === 'popular' ?'bg-accent text-accent-foreground' 
                : pkg.badge.type === 'new' ?'bg-success text-success-foreground' :'bg-primary text-primary-foreground'
            }`}>
              {pkg.badge.text}
            </span>
          </div>
        )}

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 p-2 bg-surface/80 backdrop-blur-sm rounded-full hover:bg-surface transition-colors duration-200">
          <Icon name="Heart" size={16} className="text-text-secondary hover:text-error" />
        </button>

        {/* Price Overlay */}
        <div className="absolute bottom-3 right-3 bg-surface/90 backdrop-blur-sm px-3 py-1 rounded-lg">
          <span className="text-lg font-bold text-primary">Rs.{pkg.price}</span>
          <span className="text-sm text-text-secondary ml-1">per person</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title and Location */}
        <div className="mb-3">
          <h3 className="text-lg font-heading font-semibold text-text-primary mb-1 line-clamp-2">
            {pkg.title}
          </h3>
          <div className="flex items-center text-text-secondary text-sm">
            <Icon name="MapPin" size={14} className="mr-1" />
            <span>{pkg.location}</span>
          </div>
        </div>

        {/* Rating and Reviews */}
        <div className="flex items-center mb-3">
          <div className="flex items-center mr-2">
            {renderStars(pkg.rating)}
          </div>
          <span className="text-sm font-medium text-text-primary mr-1">
            {pkg.rating}
          </span>
          <span className="text-sm text-text-secondary">
            ({pkg.reviewCount} reviews)
          </span>
        </div>

        {/* Package Details */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center text-text-secondary">
            <Icon name="Calendar" size={14} className="mr-2" />
            <span>{pkg.duration}</span>
          </div>
          <div className="flex items-center text-text-secondary">
            <Icon name="Users" size={14} className="mr-2" />
            <span>{pkg.groupSize}</span>
          </div>
          <div className="flex items-center text-text-secondary">
            <Icon name="Plane" size={14} className="mr-2" />
            <span>{pkg.transport}</span>
          </div>
          <div className="flex items-center text-text-secondary">
            <Icon name="Utensils" size={14} className="mr-2" />
            <span>{pkg.meals}</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {pkg.highlights.slice(0, 3).map((highlight, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary-50 text-primary text-xs rounded-full"
              >
                {highlight}
              </span>
            ))}
            {pkg.highlights.length > 3 && (
              <span className="px-2 py-1 bg-surface-hover text-text-secondary text-xs rounded-full">
                +{pkg.highlights.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link to="/package-details-booking" className="flex-1">
            <Button variant="outline" fullWidth className="text-sm">
              View Details
            </Button>
          </Link>
          <Button
            variant="primary"
            onClick={() => onBookNow(pkg)}
            className="flex-1 text-sm"
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;