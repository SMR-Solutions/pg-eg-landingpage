import React, { useState } from 'react';
import { GraduationCap, Building, Check, ArrowRight } from 'lucide-react';

export const PersonaSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tenants' | 'owners'>('tenants');
  const APP_URL = "https://pg-eg-web.vercel.app";

  return (
    <section id="for-owners" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toggle Pill */}
        <div className="flex justify-center mb-12">
          <div className="p-1.5 rounded-2xl bg-[#141722] border border-white/10 flex items-center gap-2">
            <button
              onClick={() => setActiveTab('tenants')}
              className={`px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2.5 transition-all cursor-pointer ${
                activeTab === 'tenants'
                  ? 'bg-[#2dc653] text-black shadow-lg shadow-[#2dc653]/25'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>For Room Seekers &amp; Students</span>
            </button>

            <button
              onClick={() => setActiveTab('owners')}
              className={`px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2.5 transition-all cursor-pointer ${
                activeTab === 'owners'
                  ? 'bg-[#2dc653] text-black shadow-lg shadow-[#2dc653]/25'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Building className="w-4 h-4" />
              <span>For PG Owners &amp; Managers</span>
            </button>
          </div>
        </div>

        {/* Tab 1: For Room Seekers */}
        {activeTab === 'tenants' && (
          <div className="grid lg:grid-cols-12 gap-12 items-center animate-fade-in">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold uppercase tracking-wider">
                Students &amp; IT Professionals
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Find Your Ideal PG Near Your College or Office in Minutes
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Whether you are starting at Christ University, PESIT, or joining an IT firm at RMZ Ecospace or Manyata, PG-EG makes finding accommodation completely stress-free.
              </p>

              <div className="space-y-3.5 pt-2">
                {[
                  "Zero brokerage fee — deal directly with the building manager",
                  "Verified photos of real rooms, washrooms, and balconies",
                  "Clear breakdown of food menus, laundry, and WiFi speed",
                  "One-tap GPS navigation directly to the PG entrance gate",
                  "Safe ladies PGs with biometric access and warden support",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#2dc653]/20 text-[#2dc653] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm font-medium text-gray-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href={`${APP_URL}/find-pg`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#2dc653] text-black font-extrabold text-sm hover:bg-[#25a845] transition-all shadow-lg shadow-[#2dc653]/25"
                >
                  <span>Explore Available PGs</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#141721] p-3 max-w-lg w-full">
                <img
                  src="/mockup-app.png"
                  alt="PG Seeker View"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: For PG Owners */}
        {activeTab === 'owners' && (
          <div className="grid lg:grid-cols-12 gap-12 items-center animate-fade-in">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-[#2dc653] border border-[#2dc653]/20 text-xs font-bold uppercase tracking-wider">
                PG Owners &amp; Building Managers
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Your Complete PG Building in Your Mobile Device
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Manage all your floors, rooms, beds, and tenant payments digitally. Automate monthly rent collection reminders and track property expenses from anywhere.
              </p>

              <div className="space-y-3.5 pt-2">
                {[
                  "3D Digital Floor Management: View occupied & vacant beds in real-time",
                  "Automated WhatsApp Rent Reminders sent in one single tap",
                  "Instant PDF Rent Collection Receipts with your PG branding",
                  "Digital Tenant ID Locker: Secure Aadhaar & agreement records",
                  "Daily & Monthly Expense Tracker to maximize your rental profit",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#2dc653]/20 text-[#2dc653] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm font-medium text-gray-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={`${APP_URL}/add-pg/pg-details?new=true`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#2dc653] text-black font-extrabold text-sm hover:bg-[#25a845] transition-all shadow-lg shadow-[#2dc653]/25"
                >
                  <span>Register Your PG (Free)</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={`${APP_URL}/sign-in`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 transition-all"
                >
                  <span>Owner Dashboard Login</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#141721] p-3 max-w-lg w-full">
                <img
                  src="/mockup-dashboard.png"
                  alt="PG Owner Management Dashboard"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
