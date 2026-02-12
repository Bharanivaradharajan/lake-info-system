import { useState, useEffect } from "react";

const images = [
  "/about1.jpg",
  "/about2.jpg",
  "/about3.jpg"
];

export default function AboutSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 4000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 bg-[#fafcfe] overflow-hidden">
      {/* Futuristic Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[30%] h-[30%] bg-cyan-100/40 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Text Content */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-block">
            <span className="text-blue-600 font-bold tracking-[0.2em] text-xs uppercase bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
              Institutional Excellence
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1]">
            Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Digital Water</span> Governance
          </h2>

          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <p className="relative pl-6 border-l-2 border-blue-500/30">
              The Centre for Water Resource Management, <strong className="text-slate-900">University of Madras</strong>, 
              is bridging the gap between traditional hydrology and modern geospatial intelligence. Supported by RUSA, 
              we transform raw data into actionable environmental insights.
            </p>

            <p>
              Our Lake Information System isn't just a database—it's a 
              <span className="text-slate-900 font-semibold"> digital twin </span> 
              of Kanchipuram's water ecosystem. We provide the high-resolution spatial mapping 
              required for 21st-century conservation planning.
            </p>
          </div>

          {/* Key Stats/Features Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-white shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
              <div className="text-blue-600 font-bold text-2xl">GIS-Ready</div>
              <div className="text-slate-500 text-sm">Spatial Data Integration</div>
            </div>
            <div className="p-4 rounded-2xl bg-white shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
              <div className="text-cyan-600 font-bold text-2xl">RUSA Fund</div>
              <div className="text-slate-500 text-sm">Strategic Infrastructure</div>
            </div>
          </div>
        </div>

        {/* Right Image Carousel - "The Portal" Design */}
        <div className="lg:col-span-5 relative">
          {/* Decorative Frame Elements */}
          <div className="absolute -inset-4 border border-slate-200 rounded-[2rem] pointer-events-none" />
          <div className="absolute -top-2 -right-2 w-24 h-24 border-t-4 border-r-4 border-blue-500 rounded-tr-3xl" />
          
          <div className="relative h-[450px] rounded-[1.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 group">
            {images.map((img, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out transform
                  ${i === index ? "opacity-100 scale-100" : "opacity-0 scale-110"}
                `}
              >
                <img
                  src={img}
                  alt="Water Resource Management"
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              </div>
            ))}

            {/* Carousel Indicators */}
            <div className="absolute bottom-6 left-6 flex gap-2">
              {images.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-500 ${index === i ? "w-8 bg-white" : "w-4 bg-white/40"}`}
                />
              ))}
            </div>

            {/* Subtle Glass Card Label */}
            <div className="absolute top-6 right-6 backdrop-blur-md bg-white/10 border border-white/20 p-3 rounded-xl">
              <div className="text-white text-[10px] font-bold tracking-widest uppercase">Field Analysis 0{index + 1}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}