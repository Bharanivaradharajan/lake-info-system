export default function LakeStats({ stats }) {
  return (
    <section className="py-10 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">

        {Object.entries(stats).map(([k,v]) => (
          <div key={k} className="bg-gray-50 p-5 rounded-xl border shadow-sm">
            <p className="text-gray-500 text-sm uppercase">{k}</p>
            <h3 className="text-xl font-bold text-gray-800 mt-2">{v}</h3>
          </div>
        ))}

      </div>
    </section>
  );
}
