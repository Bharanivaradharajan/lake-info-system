import React from "react";

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="px-6 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-600">
            Trusted by Researchers, Government & Public
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Testimonials
          </h2>
        </div>

        {/* Container Glow Background */}
        <div className="relative mt-14">
          <div className="absolute inset-0 max-w-5xl mx-auto blur-xl opacity-25 rounded-3xl"
            style={{
              background:
                "linear-gradient(90deg,#44ff9a,#44b0ff,#8b44ff,#ff6644,#ebff70)",
            }}
          />

          {/* Cards */}
          <div className="relative grid gap-8 md:grid-cols-3">

            {/* CARD 1 */}
            <div className="bg-white rounded-2xl shadow-xl p-7 border-transparent
              transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              
              <div className="flex gap-1 text-yellow-400">
                {Array(5).fill(0).map((_,i)=>(
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c...z" />
                  </svg>
                ))}
              </div>

              <p className="mt-6 text-gray-800 leading-relaxed">
                “This platform helps us monitor lakes efficiently and prevents
                encroachment through transparent public records.”
              </p>

              <div className="flex items-center mt-6">
                <img
                  src="/default-avatar.png"
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className="font-bold text-gray-900">District Revenue Officer</p>
                  <p className="text-sm text-gray-500">Kanchipuram District</p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-2xl shadow-xl p-7 border-transparent
              transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <div className="flex gap-1 text-yellow-400">
                {Array(5).fill(0).map((_,i)=>(
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c...z" />
                  </svg>
                ))}
              </div>

              <p className="mt-6 text-gray-800 leading-relaxed">
                “A reliable GIS resource for hydrological planning and
                environmental research.”
              </p>

              <div className="flex items-center mt-6">
                <img
                  src="/default-avatar1.png"
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className="font-bold text-gray-900">PWD Water Resources Engineer</p>
                  <p className="text-sm text-gray-500">Tamil Nadu</p>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-2xl shadow-xl p-7 border-transparent 
              transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <div className="flex gap-1 text-yellow-400">
                {Array(5).fill(0).map((_,i)=>(
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c...z" />
                  </svg>
                ))}
              </div>

              <p className="mt-6 text-gray-800 leading-relaxed">
                “A great academic reference for students and researchers studying
                water resource management.”
              </p>

              <div className="flex items-center mt-6">
                <img
                  src="/default-avatar2.png"
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className="font-bold text-gray-900">Research Scholar</p>
                  <p className="text-sm text-gray-500">University of Madras</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
