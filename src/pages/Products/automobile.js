// components/AutomobileGrid.js
'use client';

import Image from 'next/image';

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
  {
    name: 'Hood Opener Cable',
    description: 'Effortless access to engine bay.',
    image: '/images/carousel2.png',
  },
  {
    name: 'Hood Opener Cable',
    description: 'Effortless access to engine bay.',
    image: '/images/carousel2.png',
  },
  {
    name: 'Hood Opener Cable',
    description: 'Effortless access to engine bay.',
    image: '/images/carousel2.png',
  },
];

export default function AutomobileGrid() {
  return (
    <section className="bg-white py-14 px-4 sm:px-10">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-14">
        Automobile
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-white border border-blue-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300"
          >
            <div className="overflow-hidden rounded-t-2xl">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={250}
                className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <p className="text-gray-700 text-sm">{product.description}</p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-blue-700 bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
              <span className="text-white text-lg font-semibold px-4 text-center">
                {product.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
