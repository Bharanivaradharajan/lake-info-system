export default function LakeHero({ lake }) {

  return (
    <section className="bg-blue-50 py-12 text-center">
      <h1 className="text-4xl font-bold text-gray-800">
        {lake.name}
      </h1>

      <p className="text-gray-600 mt-2">
        {lake.district} District • {lake.type} Lake
      </p>

      <p className="text-sm text-gray-500 mt-1">
        Last Updated — {lake.updated}
      </p>
    </section>
  );
}
