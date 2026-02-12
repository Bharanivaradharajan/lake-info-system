import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, Map, Info, Mail } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", path: "/", icon: <Globe size={14} /> },
    { label: "LAKES MAP", path: "/map", icon: <Map size={14} /> },
    { label: "ABOUT", path: "/about", icon: <Info size={14} /> },
    { label: "CONTACT", path: "/contact", icon: <Mail size={14} /> },
  ];

  return (
    <header className="relative w-full bg-[#FCFCFD] font-sans">
      
      {/* ---------- Section 1: Institutional Branding ---------- */}
      <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Logo */}
        <div className="flex-1 flex justify-center md:justify-start">
          <div className="relative p-1 border border-slate-100 rounded-2xl shadow-sm">
            <img src="/logo.png" alt="Logo" className="h-16 md:h-20 w-auto object-contain" />
          </div>
        </div>

        {/* Center Title - The "Aesthetic" Core */}
        <div className="flex-[3] text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-[0.12em] leading-none mb-3">
            WATER RESOURCES <span className="text-blue-600">MANAGEMENT</span>
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-blue-200" />
            <p className="text-[10px] md:text-xs font-mono font-bold text-slate-400 tracking-[0.4em] uppercase">
              Geospatial Tank Information System
            </p>
            <div className="h-px w-10 bg-blue-200" />
          </div>
          <p className="mt-4 text-sm md:text-base font-medium text-slate-500 italic tracking-wide">
            Kanchipuram District · Tamil Nadu
          </p>
        </div>

        {/* Right Logo */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img src="/rusa.jpg" alt="RUSA" className="h-12 md:h-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500" />
        </div>
      </div>

      {/* ---------- Section 2: Floating Aesthetic Nav ---------- */}
      <nav className={`
        sticky top-6 z-50 transition-all duration-500 px-4 mb-8
      `}>
        <div className="max-w-3xl mx-auto">
          <div className={`
            relative overflow-hidden rounded-2xl border border-white/20 backdrop-blur-xl
            transition-all duration-500
            ${scrolled 
              ? "bg-slate-900/90 shadow-[0_20px_50px_rgba(0,0,0,0.2)] scale-95" 
              : "bg-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-slate-200"
            }
          `}>
            
            {/* Mobile Toggle */}
            <div className="md:hidden flex justify-between items-center p-4">
               <span className="text-[10px] font-bold tracking-widest text-slate-400">MENU</span>
               <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? "text-white" : "text-slate-900"}>
                 {isOpen ? <X size={20} /> : <Menu size={20} />}
               </button>
            </div>

            {/* Nav Menu */}
            <ul className={`
              ${isOpen ? "flex" : "hidden"} md:flex 
              flex-col md:flex-row items-center justify-center 
              p-2 md:p-1 gap-1 md:gap-2
            `}>
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.path} className="w-full md:w-auto">
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`
                        group relative flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-[11px] font-bold tracking-[0.2em] transition-all duration-300
                        ${isActive 
                          ? (scrolled ? "bg-white text-slate-900 shadow-xl" : "bg-blue-600 text-white shadow-lg shadow-blue-200") 
                          : (scrolled ? "text-slate-400 hover:text-white" : "text-slate-500 hover:bg-slate-50 hover:text-blue-600")
                        }
                      `}
                    >
                      {item.icon}
                      {item.label}
                      {/* Animated bottom line for hover */}
                      {!isActive && (
                        <span className="absolute bottom-2 left-1/2 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-1/3 group-hover:-translate-x-1/2" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

    </header>
  );
}