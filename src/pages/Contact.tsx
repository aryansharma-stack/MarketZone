import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Headquarters',
      details: ['123 Financial District', 'Mumbai, Maharashtra 400001', 'India'],
      color: 'text-blue-500',
      bg: 'bg-blue-500/10'
    },
    {
      icon: Phone,
      title: 'Call Services',
      details: ['+91 22 1234 5678', '+91 22 8765 4321', 'Mon-Sat: 9 AM - 6 PM'],
      color: 'text-indigo-500',
      bg: 'bg-indigo-500/10'
    },
    {
      icon: Mail,
      title: 'Email Direct',
      details: ['info@dematpro.com', 'support@dematpro.com', 'Response within 1 Hour'],
      color: 'text-sky-500',
      bg: 'bg-sky-500/10'
    },
  ];

  const offices = [
    {
      city: 'Mumbai (Head Office)',
      address: '123 Financial District, Mumbai 400001',
      phone: '+91 22 1234 5678',
    },
    {
      city: 'Delhi',
      address: '456 Connaught Place, New Delhi 110001',
      phone: '+91 11 2345 6789',
    },
    {
      city: 'Bangalore',
      address: '789 MG Road, Bangalore 560001',
      phone: '+91 80 3456 7890',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <section className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-sky-900 text-white pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/30 blur-[120px] rounded-full pointer-events-none"></div>

        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-200">Touch</span></h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed">
              Experience prioritized support with our dedicated relationship managers. We reply swiftly.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <div className="-mt-16 relative z-20">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] shadow-xl p-8 lg:p-10 border border-slate-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`${info.bg} ${info.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-current shadow-sm`}>
                  <info.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-slate-600 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <AnimatedSection className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Priority Message</h2>
              <p className="text-slate-500 font-light text-lg mb-10 leading-relaxed max-w-2xl">
                Need immediate attention? Fill out this secure form and a specialized representative will reach out to you within an hour.
              </p>

              {isSubmitted && (
                <div className="mb-10 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex items-start shadow-sm">
                  <CheckCircle className="h-8 w-8 text-emerald-500 mr-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-emerald-900 text-xl tracking-tight mb-2">Transmission Successful!</h4>
                    <p className="text-emerald-700 font-medium leading-relaxed">
                      Your priority inquiry has been securely stored. Our experts are already reviewing it.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl border-2 bg-slate-50 ${
                        errors.name ? 'border-red-400 focus:ring-red-500' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/20'
                      } focus:outline-none focus:ring-4 focus:bg-white transition-all`}
                      placeholder="Jane Doe"
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-600 font-medium">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl border-2 bg-slate-50 ${
                        errors.email ? 'border-red-400 focus:ring-red-500' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/20'
                      } focus:outline-none focus:ring-4 focus:bg-white transition-all`}
                      placeholder="jane@example.com"
                    />
                    {errors.email && <p className="mt-2 text-sm text-red-600 font-medium">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                      Secure Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl border-2 bg-slate-50 ${
                        errors.phone ? 'border-red-400 focus:ring-red-500' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/20'
                      } focus:outline-none focus:ring-4 focus:bg-white transition-all`}
                      placeholder="98765 43210"
                    />
                    {errors.phone && <p className="mt-2 text-sm text-red-600 font-medium">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                      Department
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl border-2 bg-slate-50 appearance-none ${
                        errors.subject ? 'border-red-400 focus:ring-red-500' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/20'
                      } focus:outline-none focus:ring-4 focus:bg-white transition-all`}
                    >
                      <option value="">Route Inquiry To...</option>
                      <option value="demat">Dematerialisation Processing</option>
                      <option value="remat">Rematerialisation Processing</option>
                      <option value="account">Account Opening Desk</option>
                      <option value="support">Executive Support</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                    {errors.subject && <p className="mt-2 text-sm text-red-600 font-medium">{errors.subject}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                    Confidential Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-5 py-4 rounded-xl border-2 bg-slate-50 ${
                      errors.message ? 'border-red-400 focus:ring-red-500' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/20'
                    } focus:outline-none focus:ring-4 focus:bg-white transition-all resize-none`}
                    placeholder="Provide details privately..."
                  />
                  {errors.message && <p className="mt-2 text-sm text-red-600 font-medium">{errors.message}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white px-8 py-5 rounded-xl font-extrabold hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-300 flex items-center justify-center group text-lg tracking-wide hover:-translate-y-1"
                  >
                    Transmit Securely
                    <Send className="h-6 w-6 ml-3 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </form>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Our Presence</h2>
              <div className="space-y-6 mb-10">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="bg-white border border-slate-100 p-8 rounded-[2rem] hover:shadow-xl hover:border-blue-100 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{office.city}</h3>
                    <div className="space-y-3 text-slate-600">
                      <p className="flex items-start">
                        <MapPin className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5 text-blue-500" />
                        <span className="leading-relaxed">{office.address}</span>
                      </p>
                      <p className="flex items-center">
                        <Phone className="h-5 w-5 mr-3 flex-shrink-0 text-blue-500" />
                        <span className="font-semibold">{office.phone}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-indigo-900 to-blue-900 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 bg-white/5 blur-3xl w-full h-full rounded-full"></div>
                <div className="flex items-start relative z-10">
                  <Clock className="h-10 w-10 text-sky-400 mr-5 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-extrabold mb-5 tracking-tight">Executive Hours</h3>
                    <div className="space-y-3 text-blue-100 font-light">
                      <p className="flex justify-between border-b border-white/10 pb-2">
                        <span className="font-medium text-white">Mon - Fri</span>
                        <span>09:00 AM - 06:00 PM</span>
                      </p>
                      <p className="flex justify-between border-b border-white/10 pb-2">
                        <span className="font-medium text-white">Saturday</span>
                        <span>09:00 AM - 02:00 PM</span>
                      </p>
                      <p className="flex justify-between pt-1">
                        <span className="font-medium text-white">Sunday</span>
                        <span className="text-sky-300 font-medium">Closed</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="pb-24 bg-slate-50 relative">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-4 md:p-6 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col">
            <div className="text-center mb-6 pt-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Locate Our Headquarters</h2>
              <p className="text-slate-500 font-medium mt-2">Find us in the heart of Mumbai's financial district</p>
            </div>
            <div className="h-[400px] md:h-[500px] w-full rounded-[1.5rem] overflow-hidden relative shadow-sm border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160991641!2d72.71637344999999!3d19.08219755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Headquarters Location"
                className="hover:opacity-100 opacity-90 transition-opacity duration-500 grayscale-[0.3] hover:grayscale-0"
              ></iframe>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
