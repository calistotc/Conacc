import React, { useState } from 'react';
import { BookOpen, Download, Search, ChevronRight } from 'lucide-react';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const articles = [
    {
      title: 'Introduction to Control Accounting',
      category: 'Fundamentals',
      description: 'Learn the basics of control accounting and why it\'s essential for modern businesses.',
      readTime: '5 min read',
      date: 'January 15, 2025',
    },
    {
      title: 'Building Effective Financial Controls',
      category: 'Best Practices',
      description: 'A comprehensive guide to designing and implementing robust financial control systems.',
      readTime: '8 min read',
      date: 'January 10, 2025',
    },
    {
      title: 'SOX Compliance Made Simple',
      category: 'Compliance',
      description: 'Understanding Sarbanes-Oxley requirements and building compliant control systems.',
      readTime: '6 min read',
      date: 'January 5, 2025',
    },
    {
      title: 'Risk Assessment in Control Accounting',
      category: 'Risk Management',
      description: 'How to identify, assess, and mitigate financial risks through proper controls.',
      readTime: '7 min read',
      date: 'December 28, 2024',
    },
  ];

  const faqs = [
    {
      question: 'What is control accounting?',
      answer: 'Control accounting is a specialized field that focuses on establishing and maintaining financial controls to ensure accuracy, compliance, and risk mitigation in business operations.',
    },
    {
      question: 'Why do businesses need control accounting services?',
      answer: 'Control accounting helps businesses protect assets, ensure regulatory compliance, improve financial reporting accuracy, and reduce operational risks through systematic control frameworks.',
    },
    {
      question: 'How long does it take to implement control systems?',
      answer: 'Implementation timelines vary based on company size and complexity, but typically range from 6-16 weeks for comprehensive control system implementation.',
    },
    {
      question: 'What industries benefit most from control accounting?',
      answer: 'All industries benefit, but regulated industries like healthcare, financial services, and public companies often have the greatest need for robust control systems.',
    },
    {
      question: 'How do you measure control effectiveness?',
      answer: 'We use various metrics including control deficiency rates, process efficiency improvements, compliance scores, and risk reduction measurements.',
    },
  ];

  const filteredArticles = articles.filter(
    article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Resources & Insights
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Educational resources, insights, and tools to help you understand 
            control accounting and improve your financial operations.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <button className="text-purple-600 hover:text-purple-700 font-medium flex items-center group">
              View All Articles
              <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((article, index) => (
              <article
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-purple-200 group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-700">
                    <BookOpen className="h-4 w-4 mr-1" />
                    <span className="text-sm">Read More</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Common questions about control accounting and our services.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Free Resources
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Download our free guides and templates to get started with control accounting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-purple-200">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Control Assessment Checklist
              </h3>
              <p className="text-gray-600 mb-6">
                A comprehensive checklist to evaluate your current control environment.
              </p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200">
                Download PDF
              </button>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-purple-200">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Risk Assessment Template
              </h3>
              <p className="text-gray-600 mb-6">
                Template for conducting thorough financial risk assessments.
              </p>
              <button className="bg-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors duration-200">
                Download Excel
              </button>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-purple-200">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Control Documentation Guide
              </h3>
              <p className="text-gray-600 mb-6">
                Best practices for documenting your control processes and procedures.
              </p>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200">
                Download Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;