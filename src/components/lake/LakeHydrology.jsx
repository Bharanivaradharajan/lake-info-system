export default function LakeHydrology({ hydrology }) {
  return (
    <section className="py-12 bg-white border-t">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Hydrology & Management
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-gray-50 p-6 rounded-xl border">
            <p><strong>Inflow:</strong> {hydrology.inflow}</p>
            <p><strong>Outflow:</strong> {hydrology.outflow}</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border">
            <p><strong>Authority:</strong> {hydrology.authority}</p>
            <p><strong>Monitoring:</strong> {hydrology.monitoring}</p>
          </div>

        </div>

      </div>
    </section>
  );
}
