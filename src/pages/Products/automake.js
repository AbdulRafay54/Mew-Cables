
'use client';

import Image from 'next/image';
import { useState } from 'react';

const autoMakes = [
  {
    name: 'Toyota Corolla',
    description: 'Popular sedan known for reliability.',
    image: '/images/aboutimg.jpg',
  },
  {
    name: 'Honda Civic',
    description: 'Stylish compact car with great performance.',
    image: '/images/aboutimg.jpg',
  },
  {
    name: 'Suzuki Alto',
    description: 'Economical and compact city car.',
    image: '/images/aboutimg.jpg',
  },
  {
    name: 'Kia Sportage',
    description: 'Modern SUV with advanced features.',
    image: '/images/aboutimg.jpg',
  },
  {
    name: 'Hyundai Tucson',
    description: 'Comfortable and versatile SUV.',
    image: '/images/aboutimg.jpg',
  },
  {
    name: 'Nissan Dayz',
    description: 'Compact hatchback with great fuel economy.',
    image: '/images/aboutimg.jpg',
  },
  {
    name: 'Nissan Dayz',
    description: 'Compact hatchback with great fuel economy.',
    image: '/images/aboutimg.jpg',
  },
  {
    name: 'Nissan Dayz',
    description: 'Compact hatchback with great fuel economy.',
    image: '/images/aboutimg.jpg',
  },
  {
    name: 'Nissan Dayz',
    description: 'Compact hatchback with great fuel economy.',
    image: '/images/aboutimg.jpg',
  },
  {
    name: 'Nissan Dayz',
    description: 'Compact hatchback with great fuel economy.',
    image: '/images/aboutimg.jpg',
  },
  {
    name: 'Nissan Dayz',
    description: 'Compact hatchback with great fuel economy.',
    image: '/images/aboutimg.jpg',
  },
  {
    name: 'Nissan Dayz',
    description: 'Compact hatchback with great fuel economy.',
    image: '/images/aboutimg.jpg',
  },
];


export default function AutoMakeModelsGrid() {
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <section className="bg-white py-14 px-4 sm:px-10">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-14">
        Auto Cable Products
      </h1>

      {/* Grid of Cable Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {autoMakes.map((product, index) => (
         <div
           key={index}
           onClick={() => setSelectedCar(product)}
           className="group relative cursor-pointer bg-white border border-blue-200 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 overflow-hidden"
         >
           {/* Image */}
           <div className="overflow-hidden rounded-t-2xl">
             <Image
               src={product.image}
               alt={product.name}
               width={400}
               height={250}
               className="object-cover w-full h-48 group-hover:scale-110 transition-transform duration-500"
             />
           </div>
       
           {/* Text Content */}
           <div className="p-5 bg-white space-y-2">
             <h3 className="text-blue-800 font-semibold text-lg tracking-wide">
               {product.name}
             </h3>
             <p className="text-gray-600 text-sm leading-relaxed tracking-wide">
               {product.description}
             </p>
           </div>
       
           {/* Hover Overlay */}
           <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-white to-blue-400 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl backdrop-blur-sm">
             <span className="text-blue-900 text-lg font-bold px-6 py-2 bg-white/90 rounded-xl shadow-md drop-shadow tracking-wide">
               {product.name}
             </span>
           </div>
         </div>
       ))}
      </div>

      {/* MODAL (fullscreen) */}
      {selectedCar && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4 overflow-y-auto py-10">
          <div className="bg-white max-w-5xl w-full rounded-xl shadow-lg overflow-hidden relative flex flex-col md:flex-row">

            {/* Close Button */}
            <button
              onClick={() => setSelectedCar(null)}
              className="absolute top-4 right-4 text-blue-700 hover:text-red-500 text-3xl font-bold"
            >
              &times;
            </button>

            {/* Image Section */}
            <div className="md:w-1/2 w-full">
              <Image
                src={selectedCar.image}
                alt={selectedCar.name}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

         
            <div className="md:w-1/2 w-full p-6 space-y-4 text-blue-900">
              <h2 className="text-2xl font-bold text-blue-800">{selectedCar.name}</h2>

              <div>
                <h3 className="font-semibold text-blue-700">Product Overview</h3>
                <p className="text-sm text-gray-700">
                  {selectedCar.name} is a premium-grade automotive cable designed for durability, efficiency, and long-term performance. Ideal for OEM and aftermarket usage.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-blue-700">Technical Specifications</h3>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Core: 99.9% Pure Copper</li>
                  <li>Insulation: Heat & Oil Resistant PVC</li>
                  <li>Voltage Rating: 600V</li>
                  <li>Temperature Range: -40°C to +105°C</li>
                  <li>Standards: ISO 6722 / JIS / OEM Approved</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-blue-700">Applications</h3>
                <p className="text-sm text-gray-700">
                  Suitable for use in wiring harnesses, battery connections, ignition systems, fuse boxes, and vehicle interiors.
                </p>
              </div>

              <div className="pt-2">
  <button
    onClick={() =>
      window.open(
        `https://wa.me/923303049866?text=Hello, I need a quotation for ${selectedCar.name}. Kindly share the details.`,
        '_blank'
      )
    }
    className="bg-blue-700 text-white text-sm px-6 py-2 rounded-lg hover:bg-blue-800 transition"
  >
    Request Message on WhatsApp
  </button>
</div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}

