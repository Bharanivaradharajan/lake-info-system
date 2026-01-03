import { useEffect, useRef, useState } from "react";

export default function StatisticsSection() {

  const cardsRef = useRef([]);
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
      { threshold: 0.25 }
    );

    cardsRef.current.forEach(el => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "1,250+", label: "Total Lakes Mapped" },
    { value: "320 sq.km", label: "Approx. Water Spread Area" },
    { value: "1000+", label: "Unique Shapefiles & GIS Layers" },
    { value: "500+", label: "Survey & Field Data Records" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-gray-800">
          Statistical Preview of Kanchipuram Lakes
        </h2>

        <p className="text-gray-600 mt-3">
          A snapshot of the available hydrological and spatial datasets
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-10">

          {stats.map((item, i) => (
            <div
              key={i}
              data-id={String(i)}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`
                bg-blue-50 border border-blue-200 rounded-xl p-6 shadow 
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
              <h3 className="text-3xl font-extrabold text-blue-900">
                {item.value}
              </h3>

              <p className="text-gray-700 mt-2">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
