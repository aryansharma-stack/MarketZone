import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Partners', path: '/partners' },
  ];

  const services = [
    { name: 'Dematerialisation', path: '/services#demat' },
    { name: 'Rematerialisation', path: '/services#remat' },
    { name: 'Demat Account', path: '/services#account' },
    { name: 'Downloads', path: '/downloads' },
  ];

  const resources = [
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Privacy Policy', path: '#' },
    { name: 'Terms & Conditions', path: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, url: '#', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Twitter, url: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Linkedin, url: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Instagram, url: '#', label: 'Instagram', color: 'hover:text-pink-500' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t-4 border-blue-600 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center space-x-3 mb-6 group inline-flex">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2.5 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white tracking-tight">DematPro</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-400">Financial Services</span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-8 pr-4 font-light text-sm">
              Trusted partner for secure and reliable Dematerialisation and Rematerialisation services across India. Building the future of digital asset management.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className={`bg-slate-900 border border-slate-800 p-3 rounded-full hover:-translate-y-1 transition-all duration-300 ${social.color} hover:border-slate-700 shadow-sm`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-white font-bold tracking-wide uppercase text-sm mb-6 flex items-center">
              <span className="w-8 h-px bg-blue-600 mr-3"></span> Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm font-medium hover:underline decoration-blue-500/50 underline-offset-4"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-bold tracking-wide uppercase text-sm mb-6 flex items-center">
              <span className="w-8 h-px bg-blue-600 mr-3"></span> Services
            </h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm font-medium hover:underline decoration-blue-500/50 underline-offset-4"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-white font-bold tracking-wide uppercase text-sm mb-6 flex items-center">
              <span className="w-8 h-px bg-blue-600 mr-3"></span> Contact Office
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start space-x-4 bg-slate-900/50 p-4 rounded-xl border border-slate-800/50 hover:bg-slate-800 transition-colors">
                <MapPin className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm font-medium leading-relaxed">
                  123 Financial District,<br /> Mumbai, Maharashtra 400001,<br /> India
                </span>
              </li>
              <li className="flex items-center space-x-4 group cursor-pointer">
                <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg group-hover:border-blue-500/50 group-hover:bg-slate-800 transition-all">
                   <Phone className="h-4 w-4 text-blue-500 flex-shrink-0" />
                </div>
                <span className="text-sm font-medium group-hover:text-white transition-colors">+91 22 1234 5678</span>
              </li>
              <li className="flex items-center space-x-4 group cursor-pointer">
                <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg group-hover:border-blue-500/50 group-hover:bg-slate-800 transition-all">
                  <Mail className="h-4 w-4 text-blue-500 flex-shrink-0" />
                </div>
                <span className="text-sm font-medium group-hover:text-white transition-colors">info@dematpro.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 relative z-20">
          <p className="text-xs font-medium text-slate-500 tracking-wide">
            © {new Date().getFullYear()} <span className="text-white font-bold">DematPro</span> Financial Services. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-[11px] uppercase tracking-widest font-black text-slate-600">
            <span className="hover:text-slate-400 cursor-default transition-colors">SEBI Reg.</span>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <span className="hover:text-slate-400 cursor-default transition-colors">RBI Compliant</span>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <span className="hover:text-slate-400 cursor-default transition-colors">256-bit SSL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
