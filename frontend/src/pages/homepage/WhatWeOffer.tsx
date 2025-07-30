import vvipImage from "../../assets/VVIP.jpg";
import festivalImage from "../../assets/HOLI.jpg";
import socialImage from "../../assets/VVI.png";

const events = [
  { title: "VVIP Events (Conferences & Rallys)", img: vvipImage },
  { title: "Festivals & Concerts", img: festivalImage },
  { title: "Social & Corporate", img: socialImage },
];

const WhatOffer: React.FC = () => (
  <section className="max-w-6xl mx-auto px-4 py-12 font-sans">
    <h1 className="text-amber-500 font-bold text-3xl sm:text-4xl mb-2 tracking-wide border-b-4 border-amber-400 inline-block pb-1">
      BOOK FOR AN EVENT
    </h1>
    <p className="text-base sm:text-lg mt-4 mb-1">
      Whether you’re hosting an event, managing a construction site, or planning a special occasion, our range of
      services ensures you have access to clean, hygienic, and reliable amenities.
    </p>
    <p className="font-bold text-base sm:text-lg mb-10">Select the one of your choice to know more.</p>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {events.map((ev, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden cursor-pointer"
        >
          <div className="w-full h-52 sm:h-64">
            <img
              src={ev.img}
              alt={ev.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4 text-center font-semibold text-lg text-gray-800">{ev.title}</div>
        </div>
      ))}
    </div>
  </section>
);

export default WhatOffer;
