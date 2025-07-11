import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FeaturedPackages = () => {
  const featuredPackages = [
    {
      id: 1,
      title: "Swiss Alps Adventure",
      destination: "Switzerland",
      duration: "7 Days",
      price: 2499,
      originalPrice: 2999,
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Mountain Hiking", "Scenic Railways", "Alpine Villages"],
      badge: "Best Seller"
    },
    {
      id: 2,
      title: "Tropical Paradise Escape",
      destination: "Maldives",
      duration: "5 Days",
      price: 3299,
      originalPrice: 3799,
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Overwater Bungalows", "Snorkeling", "Spa Treatments"],
      badge: "Luxury"
    },
    {
      id: 3,
      title: "Cultural Heritage Tour",
      destination: "Japan",
      duration: "10 Days",
      price: 3899,
      originalPrice: 4299,
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Temple Visits", "Traditional Cuisine", "Cherry Blossoms"],
      badge: "Cultural"
    },
    {
      id: 4,
      title: "African Safari Experience",
      destination: "Kenya",
      duration: "8 Days",
      price: 2799,
      originalPrice: 3199,
      rating: 4.7,
      reviews: 94,
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Wildlife Viewing", "Game Drives", "Local Culture"],
      badge: "Adventure"
    },
    {
      id: 5,
      title: "Mediterranean Cruise",
      destination: "Greece & Italy",
      duration: "12 Days",
      price: 2199,
      originalPrice: 2599,
      rating: 4.6,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Island Hopping", "Ancient Ruins", "Mediterranean Cuisine"],
      badge: "Cruise"
    },
    {
      id: 6,
      title: "Northern Lights Quest",
      destination: "Iceland",
      duration: "6 Days",
      price: 1899,
      originalPrice: 2299,
      rating: 4.8,
      reviews: 78,
      image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Aurora Viewing", "Hot Springs", "Glacier Tours"],
      badge: "Natural Wonder"
    }
  ];

  const getBadgeColor = (badge) => {
    const colors = {
      "Best Seller": "bg-accent text-accent-foreground",
      "Luxury": "bg-primary text-primary-foreground",
      "Cultural": "bg-secondary text-secondary-foreground",
      "Adventure": "bg-success text-success-foreground",
      "Cruise": "bg-primary-600 text-white",
      "Natural Wonder": "bg-secondary-600 text-white"
    };
    return colors[badge] || "bg-gray-600 text-white";
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4">
            Featured Travel Packages
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Discover our handpicked selection of extraordinary travel experiences, 
            carefully curated to create unforgettable memories.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-surface rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 ease-out overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${getBadgeColor(pkg.badge)}`}>
                  {pkg.badge}
                </div>

                {/* Discount Badge */}
                {pkg.originalPrice > pkg.price && (
                  <div className="absolute top-4 right-4 bg-error text-error-foreground px-2 py-1 rounded-lg text-xs font-semibold">
                    Save Rs.{pkg.originalPrice - pkg.price}
                  </div>
                )}

                {/* Favorite Button */}
                <button className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                  <Icon name="Heart" size={18} className="text-text-secondary hover:text-error" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title and Location */}
                <div className="mb-3">
                  <h3 className="text-xl font-heading font-semibold text-text-primary mb-1">
                    {pkg.title}
                  </h3>
                  <div className="flex items-center text-text-secondary">
                    <Icon name="MapPin" size={16} className="mr-1" />
                    <span className="text-sm">{pkg.destination}</span>
                  </div>
                </div>

                {/* Rating and Reviews */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={14}
                        className={`${
                          i < Math.floor(pkg.rating)
                            ? 'text-accent fill-current' :'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-text-secondary ml-2">
                    {pkg.rating} ({pkg.reviews} reviews)
                  </span>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary-50 text-primary text-xs rounded-lg"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Duration and Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-text-secondary">
                    <Icon name="Clock" size={16} className="mr-1" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                  
                  <div className="text-right">
                    {pkg.originalPrice > pkg.price && (
                      <div className="text-sm text-text-muted line-through">
                        Rs.{pkg.originalPrice.toLocaleString()}
                      </div>
                    )}
                    <div className="text-xl font-bold text-primary">
                      Rs.{pkg.price.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Link to="/package-details-booking" className="flex-1">
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Eye"
                      iconPosition="left"
                      className="w-full"
                    >
                      View Details
                    </Button>
                  </Link>
                  <Link to="/package-details-booking" className="flex-1">
                    <Button
                      variant="primary"
                      size="sm"
                      iconName="ShoppingCart"
                      iconPosition="left"
                      className="w-full"
                    >
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/travel-packages-catalog">
            <Button
              variant="outline"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              className="px-8"
            >
              View All Packages
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;