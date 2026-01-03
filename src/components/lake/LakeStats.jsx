export default function LakeStats({ stats }) {

  const data = [
    { label: "Surface Area", value: stats.area },
    { label: "Storage Capacity", value: stats.capacity },
    { label: "Max Depth", value: stats.depth },
    { label: "Catchment Area", value: stats.catchment }
  ];

  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">

        {data.map((d,i) => (
          <div key={i}
            className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition">
            <p className="text-gray-500 text-sm">{d.label}</p>
            <h3 className="text-2xl font-bold">{d.value}</h3>
          </div>
        ))}

      </div>
    </section>
  );
}
