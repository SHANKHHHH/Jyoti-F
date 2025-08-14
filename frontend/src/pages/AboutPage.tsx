import React from "react";

import AboutMainBgm from '../assets/AboutUsBg.jpg';
import QualityImg from '../assets/quality.png';
import ReliabilityImg from '../assets/Reliability.png';
import EcoImg from '../assets/Eco.png';
import CompetitiveImg from '../assets/competitive.png';
import ExpImg from '../assets/exp.png';
import HygieneImg from '../assets/hygiene.png';
import FounderImg from '../assets/Owner.png';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col pt-24 pb-10 items-center">
      {/* Top Banner with "ABOUT US" text overlay */}
      <div className="relative w-full flex justify-center h-72 md:h-[420px]">
        {/* Banner Image */}
        <img src={AboutMainBgm}
          alt="About Us Banner"
          className="absolute top-0 left-0 w-full h-full object-cover object-top"
          draggable={false}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white drop-shadow-xl text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wider text-center">
            ABOUT US
          </h1>
        </div>
      </div>

      <div className="max-w-5xl w-full bg-white rounded-xl shadow mt-[-3rem] relative z-20 p-6 md:p-12">
        {/* OUR JOURNEY */}
        <section className="mb-10">
          <h2 className="text-2xl font-black text-orange-500 mb-1 tracking-wide">OUR JOURNEY</h2>
          <div className="text-lg md:text-xl font-semibold text-gray-700 mb-3">Serving across India since 2009</div>
          <p className="text-gray-600 md:text-base text-sm leading-relaxed">
            From our humble beginnings, we recognized a significant need for quality sanitation services at outdoor events and gatherings.<br />
            This led us to create a solution that's not only reliable, but delivers peace of mind to event hosts and their stakeholders. Today, we're privileged to serve a wide spectrum of clients across India, from the southernmost tip of Kanyakumari to the northern stretches of Kashmir.
          </p>
        </section>

        {/* FOUNDER'S NOTE */}
        <section className="mb-14 flex flex-col md:flex-row gap-10 items-center md:items-start">
          {/* Founder image */}
          <div className="w-52 h-64 md:w-64 md:h-80 bg-gray-200 shadow-lg flex items-center justify-center rounded-2xl overflow-hidden shrink-0">
            <img
              src={FounderImg}
              alt="Trilok Jha"
              className="object-cover w-full h-full"
              draggable={false}
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-orange-400 mb-2">FOUNDER'S NOTE</h3>
            <div className="font-semibold mb-1 text-gray-800 text-lg">Trilok Jha</div>
            <p className="text-gray-500 text-base mb-2 leading-relaxed">
              At Jyoti Enterprises, we strive for excellence: service excellence, sanitation excellence, and a commitment to quality always.<br />
              Thank you for considering us and being a part of our journey.
            </p>
            <div className="text-gray-400 text-xs">
              On behalf of the entire organization, I promise to uphold the standard we are known for, and ensure we always meet your expectations.
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="mt-10">
  <h3 className="text-2xl font-bold text-orange-400 mb-12 text-center tracking-wide">WHY CHOOSE US?</h3>

  {/* Images grid: just your great-looking designed images, large and beautiful */}
  <div className="max-w-5xl mx-auto grid grid-cols-1 gap-12">
    <img src={QualityImg} alt="Quality" className="w-full h-auto object-cover rounded-2xl shadow" draggable={false} />
    <img src={ReliabilityImg} alt="Reliability" className="w-full h-auto object-cover rounded-2xl shadow" draggable={false} />
    <img src={EcoImg} alt="Eco-Friendly" className="w-full h-auto object-cover rounded-2xl shadow" draggable={false} />
    <img src={CompetitiveImg} alt="Competitive Pricing" className="w-full h-auto object-cover rounded-2xl shadow" draggable={false} />
    <img src={ExpImg} alt="Experience" className="w-full h-auto object-cover rounded-2xl shadow" draggable={false} />
    <img src={HygieneImg} alt="Hygiene" className="w-full h-auto object-cover rounded-2xl shadow" draggable={false} />
  </div>
</section>
      </div>
    </div>
  );
};

export default AboutPage;
