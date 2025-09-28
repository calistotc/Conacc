import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: '',
    });
    
    alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      info: 'Hylton: 0636406138 | Wesley: 0620258402',
      description: 'Mon-Fri 8:30 AM - 4:30 PM',
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'info@conacc.co.za | simpsonbless922@gmail.com',
      description: 'We respond within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Office',
      info: '5 Argonaut, Sea Point',
      description: 'Cape Town, South Africa',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      info: 'Monday - Friday',
      description: '8:30 AM - 4:30 PM',
    },
  ];

  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact CONACC",
    "description": "Get in touch with CONACC for professional control accounting services. Contact us for consultations and inquiries.",
    "url": "https://conacc.co.za/contact",
    "mainEntity": {
      "@type": "ProfessionalService",
      "name": "CONACC",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5 Argonaut",
        "addressLocality": "Sea Point",
        "addressRegion": "Western Cape",
        "addressCountry": "ZA"
      }
    }
  };

  return (
    <div className="pt-16">
      <SEO 
        title="Contact CONACC - Professional Control Accounting Services"
        description="Get in touch with CONACC for professional control accounting services. Contact us for consultations, inquiries, and expert financial control solutions in South Africa."
        keywords="contact CONACC, control accounting consultation, financial services contact, accounting services South Africa"
        canonical="https://conacc.co.za/contact"
        ogTitle="Contact CONACC - Professional Control Accounting Services"
        ogDescription="Get in touch with CONACC for professional control accounting services and expert financial control solutions."
        structuredData={contactStructuredData}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Contact CONACC
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your control accounting needs? Get in touch with our team 
            for a consultation tailored to your business requirements.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Request a Consultation
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your.email@company.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                        errors.company ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your company name"
                    />
                    {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                      errors.service ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select a service</option>
                    <option value="financial-controls">Financial Control Systems</option>
                    <option value="compliance">Compliance Support</option>
                    <option value="risk-management">Risk Management</option>
                    <option value="process-optimization">Process Optimization</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                  {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your control accounting needs..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-200 flex items-center justify-center ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : 'transform hover:scale-105 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We're here to help you strengthen your financial controls. Reach out to us 
                through any of the channels below, and we'll respond promptly.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <item.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-700 font-medium">{item.info}</p>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Location</h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center border border-gray-300">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Interactive map will be displayed here</p>
                    <p className="text-sm text-gray-400">5 Argonaut, Sea Point, Cape Town, South Africa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;