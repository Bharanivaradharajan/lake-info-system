import React from "react";

export default function TeamIntro() {
  return (
    <section className="relative max-w-5xl mx-auto px-6 py-12">
      {/* Visual Continuity: Subtle vertical line matching the 'Timeline' or 'Data Flow' feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-200 via-slate-100 to-transparent opacity-50" />

      <div className="relative group">
        {/* Decorative Corner Accents */}
        <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-blue-500/30 rounded-tl-lg group-hover:border-blue-500 transition-colors duration-500" />
        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-blue-500/30 rounded-br-lg group-hover:border-blue-500 transition-colors duration-500" />

        {/* Content Box */}
        <div className="bg-slate-50/50 backdrop-blur-sm p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/5">
          <div className="flex flex-col md:flex-row items-center gap-8">
            
            {/* Left Side: Technical Icon */}
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white shadow-inner flex items-center justify-center border border-slate-100">
              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>

            {/* Right Side: Text content */}
            <div className="space-y-4">
              <p className="text-slate-700 leading-relaxed text-lg md:text-xl font-medium italic font-serif">
                “This platform integrates <span className="text-blue-600 font-bold not-italic">high-resolution spatial</span> and non-spatial datasets 
                to provide a comprehensive overview of the Kanchipuram hydrological network.”
              </p>
              
              <div className="flex flex-wrap gap-3">
                {["Research Ready", "Public Governance", "Geospatial Analysis"].map((tag) => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-white px-3 py-1 rounded-md border border-slate-100">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">
                Serving as a public-facing knowledge system, the platform bridges the gap between 
                complex academic studies and actionable water resource planning for the next generation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}