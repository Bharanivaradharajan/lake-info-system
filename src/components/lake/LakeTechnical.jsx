export default function LakeTechnical({ hydrology }) {

  return (
    <section className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-2xl font-bold mb-4">Lake Profile</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="font-semibold mb-2">Hydrology</h3>

            <p>Inflow — {hydrology.inflow}</p>
            <p>Outflow — {hydrology.outflow}</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="font-semibold mb-2">Administration</h3>

            <p>Authority — {hydrology.authority}</p>
            <p>Monitoring — {hydrology.monitoring}</p>
          </div>

        </div>
      </div>
    </section>
  );
}
