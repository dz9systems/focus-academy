import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon, ChevronDownIcon } from 'lucide-react';
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navItems = [{
    name: 'HOME',
    link: '#',
    dropdown: null
  }, {
    name: 'ABOUT US',
    link: '#',
    dropdown: [{
      name: 'LEADERSHIP',
      link: '#'
    }, {
      name: 'FACULTY',
      link: '#'
    }, {
      name: 'SPACE',
      link: '#'
    }]
  }, {
    name: 'WHAT WE OFFER',
    link: '#',
    dropdown: [{
      name: 'CORPORATE INNOVATION',
      link: '#'
    }, {
      name: 'STARTUP STRATEGY',
      link: '#'
    }, {
      name: 'FEM-FOCUS',
      link: '#'
    }, {
      name: 'COMMUNITY',
      link: '#'
    }]
  }, {
    name: 'NEWS & EVENTS',
    link: '#',
    dropdown: null
  }];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.nav-item')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeDropdown]);
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full border-2 border-teal-500 flex items-center justify-center mr-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">FA</span>
            </div>
          </div>
          <div>
            <h1 className={`font-bold text-xl transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              FOCUS ACADEMY
            </h1>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => <div key={item.name} className="relative nav-item">
              <button className={`text-sm font-medium hover:text-teal-500 transition-colors duration-200 flex items-center ${isScrolled ? 'text-gray-700' : 'text-white'}`} onClick={item.dropdown ? () => toggleDropdown(item.name) : undefined}>
                {item.name}
                {item.dropdown && <ChevronDownIcon className="ml-1 h-4 w-4" />}
              </button>
              {item.dropdown && activeDropdown === item.name && <div className="absolute top-full left-0 mt-1 bg-gray-900/90 backdrop-blur-sm shadow-lg rounded-md overflow-hidden min-w-[200px] z-50">
                  <div className="py-2">
                    {item.dropdown.map(dropdownItem => <a key={dropdownItem.name} href={dropdownItem.link} className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-150">
                        {dropdownItem.name}
                      </a>)}
                  </div>
                </div>}
            </div>)}
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors duration-200">
            CONTACT
          </button>
        </nav>
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <XIcon className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} /> : <MenuIcon className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />}
        </button>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-1">
              {navItems.map(item => <div key={item.name} className="py-2">
                  <button className="text-gray-700 text-sm font-medium hover:text-teal-500 transition-colors duration-200 flex items-center justify-between w-full" onClick={item.dropdown ? () => toggleDropdown(item.name) : undefined}>
                    <span>{item.name}</span>
                    {item.dropdown && <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                  </button>
                  {item.dropdown && activeDropdown === item.name && <div className="mt-2 pl-4 border-l-2 border-gray-200 space-y-2">
                      {item.dropdown.map(dropdownItem => <a key={dropdownItem.name} href={dropdownItem.link} className="block py-1 text-sm text-gray-600 hover:text-teal-500 transition-colors duration-150">
                          {dropdownItem.name}
                        </a>)}
                    </div>}
                </div>)}
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors duration-200 mt-4 w-full">
                CONTACT
              </button>
            </div>
          </div>
        </div>}
    </header>;
};