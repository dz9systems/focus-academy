import React from 'react';
import { LineChart, Users, Cog, PenTool } from 'lucide-react';
export const ServicesSection = () => {
  const services = [{
    icon: <LineChart className="w-12 h-12 text-teal-600" />,
    title: 'Develop',
    description: 'Comprehensive assessments of emerging market trends, key competitors, and the technologies that are evolving across industries.'
  }, {
    icon: <Users className="w-12 h-12 text-teal-600" />,
    title: 'Identify',
    description: 'The most relevant stakeholders, trends, and opportunities matched to your business needs.'
  }, {
    icon: <Cog className="w-12 h-12 text-teal-600" />,
    title: 'Provide',
    description: 'A clear view of innovations, developments, and startups competing in the strategic segments.'
  }, {
    icon: <PenTool className="w-12 h-12 text-teal-600" />,
    title: 'Design',
    description: 'Comprehensive business, technology, and growth strategies to engage and participate.'
  }];
  return <section className="relative py-20 overflow-hidden bg-gray-50">
      {/* Decorative elements - simplified */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gray-100 rounded-full opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-100 rounded-full opacity-70 translate-x-1/3 translate-y-1/3"></div>
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
    }}></div>
      <div className="container relative z-10 mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 relative inline-block">
            WHAT WE DO
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-teal-500"></span>
          </h2>
        </div>
        {/* Services grid - simplified colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-teal-500">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>)}
        </div>
        {/* CTA section - simplified */}
        <div className="relative bg-white rounded-2xl p-12 shadow-xl max-w-5xl mx-auto mt-20">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Join Our Thriving,
              <br />
              Well-Integrated
              <br />
              Startup Community
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Connect with innovators, access resources, and accelerate your
              growth in our vibrant ecosystem of forward-thinking entrepreneurs
              and industry experts.
            </p>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-md text-sm font-medium transition-all duration-200 transform hover:scale-105 shadow-md">
              LEARN MORE
            </button>
          </div>
        </div>
        {/* Next step transition */}
        <div className="text-center mt-24">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 relative inline-block">
            READY FOR THE NEXT STEP?
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-teal-500"></span>
          </h2>
        </div>
      </div>
    </section>;
};