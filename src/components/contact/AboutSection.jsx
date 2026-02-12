import React from "react";

export default function AboutSection() {
  const pillars = [
    {
      title: "Objective",
      desc: "To create a centralized and accessible digital database of lakes in Kanchipuram District.",
      icon: "🎯",
      color: "from-blue-600 to-indigo-600",
    },
    {
      title: "Water Conservation",
      desc: "Promote sustainable lake protection, monitoring and awareness at district level.",
      icon: "🌊",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Support Systems",
      desc: "Assist students, researchers and government officials with actionable geospatial data.",
      icon: "📚",
      color: "from-blue-400 to-cyan-400",
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Continuity Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header - Consistent with Vision & Map Info */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-4">
          <span className="text-blue-600 font-bold tracking-[0.3em] text-xs uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            Institutional Mandate
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            The Digital Foundation for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Environmental Planning
            </span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mt-6">
            Developed by the <span className="text-slate-900 font-bold">Centre for Water Resource Management, University of Madras</span>, 
            under the <span className="text-blue-600 font-bold tracking-tight">RUSA Scheme</span>. This platform bridges 
            the gap between raw hydrological data and public water literacy.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="group relative p-1 rounded-[2.5rem] transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Outer Glow / Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-100 rounded-[2.5rem] blur transition-opacity duration-500`} />
              
              {/* Card Content */}
              <div className="relative h-full bg-white rounded-[2.4rem] p-10 border border-slate-100 shadow-sm flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-3xl shadow-lg mb-8 group-hover:rotate-6 transition-transform duration-500`}>
                  {pillar.icon}
                </div>
                
                <h3 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {pillar.title}
                </h3>
                
                <p className="text-slate-500 leading-relaxed font-medium">
                  {pillar.desc}
                </p>
                
                {/* Visual Accent */}
                <div className="mt-8 w-12 h-1 bg-slate-100 rounded-full group-hover:w-24 group-hover:bg-blue-400 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Logo Attribution Continuity */}
        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-wrap justify-center items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <img src="/logo.png" alt="University Logo" className="h-12 w-auto" />
          <div className="h-8 w-px bg-slate-200 hidden md:block" />
          <img src="/rusa.jpg" alt="RUSA Logo" className="h-12 w-auto" />
          <div className="h-8 w-px bg-slate-200 hidden md:block" />
          <p className="text-xs font-bold tracking-widest uppercase text-slate-400">
            Research • Innovation • Conservation
          </p>
        </div>
      </div>
    </section>
  );
}