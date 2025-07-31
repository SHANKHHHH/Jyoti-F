import React, { useState } from "react";

const initialState = {
  name: "",
  mobile: "",
  type: "",
  pax: "",
  event: "",
  startDate: "",
  endDate: "",
  startTime: "",
  endTime: "",
};

const ContactPage: React.FC = () => {
  const [form, setForm] = useState(initialState);

  // For a real app, implement onSubmit (API/email integration)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Quote request submitted!");
    setForm(initialState);
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex items-center py-10 pt-24">
      <div className="max-w-5xl w-full mx-auto bg-white flex flex-col md:flex-row shadow-lg rounded-2xl overflow-hidden">
        {/* Left column */}
        <div className="w-full md:w-2/5 px-8 py-10 bg-[#FAF7F4] flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">Get a Quote</h2>
            <p className="text-gray-700 mb-6 text-sm">
              For all your event needs, from portable toilets and handwash stations to cooling, heating systems, and cabin rentals, we’ve got you covered.
              <br /><br />
              Reach out to us for more information or to book our services for your upcoming event.
            </p>
          </div>
          <div className="text-sm">
            <div className="mb-4">
              <div className="font-semibold text-gray-500">PHONE</div>
              <div>Mobile: <a href="tel:+919900022300" className="text-gray-800">+91 99000 22300</a></div>
              <div>Hotline: <a href="tel:+919900022301" className="text-gray-800">+91 99000 22301</a></div>
            </div>
            <div>
              <div className="font-semibold text-gray-500">MAIL</div>
              <div>
                <a href="mailto:info@jyotientp.com" className="text-orange-700 hover:underline">info@jyotientp.com</a>
              </div>
              <div>
                <a href="mailto:sales@jyotientp.com" className="text-orange-700 hover:underline">sales@jyotientp.com</a>
              </div>
            </div>
          </div>
        </div>
        {/* Right column = Form */}
        <form
          className="w-full md:w-3/5 px-8 py-10 bg-white flex flex-col justify-center"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-600">Your name</label>
              <input
                type="text"
                className="w-full border rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                required
                placeholder="Abc"
              />
            </div>
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-600">Mobile Number</label>
              <input
                type="tel"
                className="w-full border rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                value={form.mobile}
                onChange={e => setForm(f => ({ ...f, mobile: e.target.value }))}
                required
                placeholder="+91 12345 67890"
                pattern="^[\d\+\-\s]{10,}$"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1 text-xs font-semibold text-gray-600">Type of Products</label>
              <select
                className="w-full border rounded py-2 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={form.type}
                onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                required
              >
                <option value="">Select a product</option>
                <option value="Portable Toilets">Portable Toilets</option>
                <option value="Handwash Stations">Handwash Stations</option>
                <option value="Cooling System">Cooling System</option>
                <option value="Heating System">Heating System</option>
                <option value="Cabin Rental">Cabin Rental</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-600">Pax Count</label>
              <select
                className="w-full border rounded py-2 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={form.pax}
                onChange={e => setForm(f => ({ ...f, pax: e.target.value }))}
                required
              >
                <option value="">Pax</option>
                <option value="50">Up to 50</option>
                <option value="100">50-100</option>
                <option value="200">100-200</option>
                <option value="500">200-500</option>
                <option value="1000">More than 500</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-600">Event Type</label>
              <input
                type="text"
                className="w-full border rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={form.event}
                onChange={e => setForm(f => ({ ...f, event: e.target.value }))}
                required
                placeholder="Wedding, Corporate, Exhibition, etc."
              />
            </div>
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-600">Start Date</label>
              <input
                type="date"
                className="w-full border rounded py-2 px-3 focus:outline-none"
                value={form.startDate}
                onChange={e => setForm(f => ({ ...f, startDate: e.target.value }))}
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-600">End Date</label>
              <input
                type="date"
                className="w-full border rounded py-2 px-3 focus:outline-none"
                value={form.endDate}
                onChange={e => setForm(f => ({ ...f, endDate: e.target.value }))}
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-600">Starting Time</label>
              <input
                type="time"
                className="w-full border rounded py-2 px-3 focus:outline-none"
                value={form.startTime}
                onChange={e => setForm(f => ({ ...f, startTime: e.target.value }))}
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-600">Ending Time</label>
              <input
                type="time"
                className="w-full border rounded py-2 px-3 focus:outline-none"
                value={form.endTime}
                onChange={e => setForm(f => ({ ...f, endTime: e.target.value }))}
                required
              />
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-2 rounded-lg font-semibold shadow-sm transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
