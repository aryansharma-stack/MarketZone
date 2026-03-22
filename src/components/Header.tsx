import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Partners', path: '/partners' },
    { name: 'Downloads', path: '/downloads' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
        isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm border-slate-200 py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className={`p-2.5 rounded-xl transition-all duration-300 shadow-sm ${isScrolled ? 'bg-blue-600 group-hover:bg-blue-700' : 'bg-white/10 backdrop-blur-sm border border-white/20'}`}>
              <Shield className={`h-6 w-6 ${isScrolled ? 'text-white' : 'text-sky-400'}`} />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-black tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>DematPro</span>
              <span className={`text-[10px] font-bold tracking-widest uppercase ${isScrolled ? 'text-slate-500' : 'text-sky-200'}`}>Financial Services</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1 border border-slate-200/50 bg-slate-50/50 backdrop-blur-md p-1.5 rounded-full shadow-sm">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-white bg-blue-600 shadow-md transform scale-105'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className={`px-7 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${
                isScrolled 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white' 
                  : 'bg-white text-blue-900 shadow-white/10'
              }`}
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-xl transition-colors ${
              isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-100 overflow-hidden"
            >
              <div className="flex flex-col p-4 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-4 py-3 rounded-xl text-base font-bold transition-all ${
                      location.pathname === item.path
                        ? 'text-blue-700 bg-blue-50/80 shadow-sm'
                        : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 mt-2 border-t border-slate-100">
                  <Link
                    to="/contact"
                    className="block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3.5 rounded-xl font-bold shadow-md"
                  >
                    Get Started Required
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
