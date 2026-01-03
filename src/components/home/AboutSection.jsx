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
    }, 3000); // 3 sec per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            About the Lake Information System
          </h2>

          <p className="text-gray-600 leading-relaxed">
            The Centre for Water Resource Management, University of Madras, is committed to safeguarding and sustainably managing the precious water resources of our nation.
Through the support of RUSA (Rashtriya Uchchatar Shiksha Abhiyan), we work towards strengthening scientific research, data integration and digital innovation for effective water resource management.

This Lake Information System has been developed to compile, preserve and present authentic spatial and statistical information on lakes across Kanchipuram District, Tamil Nadu. Our objective is to support government departments, academic researchers, administrators, environmental planners and the general public with reliable and accessible lake-based data.

Our collective efforts contribute to lake conservation, sustainable water management and long-term environmental protection for future generations.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            The system integrates GIS-based mapping with descriptive datasets,
            enabling enhanced planning, conservation and management of lake and
            water resources in Tamil Nadu.
          </p>
        </div>

        {/* Right Image Carousel */}
        <div className="relative h-[280px] md:h-[340px] rounded-xl overflow-hidden shadow-lg">

          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700
                ${i === index ? "opacity-100" : "opacity-0"}
              `}
            />
          ))}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10"></div>

        </div>

      </div>
    </section>
  );
}
