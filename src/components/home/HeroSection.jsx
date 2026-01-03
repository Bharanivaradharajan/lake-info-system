import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const images = [
  "/lake1.jpg",
  "/lake2.jpg",
  "/lake3.jpg",
  "/lake4.jpg",
  "/lake5.jpg"
];

export default function HeroSection() {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="h-[60vh] md:h-[70vh] bg-gray-100">
      <div className="w-full h-full relative overflow-hidden">

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
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text + CTA */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          <h2 className="text-white text-3xl md:text-4xl font-bold drop-shadow-lg">
            Strengthening lake conservation through science, data and public awareness
          </h2>

          {/* CTA Button */}
          <Link
  to="/map"
  className="
    mt-6 px-8 py-3 rounded-full font-semibold text-white
    bg-gradient-to-r from-blue-500 via-teal-400 to-blue-600
    shadow-lg hover:shadow-2xl hover:scale-105
    transition-all duration-300 animate-pulse
  "
>
  Explore Lakes Map
</Link>


        </div>

      </div>
    </section>
  );
}
