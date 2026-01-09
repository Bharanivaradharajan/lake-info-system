export default function LakeStatsInline({ stats }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-cyan-50 to-indigo-50">
      
      {/* Decorative subtle background */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_#93c5fd,_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-y-10">

          {/* Area */}
          <div className="group">
            <p className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight group-hover:scale-105 transition">
              {stats.area}
            </p>
            <p className="mt-2 text-sm uppercase tracking-widest text-blue-700">
              Area
            </p>
          </div>

          {/* Capacity */}
          <div className="group">
            <p className="text-3xl md:text-4xl font-extrabold text-cyan-900 tracking-tight group-hover:scale-105 transition">
              {stats.capacity || "—"}
            </p>
            <p className="mt-2 text-sm uppercase tracking-widest text-cyan-700">
              Capacity
            </p>
          </div>

          {/* Depth */}
          <div className="group">
            <p className="text-3xl md:text-4xl font-extrabold text-indigo-900 tracking-tight group-hover:scale-105 transition">
              {stats.depth || "—"}
            </p>
            <p className="mt-2 text-sm uppercase tracking-widest text-indigo-700">
              Depth
            </p>
          </div>

          {/* Catchment */}
          <div className="group">
            <p className="text-3xl md:text-4xl font-extrabold text-sky-900 tracking-tight group-hover:scale-105 transition">
              {stats.catchment || "—"}
            </p>
            <p className="mt-2 text-sm uppercase tracking-widest text-sky-700">
              Catchment
            </p>
          </div>

        </div>

        {/* Bottom divider */}
        <div className="mt-12 h-[1px] bg-gradient-to-r from-transparent via-blue-300 to-transparent" />

      </div>
    </section>
  );
}
