import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import SearchFilter from '../../components/ui/SearchFilter';
import PackageGrid from './components/PackageGrid';
import ResultsHeader from './components/ResultsHeader';
import ActiveFilters from './components/ActiveFilters';
import QuickBookingModal from './components/QuickBookingModal';

const TravelPackagesCatalog = () => {
  const [packages, setPackages] = useState([]);
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    destination: '',
    priceRange: '',
    duration: '',
    packageType: '',
    rating: ''
  });
  const [currentSort, setCurrentSort] = useState('popularity');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Mock packages data
  const mockPackages = [
    {
      id: 1,
      title: "Magical Paris & Rome Adventure",
      location: "Paris, France & Rome, Italy",
      price: 2499,
      duration: "10 days",
      groupSize: "Max 16 people",
      transport: "Flight included",
      meals: "Breakfast included",
      rating: 4.8,
      reviewCount: 324,
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=500",
      badge: { type: 'popular', text: 'Most Popular' },
      highlights: ["Eiffel Tower", "Colosseum", "Vatican City", "Seine River Cruise", "Local Cuisine"],
      destination: "Europe",
      packageType: "Cultural",
      priceCategory: "$2000 - $5000"
    },
    {
      id: 2,
      title: "Tropical Bali Paradise Escape",
      location: "Bali, Indonesia",
      price: 1299,
      duration: "7 days",
      groupSize: "Max 12 people",
      transport: "Flight included",
      meals: "All meals included",
      rating: 4.9,
      reviewCount: 256,
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=500",
      badge: { type: 'new', text: 'New Package' },
      highlights: ["Beach Resorts", "Temple Tours", "Rice Terraces", "Spa Treatments", "Cultural Shows"],
      destination: "Asia",
      packageType: "Relaxation",
      priceCategory: "$1000 - $2000"
    },
    {
      id: 3,
      title: "Swiss Alps Mountain Adventure",
      location: "Interlaken, Switzerland",
      price: 3299,
      duration: "8 days",
      groupSize: "Max 10 people",
      transport: "Train included",
      meals: "Breakfast & Dinner",
      rating: 4.7,
      reviewCount: 189,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
      highlights: ["Jungfraujoch", "Paragliding", "Mountain Railways", "Alpine Lakes", "Hiking Trails"],
      destination: "Europe",
      packageType: "Adventure",
      priceCategory: "$2000 - $5000"
    },
    {
      id: 4,
      title: "Tokyo Modern Culture Experience",
      location: "Tokyo, Japan",
      price: 2199,
      duration: "6 days",
      groupSize: "Max 14 people",
      transport: "Flight included",
      meals: "Breakfast included",
      rating: 4.6,
      reviewCount: 412,
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500",
      highlights: ["Shibuya Crossing", "Sushi Making", "Temple Visits", "Anime Culture", "Cherry Blossoms"],
      destination: "Asia",
      packageType: "Cultural",
      priceCategory: "$2000 - $5000"
    },
    {
      id: 5,
      title: "African Safari Wildlife Adventure",
      location: "Serengeti, Tanzania",
      price: 4599,
      duration: "12 days",
      groupSize: "Max 8 people",
      transport: "Flight & Safari Vehicle",
      meals: "All meals included",
      rating: 4.9,
      reviewCount: 167,
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500",
      badge: { type: 'luxury', text: 'Luxury' },
      highlights: ["Big Five Safari", "Ngorongoro Crater", "Masai Village", "Hot Air Balloon", "Luxury Lodges"],
      destination: "Africa",
      packageType: "Adventure",
      priceCategory: "Over $5000"
    },
    {
      id: 6,
      title: "New York City Urban Explorer",
      location: "New York, USA",
      price: 1899,
      duration: "5 days",
      groupSize: "Max 20 people",
      transport: "Flight included",
      meals: "Breakfast included",
      rating: 4.4,
      reviewCount: 298,
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500",
      highlights: ["Statue of Liberty", "Broadway Shows", "Central Park", "Museums", "Food Tours"],
      destination: "North America",
      packageType: "Cultural",
      priceCategory: "$1000 - $2000"
    },
    {
      id: 7,
      title: "Australian Outback & Reef Adventure",
      location: "Queensland, Australia",
      price: 3799,
      duration: "14 days",
      groupSize: "Max 12 people",
      transport: "Flight included",
      meals: "Breakfast & Lunch",
      rating: 4.8,
      reviewCount: 134,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
      highlights: ["Great Barrier Reef", "Uluru", "Sydney Opera House", "Outback Experience", "Wildlife Parks"],
      destination: "Australia & Oceania",
      packageType: "Adventure",
      priceCategory: "$2000 - $5000"
    },
    {
      id: 8,
      title: "Machu Picchu Inca Trail Trek",
      location: "Cusco, Peru",
      price: 1599,
      duration: "9 days",
      groupSize: "Max 16 people",
      transport: "Flight included",
      meals: "All meals included",
      rating: 4.7,
      reviewCount: 203,
      image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=500",
      highlights: ["Inca Trail", "Machu Picchu", "Sacred Valley", "Local Communities", "Andean Culture"],
      destination: "South America",
      packageType: "Adventure",
      priceCategory: "$1000 - $2000"
    },
    {
      id: 9,
      title: "Mediterranean Cruise Luxury",
      location: "Mediterranean Sea",
      price: 2899,
      duration: "11 days",
      groupSize: "Max 2000 people",
      transport: "Cruise Ship",
      meals: "All meals included",
      rating: 4.5,
      reviewCount: 567,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500",
      highlights: ["Multiple Ports", "Luxury Amenities", "Fine Dining", "Entertainment", "Spa Services"],
      destination: "Europe",
      packageType: "Luxury",
      priceCategory: "$2000 - $5000"
    }
  ];

  // Initialize packages
  useEffect(() => {
    const timer = setTimeout(() => {
      setPackages(mockPackages);
      setFilteredPackages(mockPackages);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Filter packages based on current filters
  const filterPackages = useCallback((packagesToFilter, currentFilters) => {
    return packagesToFilter.filter(pkg => {
      // Search filter
      if (currentFilters.search) {
        const searchTerm = currentFilters.search.toLowerCase();
        const searchableText = `${pkg.title} ${pkg.location} ${pkg.highlights.join(' ')}`.toLowerCase();
        if (!searchableText.includes(searchTerm)) return false;
      }

      // Destination filter
      if (currentFilters.destination && currentFilters.destination !== 'All Destinations') {
        if (pkg.destination !== currentFilters.destination) return false;
      }

      // Price range filter
      if (currentFilters.priceRange && currentFilters.priceRange !== 'All Prices') {
        if (pkg.priceCategory !== currentFilters.priceRange) return false;
      }

      // Duration filter
      if (currentFilters.duration && currentFilters.duration !== 'All Durations') {
        const durationDays = parseInt(pkg.duration);
        switch (currentFilters.duration) {
          case '1-3 days':
            if (durationDays < 1 || durationDays > 3) return false;
            break;
          case '4-7 days':
            if (durationDays < 4 || durationDays > 7) return false;
            break;
          case '1-2 weeks':
            if (durationDays < 8 || durationDays > 14) return false;
            break;
          case '2-4 weeks':
            if (durationDays < 15 || durationDays > 28) return false;
            break;
          case 'Over 1 month':
            if (durationDays <= 30) return false;
            break;
        }
      }

      // Package type filter
      if (currentFilters.packageType && currentFilters.packageType !== 'All Types') {
        if (pkg.packageType !== currentFilters.packageType) return false;
      }

      // Rating filter
      if (currentFilters.rating && currentFilters.rating !== 'All Ratings') {
        const minRating = parseFloat(currentFilters.rating.replace('+', ''));
        if (pkg.rating < minRating) return false;
      }

      return true;
    });
  }, []);

  // Sort packages
  const sortPackages = useCallback((packagesToSort, sortBy) => {
    const sorted = [...packagesToSort];
    
    switch (sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'duration-short':
        return sorted.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
      case 'duration-long':
        return sorted.sort((a, b) => parseInt(b.duration) - parseInt(a.duration));
      case 'newest':
        return sorted.sort((a, b) => b.id - a.id);
      case 'popularity':
      default:
        return sorted.sort((a, b) => b.reviewCount - a.reviewCount);
    }
  }, []);

  // Handle filter changes
  const handleFilterChange = useCallback((newFilters) => {
    setFilters(newFilters);
    const filtered = filterPackages(packages, newFilters);
    const sorted = sortPackages(filtered, currentSort);
    setFilteredPackages(sorted);
  }, [packages, currentSort, filterPackages, sortPackages]);

  // Handle sort changes
  const handleSortChange = (newSort) => {
    setCurrentSort(newSort);
    const sorted = sortPackages(filteredPackages, newSort);
    setFilteredPackages(sorted);
  };

  // Handle removing individual filters
  const handleRemoveFilter = (filterKey) => {
    const newFilters = { ...filters, [filterKey]: '' };
    handleFilterChange(newFilters);
  };

  // Handle clearing all filters
  const handleClearAllFilters = () => {
    const clearedFilters = {
      search: '',
      destination: '',
      priceRange: '',
      duration: '',
      packageType: '',
      rating: ''
    };
    handleFilterChange(clearedFilters);
  };

  // Handle quick booking
  const handleBookNow = (pkg) => {
    setSelectedPackage(pkg);
    setIsBookingModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Travel Packages Catalog - TravelEase</title>
        <meta name="description" content="Browse and book amazing travel packages from around the world. Find your perfect adventure with TravelEase." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20 lg:pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Breadcrumb />
            
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4">
                Travel Packages
              </h1>
              <p className="text-lg text-text-secondary max-w-2xl">
                Discover amazing destinations and create unforgettable memories with our carefully curated travel packages.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <SearchFilter onFilterChange={handleFilterChange} />

              {/* Main Content */}
              <div className="flex-1">
                {/* Active Filters */}
                <ActiveFilters
                  filters={filters}
                  onRemoveFilter={handleRemoveFilter}
                  onClearAll={handleClearAllFilters}
                />

                {/* Results Header */}
                <ResultsHeader
                  totalResults={filteredPackages.length}
                  currentSort={currentSort}
                  onSortChange={handleSortChange}
                  viewMode={viewMode}
                  onViewModeChange={setViewMode}
                  loading={loading}
                />

                {/* Package Grid */}
                <PackageGrid
                  packages={filteredPackages}
                  loading={loading}
                  onBookNow={handleBookNow}
                />

                {/* Load More Button (for pagination) */}
                {!loading && filteredPackages.length > 0 && (
                  <div className="text-center mt-12">
                    <button className="px-8 py-3 bg-surface border border-border rounded-lg text-text-primary hover:bg-surface-hover transition-colors duration-200">
                      Load More Packages
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>

        {/* Quick Booking Modal */}
        <QuickBookingModal
          package={selectedPackage}
          isOpen={isBookingModalOpen}
          onClose={() => {
            setIsBookingModalOpen(false);
            setSelectedPackage(null);
          }}
        />
      </div>
    </>
  );
};

export default TravelPackagesCatalog;