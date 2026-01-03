export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="w-full px-6 py-5 flex items-center justify-between">

        {/* Left Logo */}
        <div className="flex justify-start w-1/3">
          <img 
            src="/logo.png"
            alt="Left Logo"
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* Center Title */}
        <div className="text-center w-1/3">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-wide">
            Lake Information System
          </h1>
          <p className="text-gray-600 text-sm md:text-base mt-1">
            Kanchipuram District · Tamil Nadu · India
          </p>
        </div>

        {/* Right Logo */}
        <div className="flex justify-end w-1/3">
          <img 
            src="/rusa.jpg"
            alt="Right Logo"
            className="h-14 w-auto object-contain"
          />
        </div>

      </div>
    </header>
  );
}
