// components/ProfileCard.tsx
import React from 'react';
import Image from 'next/image';

interface ProfileCardProps {
  name: string;
  title: string;
  imageUrl: string;
  nameColor?: 'default' | 'teal';
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, title, imageUrl, nameColor = 'default' }) => {
  return (
    <div className="w-full max-w-xs">
      {/* Image container with rounded corners */}
      <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
        <div className="relative w-full h-80">
          <Image 
            src={imageUrl} 
            alt={`${name} profile`} 
            fill
            className="object-cover"
          />
        </div>
      </div>
      
      {/* Text content and share button container */}
      <div className="bg-white rounded-lg p-4 flex justify-between items-center">
        <div>
          <h3 className={`text-lg font-bold ${nameColor === 'teal' ? 'text-teal-500' : 'text-gray-800'}`}>
            {name}
          </h3>
          <p className="text-gray-600">{title}</p>
        </div>
        
        {/* Share button */}
        <button className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;