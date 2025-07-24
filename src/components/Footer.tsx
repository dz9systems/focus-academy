import React from 'react';
export const Footer = () => {
  const footerLinks = [{
    title: 'ABOUT US',
    links: ['Leadership', 'Faculty Advisors', 'Space']
  }, {
    title: 'WHAT WE OFFER',
    links: ['Corporate Innovation', 'Startup Strategy', 'Community']
  }, {
    title: 'KEEP IN TOUCH',
    links: ['News & Events', 'Contact Us']
  }];
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {footerLinks.map((section, index) => <div key={index}>
              <h4 className="text-sm font-semibold mb-4 text-gray-400">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => <li key={linkIndex}>
                    <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                      {link}
                    </a>
                  </li>)}
              </ul>
            </div>)}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-teal-400">
              HOME PAGE
            </h4>
            <div className="flex items-center mt-4">
              <div className="w-12 h-12 rounded-full border-2 border-teal-500 flex items-center justify-center mr-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">FA</span>
                </div>
              </div>
              <div>
                <h1 className="font-bold text-xl text-white">FOCUS ACADEMY</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p className="mb-2">181 2ND STREET, SF, CA 94105</p>
          <p>FOCUS ACADEMY 2025</p>
        </div>
      </div>
    </footer>;
};