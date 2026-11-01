import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const BangaloreHotspots: React.FC = () => {
  const APP_URL = "https://pg-eg-web.vercel.app";

  const hotspots = [
    {
      name: "Srinivasapura & Kengeri",
      url: `${APP_URL}/bangalore/pg-in-srinivasapura`,
      badge: "🚀 High Priority Hub",
      rent: "₹5,500+",
      desc: "Srinivasapura, Kengeri Satellite Town, Mysore Road. Student PGs near JSSATE, RVC & Arts colleges.",
      highlight: true,
    },
    {
      name: "JSS Engineering (JSSATE)",
      url: `${APP_URL}/bangalore/pg-near-jss-college`,
      badge: "🎓 Campus Special",
      rent: "₹5,800+",
      desc: "Srinivasapura & Uttarahalli-Kengeri Road. Verified boys & ladies PGs with 3-times hygienic meals.",
      highlight: true,
    },
    {
      name: "RV College of Engg (RVCE)",
      url: `${APP_URL}/bangalore/pg-near-rvce`,
      badge: "🎓 Top College Hub",
      rent: "₹6,500+",
      desc: "Mysore Road, Pattanagere Metro. Walk to RVCE campus with high-speed WiFi and laundry.",
      highlight: true,
    },
    {
      name: "Kengeri & Arts Colleges",
      url: `${APP_URL}/bangalore/pg-in-kengeri`,
      badge: "⚡ Affordable PGs",
      rent: "₹5,000+",
      desc: "Near Bangalore University Jnana Bharathi, Arts & Commerce colleges, Kommaghatta Road.",
      highlight: true,
    },
    {
      name: "RR Nagar (Global Village)",
      url: `${APP_URL}/find-pg?q=RR+Nagar`,
      badge: "🌳 Green Living",
      rent: "₹6,500+",
      desc: "Rajarajeshwari Nagar, near BGS Global, RNSIT, and Global Village Tech Park.",
    },
    {
      name: "Koramangala",
      url: `${APP_URL}/bangalore/pg-in-koramangala`,
      badge: "Startup District",
      rent: "₹8,000+",
      desc: "5th & 7th Block, Sony World Junction, 80 Feet Road cafes & nightlife.",
    },
    {
      name: "HSR Layout",
      url: `${APP_URL}/bangalore/pg-in-hsr-layout`,
      badge: "Sectors 1 to 7",
      rent: "₹7,500+",
      desc: "Near 27th Main, Silk Board signal, quiet residential parks & food street.",
    },
    {
      name: "Bellandur & ORR",
      url: `${APP_URL}/bangalore/pg-in-bellandur`,
      badge: "IT Expressway",
      rent: "₹8,500+",
      desc: "Green Glen Layout, walk to RMZ Ecospace & Embassy TechVillage.",
    },
    {
      name: "Whitefield",
      url: `${APP_URL}/bangalore/pg-in-whitefield`,
      badge: "Metro Connected",
      rent: "₹7,000+",
      desc: "ITPB, EPIP Zone, Hope Farm, and Purple Line Metro stations.",
    },
    {
      name: "Electronic City",
      url: `${APP_URL}/bangalore/pg-in-electronic-city`,
      badge: "Phase 1 & 2",
      rent: "₹6,500+",
      desc: "Walk to Infosys, Wipro, Tech Mahindra, and Yellow Line Metro.",
    },
    {
      name: "Christ University (Central)",
      url: `${APP_URL}/bangalore/pg-near-christ-university`,
      badge: "Student Hub",
      rent: "₹6,500+",
      desc: "Hosur Road, SG Palya, Bhavani Nagar with strict biometric security.",
    },
    {
      name: "Manyata Tech Park",
      url: `${APP_URL}/bangalore/pg-near-manyata-tech-park`,
      badge: "North Bangalore",
      rent: "₹7,000+",
      desc: "Nagavara, Thanisandra Main Road, Gate 1, 2, and Back Gates.",
    },
  ];

  return (
    <section id="localities" className="py-20 bg-[#0e111a]/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2dc653]/10 border border-[#2dc653]/30 text-xs font-bold text-[#2dc653] uppercase tracking-wider mb-3">
              Explore Priority Areas &amp; Colleges
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Srinivasapura, Kengeri &amp; Top Bangalore PG Hubs
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Instant verified rooms near JSSATE, RVCE, Arts colleges, tech parks, and metro lines.
            </p>
          </div>

          <a
            href={`${APP_URL}/bangalore`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2dc653] hover:underline shrink-0"
          >
            <span>View All Bangalore Areas</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Hotspots Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {hotspots.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-5 rounded-2xl transition-all group flex flex-col justify-between ${
                item.highlight
                  ? "bg-[#151c24] border-2 border-[#2dc653]/50 shadow-lg shadow-[#2dc653]/10 hover:border-[#2dc653] hover:-translate-y-1.5"
                  : "bg-[#141722] border border-white/5 hover:border-[#2dc653]/40 hover:-translate-y-1"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${
                      item.highlight
                        ? "bg-[#2dc653]/20 text-[#2dc653] border-[#2dc653]/40"
                        : "bg-white/5 text-gray-300 border-white/10"
                    }`}
                  >
                    {item.badge}
                  </span>
                  <span className="text-xs font-bold text-[#2dc653]">
                    {item.rent}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-[#2dc653] transition-colors flex items-center justify-between">
                  <span>{item.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                <p className="text-gray-400 text-xs mt-2 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-semibold text-gray-400 group-hover:text-white transition-colors">
                Browse Rooms in {item.name} &rarr;
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
