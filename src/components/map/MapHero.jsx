export default function MapHero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 text-black">

      {/* Floating background circles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl -top-10 -left-10 animate-pulse" />
        <div className="absolute w-72 h-72 bg-teal-400 rounded-full blur-3xl bottom-0 right-0 animate-ping" />
      </div>

      <div className="max-w-6xl mx-auto relative px-6 text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold drop-shadow-lg animate-fade-in">
          Kanchipuram District – Lake Information Map
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-blue-100 text-lg leading-relaxed animate-slide-up">
          A digital GIS platform displaying lake boundaries in shapefile format,
          enabling spatial visualization and data-driven water resource management.
        </p>

        {/* Highlight Label */}
        <div className="mt-6 inline-block bg-white/20 px-5 py-2 rounded-full text-sm font-semibold backdrop-blur-md border border-white/30 animate-bounce-slow">
          🔍 Shapefile Based Lake Boundary Viewer
        </div>
        


      </div>
    </section>
  );
}
