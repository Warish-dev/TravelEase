import React from 'react';
import Icon from '../../../components/AppIcon';

const SocialMedia = () => {
  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: 'Facebook',
      handle: '@TravelEase',
      followers: '125K',
      description: 'Follow us for travel tips, destination highlights, and exclusive offers.',
      color: 'bg-blue-600 hover:bg-blue-700',
      url: 'https://facebook.com/travelease'
    },
    {
      name: 'Instagram',
      icon: 'Instagram',
      handle: '@travelease_official',
      followers: '89K',
      description: 'Beautiful travel photography and behind-the-scenes content.',
      color: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
      url: 'https://instagram.com/travelease_official'
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      handle: '@TravelEase',
      followers: '56K',
      description: 'Latest travel news, updates, and quick customer support.',
      color: 'bg-sky-500 hover:bg-sky-600',
      url: 'https://twitter.com/travelease'
    },
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      handle: 'TravelEase',
      followers: '32K',
      description: 'Professional travel insights and industry updates.',
      color: 'bg-blue-700 hover:bg-blue-800',
      url: 'https://linkedin.com/company/travelease'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
          Follow Us
        </h3>
        <p className="text-text-secondary text-lg">
          Stay connected with us on social media for the latest travel inspiration, tips, and exclusive offers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {socialPlatforms.map((platform, index) => (
          <a
            key={index}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-200 hover:border-primary"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white transition-all duration-200 ${platform.color}`}>
                  <Icon name={platform.icon} size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-text-primary group-hover:text-primary transition-colors duration-200">
                    {platform.name}
                  </h4>
                  <p className="text-text-secondary text-sm">{platform.handle}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-text-primary">{platform.followers}</p>
                <p className="text-text-secondary text-sm">followers</p>
              </div>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              {platform.description}
            </p>
            <div className="mt-4 flex items-center text-primary group-hover:text-primary-700 transition-colors duration-200">
              <span className="text-sm font-medium">Follow us</span>
              <Icon name="ExternalLink" size={16} className="ml-2" />
            </div>
          </a>
        ))}
      </div>

      {/* Community Engagement */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-white">
        <div className="text-center">
          <Icon name="Users" size={48} className="mx-auto mb-4 text-white" />
          <h4 className="text-xl font-heading font-bold mb-2">
            Join Our Travel Community
          </h4>
          <p className="text-white/90 mb-4">
            Connect with fellow travelers, share your experiences, and discover new destinations together.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Join Community
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors duration-200"
            >
              <Icon name="Share2" size={20} className="mr-2" />
              Share Your Trip
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;