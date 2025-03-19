// components/ProfileCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
interface ProfileCardProps {
  name: string;
  department: string;
  imageUrl: string;
  profession:string;
  linkto:string
}

const ProfileCard: React.FC<ProfileCardProps> = ( { imageUrl, name, department,profession,linkto }) => {
  return (
    <div className="w-full max-w-80 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300 overflow-hidden">
    {/* Image Section */}
    <Link href={linkto} className="block hover:opacity-90 transition-opacity">
      <div className="relative w-full h-60 bg-gray-100">
        <Image
          src={imageUrl}
          alt={`${name} profile picture`}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
    </Link>

    {/* Content Section */}
    <div className="p-3 text-center">
      <h3 className="text-lg font-semibold text-teal-600 truncate">{name}</h3>
      <p className="text-gray-700 text-sm font-medium">{profession}</p>
      <p className="text-gray-500 text-xs mt-1">{department}</p>

      {/* View More Button */}
      <Link href={linkto}>
        <button className="mt-3 w-full py-2 text-sm bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 transition">
          View More
        </button>
      </Link>
    </div>
  </div>
  );
};

export default ProfileCard;