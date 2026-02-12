import { useEffect, useRef, useState } from "react";

// Helper component for the "count-up" effect
const CountUp = ({ end, duration = 2000, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    // Extract numbers from strings like "1,250+"
    const endValue = parseInt(end.replace(/,/g, ""), 10);
    let start = 0;
    const increment = endValue / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, isVisible, duration]);

  // Format back with commas
  return count.toLocaleString();
};

export default function StatisticsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "1250", suffix: "+", label: "Lakes Mapped", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { value: "320", unit: "sq.km", label: "Water Spread", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.064M15 20.488V18a2 2 0 012-2h3.064" },
    { value: "1000", suffix: "+", label: "GIS Shapefiles", icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" },
    { value: "500", suffix: "+", label: "Field Records", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 bg-[#020617] overflow-hidden">
      {/* Refined Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      
      {/* Radial Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.3em] text-blue-500 uppercase mb-4">Institutional Metrics</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Hydrological <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">Data Intelligence</span>
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            A comprehensive overview of the spatial datasets and field records currently managed within the Kanchipuram district ecosystem.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, i) => (
            <div
              key={i}
              className={`
                group relative p-8 rounded-3xl border transition-all duration-700
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                bg-slate-900/40 border-slate-800 hover:border-blue-500/40
              `}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Animated Border Gradient (Desktop Only Hover) */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative z-10">
                <div className="mb-6 inline-flex p-3 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white tracking-tight">
                      <CountUp end={item.value} isVisible={isVisible} />
                      {item.suffix}
                    </span>
                    {item.unit && <span className="text-blue-400 font-bold text-xs uppercase">{item.unit}</span>}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-500 text-xs font-black tracking-widest uppercase mb-2">Metric</span>
                    <p className="text-slate-200 font-semibold text-base leading-tight">
                      {item.label}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}