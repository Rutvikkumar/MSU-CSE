import React from 'react';
import ProfileCard from '../../components/ui/ProfileCard';

const ProfileCardsLayout: React.FC = () => {
  // Sample profile data
  const profiles = [
    {
      id: 1,
      name: 'Bessie Cooper',
      title: 'Mentor',
      imageUrl: '/images/mentor1.jpg', // Replace with your actual image paths
      nameColor: 'default' as const
    },
    {
      id: 2,
      name: 'Arlene McCoy',
      title: 'Senior Mentor',
      imageUrl: '/images/mentor2.jpg',
      nameColor: 'teal' as const
    },
    {
      id: 3,
      name: 'Brooklyn Simmons',
      title: 'Assistant Teacher',
      imageUrl: '/images/teacher1.jpg',
      nameColor: 'default' as const
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {profiles.map((profile) => (
          <div key={profile.id} className="flex justify-center">
            <ProfileCard
              name={profile.name}
              title={profile.title}
              imageUrl={profile.imageUrl}
              nameColor={profile.nameColor}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCardsLayout;