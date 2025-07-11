import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: 'How do I book a travel package?',
      answer: 'You can book a travel package through our website by browsing our packages, selecting your preferred dates, and completing the booking form. Alternatively, you can call our customer service team for personalized assistance.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Our cancellation policy varies by package type. Generally, cancellations made 30+ days before departure receive a full refund minus processing fees. Cancellations within 30 days may be subject to penalties. Please review the specific terms for your package.'
    },
    {
      question: 'Do you offer travel insurance?',
      answer: 'Yes, we strongly recommend travel insurance and offer comprehensive coverage options. Our travel insurance can protect you against trip cancellations, medical emergencies, lost luggage, and other unexpected events.'
    },
    {
      question: 'Can I customize my travel package?',
      answer: 'Absolutely! We specialize in creating customized travel experiences. Our travel experts can modify existing packages or create entirely new itineraries based on your preferences, budget, and interests.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and installment payment plans. A deposit is typically required to secure your booking.'
    },
    {
      question: 'How far in advance should I book?',
      answer: 'We recommend booking at least 2-3 months in advance for international trips and 4-6 weeks for domestic travel. This ensures better availability and pricing, especially during peak seasons.'
    },
    {
      question: 'Do you provide 24/7 customer support?',
      answer: 'Yes, we offer 24/7 emergency support for travelers. Our regular customer service is available during business hours, but emergency assistance is always available for urgent travel-related issues.'
    },
    {
      question: 'What happens if my flight is cancelled?',
      answer: 'If your flight is cancelled, we\'ll work with you and the airline to find alternative arrangements. Our team will help rebook your flights and adjust your itinerary as needed to minimize disruption to your trip.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Find answers to common questions about our services. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-text-primary pr-4">
                    {faq.question}
                  </h3>
                  <Icon 
                    name={openFAQ === index ? "ChevronUp" : "ChevronDown"} 
                    size={24} 
                    className="text-text-secondary flex-shrink-0 transition-transform duration-200"
                  />
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4 bg-gray-50 border-t border-border">
                  <p className="text-text-secondary leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-center">
          <div className="bg-primary-50 rounded-2xl p-8">
            <Icon name="HelpCircle" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
              Still Need Help?
            </h3>
            <p className="text-text-secondary text-lg mb-6">
              Our customer support team is here to help you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Call Support
              </a>
              <a
                href="mailto:support@travelease.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary border border-primary rounded-lg hover:bg-primary-50 transition-colors duration-200"
              >
                <Icon name="Mail" size={20} className="mr-2" />
                Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;