import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Factory, ShoppingCart, Heart, Landmark, Truck } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Building2,
      title: 'Real Estate',
      description: 'Specialized control accounting for property management, development, and investment companies.',
      challenges: ['Complex revenue recognition', 'Multi-entity consolidation', 'Construction accounting'],
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Cost accounting controls, inventory management, and production cost analysis for manufacturers.',
      challenges: ['Inventory valuation', 'Cost center controls', 'Production reporting'],
    },
    {
      icon: ShoppingCart,
      title: 'Retail & E-commerce',
      description: 'Revenue controls, inventory management, and multi-channel financial reporting systems.',
      challenges: ['Multi-channel revenue', 'Inventory tracking', 'Customer refunds'],
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Regulatory compliance controls, revenue cycle management, and specialized healthcare accounting.',
      challenges: ['HIPAA compliance', 'Revenue cycle controls', 'Grant accounting'],
    },
    {
      icon: Landmark,
      title: 'Financial Services',
      description: 'Risk management controls, regulatory reporting, and specialized financial industry compliance.',
      challenges: ['Regulatory reporting', 'Risk controls', 'Customer fund protection'],
    },
    {
      icon: Truck,
      title: 'Transportation & Logistics',
      description: 'Fleet management controls, route profitability analysis, and operational cost accounting.',
      challenges: ['Fleet cost tracking', 'Route profitability', 'Fuel cost controls'],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Specialized control accounting expertise across diverse industries, 
            each with unique challenges and regulatory requirements.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-purple-200 group"
              >
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-200">
                  <industry.icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {industry.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {industry.description}
                </p>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Focus Areas:</h4>
                  <ul className="space-y-2">
                    {industry.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 flex-shrink-0"></div>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Custom Solutions for Every Industry
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Every industry has unique control accounting challenges. Our experienced team 
                develops customized solutions that address your specific regulatory requirements, 
                operational complexities, and business objectives.
              </p>
              <div className="bg-white p-6 rounded-lg border-l-4 border-purple-600">
                <h3 className="font-semibold text-gray-900 mb-2">Industry-Specific Expertise</h3>
                <p className="text-gray-600">
                  Our team understands the nuances of different industries and can quickly 
                  identify control gaps and optimization opportunities specific to your sector.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/7841456/pexels-photo-7841456.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Industry-specific accounting solutions"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Industry Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              How our control accounting expertise delivers value across different sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-purple-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Regulatory Compliance</h3>
              <p className="text-gray-600 leading-relaxed">
                Stay ahead of industry-specific regulations with control systems designed 
                to ensure ongoing compliance and reduce audit risks.
              </p>
            </div>
            <div className="bg-teal-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Operational Efficiency</h3>
              <p className="text-gray-600 leading-relaxed">
                Streamline processes while maintaining strong controls, reducing costs 
                and improving overall business performance.
              </p>
            </div>
            <div className="bg-indigo-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk Mitigation</h3>
              <p className="text-gray-600 leading-relaxed">
                Identify and address industry-specific risks before they impact your 
                business operations or financial results.
              </p>
            </div>
            <div className="bg-orange-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategic Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Gain valuable insights from your control data to make informed 
                strategic decisions and drive business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Don't See Your Industry?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            We work with businesses across all sectors. Contact us to discuss how our 
            control accounting expertise can be tailored to your industry's unique needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Discuss Your Industry Needs
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Industries;