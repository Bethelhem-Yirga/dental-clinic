// components/layout/PublicLayout.jsx
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const PublicLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookClick = () => {
    navigate('/login', { state: { from: 'book-appointment' } });
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/team', label: 'Team' },
    { path: '/feedback', label: 'Feedback' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3' 
          : 'bg-transparent py-6'
      }`}>
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition">
                <span className="text-white text-2xl font-bold">M</span>
              </div>
              <div>
                <span className={`text-2xl font-bold transition-colors ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  MERCY
                </span>
                <span className={`block text-xs tracking-wider ${
                  scrolled ? 'text-gray-500' : 'text-gray-300'
                }`}>
                  DENTAL CLINIC
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${
                    location.pathname === item.path ? 'active' : ''
                  } ${scrolled ? 'text-gray-700' : 'text-white'}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Book Appointment Button */}
            <div className="hidden md:flex items-center">
              <button
                onClick={handleBookClick}
                className="relative group overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 
                         text-white px-8 py-3 rounded-full font-semibold 
                         hover:shadow-2xl hover:scale-105 transition-all duration-300
                         before:content-[''] before:absolute before:top-0 before:-left-full 
                         before:w-full before:h-full before:bg-gradient-to-r 
                         before:from-transparent before:via-white/30 before:to-transparent
                         hover:before:left-full before:transition-all before:duration-700"
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl 
                        transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="container-custom py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg transition ${
                  location.pathname === item.path
                    ? 'bg-blue-50 text-blue-600 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={handleBookClick}
              className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white 
                       px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content with padding for fixed navbar */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-400 rounded-xl flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">D</span>
                </div>
                <span className="text-2xl font-bold">DENTOI</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner for exceptional dental care. We create beautiful, healthy smiles every day.
              </p>
              <div className="flex space-x-4 mt-6">
                {['📘', '📷', '🐦', '💼'].map((icon, idx) => (
                  <a key={idx} href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center 
                                                  hover:bg-white/20 hover:scale-110 transition">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white hover:translate-x-2 transition">Teeth Cleaning</li>
                <li className="hover:text-white hover:translate-x-2 transition">Root Canals</li>
                <li className="hover:text-white hover:translate-x-2 transition">Dental Implants</li>
                <li className="hover:text-white hover:translate-x-2 transition">Cosmetic Dentistry</li>
                <li className="hover:text-white hover:translate-x-2 transition">Orthodontics</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe for dental tips and special offers</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-white/10 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 px-6 py-3 rounded-r-lg hover:bg-blue-700 transition">
                  →
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2026 MERCY Dental Clinic. All rights reserved. | Designed with ❤️ for healthy smiles</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;