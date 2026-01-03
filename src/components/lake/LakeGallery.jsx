export default function LakeGallery({ images }) {

  return (
    <section className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-2xl font-bold mb-4">Lake Gallery</h2>

      <div className="grid md:grid-cols-3 gap-4">

        {images.map((img,i)=>(
          <img key={i}
            src={img}
            className="rounded-xl shadow hover:scale-105 transition object-cover h-48"
          />
        ))}

      </div>
    </section>
  );
}
