"use client"

import Image from 'next/image'

const SeminarHallCard = () => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm max-w-md">
      {/* Image Section - Replace with your actual image path */}
      <div className="h-48 relative bg-gray-100">
        <Image
          src="/seminar-hall.jpg"  // Your image path here
          alt="Seminar Hall"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Minimal Description */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">Main Seminar Hall</h3>
        <p className="text-gray-600 text-sm">
          Modern 200-seat auditorium with AV facilities for conferences and events.
        </p>
      </div>
    </div>
  );
};

export default SeminarHallCard;