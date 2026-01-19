export default function LakeStatsInline({ stats }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50">

      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,_#93c5fd,_transparent_65%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12">

          {/* Area */}
          <StatItem
            value={stats.area}
            label="Area"
            color="from-blue-700 to-blue-500"
          />

          {/* Capacity */}
          <StatItem
            value={stats.capacity || "—"}
            label="Capacity"
            color="from-cyan-700 to-cyan-500"
            withDivider
          />

          {/* Depth */}
          <StatItem
            value={stats.depth || "—"}
            label="Depth"
            color="from-indigo-700 to-indigo-500"
            withDivider
          />

          {/* Catchment */}
          <StatItem
            value={stats.catchment || "—"}
            label="Catchment"
            color="from-sky-700 to-sky-500"
          />

        </div>

        {/* Bottom soft divider */}
        <div className="mt-14 h-[1px] bg-gradient-to-r from-transparent via-blue-300 to-transparent" />

      </div>
    </section>
  );
}

/* ---------------- Sub Component ---------------- */

function StatItem({ value, label, color, withDivider }) {
  return (
    <div className="relative flex flex-col items-center justify-center text-center">

      {/* Vertical Divider (desktop only) */}
      {withDivider && (
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-[1px] bg-gradient-to-b from-transparent via-blue-300 to-transparent" />
      )}

      {/* Value */}
      <p
        className={`
          text-4xl md:text-5xl font-extrabold tracking-tight
          bg-clip-text text-transparent bg-gradient-to-r ${color}
          transition-all duration-300
        `}
      >
        {value}
      </p>

      {/* Label */}
      <p className="mt-3 text-xs uppercase tracking-[0.25em] text-gray-700">
        {label}
      </p>

    </div>
  );
}
