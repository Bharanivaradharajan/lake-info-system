export default function LakeSettlements({ settlements }) {
  return (
    <section className="py-10 bg-white border-t">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Nearby Settlements
        </h2>

        <ul className="list-disc ml-6 text-gray-700">
          {settlements.map(s => <li key={s}>{s}</li>)}
        </ul>

      </div>
    </section>
  );
}
