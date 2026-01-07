import { Link, useLocation } from "react-router-dom";

export default function Header() {

  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Lakes Map", path: "/map" },
    
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm border-b">

      {/* ---------- Logo + Title (unchanged) ---------- */}
      
      <div className="w-full px-5 py-5 flex items-center justify-between">
        <div className="w-1/3 flex justify-start">
        
          <Link to="/">
          <img src="/logo.png" className="h-20 md:h-20 w-auto" />
          </Link>
          
        </div>
        <div className="w-1/3 text-center">
          <h7 className="text-2xl font-extrabold text-black">Water Resources Management: Geospatial Tank Information System for Sustainable Water and Environmental Planning</h7>
          <p className="font-serif text-black">
            Kanchipuram District · Tamil Nadu
          </p>
        </div>
        <div className="w-1/3 flex justify-end">
          <img src="/rusa.jpg" className="h-20 md:h-20 w-auto" />
        </div>
      </div>

      {/* ---------- Floating Soft Nav ---------- */}
      <nav className="py-3">
        <div className="max-w-4xl mx-auto flex justify-center">
          <ul className="bg-gray-100 px-4 py-2 rounded-full shadow-sm flex gap-3">

            {navItems.map(item => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`
                    px-4 py-2 rounded-full text-sm transition
                    ${location.pathname === item.path
                      ? "bg-blue-600 text-white shadow"
                      : "text-gray-700 hover:bg-white hover:shadow"
                    }
                  `}
                >
                  {item.label}
                </Link>
              </li>
            ))}

          </ul>
        </div>
      </nav>

    </header>
  );
}
