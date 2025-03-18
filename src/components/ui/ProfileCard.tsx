// components/ProfileCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
interface ProfileCardProps {
  name: string;
  title: string;
  imageUrl: string;
  nameColor?: 'default' | 'teal';
  linkto:string
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, title, imageUrl, nameColor = 'default' ,linkto}) => {
  return (
    <div className="w-full max-w-xs group">
    {/* Image container with hover effect */}
    <Link href={linkto} className="block hover:opacity-90 transition-opacity">
      <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 shadow-lg">
        <div className="relative aspect-square"> {/* Better aspect ratio handling */}
          <Image 
            src={imageUrl} 
            alt={`${name} profile picture`} 
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 320px" // Optimize image loading
            priority={false}
          />
        </div>
      </div>
    </Link>
  
    {/* Content card */}
    <div className="bg-white rounded-lg p-4 flex justify-between items-start shadow-md hover:shadow-lg transition-shadow">
      <div className="pr-2 min-w-0">
        <h3 
          className={`text-lg font-bold truncate ${
            nameColor === 'teal' ? 'text-teal-600' : 'text-gray-800'
          }`}
        >
          {name}
        </h3>
        <p className="text-gray-600 text-sm truncate">{title}</p>
      </div>
      
      {/* Share button with hover effect */}
      <button 
        className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500 hover:bg-teal-600 flex items-center justify-center text-white transition-colors"
        aria-label="Share profile"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
        </svg>
      </button>
    </div>
  </div>
  );
};

export default ProfileCard;