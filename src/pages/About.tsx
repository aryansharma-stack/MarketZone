import {
  Target,
  Eye,
  Award,
  Users,
  Shield,
  TrendingUp,
  CheckCircle,
  Building2,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Security & Trust',
      description:
        'We prioritize the security of your investments with bank-grade encryption and strict compliance protocols.',
    },
    {
      icon: TrendingUp,
      title: 'Excellence',
      description:
        'Committed to delivering exceptional service quality and continuous improvement in all our processes.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description:
        'Your satisfaction is our priority. We provide personalized support and guidance at every step.',
    },
    {
      icon: Award,
      title: 'Compliance',
      description:
        'Fully compliant with SEBI and RBI regulations, ensuring all transactions meet legal standards.',
    },
  ];

  const whyChooseUs = [
    'Over 10 years of industry experience',
    'SEBI registered and RBI compliant',
    'Partnership with 15+ leading banks',
    '50,000+ successful transactions',
    '99.9% customer satisfaction rate',
    '24/7 dedicated customer support',
    'Transparent pricing with no hidden charges',
    'Quick turnaround time',
  ];

  const team = [
    {
      role: 'Expert Team',
      description: 'Certified professionals with deep knowledge of securities and financial regulations',
    },
    {
      role: 'Technology',
      description: 'State-of-the-art systems ensuring secure and efficient processing at scale',
    },
    {
      role: 'Support',
      description: 'Dedicated customer service team available round the clock for your peace of mind',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <section className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-sky-900 text-white pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/30 blur-[120px] rounded-full pointer-events-none"></div>

        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-200">DematPro</span></h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed">
              Your trusted partner in secure, visionary, and efficient electronic share conversion services since 2012.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Who We Are</h2>
              <h3 className="text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">
                Pioneering Digital <br />Asset Management
              </h3>
              <div className="space-y-6 text-slate-600 text-[17px] leading-relaxed font-light">
                <p>
                  DematPro is a leading financial services company specializing in Dematerialisation and Rematerialisation services across India. With over a decade of experience, we have established ourselves as a trusted partner for investors seeking secure and efficient share conversion solutions.
                </p>
                <p>
                  We work in close partnership with multiple banks and financial institutions to provide seamless services that meet the highest standards of security and compliance. Our team of certified professionals ensures that every transaction is handled with absolute precision.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full"></div>
                <div className="bg-white/80 backdrop-blur-xl border border-slate-100 p-10 rounded-[2rem] shadow-2xl relative z-10">
                  <div className="grid grid-cols-2 gap-8">
                    {[
                      { val: '10+', label: 'Years Experience' },
                      { val: '50K+', label: 'Transactions' },
                      { val: '15+', label: 'Partner Banks' },
                      { val: '99.9%', label: 'Satisfaction' },
                    ].map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-600 mb-2">{stat.val}</div>
                        <div className="text-sm font-bold tracking-widest uppercase text-slate-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/40 blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 p-10 rounded-3xl hover:bg-slate-800/80 transition-colors">
              <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/30">
                <Target className="h-8 w-8 text-sky-400" />
              </div>
              <h2 className="text-3xl font-extrabold mb-6 tracking-tight">Our Mission</h2>
              <p className="text-slate-300 text-lg font-light leading-relaxed">
                To provide secure, efficient, and transparent Dematerialisation and Rematerialisation services that empower investors to manage their securities with absolute confidence.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 p-10 rounded-3xl hover:bg-slate-800/80 transition-colors">
              <div className="bg-indigo-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-indigo-500/30">
                <Eye className="h-8 w-8 text-indigo-400" />
              </div>
              <h2 className="text-3xl font-extrabold mb-6 tracking-tight">Our Vision</h2>
              <p className="text-slate-300 text-lg font-light leading-relaxed">
                To become India's most trusted partner for share conversion services, setting industry benchmarks in security, digital adoption, and unparalleled customer satisfaction.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Core Principles</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Values That Guide Us
            </h3>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-300">
                  <value.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-light">{value.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">The DematPro Edge</h2>
              <h3 className="text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">
                Why Thousands Choose Us
              </h3>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                We combine industry expertise with cutting-edge technology to offer the most reliable services in the market.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4 bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                  <div className="bg-blue-100 p-1.5 rounded-full shrink-0">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-slate-700 font-medium text-sm leading-relaxed tracking-wide">{reason}</span>
                </div>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-sm font-bold tracking-widest text-sky-300 uppercase mb-4">
            Security & Compliance
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight">
            Industry Benchmarks
          </h3>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
             We adhere to the strictest regulatory requirements set by SEBI and RBI, guaranteeing that all client transactions remain legally compliant and unconditionally secure.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {['SEBI Registered', 'RBI Compliant', 'ISO Certified', 'Data Encrypted'].map((cert, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-lg border border-white/20 px-8 py-4 rounded-full font-bold tracking-wide uppercase shadow-lg">
                 {cert}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
