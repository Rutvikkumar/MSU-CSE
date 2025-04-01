"use client"
import { useState } from 'react';

const Facilities = () => {
  const [activeTab, setActiveTab] = useState('Auditorium');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Facilities</h1>
      
      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-6 border-b border-gray-300">
        <button
          className={`px-4 py-2 text-lg ${activeTab === 'Auditorium' ? 'border-b-2 border-blue-500 font-semibold' : ''}`}
          onClick={() => setActiveTab('Auditorium')}
        >
          Auditorium
        </button>
        <button
          className={`px-4 py-2 text-lg ${activeTab === 'Boys Hostel' ? 'border-b-2 border-blue-500 font-semibold' : ''}`}
          onClick={() => setActiveTab('Boys Hostel')}
        >
          Boys Hostel
        </button>
        <button
          className={`px-4 py-2 text-lg ${activeTab === 'Girls Hostel' ? 'border-b-2 border-blue-500 font-semibold' : ''}`}
          onClick={() => setActiveTab('Girls Hostel')}
        >
          Girls Hostel
        </button>
        <button
          className={`px-4 py-2 text-lg ${activeTab === 'Sports Facility' ? 'border-b-2 border-blue-500 font-semibold' : ''}`}
          onClick={() => setActiveTab('Sports Facility')}
        >
          Sports Facility
        </button>
        <button
          className={`px-4 py-2 text-lg ${activeTab === 'Class Rooms' ? 'border-b-2 border-blue-500 font-semibold' : ''}`}
          onClick={() => setActiveTab('Class Rooms')}
        >
          Class Rooms
        </button>
        <button
          className={`px-4 py-2 text-lg ${activeTab === 'Information Technology Centre' ? 'border-b-2 border-blue-500 font-semibold' : ''}`}
          onClick={() => setActiveTab('Information Technology Centre')}
        >
          Information Technology Centre
        </button>
        <button
          className={`px-4 py-2 text-lg ${activeTab === 'Human Resource Development Center' ? 'border-b-2 border-blue-500 font-semibold' : ''}`}
          onClick={() => setActiveTab('Human Resource Development Center')}
        >
          HR Development Centre
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'Auditorium' && (
        <div>
          <img
            src="/auditorium.jpg"  // Save the image in public folder and use the appropriate path
            alt="Auditorium"
            className="w-full h-auto object-cover rounded-md mb-4"
          />
          <p className="text-lg">
            College has an excellent Air-Conditioned Auditorium with a capacity of 170 seats.
            The auditorium is equipped with a multimedia projector, Dolby sound system, and an Audio-Visual recording system.
          </p>
        </div>
      )}
      
      {activeTab === 'Boys Hostel' && (
        <div>
          <img
            src="/boys-hostel.jpg"
            alt="Boys Hostel"
            className="w-full h-auto object-cover rounded-md mb-4"
          />
          <p className="text-lg">
            The Boys Hostel is spacious and provides a comfortable stay with all essential facilities including Wi-Fi, 24/7 security, and hygienic food.
          </p>
        </div>
      )}
      
      {activeTab === 'Girls Hostel' && (
        <div>
          <img
            src="/girls-hostel.jpg"
            alt="Girls Hostel"
            className="w-full h-auto object-cover rounded-md mb-4"
          />
          <p className="text-lg">
            The Girls Hostel is well-equipped with safe and comfortable rooms, providing a peaceful environment for students.
          </p>
        </div>
      )}
      
      {activeTab === 'Sports Facility' && (
        <div>
          <img
            src="/sports-facility.jpg"
            alt="Sports Facility"
            className="w-full h-auto object-cover rounded-md mb-4"
          />
          <p className="text-lg">
            Our sports facilities include a full-sized basketball court, badminton courts, and a well-maintained gymnasium.
          </p>
        </div>
      )}

      {activeTab === 'Class Rooms' && (
        <div>
          <img
            src="/classrooms.jpg"
            alt="Class Rooms"
            className="w-full h-auto object-cover rounded-md mb-4"
          />
          <p className="text-lg">
            The classrooms are modern, air-conditioned, and equipped with smart boards and audio-visual aids for enhanced learning.
          </p>
        </div>
      )}

      {activeTab === 'Information Technology Centre' && (
        <div>
          <img
            src="/it-center.jpg"
            alt="IT Centre"
            className="w-full h-auto object-cover rounded-md mb-4"
          />
          <p className="text-lg">
            The IT Centre is equipped with the latest computers and software to provide students with hands-on experience in various technologies.
          </p>
        </div>
      )}

      {activeTab === 'Human Resource Development Center' && (
        <div>
          <img
            src="/hrd-center.jpg"
            alt="HR Development Centre"
            className="w-full h-auto object-cover rounded-md mb-4"
          />
          <p className="text-lg">
            The HR Development Center focuses on developing soft skills, leadership, and teamwork to prepare students for the corporate world.
          </p>
        </div>
      )}
    </div>
  );
};

export default Facilities;
