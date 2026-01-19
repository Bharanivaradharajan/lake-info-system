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

      {/* ---------- Logo + Title ---------- */}
      <div className="w-full px-5 py-5 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left Logo */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <Link to="/">
            <img src="/logo.png" className="h-16 md:h-20 w-auto" />
          </Link>
        </div>

        {/* Title */}
        <div className="w-full md:w-1/3 text-center px-2">
          <h7 className="text-lg md:text-2xl font-extrabold text-black leading-snug">
            Water Resources Management: Geospatial Tank Information System for Sustainable Water and Environmental Planning
          </h7>
          <p className="font-serif text-sm md:text-base text-black">
            Kanchipuram District · Tamil Nadu
          </p>
        </div>

        {/* Right Logo */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <img src="/rusa.jpg" className="h-16 md:h-20 w-auto" />
        </div>

      </div>

      {/* ---------- Floating Soft Nav ---------- */}
      <nav className="py-3">
        <div className="max-w-4xl mx-auto flex justify-center px-3">
          <ul className="bg-gray-100 px-4 py-2 rounded-full shadow-sm flex flex-wrap justify-center gap-3">

            {navItems.map(item => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`
                    px-4 py-2 rounded-full text-sm transition whitespace-nowrap
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
