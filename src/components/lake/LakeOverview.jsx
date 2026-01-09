export default function LakeOverview({ text }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-50 via-blue-50 to-cyan-50">

      {/* Soft decorative background */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_bottom,_#bfdbfe,_transparent_65%)]" />

      <div className="relative max-w-5xl mx-auto px-6 py-16">

        {/* Section header */}
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-blue-900 tracking-tight">
            Lake Overview
          </h2>
          <div className="mt-2 h-[3px] w-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
        </div>

        {/* Content */}
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
          {text || (
            <span className="italic text-gray-500">
              Detailed lake description will be updated soon as part of ongoing
              data validation and field verification.
            </span>
          )}
        </p>

        {/* Info hint line */}
        <div className="mt-8 text-sm text-blue-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          Official descriptive data sourced from government records and field surveys
        </div>

      </div>
    </section>
  );
}
