import LakeVideoGuide from "../map/LakeVideoGuide";

export default function MapInfo() {
  return (
    <section className="py-16 bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-800 text-center">
          About the Lake Shapefile Map
        </h3>

        {/* Description */}
        <p className="text-gray-600 mt-4 text-center leading-relaxed max-w-3xl mx-auto">
          This interactive GIS map displays the 
          <span className="font-semibold text-blue-700"> shapefile overlay of lakes in Kanchipuram District</span>. 
          Each lake boundary is geo-referenced and mapped using official spatial datasets. 
          Users can explore the lakes visually, understand their locations and access key details.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white shadow border-transparent rounded-xl p-6">
            <h4 className="font-bold text-gray-800 mb-2">
              🔍 View Lake Boundaries
            </h4>
            <p className="text-gray-600">
              All lakes are displayed as spatial polygons using GIS shapefiles
              for accurate boundary visualization.
            </p>
          </div>

          <div className="bg-white shadow border-transparent rounded-xl p-6">
            <h4 className="font-bold text-gray-800 mb-2">
              📍 Explore & Identify Lakes
            </h4>
            <p className="text-gray-600">
              Click or hover over a lake to view its name, location and other
              details within the map interface.
            </p>
          </div>

          <div className="bg-white shadow border-transparent rounded-xl p-6">
            <h4 className="font-bold text-gray-800 mb-2">
              📊 Supports Research & Governance
            </h4>
            <p className="text-gray-600">
              Useful for administrators, students, researchers and the public
              for better understanding of water resources.
            </p>
          </div>

        </div>

        {/* Visual Guide Section */}
        <div className="mt-14 grid md:grid-cols-2 gap-8 items-center">

          {/* Image / Video Guide */}
          <LakeVideoGuide />


          {/* Instructions */}
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">
              How to Use the Map
            </h4>

            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>✔ Zoom and pan across the district map</li>
              <li>✔ Click a lake boundary to view its details</li>
              <li>✔ Use the search bar to find specific lakes</li>
              <li>✔ Apply filters to narrow your results</li>
              <li>✔ View spatial position and attributes instantly</li>
            </ul>

            <p className="text-gray-600 mt-4">
              This map is part of the Lake Information System developed by the 
              <strong> Centre for Water Resource Management, University of Madras</strong>,
              under the <strong>RUSA Scheme</strong>.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
