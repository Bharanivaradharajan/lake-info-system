export default function LakeGallery({ images = [] }) {
  if (!images.length) return null;

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <div className="mb-8">
          <h2 className="text-2xl font-extrabold text-blue-800 tracking-wide">
            Lake Gallery
          </h2>
          <p className="text-gray-600 mt-1">
            Visual documentation of the lake and its surroundings
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">

          {/* Main Image */}
          {images[0] && (
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src={images[0]}
                alt="Lake view"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          )}

          {/* Remaining Images */}
          {images.slice(1, 5).map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl shadow group"
            >
              <img
                src={img}
                alt={`Lake gallery ${i + 2}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
