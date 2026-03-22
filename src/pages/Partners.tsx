import { Building2, CheckCircle, Award, Landmark, Globe } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function Partners() {
  const partnerBanks = [
    {
      name: 'HDFC Bank',
      category: 'Top Tier Private',
      services: ['Demat Origination', 'Trading Nexus', '3-in-1 Ledger'],
    },
    {
      name: 'ICICI Bank',
      category: 'Top Tier Private',
      services: ['Demat Origination', 'Trading Nexus', 'Portfolio Matrix'],
    },
    {
      name: 'State Bank of India',
      category: 'Federal Sector',
      services: ['Demat Origination', 'Trading Nexus', 'Advisory Syndicate'],
    },
    {
      name: 'Axis Bank',
      category: 'Top Tier Private',
      services: ['Demat Origination', 'Trading Nexus', 'Wealth Command'],
    },
    {
      name: 'Kotak Mahindra Bank',
      category: 'Top Tier Private',
      services: ['Demat Origination', 'Trading Nexus', 'Research Intel'],
    },
    {
      name: 'IDFC First Bank',
      category: 'Top Tier Private',
      services: ['Demat Origination', 'Trading Nexus', 'Investment Banking'],
    },
    {
      name: 'Yes Bank',
      category: 'Private Sector',
      services: ['Demat Origination', 'Trading Nexus', 'Corporate Vaults'],
    },
    {
      name: 'IndusInd Bank',
      category: 'Private Sector',
      services: ['Demat Origination', 'Trading Nexus', 'NRI Channels'],
    },
    {
      name: 'Bank of Baroda',
      category: 'Federal Sector',
      services: ['Demat Origination', 'Trading Nexus', 'Retail Brokerage'],
    },
    {
      name: 'Punjab National Bank',
      category: 'Federal Sector',
      services: ['Demat Origination', 'Trading Nexus', 'Capital Services'],
    },
    {
      name: 'Canara Bank',
      category: 'Federal Sector',
      services: ['Demat Origination', 'Trading Nexus', 'Insurance Underwriting'],
    },
    {
      name: 'Union Bank of India',
      category: 'Federal Sector',
      services: ['Demat Origination', 'Trading Nexus', 'Mutual Distributions'],
    },
  ];

  const benefits = [
    'Pan-India systemic network deployment',
    'Frictionless competitive tariff logic',
    'Accelerated account origination loops',
    'State-of-the-art terminal trading platforms',
    'Institutional-grade research streams',
    'Military-spec transport layer security',
  ];

  const depositories = [
    {
      name: 'NSDL',
      fullName: 'National Securities Depository Limited',
      description: 'India\'s vanguard overarching securities depository.',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      name: 'CDSL',
      fullName: 'Central Depository Services Limited',
      description: 'The monumental secondary depository titan of the sub-continent.',
      color: 'from-sky-500 to-blue-600'
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <section className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-sky-900 text-white pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/30 blur-[120px] rounded-full pointer-events-none"></div>

        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
             <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full shadow-[0_0_30px_rgba(37,99,235,0.2)] mb-8">
              <Globe className="h-5 w-5 text-sky-400" />
              <span className="text-[11px] font-black tracking-[0.2em] text-white uppercase">Interconnected Institutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Institutional <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-200">Syndicate</span></h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed">
              Leveraging the most powerful financial titans and depositories of the subcontinent to anchor your wealth.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <div className="-mt-16 relative z-20">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-3xl rounded-[2.5rem] p-10 md:p-14 mb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-x-16 md:gap-y-12 border border-slate-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]">
            <h2 className="text-3xl font-extrabold text-slate-900 col-span-1 md:col-span-full tracking-tight mb-4 flex border-b border-slate-100 pb-8 items-center">
              <span className="bg-blue-600 w-3 h-8 mr-6 rounded-full inline-block shadow-sm shadow-blue-500/50"></span>
               Paramount Benefits
            </h2>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-5 group"
              >
                <div className="bg-slate-50 p-3 rounded-2xl group-hover:bg-blue-600 transition-colors border border-slate-100 group-hover:border-blue-600 shrink-0">
                  <CheckCircle className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <span className="text-slate-600 font-medium text-[15px] leading-relaxed group-hover:text-slate-900 transition-colors pt-2.5">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase mb-4">Banking Nexus</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Premier Financial Array
            </h3>
            <p className="text-xl text-slate-500 font-light leading-relaxed">
              Aggregating the structural stability of 12+ apex banking nodes across the territory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {partnerBanks.map((bank, index) => (
               <AnimatedSection
                key={index}
                delay={index * 0.05}
                className="bg-white border-2 border-slate-100 p-8 rounded-[2rem] hover:border-blue-500 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] transition-all duration-500 group relative overflow-hidden flex flex-col h-full"
              >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-5 group-hover:scale-150 transition-all duration-700 pointer-events-none">
                  <Landmark className="w-32 h-32" />
                </div>
                
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div className="bg-slate-50 group-hover:bg-blue-600 group-hover:text-white transition-colors p-3.5 rounded-2xl border border-slate-100 shadow-inner">
                    <Building2 className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-500 px-3 py-1.5 rounded-full border border-slate-100 group-hover:border-blue-100 bg-slate-50 transition-colors">
                    {bank.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-tight relative z-10 group-hover:text-blue-700 transition-colors">
                  {bank.name}
                </h3>
                
                <div className="space-y-3 relative z-10 mt-auto pt-6 border-t border-slate-50">
                  {bank.services.map((service, idx) => (
                    <div key={idx} className="flex items-center text-[13px] text-slate-500 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-400 mr-3 transition-colors"></div>
                      {service}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="py-32 bg-slate-950 relative overflow-hidden border-t border-slate-800">
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-900/10 blur-[200px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-sm font-bold tracking-[0.2em] text-sky-500 uppercase mb-4">Core Infrastructure</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Root Depository Backbones
            </h3>
            <p className="text-xl text-slate-400 font-light leading-relaxed">
              Tethered to the ultimate decentralized ledgers governing Indian securities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {depositories.map((depository, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.15}
                className="bg-slate-900 border border-slate-800 p-10 md:p-12 rounded-[2.5rem] hover:ring-2 hover:ring-blue-500/30 transition-all duration-500 group"
              >
                <div className={`bg-gradient-to-br ${depository.color} w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20`}>
                  <Award className="h-10 w-10 text-white" />
                </div>
                <div className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${depository.color} mb-3 tracking-tighter`}>
                  {depository.name}
                </div>
                <div className="text-xl font-bold text-slate-200 mb-6 tracking-tight line-clamp-1">
                  {depository.fullName}
                </div>
                <p className="text-slate-400 text-lg font-light leading-relaxed">
                  {depository.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white overflow-hidden relative border-t border-blue-500">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/20 rounded-[3rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
             
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">
              Require A Bespoke Node?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Configure specialized Demat channels directly connected to your premier designated bank holding.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center text-slate-900 bg-emerald-400 px-12 py-5 rounded-2xl font-black uppercase tracking-wider hover:bg-emerald-300 hover:shadow-[0_0_40px_rgba(52,211,153,0.5)] transition-all duration-300 hover:scale-105"
            >
              Initialize Node
            </a>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
