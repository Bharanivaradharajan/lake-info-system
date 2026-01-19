export default function LakeOverview({ text }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-50 via-blue-50 to-cyan-50">

      {/* Decorative background */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,_#bfdbfe,_transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight">
            Lake Overview
          </h2>
          <div className="mt-3 h-[3px] w-28 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid md:grid-cols-5 gap-10 items-start">

          {/* Accent Column */}
          <div className="hidden md:flex flex-col items-center">
            <div className="w-1 h-full bg-gradient-to-b from-blue-400 via-cyan-400 to-transparent rounded-full" />
          </div>

          {/* Textual Narrative */}
          <div className="md:col-span-4 space-y-6">

            {/* Main Description */}
            <p className="text-lg text-gray-800 leading-relaxed">
              {text || (
                <span className="italic text-gray-500">
                  Detailed lake description will be updated soon as part of
                  ongoing data validation and field verification.
                </span>
              )}
            </p>

            {/* Highlight Box */}
            <div className="bg-white/70 backdrop-blur rounded-xl border border-blue-100 p-6 shadow-sm">
              <p className="text-blue-900 font-semibold mb-2">
                Why this lake matters
              </p>
              <p className="text-gray-700 leading-relaxed">
                This lake plays a crucial role in local water balance, ecological
                stability, and community livelihoods. Its spatial extent and
                hydrological behavior make it significant for both conservation
                planning and governance.
              </p>
            </div>

            {/* Context Strip */}
            <div className="flex items-start gap-3 text-sm text-blue-700">
              <span className="mt-1 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
              <p>
                Official descriptive data sourced from government records,
                geospatial surveys, and on-ground verification under the
                Lake Information System initiative.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
