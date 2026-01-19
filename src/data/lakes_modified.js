/* =====================================================
   COMMON DUMMY CONTENT FOR ALL LAKES
   ===================================================== */

const COMMON_LAKE_CONTENT = {
  heroTagline:
    "A vital freshwater body supporting irrigation, groundwater recharge, and local ecosystems.",

  overview:
    "This lake plays an important role in sustaining regional water balance. It supports agriculture, groundwater recharge, and seasonal biodiversity. Primarily rain-fed, the lake acts as a natural storage system during monsoon periods.",

  ecologicalImportance:
    "The lake contributes to groundwater replenishment, supports native aquatic vegetation, and provides habitat for birds and small wildlife. It also helps regulate local microclimate and soil moisture.",

  historicalSignificance:
    "Traditionally maintained by local communities, this lake has been an integral part of the village irrigation network for decades, reflecting indigenous water management practices.",

  currentIssues:
    "Seasonal drying, siltation, reduced inflow, and encroachment pressures are key challenges affecting the lake’s sustainability.",

  conservationMeasures:
    "Recommended actions include desilting, inlet restoration, strengthening of bunds, prevention of encroachments, and increased community participation.",

  futureScope:
    "With proper restoration and scientific management, the lake can significantly enhance water security, agricultural resilience, and climate adaptation efforts."
};

const RAW_LAKES = [
  {
    id: "18TN794724130006",
    uqcode: "18TN794724130006",
    name: "Kappankottur",
    district: "Kanchipuram",
    taluk: "",
    village: "Kappankottur",
    type: "Lake",
    updated: "Jan 2026",
    stats: {
      area: "0.74 Ha",
      capacity: "—",
      depth: "—",
      catchment: "—"
    },
    coordinates: {
      lat: 13.0021982,
      lng: 79.7906182,
      elevation: "—"
    },
    hydrology: {
      inflow: "Rainfed",
      outflow: "Runoff",
      authority: "PWD Tamil Nadu",
      monitoring: "Revenue Department"
    },
    usage: ["Irrigation", "Recharge"],
    settlements: ["Kappankottur"],
    images: ["/default-lake.jpg"]
  }
];

const lakes = RAW_LAKES.map(lake => ({
  ...lake,
  ...COMMON_LAKE_CONTENT
}));

export default lakes;
