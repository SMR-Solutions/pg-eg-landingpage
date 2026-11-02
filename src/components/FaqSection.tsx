import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is PG-EG (also searched as PGEG, PG EG, or EG-PG)?",
      a: "PG-EG (PGEG) is an application designed for students and working professionals to find the nearest and best paying guest accommodations in Bangalore within a flash. It gives you authentic PG details including live distance, photos, live video, room sharing rent rates, verified amenities, direct PG manager contacts, and 1-tap directions.",
    },
    {
      q: "What details does PG-EG provide for each PG?",
      a: "Every listing on PG-EG shows: (1) Verified PG Name, (2) Exact live distance from your current location, (3) Real room & washroom photos, (4) 5-10 second live location video, (5) Transparent monthly rents for 1, 2, 3, 4 sharing, (6) 3-times daily food & amenities, (7) Direct PG manager phone & WhatsApp contacts, and (8) One-tap Google Maps directions straight to the PG gate.",
    },
    {
      q: "How do I install the PG-EG PWA app on Android or iPhone?",
      a: "On Android / Chrome: Open pg-eg-web.vercel.app and tap 'Install' when prompted (or via Chrome 3-dots menu > Add to Home Screen). On iPhone / Safari: Tap the Share button (⎋) at the bottom, then choose 'Add to Home Screen' (⊞). It installs in under 2 seconds and uses less than 2MB of memory.",
    },
    {
      q: "Are food menus and WiFi speeds transparently listed?",
      a: "Yes. Every verified PG listing includes information about daily 3-time meal plans (North and South Indian vegetarian/non-vegetarian options), WiFi connectivity, washing machine access, power backup, and curfew timings.",
    },
    {
      q: "How do PG owners register and manage their building in 3D?",
      a: "Owners can click 'Register Your PG' on the web app. You can configure your floors, room numbers, sharing types, and bed numbers. The platform automatically generates a 3D interactive view of your property and gives you one-tap WhatsApp rent reminders and automated PDF receipts.",
    },
    {
      q: "Which areas in Bangalore are currently covered by PG-EG?",
      a: "PG-EG covers all major Bangalore hubs, including Koramangala, HSR Layout, Bellandur, Whitefield, Electronic City, BTM Layout, Indiranagar, Marathahalli, as well as areas surrounding tech parks (RMZ Ecospace, Manyata, Bagmane, Prestige Tech Park) and colleges (Christ University, PES University, BMSCE, Ramaiah).",
    },
  ];

  return (
    <section id="faq" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-gray-300 uppercase tracking-wider mb-3">
            Common Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2">
            Everything you need to know about using and installing PG-EG in Bangalore.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#141722] border border-white/5 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#2dc653]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-3 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

