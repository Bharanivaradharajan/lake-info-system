import { MapContainer, TileLayer, GeoJSON, LayersControl } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import lakes from "../../data/lakes.json";
import boundary from "../../data/lake2.json";

export default function MapViewer() {

  const navigate = useNavigate();

  const lakeStyle = {
    color: "blue",
    weight: 1,
    fillOpacity: 0.5
  };

  const highlightStyle = {
    weight: 3,
    color: "yellow",
    fillOpacity: 0.7
  };

  const onEachLake = (feature, layer) => {

    const props = feature?.properties ?? {};

    const name = props.setname || "Unnamed Lake";
    const area = props.area_ha ? props.area_ha.toFixed(2) : "-";
    const uq = props.uqcode || "-";

    layer.on("mouseover", () => layer.setStyle(highlightStyle));
    layer.on("mouseout", () => layer.setStyle(lakeStyle));

    layer.on("click", () => {
      if (props?.uqcode) navigate(`/lakes/${props.uqcode}`);
    });

    layer.bindTooltip(
      `<b>${name}</b><br/>
       Area : ${area} Ha<br/>
       UQ Code : ${uq}`,
      { sticky: true, direction: "top", opacity: 0.9 }
    );
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* CARD */}
        <div className="
          bg-white 
          shadow-xl 
          rounded-2xl 
          border 
          border-gray-200
          overflow-hidden
        ">

          {/* HEADER BAR */}
          <div className="px-6 py-3 border-b bg-gray-100">
            <h3 className="text-lg font-semibold text-gray-800">
              Interactive Lake GIS Viewer
            </h3>
            <p className="text-sm text-gray-500">
              Click a lake to view full details
            </p>
          </div>

          {/* MAP */}
          <div className="p-4">
            <div className="rounded-xl overflow-hidden">

              <MapContainer
                center={[12.8406, 79.7036]}
                zoom={11}
                scrollWheelZoom
                className="w-full h-[65vh]"
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <LayersControl position="topright">

                  <LayersControl.Overlay name="District Boundary" checked>
                    <GeoJSON data={boundary} style={{ color: "red", weight: 2 }} />
                  </LayersControl.Overlay>

                  <LayersControl.Overlay name="Lakes" checked>
                    <GeoJSON
                      data={lakes}
                      style={() => lakeStyle}
                      onEachFeature={onEachLake}
                    />
                  </LayersControl.Overlay>

                </LayersControl>

              </MapContainer>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
