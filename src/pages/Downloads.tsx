import { Download, FileText, CheckCircle, Info } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function Downloads() {
  const forms = [
    {
      title: 'Dematerialisation Request Form (DRF)',
      description: 'System-generated form mandated to convert physical share certificates into secure electronic format.',
      size: '245 KB',
      format: 'PDF',
      category: 'Dematerialisation',
    },
    {
      title: 'Rematerialisation Request Form (RRF)',
      description: 'Regulatory form necessary to withdraw electronic shares as authorized physical certificates.',
      size: '238 KB',
      format: 'PDF',
      category: 'Rematerialisation',
    },
    {
      title: 'Premium Demat Account Setup Packet',
      description: 'Comprehensive application module for launching a highly-secured Demat portfolio.',
      size: '512 KB',
      format: 'PDF',
      category: 'Account Opening',
    },
    {
      title: 'e-KYC Authorization Form',
      description: 'Know Your Customer verification form establishing priority security protocols.',
      size: '185 KB',
      format: 'PDF',
      category: 'KYC & Verification',
    },
    {
      title: 'Designated Nomination Registry',
      description: 'Official document executing nominee assignments onto your corporate Demat portfolio.',
      size: '156 KB',
      format: 'PDF',
      category: 'Account Management',
    },
    {
      title: 'Account Closure Mandate',
      description: 'Formal request documentation finalizing the cessation of Demat services.',
      size: '142 KB',
      format: 'PDF',
      category: 'Account Management',
    },
    {
      title: 'Power of Attorney Indenture (PoA)',
      description: 'Notarized authorization enabling specialized proxies to execute trading autonomously.',
      size: '198 KB',
      format: 'PDF',
      category: 'Executive Authorization',
    },
    {
      title: 'Off-Market Transfer Requisition',
      description: 'Framework required in transferring shares beyond primary stock exchange pipelines.',
      size: '225 KB',
      format: 'PDF',
      category: 'Securities Transfer',
    },
  ];

  const documents = [
    {
      title: 'Whitepaper: Process Governance',
      description: 'Complete process guide illuminating both Dematerialisation and Rematerialisation frameworks.',
      size: '1.2 MB',
      format: 'PDF',
    },
    {
      title: 'FAQ Compendium v3',
      description: 'Deep-dive intelligence report covering frequent regulatory inquiries.',
      size: '485 KB',
      format: 'PDF',
    },
    {
      title: 'Fiscal Structure Guide',
      description: 'Transparent disclosure enumerating processing charges, depository taxes, and handling fees.',
      size: '320 KB',
      format: 'PDF',
    },
  ];

  const requirements = [
    'Self-attested PAN Card reproduction',
    'Self-attested Aadhaar Card replica',
    'Recognized Address validation (Passport / Voter ID)',
    'Verified Bank account parameters',
    'Personalized Cancelled cheque',
    'Current Passport-size visual identifications',
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans leading-relaxed">
      <section className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-sky-900 text-white pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/30 blur-[120px] rounded-full pointer-events-none"></div>

        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-200">Resources</span></h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed">
              Procure all requisite applications, mandates, and executive documentation directly through our encrypted node.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <div className="-mt-12 relative z-20">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-xl border border-slate-100 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start shadow-xl max-w-5xl mx-auto">
            <div className="bg-blue-50 p-4 rounded-2xl mb-6 md:mb-0 md:mr-8 shrink-0">
               <Info className="h-10 w-10 text-blue-600" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">
                Mandatory Notice
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Legislation commands that all documentation be explicitly authorized via physical or certified electronic signature boundaries before initiation. Filings maintaining omissions undergo automated rejection protocols.
              </p>
              <p className="text-sm text-slate-500 font-semibold tracking-wide uppercase">
                Require supervision? Alert our executive representatives immediately.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Library</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Requisition Mandates
            </h3>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {forms.map((form, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.05}
                className="bg-white border border-slate-100 p-8 rounded-[2rem] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-blue-100 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-8">
                    <div className="bg-blue-50 group-hover:bg-blue-600 transition-colors p-4 rounded-2xl shrink-0">
                      <FileText className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[11px] uppercase tracking-widest font-black bg-slate-50 border border-slate-100 text-slate-600 px-4 py-2 rounded-full whitespace-nowrap ml-4">
                      {form.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight leading-tight group-hover:text-blue-700 transition-colors">
                    {form.title}
                  </h3>
                  <p className="text-slate-500 text-[15px] mb-8 font-light leading-relaxed">{form.description}</p>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div className="text-sm font-bold text-slate-400 tracking-wider">
                    {form.format} <span className="mx-2">•</span> {form.size}
                  </div>
                  <button className="flex items-center gap-3 bg-slate-50 text-blue-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 px-6 py-3 rounded-xl transition-all duration-300 text-sm font-bold shadow-sm">
                    <Download className="h-5 w-5" />
                    <span>Retrieve</span>
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-sky-500 uppercase mb-3">Intelligence</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Information Manifests
            </h3>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {documents.map((doc, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                className="bg-slate-950 border border-slate-800 p-8 rounded-[2rem] hover:ring-2 hover:ring-sky-500/50 hover:bg-slate-900 transition-all duration-300 group"
              >
                <div className="bg-sky-500/10 p-4 rounded-xl inline-flex mb-8 border border-sky-500/20">
                  <FileText className="h-8 w-8 text-sky-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight leading-snug">
                  {doc.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">{doc.description}</p>
                
                <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                  <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                    {doc.format} <span className="mx-1.5">•</span> {doc.size}
                  </div>
                  <button className="text-sky-400 hover:text-sky-300 font-bold flex items-center gap-2 group-hover:scale-105 transition-transform bg-sky-500/10 px-4 py-2 rounded-lg">
                    <Download className="h-4 w-4" />
                    <span className="text-xs uppercase tracking-widest">Aquire</span>
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-100 blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Universal Document Criteria
            </h2>
            <p className="text-xl text-slate-600 mb-16 max-w-2xl mx-auto font-light">
              Irrespective of procedural origin, the following baseline instruments must accompany generalized submissions.
            </p>
            
            <div className="bg-white border border-slate-100 rounded-[3rem] p-12 md:p-16 max-w-4xl mx-auto shadow-2xl relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black tracking-widest uppercase text-xs px-8 py-3 rounded-full shadow-lg">
                 Pre-Requisites Baseline
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 text-left relative z-10 mt-6">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-center space-x-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    <CheckCircle className="h-6 w-6 text-blue-600 shrink-0" />
                    <span className="text-slate-700 font-semibold">{req}</span>
                  </div>
                ))}
              </div>
            </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
