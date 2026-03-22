import { useState } from 'react';
import { ChevronDown, Search, Lightbulb, Phone } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      category: 'General Operations',
      questions: [
        {
          question: 'What constitutes Dematerialisation?',
          answer:
            'Dematerialisation defines the secure procedural conversion of vulnerable physical share certificates into immune electronic signatures. These digital assets are housed within a centralized Demat vault, facilitating instantaneous transaction execution while nullifying forgery risk.',
        },
        {
          question: 'How is Rematerialisation defined?',
          answer:
            'Rematerialisation designates the exact inversion: transitioning digital securities back into authorized physical certificates. Though largely obsolete for active trading, it is occasionally necessitated by specific legacy successions or personal archival custody.',
        },
        {
          question: 'Is a Demat Account strictly mandatory?',
          answer:
            'Absolutely. Statutory bodies (SEBI/RBI) mandate a verified Demat architecture for participating in the Indian capital markets. It ensures flawless tracking, instantaneous trade closures, and the wholesale removal of physical document dependencies.',
        },
      ],
    },
    {
      category: 'Dematerialisation Processing',
      questions: [
        {
          question: 'What is the standard processing velocity?',
          answer:
            'A standardized Dematerialisation cycle executes within 15-30 operational days following documentation approval. Extreme edge cases depending on archaic company registrars may face marginal timeline elongations.',
        },
        {
          question: 'What documentation matrix is required?',
          answer:
            'The mandated matrix entails: (1) Voided physical certificates, (2) Signed Dematerialisation Request Form (DRF), (3) Self-attested PAN duplicate, (4) Active Demat ledger credentials, and (5) Specific depository-requested ID validations.',
        },
        {
          question: 'Are there fiscal obligations?',
          answer:
            'Yes. Nominal operational throughput charges apply, composed of depository maintenance fees and processing tariffs. Costs dynamically adjust based on certificate volume. Connect directly to access the precise fiscal structure.',
        },
        {
          question: 'Is universal Dematerialisation possible?',
          answer:
            'Only securities synchronized with NSDL or CDSL depositories are eligible. Virtually all publicly traded entities maintain this synchronization. Private or unlisted corporate entities require registrar verification prior to initiation.',
        },
      ],
    },
    {
      category: 'Rematerialisation Processing',
      questions: [
        {
          question: 'What timeline governs Rematerialisation?',
          answer:
            'Given the physical printing and authorization logistics, Rematerialisation cycles average 30-45 operational days. This encapsulates depository clearance and physical postal delivery.',
        },
        {
          question: 'How does the tariff structure compare?',
          answer:
            'Rematerialisation operates on a premium tariff structure due to manual registrar intervention, physical printing, and secure logistics handling. Contact operations for a real-time quote.',
        },
        {
          question: 'Are original certificates returned?',
          answer:
            'No. Original certificates are permanently invalidated and destroyed post-dematerialisation. The Rematerialisation protocol generates entirely fresh certificates featuring updated serial numerology.',
        },
      ],
    },
    {
      category: 'Demat Control',
      questions: [
        {
          question: 'How do I optimize bank selection?',
          answer:
            'Optimization relies on evaluating active trading requirements versus passive holding. We evaluate transaction latency, research tiering, and systemic stability across our 15+ institutional partners to assign your perfect match.',
        },
        {
          question: 'Do baseline capital limits exist?',
          answer:
            'No zero-baseline limitations exist. Accounts can maintain a null balance. However, predetermined Annual Maintenance Charges (AMC) persist irrespective of asset volume.',
        },
        {
          question: 'Is multithreaded (multiple) holding permitted?',
          answer:
            'Yes. You may architect multiple Demat ledgers across varying depository participants. Be advised that each ledger generates independent AMC and logistical overhead.',
        },
        {
          question: 'What initiates proper closure?',
          answer:
            'Closure mandates zero active holdings. Assets must be liquidated or digitally ported to an alternate ledger. Subsequently, submit the formalized closure mandate—nullifying future AMC bleed.',
        },
      ],
    },
    {
      category: 'Security Infrastructure',
      questions: [
        {
          question: 'How robust is electronic custody?',
          answer:
            'Impenetrable. Under direct NSDL/CDSL surveillance and SEBI architecture, electronic holding universally eliminates theft, forgery, and physical degradation vulnerabilities. It represents the pinnacle of asset preservation.',
        },
        {
          question: 'What is your compliance rating?',
          answer:
            'We operate exclusively at 100% SEBI-registered compliance alongside audited RBI alignments. Our operational matrix is perpetually vetted against national securities legislation.',
        },
        {
          question: 'How is data privacy enforced?',
          answer:
            'Client topography is sequestered behind 256-bit encrypted firewalls, featuring multi-node verification and zero-trust internal personnel access architectures. Data is categorically fortified.',
        },
      ],
    },
  ];

  const filteredFaqs = faqs.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (q) =>
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  })).filter((category) => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <section className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-sky-900 text-white pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/30 blur-[120px] rounded-full pointer-events-none"></div>

        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-200">Intelligence</span></h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed mb-10">
              Query our exhaustive databanks to accelerate your understanding of digital asset protocols.
            </p>
            
            <div className="relative max-w-2xl mx-auto drop-shadow-2xl">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400 z-10" />
              <input
                type="text"
                placeholder="Examine protocols..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-6 py-6 rounded-[2rem] bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-[6px] focus:ring-sky-500/30 text-lg font-medium transition-all shadow-[0_0_50px_rgba(0,0,0,0.1)] relative z-0"
              />
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 blur-[150px] rounded-full pointer-events-none translate-x-1/2"></div>
         
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {filteredFaqs.length === 0 ? (
            <AnimatedSection className="text-center py-24 bg-white rounded-[3rem] shadow-sm border border-slate-100">
              <Lightbulb className="h-24 w-24 text-slate-200 mx-auto mb-6" />
              <p className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Zero Matches Found</p>
              <p className="text-lg text-slate-500 font-light max-w-md mx-auto leading-relaxed">
                Our databanks couldn't verify that query. Iterating search parameters may yield productive results.
              </p>
            </AnimatedSection>
          ) : (
            filteredFaqs.map((category, categoryIndex) => (
              <AnimatedSection delay={categoryIndex * 0.1} key={categoryIndex} className="mb-16">
                <h2 className="text-xl font-bold tracking-widest text-slate-400 uppercase mb-8 flex items-center">
                  <span className="bg-slate-200 w-12 h-px mr-4"></span>
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    const isOpen = openIndex === globalIndex;
                    return (
                      <div
                        key={faqIndex}
                        className={`bg-white border rounded-[1.5rem] overflow-hidden transition-all duration-300 ${isOpen ? 'border-sky-300 shadow-xl shadow-sky-900/5 ring-1 ring-sky-300/50' : 'border-slate-100 shadow-sm hover:border-slate-300'}`}
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full px-8 py-6 text-left flex items-start justify-between outline-none"
                        >
                          <span className={`text-lg font-bold pr-10 leading-snug transition-colors ${isOpen ? 'text-sky-700' : 'text-slate-900'}`}>
                            {faq.question}
                          </span>
                          <div className={`shrink-0 p-2 rounded-full transition-colors ${isOpen ? 'bg-sky-100 text-sky-600' : 'bg-slate-50 text-slate-400'}`}>
                            <ChevronDown
                              className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                            />
                          </div>
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                              <div className="px-8 pb-8 text-slate-600 text-[17px] font-light leading-relaxed">
                                <div className="pt-6 border-t border-slate-100">
                                  {faq.answer}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </AnimatedSection>
            ))
          )}
        </div>
      </section>

      <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
             
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight relative z-10">
              Escalate Inquiry
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
              Access direct operational routing to our executive staff for unaddressed complexities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <a
                href="/contact"
                className="bg-sky-500 hover:bg-sky-400 text-slate-900 px-10 py-5 rounded-2xl font-black tracking-wide uppercase transition-all shadow-lg hover:shadow-sky-500/25 hover:-translate-y-1"
              >
                Open Ticket
              </a>
              <a
                href="tel:+912212345678"
                className="bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md px-10 py-5 rounded-2xl font-bold text-white transition-all tracking-wide shadow-lg hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5 text-sky-400" />
                Line +91 22 1234 5678
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
