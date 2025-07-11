import React from 'react';
import Icon from '../../../components/AppIcon';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Adventure Traveler',
      content: 'TravelEase transformed my dream of exploring Southeast Asia into an incredible reality. Their attention to detail and local connections made every moment unforgettable.',
      rating: 5,
      image: '/assets/images/no_image.png'
    },
    {
      name: 'Robert Thompson',
      role: 'Business Executive',
      content: 'As someone who travels frequently for work, I appreciate TravelEase\'s efficiency and reliability. They handle everything seamlessly, allowing me to focus on what matters.',
      rating: 5,
      image: '/assets/images/no_image.png'
    },
    {
      name: 'Maria Santos',
      role: 'Family Traveler',
      content: 'Our family vacation to Europe was perfectly planned by TravelEase. They considered every detail, from kid-friendly activities to comfortable accommodations.',
      rating: 5,
      image: '/assets/images/no_image.png'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-6">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Real experiences from real travelers who trusted us with their journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-surface rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300">
              {/* Rating Stars */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-accent fill-current" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-text-secondary leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full hidden items-center justify-center">
                    <Icon name="User" size={20} color="white" />
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-surface rounded-xl p-8 shadow-card">
            <div className="flex items-center justify-center space-x-8 text-text-primary">
              <div className="text-center">
                <div className="text-3xl font-bold">4.9</div>
                <div className="text-sm text-text-secondary">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">2,500+</div>
                <div className="text-sm text-text-secondary">Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm text-text-secondary">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;