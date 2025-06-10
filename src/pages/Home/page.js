'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/images/carousel1.jpg',
  '/images/carousel2.png',
  '/images/carousel3.png',
];

function HomePageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div>
      {/* Carousel */}
      <div className="relative w-full max-w-full h-[700px] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full flex-shrink-0 object-cover h-[800px]"
            />
          ))}
        </div>

      
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white rounded-full p-2 sm:p-3 shadow-md"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white rounded-full p-2 sm:p-3 shadow-md"
          aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

     
  <div className="bg-gradient-to-br from-white to-blue-50 px-6 sm:px-12 py-20 font-sans">
  <div className="group text-center mb-14">
  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500 group-hover:from-blue-900 group-hover:to-sky-700 transition-all duration-500">
   About MEW Cables
  </h2>
</div>


  <div className="flex flex-col lg:flex-row items-center justify-between gap-14">
    
    {/* Image Card */}
    <div className="w-full lg:w-1/2">
      <div className="p-2 bg-gradient-to-br from-sky-300 to-blue-200 rounded-3xl shadow-2xl">
        <div className="rounded-2xl overflow-hidden">
          <img
            src="/images/aboutimg.jpg"
            alt="About MEW Cables"
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>

    {/* Text Content */}
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <p className="text-lg sm:text-xl text-gray-700 leading-relaxed tracking-wide mb-10">
        <span className="font-semibold text-sky-800">MEW Cables</span> is one of the leading manufacturers of Car Cables and Assembly Components in Pakistan. With over two decades of excellence, MEW has earned its name as a trusted OEM and replacement parts provider—delivering unmatched quality with competitive pricing.
      </p>

      <button
        className="relative inline-flex items-center px-6 py-3 overflow-hidden font-semibold transition-all bg-sky-500 rounded-md group hover:shadow-xl"
      >
        <span className="absolute top-0 right-0 w-4 h-4 transition-all duration-500 ease-in-out bg-sky-600 rounded group-hover:-mr-4 group-hover:-mt-4">
          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
        </span>
        <span className="absolute bottom-0 left-0 w-4 h-4 transition-all duration-500 ease-in-out bg-sky-600 rounded rotate-180 group-hover:-ml-4 group-hover:-mb-4">
          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
        </span>
        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-sky-600 rounded-md group-hover:translate-x-0"></span>
        <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">
          Read More
        </span>
      </button>
    </div>
  </div>
</div>

{/* PRODUCTS Section */}
<div className="bg-gradient-to-br from-white to-blue-50 px-6 sm:px-12 py-24 font-sans">
 <div className="group text-center mb-14">
  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500 group-hover:from-blue-900 group-hover:to-sky-700 transition-all duration-500">
    WHAT WE OFFER
  </h2>
</div>


  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {[
      {
        src: "/images/car.webp",
        title: "Automobile",
        icon: "🚗",
        desc: "Reliable solutions for all types of vehicles.",
      },
      {
        src: "/images/bike.webp",
        title: "Motorcycle",
        icon: "🏍️",
        desc: "Wiring and assemblies made for two-wheelers.",
      },
      {
        src: "/images/window.webp",
        title: "Window Regulator",
        icon: "🛠️",
        desc: "Precision-built regulators for auto windows.",
      },
    ].map(({ src, title, icon, desc }, i) => (
      <div
        key={i}
        className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl hover:shadow-[0_0_25px_#4fc3f7] border border-blue-200 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105"
      >
        {/* Image Section */}
        <div className="overflow-hidden bg-gradient-to-tr from-black via-blue-900 to-blue-600">
          <img
            src={src}
            alt={title}
            className="w-full h-[240px] object-contain transition-transform duration-500"
          />
        </div>

        {/* Text Section */}
        <div className="p-6 text-center bg-gradient-to-br from-black via-blue-800 to-blue-600">
          <h3 className="text-xl font-semibold text-slate-100 mb-2 flex justify-center items-center gap-2 tracking-wide">
            <span className="text-2xl">{icon}</span> {title}
          </h3>
          <p className="text-sm text-slate-200 leading-relaxed">{desc}</p>
        </div>
      </div>
    ))}
  </div>

  {/* OUR MANUFACTURERS Section */}
  <div className="mt-28">
    <div className="group text-center mb-14">
  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500 group-hover:from-blue-900 group-hover:to-sky-700 transition-all duration-500">
    ORIGINAL EQUIPMENT MANUFACTURERS
  </h2>
</div>


    <p className="text-center max-w-3xl mx-auto text-gray-700 text-lg mb-12 leading-relaxed">
      Apart from our huge retail division, we are privileged to be the official OEM (Original Equipment Manufacturer) for the companies listed below.
    </p>

    <div className="flex flex-wrap justify-center items-center gap-10 px-4">
      <img
        src="/images/paksuzuki.png"
        alt="Pak Suzuki"
        className="h-24 object-contain grayscale hover:grayscale-0 transition duration-300"
      />
      <img
        src="/images/mastermotor.jpg"
        alt="Master Motor"
        className="h-24 object-contain grayscale hover:grayscale-0 transition duration-300"
      />
      <img
        src="/images/karakoram.jpg"
        alt="Karakoram"
        className="h-24 object-contain grayscale hover:grayscale-0 transition duration-300"
      />
      <img
        src="/images/thaleng.png"
        alt="Thal Engineering"
        className="h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
      />
    </div>
  </div>
</div>





    </div>
  );
}

export default HomePageCarousel;
