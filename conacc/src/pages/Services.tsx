import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, FileText, BarChart3, Settings, AlertTriangle, CheckCircle2, Users, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const Services = () => {
  const mainServices = [
    {
      icon: Shield,
      title: 'Financial Control Systems',
      description: 'Design and implementation of comprehensive financial control frameworks to protect assets and ensure accuracy.',
      features: ['Internal control design', 'SOX compliance support', 'Control documentation', 'Risk assessment'],
    },
    {
      icon: FileText,
      title: 'Control Documentation',
      description: 'Detailed documentation of control processes, procedures, and compliance requirements.',
      features: ['Process mapping', 'Control matrices', 'Policy development', 'Procedure documentation'],
    },
    {
      icon: BarChart3,
      title: 'Financial Reporting Controls',
      description: 'Specialized controls for accurate and timely financial reporting and regulatory compliance.',
      features: ['Month-end controls', 'Reconciliation procedures', 'Financial close optimization', 'Reporting accuracy'],
    },
    {
      icon: Settings,
      title: 'Process Optimization',
      description: 'Streamline accounting processes to improve efficiency while maintaining strong controls.',
      features: ['Workflow analysis', 'Automation opportunities', 'Efficiency improvements', 'Cost reduction'],
    },
    {
      icon: AlertTriangle,
      title: 'Risk Management',
      description: 'Identify, assess, and mitigate financial and operational risks through robust control systems.',
      features: ['Risk identification', 'Control gap analysis', 'Mitigation strategies', 'Ongoing monitoring'],
    },
    {
      icon: CheckCircle2,
      title: 'Compliance Support',
      description: 'Ensure adherence to regulatory requirements and industry standards through effective controls.',
      features: ['Regulatory compliance', 'Audit preparation', 'Control testing', 'Remediation support'],
    },
  ];

  const additionalServices = [
    'Cash Book Write Up',
    'Cash Flow Forecast',
    'Customer Invoicing',
    'Credit Control',
    'General Ledger',
    'Trial Balance',
    'Management Accounts',
    'Year End Financials',
    'VAT Returns',
    'Tax Returns',
    'Staff PAYE',
    'BEE Compliance',
    'Forex Imports',
    'Secretarial Work',
    'Commercial Contracts',
    'Legal Implications',
    'Stock Control',
    'Storage & Handling',
    'Training Services',
  ];

  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Control Accounting Services",
    "description": "Comprehensive control accounting services including financial control systems, documentation, compliance monitoring, and risk assessment.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "CONACC",
      "url": "https://conacc.co.za"
    },
    "areaServed": "South Africa",
    "serviceType": "Control Accounting",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Control Accounting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Financial Control Systems",
            "description": "Design and implementation of comprehensive financial control frameworks"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Control Documentation",
            "description": "Complete documentation of control procedures and processes"
          }
        }
      ]
    }
  };

  return (
    <div className="pt-16">
      <SEO 
        title="Control Accounting Services - CONACC"
        description="Comprehensive control accounting services including financial control systems, control documentation, compliance monitoring, and risk assessment. Expert solutions for South African businesses."
        keywords="control accounting services, financial control systems, compliance monitoring, risk assessment, control documentation, South Africa"
        canonical="https://conacc.co.za/services"
        ogTitle="Professional Control Accounting Services - CONACC"
        ogDescription="Expert control accounting services including financial control systems, documentation, and compliance monitoring for businesses in South Africa."
        structuredData={servicesStructuredData}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Control Accounting Services
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive control accounting solutions designed to protect your business, 
            ensure compliance, and drive operational excellence.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Specialized control accounting services tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-purple-200 group"
              >
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-200">
                  <service.icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-teal-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Specializations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive control accounting services across all business functions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-purple-200"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-16 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  In-House Training & Development
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Empower your team with specialized control accounting knowledge through our 
                  comprehensive in-house training programs. We help your staff develop the skills 
                  needed to maintain effective financial controls and drive operational excellence.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-teal-600" />
                    <span className="text-gray-700">Customized training programs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-teal-600" />
                    <span className="text-gray-700">Expert-led workshops</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-teal-600" />
                    <span className="text-gray-700">Practical, hands-on learning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-teal-600" />
                    <span className="text-gray-700">Ongoing support and mentoring</span>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <img
                  src="https://images.pexels.com/photos/7688465/pexels-photo-7688465.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Professional training session"
                  className="rounded-xl shadow-lg mb-6"
                />
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                >
                  Learn About Training
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A systematic methodology to deliver effective control accounting solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600">Comprehensive review of current control environment</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">Custom control framework tailored to your business</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600">Systematic rollout with training and documentation</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Monitoring</h3>
              <p className="text-gray-600">Ongoing support and control effectiveness monitoring</p>
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
            Contact us today to discuss how our control accounting expertise can benefit your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;