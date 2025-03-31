import Image from 'next/image';
import Link from 'next/link';

const MessageCard = ({ title, imageSrc, name, position, message, readMoreLink }) => {
  return (
    <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-300 hover:shadow-2xl transition-shadow duration-300 bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-950 to-teal-700 p-5 text-white text-center rounded-t-2xl">
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col items-center text-center">
        {/* Image */}
        <div className="w-32 h-32 mb-4 relative overflow-hidden rounded-full border-4 border-sky-950 shadow-md">
          <Image 
            src={imageSrc} 
            alt={name} 
            width={128} 
            height={128} 
            className="object-cover"
          />
        </div>
        
        {/* Name & Position */}
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-600 font-medium mb-4 italic">{position}</p>
        
        {/* Message */}
        <p className="text-gray-700 text-sm mb-6 line-clamp-3">
          {message}
        </p>
        
        {/* Read More Button */}
        <Link href={readMoreLink}>
          <span className="inline-block bg-sky-950 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition-transform transform hover:scale-105">
            Read More
          </span>
        </Link>
      </div>
    </div>
  );
};

const MessageCards = () => {
  const cards = [
    {
      title: "Chairman's Message",
      imageSrc: "/staff/profile.jpg",
      name: "Person Name",
      position: "Chairman",
      message: "Education is the harmonious development of the physical, mental, spiritual and social faculties. It is the process of awakening the thirst for knowledge and kindling the inquisitive spirit that lead to the overall development of students...",
      readMoreLink: "/chairman-message"
    },
    {
      title: "Principal's Message",
      imageSrc: "/staff/profile.jpg",
      name: "Principal",
      position: "Principal",
      message: "We aim to create in our students a cutting edge which will bring success in the emerging competitive world. Integrated development of students will not only help them in generating knowledge, acquiring skills, developing attitude but also help them...",
      readMoreLink: "/principal-message"
    },
    {
      title: "Principal's Message",
      imageSrc: "/staff/profile.jpg",
      name: "Principal",
      position: "Principal",
      message: "We aim to create in our students a cutting edge which will bring success in the emerging competitive world. Integrated development of students will not only help them in generating knowledge, acquiring skills, developing attitude but also help them...",
      readMoreLink: "/principal-message"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 bg-blue-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <MessageCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default MessageCards;
