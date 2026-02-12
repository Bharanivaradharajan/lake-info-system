import React from "react";

export default function ContactDetails() {
  const contacts = [
    {
      title: "Address",
      details: ["Centre for Water Resource Management", "University of Madras", "Chennai, TN, India - 600005"],
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      ),
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Email",
      details: ["cwrm@unom.ac.in", "research.cwrm@unom.ac.in"],
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
      color: "text-cyan-600",
      bg: "bg-cyan-50",
    },
    {
      title: "Phone",
      details: ["+91 44 2539 1234", "+91 44 2539 5678"],
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      ),
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
  ];

  return (
    <section className="relative py-24 bg-[#FCFDFF] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-slate-100/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-blue-700 font-bold tracking-widest text-[10px] uppercase">
              Get In Touch
            </span>
          </span>
          
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Connect for<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">  Collaboration</span>
          </h2>
          
          <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
            Supporting academic research, government initiatives, and environmental transparency across the region.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {contacts.map((item, i) => (
            <div
              key={i}
              className="group relative p-10 bg-white rounded-[2.5rem] border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <svg
                  className={`w-8 h-8 ${item.color}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {item.icon}
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>

              <address className="not-italic space-y-2 flex-grow">
                {item.details.map((line, idx) => (
                  <p key={idx} className="text-slate-500 font-semibold text-base leading-snug">
                    {line}
                  </p>
                ))}
              </address>

              {/* Interactive Bottom Bar */}
              <div className="mt-10 relative h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-12 bg-blue-600 group-hover:w-full transition-all duration-700 ease-in-out" />
              </div>
            </div>
          ))}
        </div>

        {/* Footer Support Section */}
        <div className="mt-20 flex flex-col items-center">
            <div className="w-px h-12 bg-gradient-to-b from-blue-600 to-transparent mb-8" />
            <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.2em]">
                Institutional Support: RUSA & University of Madras
            </p>
        </div>

      </div>
    </section>
  );
}