import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, TrendingUp, Users, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Financial Control Systems',
      description: 'Comprehensive control frameworks to protect your business assets and ensure compliance.',
    },
    {
      icon: TrendingUp,
      title: 'Process Optimization',
      description: 'Streamline your accounting processes for better efficiency and accuracy.',
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'Professional guidance from experienced control accounting specialists.',
    },
  ];

  const benefits = [
    'Improved financial accuracy and reliability',
    'Enhanced regulatory compliance',
    'Reduced operational risk',
    'Streamlined accounting processes',
    'Expert oversight and guidance',
    'Customized solutions for your industry',
  ];

  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService", 
    "name": "CONACC",
    "description": "Professional control accounting services ensuring financial integrity and operational excellence for businesses in South Africa.",
    "url": "https://conacc.co.za",
    "logo": "https://conacc.co.za/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5 Argonaut",
      "addressLocality": "Sea Point",
      "addressRegion": "Western Cape",
      "addressCountry": "ZA"
    },
    "serviceType": "Control Accounting Services",
    "areaServed": "South Africa",
    "offers": [
      {
        "@type": "Service",
        "name": "Financial Control Systems",
        "description": "Comprehensive control frameworks to protect business assets and ensure compliance"
      },
      {
        "@type": "Service", 
        "name": "Process Optimization",
        "description": "Streamline accounting processes for better efficiency and accuracy"
      },
      {
        "@type": "Service",
        "name": "Expert Consultation",
        "description": "Professional guidance from experienced control accounting specialists"
      }
    ]
  };

  return (
    <div>
      <SEO 
        title="CONACC - Professional Control Accounting Services"
        description="Ensure financial integrity and operational excellence with our specialized control accounting expertise. We help businesses establish robust financial controls and maintain compliance in South Africa."
        keywords="control accounting, financial control, compliance, accounting services, South Africa, financial integrity, process optimization, expert consultation"
        canonical="https://conacc.co.za/"
        ogTitle="CONACC - Professional Control Accounting Services" 
        ogDescription="Professional control accounting services ensuring financial integrity and operational excellence for businesses in South Africa."
        structuredData={homeStructuredData}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Professional
                <span className="block text-purple-300">Control Accounting</span>
                Services
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Ensure financial integrity and operational excellence with our specialized 
                control accounting expertise. We help businesses establish robust financial 
                controls and maintain compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
                >
                  Request Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/services"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-200 flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/7841456/pexels-photo-7841456.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional accounting workspace"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-transparent opacity-20 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose CONACC?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our specialized control accounting services provide the foundation for financial 
              confidence and business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-purple-200 group"
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-200">
                  <feature.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Transform Your Financial Operations
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our control accounting expertise helps businesses establish reliable financial 
                systems that drive growth and ensure compliance with industry standards.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Financial analysis and control"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Strengthen Your Financial Controls?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let our control accounting experts help you build robust financial systems 
            that protect your business and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/services"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;