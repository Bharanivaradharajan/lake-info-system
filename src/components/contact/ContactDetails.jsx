export default function ContactDetails() {
  return (
    <section className="py-16 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Contact Information
        </h2>

        <p className="text-gray-600 text-center mt-2">
          For queries, suggestions or collaboration, please reach out to us.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-gray-50 p-6 rounded-xl shadow border">
            <h3 className="font-bold text-gray-800">📍 Address</h3>
            <p className="text-gray-600 mt-2">
              Centre for Water Resource Management<br/>
              University of Madras<br/>
              Tamil Nadu, India
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow border">
            <h3 className="font-bold text-gray-800">📧 Email</h3>
            <p className="text-gray-600 mt-2">
              example@unom.ac.in
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow border">
            <h3 className="font-bold text-gray-800">☎ Phone</h3>
            <p className="text-gray-600 mt-2">
              +91 ——————
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
