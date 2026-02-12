import React from "react";

export default function TeamHeader() {
  return (
    <section className="relative pt-24 pb-16 bg-white overflow-hidden">
      {/* Continuity Background: Subtle mesh and radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03]" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white shadow-xl shadow-slate-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Scientific Contributors</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Project Team</span>
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-slate-200" />
              <p className="text-blue-600 font-serif italic text-lg md:text-xl">
                Expertise in Hydrology & Geospatial Science
              </p>
              <div className="h-px w-12 bg-slate-200" />
            </div>
          </div>

          {/* Description Block */}
          <div className="max-w-3xl bg-white/50 backdrop-blur-sm p-6 rounded-3xl border border-slate-100 shadow-sm">
            <p className="text-slate-600 leading-relaxed text-lg">
              The <span className="font-bold text-slate-900">Lake Information System</span> for Kanchipuram District is a multi-disciplinary effort 
              developed under the <span className="text-blue-700 font-semibold">Center for Water Resource Management, University of Madras</span>. 
              Our work is powered by the <span className="underline decoration-blue-300 decoration-2 underline-offset-4">RUSA Scheme</span> and 
              supported by the <span className="font-bold text-slate-900">Tamil Nadu Revenue Department</span> to ensure 
              scientific accuracy and administrative relevance.
            </p>
          </div>

          {/* Institutional Icons Continuity */}
          <div className="flex items-center gap-8 pt-4 opacity-40 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 border-r border-slate-200 pr-8">
              Strategic Partners
            </div>
            <img src="/logo.png" alt="University of Madras" className="h-10 w-auto" />
            <img src="/rusa.jpg" alt="RUSA" className="h-10 w-auto" />
          </div>
        </div>
      </div>

      {/* Transition Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  );
}