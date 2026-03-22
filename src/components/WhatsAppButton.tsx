import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/918630570781', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 bg-gradient-to-br from-emerald-400 to-green-600 text-white p-4 rounded-2xl shadow-[0_10px_30px_rgba(16,185,129,0.4)] hover:shadow-[0_10px_40px_rgba(16,185,129,0.7)] transition-all duration-500 hover:scale-110 hover:-translate-y-2 z-50 group border border-emerald-400/50"
      aria-label="Contact us on WhatsApp"
    >
      <div className="absolute inset-0 bg-white/20 blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      <MessageCircle className="h-7 w-7 relative z-10" />
      <span className="absolute right-full mr-5 top-1/2 -translate-y-1/2 bg-slate-900/90 backdrop-blur-md border border-slate-700 font-bold tracking-wide uppercase text-white text-[11px] px-4 py-2.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-4 group-hover:translate-x-0 shadow-2xl">
        Execute Chat Protocol
      </span>
      <div className="absolute -z-10 bg-emerald-500 rounded-2xl inset-0 animate-ping opacity-20"></div>
    </button>
  );
}
