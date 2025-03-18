// import React from 'react';


// const ProfileCardsLayout: React.FC = () => {
//   // Sample profile data
//   const profiles = [
//     {
//       id: 1,
//       name: 'Bessie Cooper',
//       title: 'Mentor',
//       imageUrl: '/images/mentor1.jpg', // Replace with your actual image paths
//       nameColor: 'default' as const
//     },
//     {
//       id: 2,
//       name: 'Arlene McCoy',
//       title: 'Senior Mentor',
//       imageUrl: '/images/mentor2.jpg',
//       nameColor: 'teal' as const
//     },
//     {
//       id: 3,
//       name: 'Brooklyn Simmons',
//       title: 'Assistant Teacher',
//       imageUrl: '/images/teacher1.jpg',
//       nameColor: 'default' as const
//     }
//   ];

//   return (
//     <div className="container mx-auto py-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {profiles.map((profile) => (
//           <div key={profile.id} className="flex justify-center">
//             <ProfileCard
//               name={profile.name}
//               title={profile.title}
//               imageUrl={profile.imageUrl}
//               nameColor={profile.nameColor}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProfileCardsLayout;
"use client"

import { useState } from 'react';
import ProfileCard from '../../components/ui/ProfileCard';

export default function Staff() {
  const [activeTab, setActiveTab] = useState('teaching');

  const tabs = [
    { id: 'teaching', label: 'Teaching' },
    { id: 'non-teaching', label: 'Non-Teaching' },
    { id: 'administrative', label: 'Administrative' },
    { id: 'office-staff', label: 'Office Staff' },
  ];

  const getTabContent = () => {

    const teaching = [
          {
            id: 1,
            name: 'Bessie Cooper',
            title: 'Mentor',
            imageUrl: '/staff/profile.jpg', // Replace with your actual image paths
            nameColor: 'default' as const
          },
          {
            id: 2,
            name: 'Arlene McCoy',
            title: 'Senior Mentor',
            imageUrl: '/staff/profile.jpg',
            nameColor: 'teal' as const
          },
          {
            id: 3,
            name: 'Brooklyn Simmons',
            title: 'Assistant Teacher',
            imageUrl: '/staff/profile.jpg',
            nameColor: 'default' as const
          },
          {
            id: 4,
            name: 'Brooklyn Simmons',
            title: 'Assistant Teacher',
            imageUrl: '/staff/profile.jpg',
            nameColor: 'default' as const
          },
          {
            id: 5,
            name: 'Brooklyn Simmons',
            title: 'Assistant Teacher',
            imageUrl: '/staff/profile.jpg',
            nameColor: 'default' as const
          },
           {
            id: 6,
            name: 'Brooklyn Simmons',
            title: 'Assistant Teacher',
            imageUrl: '/staff/profile.jpg',
            nameColor: 'default' as const
          }
        ];



        const nonTeaching = [
          {
            id: 1,
            name: 'Bessie Cooper',
            title: 'Mentor',
            imageUrl: '/staff/profile.jpg', // Replace with your actual image paths
            nameColor: 'default' as const
          },
          {
            id: 2,
            name: 'Arlene McCoy',
            title: 'Senior Mentor',
            imageUrl: '/staff/profile.jpg',
            nameColor: 'teal' as const
          },
        ];
    switch (activeTab) {
      case 'teaching':
        return<>
            <div className="container mx-auto py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teaching.map((profile) => (
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
          </>
      case 'non-teaching':
        return <>
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nonTeaching.map((profile) => (
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
      </>;
      case 'administrative':
        return <div>Administrative Staff Content</div>;
      case 'office-staff':
        return <div>Office Staff Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Staff</h1>
      <div className="flex space-x-4 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 ${
              activeTab === tab.id
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{getTabContent()}</div>
    </div>
  );
}