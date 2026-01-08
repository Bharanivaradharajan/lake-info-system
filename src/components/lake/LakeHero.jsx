export default function LakeHero({ lake }) {
  return (
    <section className="bg-blue-50 py-10 border-b">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-3xl font-bold text-gray-800">
          {lake.name} Lake
        </h1>

        <p className="text-gray-600 mt-2">
          {lake.village}, {lake.district} District · Tamil Nadu
        </p>

        <span className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
          {lake.type}
        </span>

      </div>
    </section>
  );
}
