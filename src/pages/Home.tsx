import { Link } from 'react-router-dom';
import {
  Shield,
  Zap,
  Users,
  ArrowRight,
  FileText,
  RefreshCw,
  Briefcase,
  Lock,
  Star,
  Building2,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function Home() {
  const highlights = [
    {
      icon: Shield,
      title: '100% Secure',
      description: 'Bank-grade security with complete data protection and end-to-end encryption.',
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Lightning-fast turnaround time for all transactions and requests.',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 dedicated customer assistance from certified professionals.',
    },
    {
      icon: Building2,
      title: 'Trusted Partners',
      description: 'Working with leading banks and financial institutions across India.',
    },
  ];

  const services = [
    {
      icon: FileText,
      title: 'Dematerialisation',
      description: 'Convert your physical shares into digital format securely and efficiently. Eliminate physical risks.',
      link: '/services#demat',
    },
    {
      icon: RefreshCw,
      title: 'Rematerialisation',
      description: 'Convert digital shares back to physical certificates seamlessly when required.',
      link: '/services#remat',
    },
    {
      icon: Briefcase,
      title: 'Demat Account Support',
      description: 'Complete assistance in opening and managing your Demat account with partner banks.',
      link: '/services#account',
    },
  ];

  const partners = [
    'HDFC Bank',
    'ICICI Bank',
    'State Bank of India',
    'Axis Bank',
    'Kotak Mahindra',
    'IDFC First Bank',
    'Yes Bank',
    'IndusInd Bank',
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Investor',
      content:
        'Excellent service! The dematerialisation process was smooth and completed within the promised timeframe. Highly recommended.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Business Owner',
      content:
        'Professional team with great expertise. They helped me convert all my physical shares to digital format seamlessly.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      role: 'Retail Investor',
      content:
        'Very reliable and trustworthy. The customer support team is always helpful and responsive to any queries I had.',
      rating: 5,
    },
  ];

  const stats = [
    { value: '50,000+', label: 'Transactions Processed' },
    { value: '15+', label: 'Partner Banks' },
    { value: '10+', label: 'Years Experience' },
    { value: '99.9%', label: 'Customer Satisfaction' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <section className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-sky-900 overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/30 blur-[120px] rounded-full pointer-events-none"></div>
        
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full mb-8 shadow-sm">
            <Lock className="h-4 w-4 text-sky-300" />
            <span className="text-sm font-semibold tracking-wide uppercase text-sky-50">100% Secure & Compliant Process</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight">
            Seamlessly Manage Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-200">
              Financial Securities
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Trusted partner for converting physical shares to digital and vice versa. Fast, secure, and fully compliant with SEBI regulations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold border border-white/30 hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center hover:scale-105"
            >
              Our Services
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <div className="-mt-16 relative z-20">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-gray-100 border border-gray-100">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-4">
                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-500 font-semibold text-sm md:text-base tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              The DematPro Advantage
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experience unparalleled security and efficiency with our premium services.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <AnimatedSection key={index} delay={index * 0.1} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 group hover:-translate-y-2">
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <highlight.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-[15px]">{highlight.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">What We Do</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Premium Share Solutions
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive and fully managed solutions for your conversion requirements.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.15}
                className="bg-slate-50 p-10 rounded-[2rem] hover:bg-white hover:shadow-2xl border border-transparent hover:border-slate-100 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 group-hover:scale-150 transition-all duration-700 pointer-events-none">
                   <service.icon className="w-48 h-48" />
                </div>
                <div className="bg-white shadow-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8 relative z-10 text-lg">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 relative z-10 group/link"
                >
                  Explore Service
                  <ArrowRight className="ml-2 h-5 w-5 group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-slate-900 text-white">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-sky-400 uppercase mb-3">Our Network</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
              Partner Organizations
            </h3>
            <p className="text-lg text-slate-400">
              Collaborating with the absolute best in finance.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col items-center justify-center hover:bg-slate-700 transition-colors group cursor-default"
              >
                <Building2 className="h-8 w-8 text-slate-500 group-hover:text-sky-400 transition-colors mb-3" />
                <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">{partner}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Testimonials</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Client Success Stories
            </h3>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.15}
                className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex mb-6 space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-slate-700 text-lg mb-8 italic leading-relaxed font-serif">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                     <span className="font-bold text-blue-600 text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500 font-medium">{testimonial.role}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between bg-white/10 backdrop-blur-lg border border-white/20 p-10 md:p-14 rounded-3xl shadow-2xl">
            <div className="mb-8 md:mb-0 text-center md:text-left md:pr-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
                Ready to secure your future?
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 font-light max-w-xl">
                Join thousands of satisfied investors and manage your assets with maximum safety.
              </p>
            </div>
            <div className="shrink-0 flex gap-4">
              <Link
                to="/contact"
                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 inline-flex items-center whitespace-nowrap"
              >
                Contact Us Now
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
