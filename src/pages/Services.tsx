import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  FileText,
  RefreshCw,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Zap,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const dematSteps = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Fill out the dematerialisation request form with required details',
    },
    {
      step: 2,
      title: 'Document Verification',
      description: 'Submit physical share certificates and KYC documents',
    },
    {
      step: 3,
      title: 'Processing',
      description: 'Our team processes your request and coordinates with depositories',
    },
    {
      step: 4,
      title: 'Credit to Demat Account',
      description: 'Shares are credited to your Demat account in electronic form',
    },
  ];

  const dematBenefits = [
    'Elimination of risks associated with physical certificates',
    'Instant transfer of securities',
    'No stamp duty on transfer of securities',
    'Safer and more convenient than physical shares',
    'Easy portfolio tracking and management',
    'Faster settlement of trades',
  ];

  const rematSteps = [
    {
      step: 1,
      title: 'Request Submission',
      description: 'Submit rematerialisation request through your DP',
    },
    {
      step: 2,
      title: 'Debit from Account',
      description: 'Securities are debited from your Demat account',
    },
    {
      step: 3,
      title: 'Certificate Generation',
      description: 'Company registrar generates physical share certificates',
    },
    {
      step: 4,
      title: 'Delivery',
      description: 'Physical certificates are delivered to your registered address',
    },
  ];

  const rematBenefits = [
    'Get physical certificates for gifting purposes',
    'Useful for legal and succession planning',
    'Required for certain corporate actions',
    'Preference for tangible asset holding',
    'Safe custody by the company',
    'Traditional form of ownership proof',
  ];

  const accountSteps = [
    {
      step: 1,
      title: 'Choose Your Bank',
      description: 'Select from our list of partner banks',
    },
    {
      step: 2,
      title: 'Submit Documents',
      description: 'Provide KYC documents and application form',
    },
    {
      step: 3,
      title: 'In-Person Verification',
      description: 'Complete IPV process as per SEBI guidelines',
    },
    {
      step: 4,
      title: 'Account Activation',
      description: 'Receive your Demat account details and start trading',
    },
  ];

  const accountBenefits = [
    'Quick and hassle-free account opening',
    'Partnership with leading banks',
    'Expert guidance throughout the process',
    'Competitive annual maintenance charges',
    'Additional trading account support',
    'Complete documentation assistance',
  ];

  const features = [
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Quick turnaround time for all services',
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: '100% SEBI and RBI compliant processes',
    },
    {
      icon: Zap,
      title: 'Expert Support',
      description: 'Dedicated team to assist you at every step',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <section className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-sky-900 text-white pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/30 blur-[120px] rounded-full pointer-events-none"></div>

        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-200">Services</span></h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed">
              Comprehensive and premium solutions tailored for your share conversion and Demat account operations.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <div className="-mt-16 relative z-20">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 mb-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-100 border border-slate-100">
            {features.map((feature, index) => (
              <div key={index} className="text-center px-4 pt-8 md:pt-0 first:pt-0">
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-500 font-light leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <section id="demat" className="py-24 bg-white scroll-mt-24 relative overflow-hidden text-center">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-4 rounded-2xl mr-6 shadow-lg shadow-blue-500/30">
                  <FileText className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                  Dematerialisation
                </h2>
              </div>
              <p className="text-slate-600 text-[17px] font-light mb-8 leading-relaxed">
                Dematerialisation is the process of converting physical share certificates into electronic form. This service eliminates the need for physical handling of certificates, providing absolute security and convenience to trade your securities.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 mb-10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 w-full h-full bg-gradient-to-l from-white to-transparent pointer-events-none opacity-50"></div>
                <h3 className="font-bold text-slate-900 mb-5 text-xl tracking-tight">What You Need:</h3>
                <ul className="space-y-4 text-slate-700 font-medium">
                  {[
                    'Original physical share certificates',
                    'Demat account number',
                    'KYC documents (PAN, Aadhaar, Address proof)',
                    'Dematerialisation Request Form (DRF)'
                  ].map((req, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-white p-1 rounded-full shadow-sm mr-4 mt-0.5 shrink-0 border border-slate-100">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className="leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Key Advantages</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dematBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 text-sm font-medium leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight flex items-center">
                 <span className="bg-blue-600 text-white w-2 h-8 rounded-full mr-4 block"></span>
                 Process Flow
              </h3>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[34px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-200 before:to-transparent">
                {dematSteps.map((item, index) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                     
                    <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-slate-50 bg-blue-100 text-blue-600 font-black shadow shadow-blue-500/20 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-blue-600 group-hover:text-white transition-all z-10 text-xl">
                      {item.step}
                    </div>
                    
                    <div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] p-6 rounded-2xl shadow-sm bg-white border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-500 font-light leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section id="remat" className="py-24 bg-slate-50 scroll-mt-24 border-t border-slate-200 text-left">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
             
            <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight flex items-center">
                 <span className="bg-indigo-600 text-white w-2 h-8 rounded-full mr-4 block"></span>
                 Process Flow
              </h3>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[34px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-indigo-200 before:to-transparent">
                {rematSteps.map((item, index) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                     
                    <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-white bg-indigo-100 text-indigo-600 font-black shadow shadow-indigo-500/20 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-indigo-600 group-hover:text-white transition-all z-10 text-xl">
                      {item.step}
                    </div>
                    
                    <div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] p-6 rounded-2xl shadow-sm bg-slate-50 border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-500 font-light leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-br from-indigo-600 to-violet-600 p-4 rounded-2xl mr-6 shadow-lg shadow-indigo-500/30">
                  <RefreshCw className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                  Rematerialisation
                </h2>
              </div>
              <p className="text-slate-600 text-[17px] font-light mb-8 leading-relaxed">
                Rematerialisation is the process of converting electronic shares back into physical certificate form. Highly useful for investors preferring physical holding or executing legally mandated successions.
              </p>
              
              <div className="bg-white border border-slate-200 rounded-3xl p-8 mb-10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 w-full h-full bg-gradient-to-b from-indigo-50/50 to-transparent pointer-events-none opacity-50"></div>
                <h3 className="font-bold text-slate-900 mb-5 text-xl tracking-tight">What You Need:</h3>
                <ul className="space-y-4 text-slate-700 font-medium relative z-10">
                  {[
                    'Active Demat account with sufficient holdings',
                    'Rematerialisation Request Form (RRF)',
                    'Valid KYC documents',
                    'Processing fees payment'
                  ].map((req, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-slate-50 p-1 rounded-full shadow-sm mr-4 mt-0.5 shrink-0 border border-slate-100">
                        <CheckCircle className="h-5 w-5 text-indigo-600" />
                      </div>
                      <span className="leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Key Advantages</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {rematBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all">
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 text-sm font-medium leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
             
          </div>
        </AnimatedSection>
      </section>

      <section id="account" className="py-24 bg-white scroll-mt-24 relative overflow-hidden text-left border-t border-slate-200">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-br from-sky-500 to-blue-600 p-4 rounded-2xl mr-6 shadow-lg shadow-sky-500/30">
                  <Briefcase className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                  Account Mastery
                </h2>
              </div>
              <p className="text-slate-600 text-[17px] font-light mb-8 leading-relaxed">
                We provide complete end-to-end assistance in opening your Demat account with premium partner banks. Let our certified team handle all documentation to ensure a swift setup.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 mb-10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 w-full h-full bg-gradient-to-bl from-white to-transparent pointer-events-none opacity-50"></div>
                <h3 className="font-bold text-slate-900 mb-5 text-xl tracking-tight">Required Documents:</h3>
                <ul className="space-y-4 text-slate-700 font-medium relative z-10">
                  {[
                    'PAN Card (mandatory)',
                    'Aadhaar Card for e-KYC',
                    'Address proof (Passport, Voter ID, etc.)',
                    'Bank account details and cancelled cheque',
                    'Passport-size photographs'
                  ].map((req, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-white p-1 rounded-full shadow-sm mr-4 mt-0.5 shrink-0 border border-slate-100">
                        <CheckCircle className="h-5 w-5 text-sky-600" />
                      </div>
                      <span className="leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Key Advantages</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {accountBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-slate-100 hover:border-sky-200 hover:shadow-md transition-all">
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 text-sm font-medium leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight flex items-center">
                 <span className="bg-sky-500 text-white w-2 h-8 rounded-full mr-4 block"></span>
                 Process Flow
              </h3>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[34px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-sky-200 before:to-transparent">
                {accountSteps.map((item, index) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                     
                    <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-slate-50 bg-sky-100 text-sky-600 font-black shadow shadow-sky-500/20 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-sky-600 group-hover:text-white transition-all z-10 text-xl">
                      {item.step}
                    </div>
                    
                    <div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] p-6 rounded-2xl shadow-sm bg-white border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-500 font-light leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">
            Ready to Accelerate?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Contact us today to instantly begin your digital conversion with complete safety.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-blue-700 px-10 py-5 rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg group"
          >
            Request Services Now
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </AnimatedSection>
      </section>
    </div>
  );
}
