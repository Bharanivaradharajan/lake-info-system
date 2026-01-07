export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50 border-b">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-gray-800">
          About the Lake Information System
        </h2>

        <p className="text-gray-600 text-center max-w-3xl mx-auto mt-4 leading-relaxed">
          The Lake Information System for Kanchipuram District is developed by the 
          <span className="font-semibold text-blue-800"> Centre for Water Resource Management, University of Madras</span>,
          under the <span className="font-semibold">RUSA Scheme</span>.  
          This digital platform provides spatial and non-spatial information on district lakes to support 
          research, governance, planning and public awareness on water resource conservation.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="p-6 bg-white shadow rounded-xl border-b-transparent">
            <h3 className="font-bold text-gray-800 mb-2">🎯 Objective</h3>
            <p className="text-gray-600">
              To create a centralized and accessible digital database of lakes in Kanchipuram District.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl border-b-transparent">
            <h3 className="font-bold text-gray-800 mb-2">🌊 Water Conservation</h3>
            <p className="text-gray-600">
              Promote sustainable lake protection, monitoring and awareness at district level.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl border-b-transparent">
            <h3 className="font-bold text-gray-800 mb-2">📚 Academic & Governance Support</h3>
            <p className="text-gray-600">
              Assist students, researchers and government officials with actionable data.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
