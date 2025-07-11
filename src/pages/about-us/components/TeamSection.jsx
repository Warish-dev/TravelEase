import React from 'react';
import Icon from '../../../components/AppIcon';

const TeamSection = () => {
  const leadership = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      bio: 'With over 20 years in the travel industry, Sarah founded TravelEase to make extraordinary travel accessible to everyone.',
      expertise: ['Strategic Leadership', 'Business Development', 'Customer Experience'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Michael Chen',
      role: 'Chief Operating Officer',
      bio: 'Michael oversees daily operations and ensures seamless travel experiences for our customers worldwide.',
      expertise: ['Operations Management', 'Process Optimization', 'Quality Assurance'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Customer Experience',
      bio: 'Emily leads our customer service team and ensures every traveler receives personalized, exceptional service.',
      expertise: ['Customer Service', 'Team Leadership', 'Travel Consultation'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'David Kim',
      role: 'Head of Product & Technology',
      bio: 'David drives innovation in our digital platforms and develops new technologies to enhance the travel experience.',
      expertise: ['Product Development', 'Technology Innovation', 'Digital Strategy'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    }
  ];

  const departments = [
    {
      name: 'Travel Specialists',
      count: '25+',
      description: 'Expert travel consultants with deep knowledge of destinations worldwide',
      icon: 'Users'
    },
    {
      name: 'Customer Support',
      count: '15+',
      description: '24/7 support team ensuring assistance whenever you need it',
      icon: 'Headphones'
    },
    {
      name: 'Operations Team',
      count: '20+',
      description: 'Behind-the-scenes experts managing bookings, logistics, and partnerships',
      icon: 'Settings'
    },
    {
      name: 'Marketing & Sales',
      count: '10+',
      description: 'Creative professionals sharing amazing travel stories and opportunities',
      icon: 'Megaphone'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Our passionate team of travel experts is dedicated to making your dream vacation a reality.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h3 className="text-2xl font-heading font-bold text-text-primary text-center mb-12">
            Leadership Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                {/* Profile Picture Placeholder */}
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Icon name="User" size={32} className="text-white" />
                </div>
                
                <h4 className="text-xl font-heading font-bold text-text-primary mb-2">
                  {member.name}
                </h4>
                <p className="text-primary font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                
                {/* Expertise */}
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-text-primary mb-2">Expertise</h5>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-primary-50 text-primary text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <a href={member.social.linkedin} className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                    <Icon name="Linkedin" size={16} className="text-white" />
                  </a>
                  <a href={member.social.twitter} className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors duration-200">
                    <Icon name="Twitter" size={16} className="text-white" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Departments */}
        <div>
          <h3 className="text-2xl font-heading font-bold text-text-primary text-center mb-12">
            Our Departments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white border-2 border-border rounded-2xl p-8 text-center hover:border-primary transition-colors duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Icon name={dept.icon} size={28} className="text-white" />
                </div>
                <h4 className="text-xl font-heading font-bold text-text-primary mb-2">
                  {dept.name}
                </h4>
                <div className="text-2xl font-bold text-primary mb-4">
                  {dept.count}
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {dept.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Team */}
        <div className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-white text-center">
          <Icon name="Briefcase" size={48} className="mx-auto mb-6 text-white" />
          <h3 className="text-2xl font-heading font-bold mb-4">
            Join Our Team
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Are you passionate about travel and helping others create unforgettable experiences? We're always looking for talented individuals to join our growing team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              <Icon name="Search" size={20} className="mr-2" />
              View Open Positions
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors duration-200"
            >
              <Icon name="Mail" size={20} className="mr-2" />
              Send Your Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;