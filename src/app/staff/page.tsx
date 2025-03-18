import React from 'react';
import ProfileCard from '../../components/ui/ProfileCard';
import Link from 'next/link';



const ProfileCardsLayout: React.FC = () => {

  const profiles = [
    {
      id: 1,
      name: 'Bessie Cooper',
      title: 'Mentor',
      imageUrl: '/staff/image1.jpg', 
      nameColor: 'default' as const
    },
    {
      id: 2,
      name: 'Arlene McCoy',
      title: 'Senior Mentor',
      imageUrl: '/staff/image1.jpg',
      nameColor: 'teal' as const
    },
    {
      id: 3,
      name: 'Brooklyn Simmons',
      title: 'Assistant Teacher',
      imageUrl: '/staff/image1.jpg',
      nameColor: 'default' as const
    },
    {
      id: 4,
      name: 'Brooklyn Simmons',
      title: 'Assistant Teacher',
      imageUrl: '/staff/image1.jpg',
      nameColor: 'default' as const
    },
    {
      id: 5,
      name: 'Brooklyn Simmons',
      title: 'Assistant Teacher',
      imageUrl: '/staff/image1.jpg',
      nameColor: 'default' as const
    },
    {
      id: 6,
      name: 'Brooklyn Simmons',
      title: 'Assistant Teacher',
      imageUrl: '/staff/image1.jpg',
      nameColor: 'default' as const
    }
  ];
  return (
  <>
  <header className="flex items-center justify-between py-5 px-8  text-black bg-white drop-shadow-md">
        <section className="w-4/5 mx-auto flex items-center justify-between">
        <a href="#">
          <img className="w-44 hover:scale-105 transition-all" src="/next.svg" alt="TEXT"/>
        </a>
        <nav>
          <ul className="flex gap-3">
            <Link className=" text-xl py-3 px-4 hover:bg-sky-400 transition-all rounded hover:text-white cursor-pointer" href="#">Home</Link>
            <Link className=" text-xl py-3 px-5 hover:bg-sky-400 transition-all rounded hover:text-white cursor-pointer" href="#">About</Link>
            <Link className=" text-xl py-3 px-5 hover:bg-sky-400 transition-all rounded hover:text-white cursor-pointer" href="#">News</Link>
            <Link className=" text-xl py-3 px-5 hover:bg-sky-400 transition-all rounded hover:text-white cursor-pointer" href="#">Staff</Link>
            <Link className=" text-xl py-3 px-5 hover:bg-sky-400 transition-all rounded hover:text-white cursor-pointer" href="#">Contact</Link>
            <Link className=" text-xl py-3 px-5 hover:bg-sky-400 transition-all rounded hover:text-white cursor-pointer" href="#">Courses</Link>
          </ul>
        </nav>
        </section>
      </header>
  <main>
  <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {profiles.map((profile) => (
          <div key={profile.id} className="flex justify-center">
            <ProfileCard
              name={profile.name}
              title={profile.title}
              imageUrl={profile.imageUrl}
              nameColor={profile.nameColor}
              linkto = {`/staff/${profile.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  </main>
  </>
  );
};

export default ProfileCardsLayout;