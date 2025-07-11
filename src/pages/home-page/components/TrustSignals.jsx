import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TrustSignals = () => {
  const statistics = [
    {
      icon: "Users",
      value: "50,000+",
      label: "Happy Travelers",
      description: "Customers who trust us"
    },
    {
      icon: "MapPin",
      value: "150+",
      label: "Destinations",
      description: "Countries worldwide"
    },
    {
      icon: "Award",
      value: "25+",
      label: "Awards Won",
      description: "Industry recognition"
    },
    {
      icon: "Star",
      value: "4.9/5",
      label: "Customer Rating",
      description: "Based on 10,000+ reviews"
    }
  ];

  const certifications = [
    {
      name: "IATA Certified",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      description: "International Air Transport Association"
    },
    {
      name: "ASTA Member",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      description: "American Society of Travel Advisors"
    },
    {
      name: "SSL Secured",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      description: "256-bit encryption protection"
    },
    {
      name: "Travel Insurance",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      description: "Comprehensive coverage included"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      comment: `TravelEase made our honeymoon absolutely perfect! The attention to detail and personalized service exceeded our expectations. Every moment was magical.`,
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      package: "Tropical Paradise Escape"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "San Francisco, USA",
      rating: 5,
      comment: `The Swiss Alps adventure was breathtaking! Professional guides, stunning locations, and seamless organization. Already planning our next trip with them.`,
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      package: "Swiss Alps Adventure"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "Miami, USA",
      rating: 5,
      comment: `Outstanding cultural experience in Japan! The local insights and authentic experiences made this trip unforgettable. Highly recommend TravelEase!`,
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      package: "Cultural Heritage Tour"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistics */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4">
              Trusted by Travelers Worldwide
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Join thousands of satisfied customers who have experienced the world with us.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon} size={32} className="text-primary" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-text-primary mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-text-secondary">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-text-primary mb-4">
              Industry Certifications & Security
            </h3>
            <p className="text-text-secondary">
              Your safety and security are our top priorities
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-background rounded-xl p-6 text-center border border-border hover:shadow-card transition-shadow duration-200">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Icon name="Shield" size={24} className="text-success" />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">
                  {cert.name}
                </h4>
                <p className="text-sm text-text-secondary">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Testimonials */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-text-primary mb-4">
              What Our Travelers Say
            </h3>
            <p className="text-text-secondary">
              Real experiences from real customers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-background rounded-2xl p-6 border border-border">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className={`${
                        i < testimonial.rating
                          ? 'text-accent fill-current' :'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-text-primary mb-6 leading-relaxed">
                  "{testimonial.comment}"
                </p>

                {/* Package */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary-50 text-primary text-sm rounded-lg">
                    {testimonial.package}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;