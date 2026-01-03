export default function LakeMap({ lake }) {

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6">

        <div className="h-80 bg-gray-200 rounded-xl flex items-center justify-center">
          <p className="text-gray-500">
            Map View (Shapefile Overlay Coming Soon)
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Location Details</h3>

          <p>District — {lake.district}</p>
          <p>Taluk — {lake.taluk}</p>
          <p>Village — {lake.village}</p>
        </div>

      </div>
    </section>
  );
}
