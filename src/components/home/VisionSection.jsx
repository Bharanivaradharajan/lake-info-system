import { useEffect, useRef, useState } from "react";

export default function VisionSection() {
  const itemsRef = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => [...new Set([...prev, entry.target.dataset.id])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const visionPoints = [
    {
      title: "Scientific Planning",
      desc: "To conserve and restore lakes and water bodies by promoting scientific data-driven planning and management.",
    },
    {
      title: "Active Protection",
      desc: "To protect lakes from encroachment, pollution and degradation through public awareness and structured monitoring.",
    },
    {
      title: "Academic Growth",
      desc: "To promote academic research and data-driven environmental studies for institutional excellence.",
    },
    {
      title: "Public Awareness",
      desc: "To create awareness on sustainable water and lake conservation among the general public.",
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Decorative Element - matching About section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title Block */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-blue-600 font-bold tracking-[0.3em] text-xs uppercase">
            Our Mission & Goals
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Vision for <span className="text-blue-600">Sustainability</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
        </div>

        {/* Vision Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visionPoints.map((item, i) => (
            <div
              key={i}
              data-id={String(i)}
              ref={(el) => (itemsRef.current[i] = el)}
              className={`
                relative p-8 rounded-3xl transition-all duration-1000 ease-out group
                ${
                  visible.includes(String(i))
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }
                bg-white border border-slate-100 shadow-sm
                hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 hover:border-blue-200
              `}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Ghost Numbering */}
              <div className="absolute top-4 right-6 text-6xl font-black text-slate-50 group-hover:text-blue-50 transition-colors pointer-events-none">
                0{i + 1}
              </div>

              <div className="relative z-10 space-y-4">
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-500">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-slate-800">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Accent Bar */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-blue-600 transition-all duration-500 group-hover:w-1/2 rounded-t-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}