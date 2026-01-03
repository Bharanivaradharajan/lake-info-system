export default function MapViewer({ search, filter }) {

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Display current filters for debugging */}
        <div className="mb-4 text-sm text-gray-600">
          <div>Search: {search || "—"}</div>
          <div>Size: {filter.size || "—"}</div>
          <div>Usage: {filter.usage || "—"}</div>
        </div>

        {/* Map */}
        <div className="w-full h-[60vh] bg-gray-200 rounded-xl shadow-lg flex items-center justify-center">
          Interactive Map Will Load Here
        </div>

      </div>
    </section>
  );
}
