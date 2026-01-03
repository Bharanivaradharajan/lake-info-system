const lakes = [
  {
    id: "KCP001",
    name: "Chembarambakkam Lake",
    district: "Kanchipuram",
    taluk: "Sriperumbudur",
    village: "Chembarambakkam",
    type: "Reservoir",
    updated: "Jan 2026",

    stats: {
      area: "3850 Ha",
      capacity: "3645 Mcft",
      depth: "14 m",
      catchment: "238 sq km"
    },

    coordinates: {
      lat: 13.006,
      lng: 80.082,
      elevation: "30m MSL"
    },

    overview: `
Chembarambakkam Lake is one of the largest freshwater reservoirs in Tamil Nadu.
It plays a vital role in supplying drinking water to Chennai and supports
irrigation and livelihoods in surrounding areas.
`,

    hydrology: {
      inflow: "Seasonal rivers & monsoon rainfall",
      outflow: "Water supply canals",
      authority: "PWD Tamil Nadu",
      monitoring: "Revenue Department"
    },

    usage: [
      "Drinking water",
      "Irrigation",
      "Groundwater recharge",
      "Flood storage"
    ],

    settlements: [
      "Chembarambakkam",
      "Nazarathpet",
      "Kavaraipettai"
    ],

    images: [
      "/semb1.jpg",
      "/semb2.jpg",
      "/semb3.jpg"
    ]
  }
];

export default lakes;
