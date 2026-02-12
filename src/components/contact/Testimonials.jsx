import React from "react";

export default function Testimonials() {
  const reviews = [
    {
      text: "This platform helps us monitor lakes efficiently and prevents encroachment through transparent public records.",
      author: "District Revenue Officer",
      org: "Kanchipuram District",
      img: "/default-avatar.png",
    },
    {
      text: "A reliable GIS resource for hydrological planning and environmental research. Essential for state-wide water management.",
      author: "PWD Water Resources Engineer",
      org: "Tamil Nadu State",
      img: "/default-avatar1.png",
    },
    {
      text: "A great academic reference for students and researchers studying water resource management and geospatial technologies.",
      author: "Research Scholar",
      org: "University of Madras",
      img: "/default-avatar2.png",
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Continuity Background - Soft blue glow to match Vision section */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="px-6 mx-auto max-w-7xl relative z-10">
        
        {/* Header Block - Matching continuity with Vision Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-blue-600 font-bold tracking-[0.3em] text-xs uppercase">
            Voices of Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Trusted by <span className="text-blue-600">Stakeholders</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
        </div>

        {/* Cards Container */}
        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10 hover:border-blue-100"
            >
              {/* Modern Quote Icon */}
              <div className="absolute top-6 right-8 opacity-[0.05] group-hover:opacity-10 transition-opacity">
                <svg width="45" height="36" viewBox="0 0 45 36" fill="currentColor" className="text-blue-900">
                  <path d="M13.5 0C6.045 0 0 6.045 0 13.5c0 4.14 1.8 7.83 4.635 10.395C2.655 27.675 0 32.4 0 36h4.5c0-4.5 4.5-9 9-9h4.5V0h-4.5zm22.5 0c-7.455 0-13.5 6.045-13.5 13.5 0 4.14 1.8 7.83 4.635 10.395C24.3 27.675 21.6 32.4 21.6 36h4.5c0-4.5 4.5-9 9-9h4.5V0h-4.5z" />
                </svg>
              </div>

              {/* Rating Star Set */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, starI) => (
                  <svg
                    key={starI}
                    className="w-4 h-4 text-blue-500 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="relative z-10 text-slate-700 leading-relaxed text-lg italic italic font-serif">
                “{item.text}”
              </p>

              {/* Author Section */}
              <div className="flex items-center mt-8 pt-6 border-t border-slate-50">
                <div className="relative">
                  <img
                    src={item.img}
                    alt={item.author}
                    className="w-12 h-12 rounded-2xl object-cover ring-2 ring-blue-50"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-600 border-2 border-white rounded-full flex items-center justify-center">
                    <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="font-black text-slate-900 text-sm leading-tight uppercase tracking-wide">
                    {item.author}
                  </p>
                  <p className="text-xs text-blue-600 font-bold mt-0.5">
                    {item.org}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}