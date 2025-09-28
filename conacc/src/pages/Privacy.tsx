import React from 'react';
import { Shield, Eye, Lock, FileText } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Last updated: January 1, 2025
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="h-6 w-6 text-purple-600 mr-2" />
                Information We Collect
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Fill out our contact forms or request consultations</li>
                  <li>Subscribe to our newsletter or communications</li>
                  <li>Communicate with us via email, phone, or other channels</li>
                  <li>Use our website and interact with our content</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="h-6 w-6 text-purple-600 mr-2" />
                How We Use Your Information
              </h2>
              <div className="bg-purple-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Respond to your inquiries and provide requested services</li>
                  <li>Send you relevant information about our services</li>
                  <li>Improve our website and service offerings</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect our rights and prevent fraud</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="h-6 w-6 text-purple-600 mr-2" />
                Information Sharing
              </h2>
              <div className="bg-teal-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>To trusted service providers who assist us in operating our website</li>
                  <li>When required by law or to protect our legal rights</li>
                  <li>With your explicit consent</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>SSL encryption for all data transmission</li>
                <li>Secure servers and regular security updates</li>
                <li>Limited access to personal information on a need-to-know basis</li>
                <li>Regular security assessments and improvements</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability (where applicable)</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website uses cookies and similar technologies to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve our website functionality and user experience</li>
                <li>Provide relevant content and advertisements</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                You can control cookie settings through your browser preferences.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any 
                material changes by posting the new privacy policy on this page and updating 
                the "Last updated" date.
              </p>
            </div>

            <div className="bg-purple-50 p-8 rounded-lg border border-purple-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us About Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions or concerns about this privacy policy or our data practices, 
                please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> privacy@conacc.com</p>
                <p><strong>Phone:</strong> (555) 123-4567</p>
                <p><strong>Address:</strong> 123 Business District, City, State 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;