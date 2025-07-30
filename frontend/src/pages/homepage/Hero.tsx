import { useState, useEffect } from 'react';

import Desktop16 from '../../assets/Desktop - 16.svg';
import Desktop17 from '../../assets/Desktop - 17.svg';
import Desktop18 from '../../assets/Desktop - 18.svg';
import Desktop19 from '../../assets/Desktop - 19.svg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: Desktop18 },
    { image: Desktop19 },
    { image: Desktop17 },
    { image: Desktop16 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden font-sans"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
      ))}

      <div className="relative z-10 flex items-end justify-center h-full text-center text-white px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-base font-medium leading-tight">
            Searching for clean and hygienic portable toilets, luxury amenities, efficient cooling systems, or luxury cabins? Look no further than Jyoti Enterprises. We specialize in delivering top-quality portable solutions tailored to meet your needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

