import { MapContainer, TileLayer } from "react-leaflet";

export default function MapViewer({ search, filter }) {

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Interactive GIS Map Viewer
        </h3>

        {/* Map */}
        <div className="w-full h-[65vh] rounded-xl shadow border overflow-hidden">

          <MapContainer
            center={[12.8406, 79.7036]}   // Kanchipuram District approx
            zoom={11}
            scrollWheelZoom={true}
            className="w-full h-full"
          >
            {/* Base Map Layer */}
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="© OpenStreetMap contributors"
            />
          </MapContainer>

        </div>

      </div>
    </section>
  );
}
