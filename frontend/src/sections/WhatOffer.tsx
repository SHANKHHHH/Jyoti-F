import vvipImage from "../assets/VVIP.jpg";
import festivalImage from "../assets/HOLI.jpg";
import socialImage from "../assets/VVI.png";

const events = [
  { title: "VVIP Events (Conferences & Rallys)", img: vvipImage },
  { title: "Festivals & Concerts", img: festivalImage },
  { title: "Social & Corporate", img: socialImage },
];

const BookEvent: React.FC = () => (
  <section className="max-w-6xl mx-auto px-4 py-12 font-sans">
    <h1 className="text-amber-500 font-bold text-3xl sm:text-4xl mb-4 tracking-wider">BOOK FOR AN EVENT</h1>
    <p className="text-base sm:text-lg mb-2">
      Whether you’re hosting an event, managing a construction site, or planning a special occasion, our range of
      services ensures you have access to clean, hygienic, and reliable amenities.
    </p>
    <p className="font-bold text-base sm:text-lg mb-8">Select the one of your choice to know more.</p>
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-10">
      {events.map((ev, idx) => (
        <div key={idx} className="w-full sm:w-1/3">
          <div className="w-full h-44 sm:h-48 rounded-xl overflow-hidden mb-4 shadow bg-gray-100 flex items-center justify-center">
            <img
              src={ev.img}
              alt={ev.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center font-semibold text-lg">{ev.title}</div>
        </div>
      ))}
    </div>
  </section>
);
export default BookEvent;
