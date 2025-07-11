import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const PackageHero = ({ packageData }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === packageData.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? packageData.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden bg-gray-900">
      {/* Main Image */}
      <Image
        src={packageData.images[currentImageIndex]}
        alt={`${packageData.title} - Image ${currentImageIndex + 1}`}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Navigation Arrows */}
      {packageData.images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
            aria-label="Previous image"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
            aria-label="Next image"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </>
      )}

      {/* Image Indicators */}
      {packageData.images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {packageData.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Package Badge */}
      <div className="absolute top-4 left-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-white">
          <Icon name="Star" size={14} className="mr-1" />
          {packageData.rating} ({packageData.reviewCount} reviews)
        </span>
      </div>

      {/* Price Badge */}
      <div className="absolute top-4 right-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
          <div className="text-xs text-text-secondary">Starting from</div>
          <div className="text-lg font-bold text-primary">Rs.{packageData.price}</div>
          <div className="text-xs text-text-secondary">per person</div>
        </div>
      </div>
    </div>
  );
};

export default PackageHero;