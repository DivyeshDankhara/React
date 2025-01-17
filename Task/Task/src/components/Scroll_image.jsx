import React, { useRef } from 'react';
const Scroll_image = () => {
  const sliderRef = useRef(null);
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSomIlBQiPCZwc43gvkkzFRzul-rbq9fC13pg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSomIlBQiPCZwc43gvkkzFRzul-rbq9fC13pg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSomIlBQiPCZwc43gvkkzFRzul-rbq9fC13pg&s',
  ];
  const scrollToSlide = (index) => {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: index * sliderWidth,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <div className="relative w-full max-w-lg mx-auto">

      <div
        ref={sliderRef}
        className="flex overflow-hidden rounded-lg shadow-md scroll-smooth"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0 snap-center h-64 object-cover"
          />
        ))}
      </div>
      
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              Math.round(sliderRef.current?.scrollLeft / sliderRef.current?.offsetWidth) ===
              index
                ? 'bg-gray-800'
                : 'bg-gray-400 hover:bg-gray-600'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Scroll_image;