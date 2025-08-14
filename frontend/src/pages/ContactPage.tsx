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
  const [submissionStatus, setSubmissionStatus] = useState({
    loading: false,
    error: '',
    success: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus({ loading: true, error: '', success: '' });

    try {
      // Send data to the backend API endpoint
      const response = await fetch('https://jyothi-enterprises-4q1d.onrender.com/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form.');
      }

      setSubmissionStatus({
        loading: false,
        error: '',
        success: 'Quote request submitted successfully!'
      });

      console.log('API Response:', result);
      setForm(initialState); // Clear form on success

    } catch (error: any) {
      console.error('Error submitting form:', error);
      setSubmissionStatus({
        loading: false,
        error: error.message,
        success: ''
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
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
          {/* Display submission status */}
          {submissionStatus.loading && (
            <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4" role="alert">
              <p className="font-bold">Submitting...</p>
            </div>
          )}
          {submissionStatus.error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
              <p className="font-bold">Error!</p>
              <p>{submissionStatus.error}</p>
            </div>
          )}
          {submissionStatus.success && (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
              <p className="font-bold">Success!</p>
              <p>{submissionStatus.success}</p>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-600">Your name</label>
              <input
                type="text"
                name="name"
                className="w-full border rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                value={form.name}
                onChange={handleInputChange}
                required
                placeholder="Abc"
              />
            </div>
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-600">Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                className="w-full border rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                value={form.mobile}
                onChange={handleInputChange}
                required
                placeholder="+91 12345 67890"
                pattern="^[\d\+\-\s]{10,}$"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1 text-xs font-semibold text-gray-600">Type of Products</label>
              <select
                name="type"
                className="w-full border rounded py-2 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={form.type}
                onChange={handleInputChange}
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
                name="pax"
                className="w-full border rounded py-2 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={form.pax}
                onChange={handleInputChange}
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
                name="event"
                className="w-full border rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={form.event}
                onChange={handleInputChange}
                required
                placeholder="Wedding, Corporate, Exhibition, etc."
              />
            </div>
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-600">Start Date</label>
              <input
                type="date"
                name="startDate"
                className="w-full border rounded py-2 px-3 focus:outline-none"
                value={form.startDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-600">End Date</label>
              <input
                type="date"
                name="endDate"
                className="w-full border rounded py-2 px-3 focus:outline-none"
                value={form.endDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-600">Starting Time</label>
              <input
                type="time"
                name="startTime"
                className="w-full border rounded py-2 px-3 focus:outline-none"
                value={form.startTime}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-600">Ending Time</label>
              <input
                type="time"
                name="endTime"
                className="w-full border rounded py-2 px-3 focus:outline-none"
                value={form.endTime}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              disabled={submissionStatus.loading}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-2 rounded-lg font-semibold shadow-sm transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {submissionStatus.loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
