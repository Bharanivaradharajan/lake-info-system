import LakeVideoGuide from "../map/LakeVideoGuide";

export default function MapInfo() {
  const features = [
    {
      title: "View Lake Boundaries",
      desc: "All lakes are displayed as spatial polygons using GIS shapefiles for accurate boundary visualization.",
      icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
    },
    {
      title: "Explore & Identify",
      desc: "Click or hover over a lake to view its name, location and other details within the live map interface.",
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    },
    {
      title: "Research Intelligence",
      desc: "Enabling administrators and researchers to perform spatial analysis for better water resource management.",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Continuity Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header - Continuity with Vision/Testimonials */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-blue-600 font-bold tracking-[0.3em] text-xs uppercase">
            GIS Integration
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Lake <span className="text-blue-600">Shapefile</span> Interface
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            A specialized geospatial tool designed for high-resolution mapping of the 
            <span className="text-slate-900 font-semibold"> Kanchipuram Water Ecosystem</span>.
          </p>
        </div>

        {/* Feature Cards - Precision Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((f, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5">
              <div className="w-12 h-12 mb-6 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Tutorial / Action Section */}
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
          {/* Subtle Map Overlay Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none grayscale" 
               style={{ backgroundImage: "url('/map-texture.png')", backgroundSize: 'cover' }} />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Video/Visual Guide */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <LakeVideoGuide />
              <div className="absolute top-4 left-4 backdrop-blur-md bg-black/40 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border border-white/20">
                System Tutorial
              </div>
            </div>

            {/* Right: Instructions */}
            <div className="space-y-8">
              <div>
                <h4 className="text-3xl font-black mb-6">Interactive Guidance</h4>
                <div className="space-y-4">
                  {[
                    "Precision zoom & pan navigation",
                    "Dynamic boundary attribute popups",
                    "Keyword-based geospatial search",
                    "Multi-layered attribute filtering"
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold text-sm group-hover:bg-blue-500 group-hover:text-white transition-all">
                        {idx + 1}
                      </div>
                      <span className="text-slate-300 font-medium group-hover:text-white transition-colors">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-slate-400 text-sm leading-relaxed italic">
                  Developed by the <span className="text-white font-semibold">Centre for Water Resource Management</span>, 
                  University of Madras, facilitated by the <span className="text-blue-400">RUSA Initiative</span>.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}