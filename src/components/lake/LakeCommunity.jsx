export default function LakeCommunity({ settlements, usage }) {

  return (
    <section className="max-w-6xl mx-auto py-12 px-6">

      <h2 className="text-2xl font-bold mb-6">Community & Usage</h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div>
          <h3 className="font-semibold mb-2">Nearby Settlements</h3>
          <ul className="list-disc ml-5">
            {settlements.map((v,i)=> <li key={i}>{v}</li>)}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Primary Uses</h3>
          <ul className="list-disc ml-5">
            {usage.map((v,i)=> <li key={i}>{v}</li>)}
          </ul>
        </div>

      </div>

    </section>
  );
}
