export default function LakeOverview({ text }) {

  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {text}
      </p>
    </section>
  );
}
