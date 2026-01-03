import { useEffect, useRef, useState } from "react";

export default function VisionSection() {

  const itemsRef = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(prev => [...new Set([...prev, entry.target.dataset.id])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    itemsRef.current.forEach(el => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const visionPoints = [
    "To conserve and restore lakes and water bodies by promoting scientific data-driven planning and management.",
    "To protect lakes from encroachment, pollution and degradation through public awareness and structured monitoring.",
    "To promote academic research and data-driven environmental studies.",
    "To create awareness on sustainable water and lake conservation among the public."
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Our Vision
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {visionPoints.map((text, i) => (
            <div
              key={i}
              data-id={String(i)}
              ref={(el) => (itemsRef.current[i] = el)}
              className={`
                p-6 bg-white rounded-xl shadow-md border 
                transition-all duration-700 ease-out
                ${
                  visible.includes(String(i))
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }

                /* hover animation */
                hover:scale-105
                hover:shadow-xl
                hover:border-blue-400
                cursor-pointer
                duration-300
              `}
            >
              <p className="text-gray-700 leading-relaxed text-center">
                {text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
