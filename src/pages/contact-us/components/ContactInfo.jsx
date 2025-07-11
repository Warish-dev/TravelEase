import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: 'MapPin',
      title: 'Visit Our Office',
      details: [
        '123 Travel Street',
        'Adventure City, AC 12345',
        'United States'
      ],
      action: 'Get Directions',
      href: 'https://maps.google.com'
    },
    {
      icon: 'Phone',
      title: 'Call Us',
      details: [
        '+1 (555) 123-4567',
        'Mon-Fri: 9:00 AM - 6:00 PM',
        'Sat: 10:00 AM - 4:00 PM'
      ],
      action: 'Call Now',
      href: 'tel:+15551234567'
    },
    {
      icon: 'Mail',
      title: 'Email Us',
      details: [
        'info@travelease.com',
        'support@travelease.com',
        'Response within 24 hours'
      ],
      action: 'Send Email',
      href: 'mailto:info@travelease.com'
    },
    {
      icon: 'MessageCircle',
      title: 'Live Chat',
      details: [
        'Available 24/7',
        'Instant Support',
        'Multi-language Support'
      ],
      action: 'Start Chat',
      href: '#'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div>
        <h3 className="text-2xl font-heading font-bold text-text-primary mb-6">
          Contact Information
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white border border-border rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mr-4">
                  <Icon name={method.icon} size={24} className="text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-text-primary">
                  {method.title}
                </h4>
              </div>
              <div className="space-y-2 mb-4">
                {method.details.map((detail, idx) => (
                  <p key={idx} className="text-text-secondary">
                    {detail}
                  </p>
                ))}
              </div>
              <a
                href={method.href}
                className="inline-flex items-center text-primary hover:text-primary-700 font-medium transition-colors duration-200"
              >
                {method.action}
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Business Hours */}
      <div>
        <h3 className="text-2xl font-heading font-bold text-text-primary mb-6">
          Business Hours
        </h3>
        <div className="bg-white border border-border rounded-xl p-6">
          <div className="space-y-3">
            {businessHours.map((schedule, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                <span className="text-text-primary font-medium">{schedule.day}</span>
                <span className="text-text-secondary">{schedule.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Response Time */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <div className="flex items-center mb-4">
          <Icon name="Clock" size={24} className="text-blue-600 mr-3" />
          <h4 className="text-lg font-semibold text-blue-800">
            Expected Response Time
          </h4>
        </div>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-center">
            <Icon name="CheckCircle" size={16} className="text-blue-600 mr-2" />
            Email inquiries: Within 24 hours
          </li>
          <li className="flex items-center">
            <Icon name="CheckCircle" size={16} className="text-blue-600 mr-2" />
            Phone calls: Immediate response during business hours
          </li>
          <li className="flex items-center">
            <Icon name="CheckCircle" size={16} className="text-blue-600 mr-2" />
            Live chat: Instant response 24/7
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;