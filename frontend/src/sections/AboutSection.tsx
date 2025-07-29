const AboutUs: React.FC = () => (
  <section className="max-w-3xl mx-auto my-12 px-4 font-sans">
    <h1 className="text-amber-500 font-bold text-3xl sm:text-4xl tracking-wider">ABOUT US</h1>
    <p className="mt-6 text-base sm:text-lg">
      We specialize in providing top-notch portable toilets, air conditioning and mobile containers as rental
      solutions, all tailored to meet your needs.
    </p>
    <div className="mt-6">
      <strong className="block text-lg sm:text-xl mb-2">Serving across India since 2009</strong>
      <p className="mt-4 text-base sm:text-lg">
        Our commitment to customer satisfaction drives everything we do. From initial inquiry to post-event pickup,
        our dedicated team is here to support you every step of the way.
      </p>
      <p className="mt-4 text-base sm:text-lg">
        When it comes to portable toilets, luxury amenities, cooling systems, and luxury cabins, Jyoti Enterprises
        stands out for quality, service, and reliability. Discover the difference with us.
      </p>
    </div>
    <button
      className="mt-8 px-6 py-2 bg-emerald-500 text-white rounded-md font-bold text-base sm:text-lg shadow hover:bg-emerald-600 transition-colors"
    >
      Read More
    </button>
  </section>
);
export default AboutUs;
