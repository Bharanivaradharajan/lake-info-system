import React from "react";

export default function ContactForm() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Continuity: Decorative background blur matching the rest of the site */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-50/60 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header Block - Continuity with Section Badging */}
        <div className="text-center mb-12 space-y-4">
          <span className="text-blue-600 font-bold tracking-[0.3em] text-xs uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            Inquiry Portal
          </span>
          <h2 className="text-4xl font-black text-slate-900">
            Send Us a <span className="text-blue-600">Message</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
        </div>

        {/* Form Container with Glass Effect */}
        <div className="bg-white/70 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-blue-900/5">
          <form className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Dr. Ramesh Kumar"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none transition-all focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-700"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                <input
                  type="email"
                  placeholder="name@university.edu"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none transition-all focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-700"
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Message</label>
              <textarea
                rows="5"
                placeholder="Briefly describe your query or collaboration request..."
                className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none transition-all focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-700 resize-none"
              ></textarea>
            </div>

            {/* Futuristic Submit Button */}
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="group relative bg-slate-900 text-white font-black uppercase tracking-widest text-sm px-10 py-5 rounded-2xl overflow-hidden transition-all hover:shadow-[0_0_25px_rgba(37,99,235,0.4)]"
              >
                <span className="relative z-10">Transmit Message</span>
                {/* Button Hover Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </form>
        </div>

        {/* Form Footer */}
        <p className="text-center mt-8 text-slate-400 text-xs font-medium tracking-wide">
          Your data is processed securely by the <span className="text-blue-500">CWRM Infrastructure Team</span>.
        </p>
      </div>
    </section>
  );
}