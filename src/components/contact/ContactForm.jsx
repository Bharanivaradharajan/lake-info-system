export default function ContactForm() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Send Us a Message
        </h2>

        <form className="mt-8 grid gap-6">

          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            rows="5"
            placeholder="Message"
            className="px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Submit Message
          </button>

        </form>

      </div>
    </section>
  );
}
