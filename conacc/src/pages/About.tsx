import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Award, Users, ArrowRight, Phone, Mail } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'We deliver accurate, detail-oriented control accounting solutions.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Our commitment to quality ensures the highest standards of service.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We work closely with clients to understand their unique needs.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About CONACC
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We are a specialized control accounting firm dedicated to helping businesses 
                establish and maintain robust financial control systems that ensure accuracy, 
                compliance, and operational excellence.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/7688444/pexels-photo-7688444.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional team meeting"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              To empower businesses with comprehensive control accounting solutions that provide 
              financial clarity, regulatory compliance, and strategic insights. We believe that 
              strong financial controls are the foundation of sustainable business success.
            </p>
            <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
              <p className="text-lg text-gray-700 italic leading-relaxed">
                "Our expertise in control accounting helps businesses build trust with stakeholders, 
                reduce financial risk, and create the foundation for sustainable growth and success."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These principles guide everything we do and shape how we serve our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-200">
                  <value.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the experienced professionals leading CONACC's control accounting practice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hylton Lazarus - CEO */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Hylton Lazarus"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Hylton Lazarus</h3>
                <p className="text-purple-600 font-semibold mb-3">Chief Executive Officer</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Visionary leader with extensive experience in control accounting and strategic business development.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>0636406138</span>
                </div>
              </div>
            </div>
            
            {/* Wesley Bless - Director */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Wesley Bless"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Wesley Bless</h3>
                <p className="text-purple-600 font-semibold mb-3">Director</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Expert in financial control implementation and operational excellence with proven track record.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>0620258402</span>
                </div>
              </div>
            </div>
            
            {/* Third team member placeholder */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                  <Users className="h-16 w-16 text-purple-400" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Join Our Team</h3>
                <p className="text-purple-600 font-semibold mb-3">We're Growing</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Interested in joining our team of control accounting professionals? We'd love to hear from you.
                </p>
                <div className="flex items-center text-sm text-purple-600 font-medium">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>careers@conacc.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Partner with Control Accounting Experts
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to strengthen your financial controls? Contact us today to discuss 
            how we can help protect and optimize your business operations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl group"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;