// components/AutoMakeModelsGrid.js
'use client';

import Image from 'next/image';

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
  return (
    <section className="bg-white py-14 px-4 sm:px-10">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-14">
        Auto Make & Models
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {autoMakes.map((car, index) => (
          <div
            key={index}
            className="relative bg-white border border-blue-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300"
          >
            <div className="overflow-hidden rounded-t-2xl">
              <Image
                src={car.image}
                alt={car.name}
                width={400}
                height={250}
                className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <p className="text-gray-700 text-sm">{car.description}</p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-blue-700 bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
              <span className="text-white text-lg font-semibold px-4 text-center">
                {car.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
