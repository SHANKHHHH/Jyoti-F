import { useEffect, useState } from 'react';

// Import local images from the assets folder
import Desktop16 from '../assets/Desktop - 16.svg';
import Desktop17 from '../assets/Desktop - 17.svg';
import Desktop19 from '../assets/Desktop - 19.svg';
import Desktop18 from '../assets/Desktop - 18.svg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: Desktop18,
    },
    {
      image: Desktop19,
    },
    {
      image: Desktop17,
    },
    {
      image: Desktop16,
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // Slide changes every 8 seconds

    return () => clearInterval(interval);
  }, [slides.length]); // Added slides.length to dependency array

  // Removed scrollToSection function as it's no longer needed without the button

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image Div */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          {/* Overlay Div - still useful for darkening the image slightly if needed */}
          <div className="absolute inset-0 bg-black bg-opacity-30" /> {/* Adjusted opacity for potentially less dark overlay */}
          {/* Removed the content div that contained title, subtitle, and button */}
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-amber-500 w-10' : 'bg-white bg-opacity-60'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;