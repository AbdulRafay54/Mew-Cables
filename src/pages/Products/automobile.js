'use client';

import Image from 'next/image';
import { useState } from 'react';

const products = [
  {
    name: 'Transmission Cable MT',
    description: 'Manual gear shifting cable for smooth performance.',
    image: '/images/aboutimg.jpg',
  },
  {
    name: 'Trunk Opener Cable',
    description: 'Durable trunk release system cable.',
    image: '/images/carousel2.png',
  },
  {
    name: 'Shift Cable',
    description: 'Flexible cable for gear control mechanisms.',
    image: '/images/carousel2.png',
  },
  {
    name: 'Accelerator Cable',
    description: 'High-tension cable for throttle control.',
    image: '/images/carousel2.png',
  },
  {
    name: 'Clutch Cable',
    description: 'Designed for smooth clutch operation.',
    image: '/images/carousel2.png',
  },
  {
    name: 'Bonnet Cable',
    description: 'Enables easy bonnet opening system.',
    image: '/images/carousel2.png',
  },
  {
    name: 'Fuel Lid Cable',
    description: 'Secure and reliable fuel lid opener cable.',
    image: '/images/carousel2.png',
  },
  {
    name: 'Brake Cable',
    description: 'Ensures precise brake control.',
    image: '/images/carousel2.png',
  },
  {
    name: 'Hood Opener Cable',
    description: 'Effortless access to engine bay.',
    image: '/images/carousel2.png',
  },
];

export default function AutomobileGrid() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="bg-white py-14 px-4 sm:px-10">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-14">
        Automobile
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
       {products.map((product, index) => (
  <div
    key={index}
    onClick={() => setSelectedProduct(product)}
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

      {/* MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4 overflow-y-auto py-10">
          <div className="bg-white max-w-5xl w-full rounded-xl shadow-lg overflow-hidden relative flex flex-col md:flex-row">

            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-blue-700 hover:text-red-500 text-3xl font-bold"
            >
              &times;
            </button>

            {/* Image */}
            <div className="md:w-1/2 w-full">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="md:w-1/2 w-full p-6 space-y-4 text-blue-900">
              <h2 className="text-2xl font-bold text-blue-800">{selectedProduct.name}</h2>

              <div>
                <h3 className="font-semibold text-blue-700">Product Overview</h3>
                <p className="text-sm text-gray-700">
                  {selectedProduct.name} is a high-performance cable built for durability and smooth mechanical function in modern vehicles.
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
                  Ideal for accelerator, brake, clutch, trunk, and hood release systems in all vehicle types.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/923303049866?text=Hello, I need a quotation for ${selectedProduct.name}. Kindly share the details.`,
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
