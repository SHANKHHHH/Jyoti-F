import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import OrangeBg from '../../assets/o.png';
import i1 from '../../assets/i1.png';
import i2 from '../../assets/i2.png';
import i3 from '../../assets/i3.png';
import i4 from '../../assets/i4.png';
import i5 from '../../assets/i5.png';
import i6 from '../../assets/i6.png';
import i7 from '../../assets/i7.png';
import i8 from '../../assets/i8.png';
import i9 from '../../assets/i9.png';

const icons = [
  { img: i1, label: "Air Conditioners", category: "Air Conditioners" },
  { img: i2, label: "Portable Coolers", category: "Coolers" },
  { img: i3, label: "Mist Fans", category: "Fans" },
  { img: i4, label: "Premium Toilets", category: "Portable Toilets" },
  { img: i5, label: "Bio Loos", category: "Portable Toilets" },
  { img: i6, label: "Shower Cabins", category: "Luxe" },
  { img: i7, label: "Toilet Cabins", category: "Portable Toilets" },
  { img: i8, label: "Office Cabins", category: "Containers" },
  { img: i9, label: "Storage Containers", category: "Containers" },
];

const IconSection: React.FC = () => {
  return (
    <div className="w-full bg-white py-12 px-4 md:px-8">
      {/* Desktop Grid */}
      <div className="
        hidden lg:grid
        grid-cols-9
        gap-8
        justify-items-center
        max-w-6xl mx-auto
      ">
        {icons.map(({ img, label, category }, index) => (
          <Link
            key={index}
            to={`/products?category=${category}`} // Use Link and pass category as a query parameter
            className="flex flex-col items-center text-center space-y-3 cursor-pointer hover:scale-105 transition-transform"
          >
            <div
              className="w-24 h-24 bg-no-repeat bg-center bg-cover rounded-xl flex items-center justify-center"
              style={{ backgroundImage: `url(${OrangeBg})` }}
            >
              <img
                src={img}
                alt={label}
                className="w-12 h-12 object-contain"
                draggable={false}
              />
            </div>
            <p className="text-sm font-medium text-black w-24 break-words">{label}</p>
          </Link>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="lg:hidden overflow-x-auto no-scrollbar">
        <div className="flex gap-6 w-max px-2">
          {icons.map(({ img, label, category }, index) => (
            <Link
              key={index}
              to={`/products?category=${category}`} // Use Link and pass category as a query parameter
              className="flex flex-col items-center text-center space-y-2 min-w-[90px] cursor-pointer hover:scale-105 transition-transform"
            >
              <div
                className="w-20 h-20 bg-no-repeat bg-center bg-cover rounded-lg flex items-center justify-center"
                style={{ backgroundImage: `url(${OrangeBg})` }}
              >
                <img
                  src={img}
                  alt={label}
                  className="w-10 h-10 object-contain"
                  draggable={false}
                />
              </div>
              <p className="text-xs font-medium text-black w-[80px] break-words">{label}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconSection;