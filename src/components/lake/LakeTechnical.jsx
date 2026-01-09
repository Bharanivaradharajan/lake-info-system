export default function LakeHydrology({ hydrology }) {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white border-transparent">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-800 tracking-wide">
            Hydrology & Management
          </h2>
          <p className="text-gray-600 mt-1">
            Water flow characteristics and administrative responsibility
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Hydrology */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-blue-700">
              Hydrological Profile
            </h3>

            <div className="flex justify-between border-b pb-3">
              <span className="text-gray-600">Inflow</span>
              <span className="font-bold text-gray-800">
                {hydrology.inflow || "—"}
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="text-gray-600">Outflow</span>
              <span className="font-bold text-gray-800">
                {hydrology.outflow || "—"}
              </span>
            </div>
          </div>

          {/* Governance */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-green-700">
              Governance & Monitoring
            </h3>

            <div className="flex justify-between border-b pb-3">
              <span className="text-gray-600">Responsible Authority</span>
              <span className="font-bold text-gray-800 text-right">
                {hydrology.authority || "—"}
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="text-gray-600">Monitoring Agency</span>
              <span className="font-bold text-gray-800 text-right">
                {hydrology.monitoring || "—"}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
