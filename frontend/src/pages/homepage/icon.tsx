// import React from "react";

// import OrangeBg from '../assets/orangebg.png';

// import i1 from '../assets/i1.png';
// import i2 from '../assets/i2.png';
// import i3 from '../assets/i3.png';
// import i4 from '../assets/i4.png';
// import i5 from '../assets/i5.png';
// import i6 from '../assets/i6.png';
// import i7 from '../assets/i7.png';
// import i8 from '../assets/i8.png';
// import i9 from '../assets/i9.png';

// const iconTitles = [
//   "Air Conditioners",
//   "Portable Coolers",
//   "Mist Fans",
//   "Premium Toilets",
//   "Bio Loos",
//   "Shower Cabins",
//   "Toilet Cabins",
//   "Office Cabins",
//   "Storage Containers"
// ];

// const icons = [
//   { img: i1, label: iconTitles[0] },
//   { img: i2, label: iconTitles[1] },
//   { img: i3, label: iconTitles[2] },
//   { img: i4, label: iconTitles[3] },
//   { img: i5, label: iconTitles[4] },
//   { img: i6, label: iconTitles[5] },
//   { img: i7, label: iconTitles[6] },
//   { img: i8, label: iconTitles[7] },
//   { img: i9, label: iconTitles[8] },
// ];

// const IconSection: React.FC = () => {
//   return (
//     <div className="relative w-full flex justify-center items-center py-14 md:py-24">
//       {/* Orange background image */}
//       <img
//         src={OrangeBg}
//         alt=""
//         className="w-[95vw] max-w-[1400px] rounded-[2.5rem] object-cover h-auto"
//         style={{ minHeight: '200px' }}
//         draggable={false}
//       />
//       {/* Icon grid overlay */}
//       <div className="
//         absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
//         w-[90vw] max-w-[1200px]
//         grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-y-8 gap-x-4
//         px-4 md:px-10
//         z-10
//       ">
//         {icons.map(({ img, label }, idx) => (
//           <div key={label} className="flex flex-col items-center group">
//             <div
//               className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl shadow-lg bg-white/80 hover:scale-105 transition"
//             >
//               <img
//                 src={img}
//                 alt={label}
//                 className="object-contain w-12 h-12 md:w-16 md:h-16"
//                 draggable={false}
//               />
//             </div>
//             <div className="mt-3 text-xs md:text-sm lg:text-base font-medium text-gray-800 text-center drop-shadow-sm select-none">
//               {label}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default IconSection;
