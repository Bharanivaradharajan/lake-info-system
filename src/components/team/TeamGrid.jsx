import ProfileCard from "./ProfileCard";

export default function TeamGrid({ members }) {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-16">

      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Project Members
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {members.map(m => (
          <ProfileCard key={m.id} member={m} />
        ))}
      </div>

    </section>
  );
}
