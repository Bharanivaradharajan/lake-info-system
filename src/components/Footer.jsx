import { useEffect, useRef, useState } from "react";

export default function Footer() {

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={ref}
      className={`
        relative overflow-hidden
        bg-gray-950 text-white mt-20
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      {/* Animated Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-400 via-teal-300 to-blue-500 animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-bold tracking-wide">
            Lake Information System
          </h3>
          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            A digital platform providing lake-based spatial and statistical
            information for Kanchipuram District, Tamil Nadu.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold text-gray-200 mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white transition">Home</li>
            <li className="hover:text-white transition">Lakes Database</li>
            <li className="hover:text-white transition">Statistics</li>
            <li className="hover:text-white transition">Contact</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold text-gray-200 mb-3">
            Connect With Us
          </h4>

          <div className="flex gap-4 mt-2">

            {/* Social Icon */}
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition hover:scale-110 cursor-pointer">
              🌐
            </div>

            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition hover:scale-110 cursor-pointer">
              📧
            </div>

            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition hover:scale-110 cursor-pointer">
              📍
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 border-t border-gray-800 py-4 text-sm">
        © {new Date().getFullYear()} Lake Information System — Kanchipuram District
      </div>
    </footer>
  );
}
