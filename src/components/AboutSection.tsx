import React from 'react';
export const AboutSection = () => {
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 relative inline-block">
            WHO WE ARE
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-teal-500"></span>
          </h2>
          <p className="text-lg text-gray-600 mt-8">
            <span className="font-medium text-gray-800">Focus Academy</span> is
            a global activation hub catalyzing innovation for science and
            technology.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            We provide a vibrant space, flexible laboratories, targeted business
            support, and our rich community empowering founders and
            technologists to develop, validate, and grow their innovation
            business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Innovation Hub
            </h3>
            <p className="text-gray-600">
              Our state-of-the-art facilities provide the perfect environment
              for startups and innovators to thrive, experiment, and grow.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Community Focused
            </h3>
            <p className="text-gray-600">
              Join a thriving community of like-minded innovators, mentors, and
              industry experts committed to driving technological advancement.
            </p>
          </div>
        </div>
      </div>
    </section>;
};