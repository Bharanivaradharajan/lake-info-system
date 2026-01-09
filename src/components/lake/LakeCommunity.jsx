export default function LakeCommunity({ settlements = [], usage = [] }) {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50 border-transparent">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-800 tracking-wide">
            Community & Usage
          </h2>
          <p className="text-gray-600 mt-1">
            Human interaction and functional use of the lake
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* -------- Settlements -------- */}
          <div>
            <h3 className="text-lg font-semibold text-green-700 mb-4">
              Nearby Settlements
            </h3>

            <div className="flex flex-wrap gap-3">
              {settlements.length ? (
                settlements.map((v, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-white border border-green-200 text-green-800 text-sm font-medium shadow-sm hover:scale-105 transition"
                  >
                    {v}
                  </span>
                ))
              ) : (
                <p className="text-gray-500">No settlement data available</p>
              )}
            </div>
          </div>

          {/* -------- Animated Usage Diagram -------- */}
          <div>
            <h3 className="text-lg font-semibold text-blue-700 mb-4">
              Primary Water Usage
            </h3>

            {/* Diagram */}
            <div className="relative bg-white rounded-2xl border shadow-sm p-6 overflow-hidden">

              {/* Water Flow Line */}
              <div className="absolute inset-x-6 top-1/2 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 animate-pulse" />

              {/* Lake Node */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold shadow-lg animate-bounce-slow">
                  Lake
                </div>
              </div>

              {/* Usage Outputs */}
              <div className="mt-10 grid grid-cols-2 gap-4 text-center">
                {usage.length ? (
                  usage.map((u, i) => (
                    <div
                      key={i}
                      className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 text-blue-800 font-semibold shadow-sm hover:shadow-md transition"
                    >
                      {u}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 col-span-2">
                    Usage data not available
                  </p>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
