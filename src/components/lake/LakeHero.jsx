export default function LakeHero({ lake }) {
  return (
    <section className="relative w-full h-[70vh] min-h-[420px] overflow-hidden">

      {/* Image from lakes data */}
      <img
        src={lake.images && lake.images.length > 0 ? lake.images[0] : "/default-lake.jpg"}
        alt={lake.name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

      {/* Text Content */}
      <div className="relative z-10 h-full flex items-end">
        <div className="max-w-7xl mx-auto px-6 pb-16">

          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            {lake.name}
          </h1>

          <p className="font-mono mt-4 max-w-2xl text-lg md:text-xl text-gray-200">
            A {lake.type} located in {lake.village}, {lake.district}, supporting
            irrigation and groundwater recharge.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-300">
            <span className="bg-white/10 px-3 py-1 rounded-full">
              📍 {lake.district}
            </span>
            <span className="bg-white/10 px-3 py-1 rounded-full">
              💧 {lake.hydrology.inflow}
            </span>
            <span className="bg-white/10 px-3 py-1 rounded-full">
              🗓 Updated {lake.updated}
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
