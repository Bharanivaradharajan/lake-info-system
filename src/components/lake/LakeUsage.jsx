export default function LakeUsage({ usage }) {
  return (
    <section className="py-10 bg-gray-50 border-t">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Usage
        </h2>

        <div className="flex gap-3 flex-wrap">
          {usage.map(u => (
            <span
              key={u}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm"
            >
              {u}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
