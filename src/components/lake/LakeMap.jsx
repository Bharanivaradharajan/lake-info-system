import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import lakesGeoJSON from "../../data/lakes.json";

export default function LakeMap({ lake }) {

  const lakeFeature = lakesGeoJSON.features.find(
    f => f.properties?.uqcode === lake.id
  );

  return (
    <section className="relative bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-50 overflow-hidden">

      {/* Soft background pattern */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,_#93c5fd,_transparent_65%)]" />

      <div className="relative max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* 🗺️ Map Panel */}
        <div className="relative h-[360px] rounded-2xl overflow-hidden border border-blue-200 shadow-lg">

          <MapContainer
            center={[
              lake.coordinates.lat,
              lake.coordinates.lng
            ]}
            zoom={14}
            scrollWheelZoom={false}
            className="w-full h-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="© OpenStreetMap contributors"
            />

            {lakeFeature && (
              <GeoJSON
                data={lakeFeature}
                style={{
                  color: "#2563eb",
                  weight: 2,
                  fillOpacity: 0.55
                }}
              />
            )}
          </MapContainer>

          {/* Map label */}
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-blue-800 shadow">
            Lake Boundary (GIS)
          </div>
        </div>

        {/* 📍 Location Info */}
        <div>
          <h3 className="text-2xl font-extrabold text-blue-900 mb-4">
            Location Information
          </h3>

          <div className="space-y-3 text-lg text-gray-700">
            <p>
              <span className="font-semibold text-blue-800">District</span> — {lake.district}
            </p>
            <p>
              <span className="font-semibold text-blue-800">Taluk</span> — {lake.taluk || "—"}
            </p>
            <p>
              <span className="font-semibold text-blue-800">Village</span> — {lake.village}
            </p>
          </div>

          {/* Coordinates */}
          <div className="mt-6 text-sm text-gray-600">
            <p>
              Latitude: <span className="font-mono">{lake.coordinates.lat}</span>
            </p>
            <p>
              Longitude: <span className="font-mono">{lake.coordinates.lng}</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
