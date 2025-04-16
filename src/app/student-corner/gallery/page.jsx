// app/student-corner/gallery/page.js
'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [galleryData, setGalleryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'academic', name: 'Academic' },
    { id: 'sports', name: 'Sports' },
    { id: 'activities', name: 'Activities' },
    { id: 'events', name: 'Special Events' },
  ];

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const res = await fetch('/api/gallery');
        const data = await res.json();
        setGalleryData(data);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  const filteredEvents = activeTab === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeTab);

  const openImageModal = (event, index = 0) => {
    setSelectedEvent(event);
    setSelectedImageIndex(index);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'prev' 
      ? (selectedImageIndex - 1 + selectedEvent.images.length) % selectedEvent.images.length
      : (selectedImageIndex + 1) % selectedEvent.images.length;
    setSelectedImageIndex(newIndex);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p>Loading gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>College Gallery | Your College Name</title>
        <meta name="description" content="Explore our college events and activities through our gallery" />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-sky-950 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">College Gallery</h1>
          <p className="text-xl md:text-2xl opacity-90">Relive the memorable moments of our institution</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white transform skew-y-1 origin-top-left"></div>
      </div>

      {/* Gallery Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === category.id 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredEvents.map(event => (
            <div 
              key={event._id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden group">
                <img 
                  src={event.images[0]} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg">{event.title}</h3>
                  <p className="text-sm opacity-90">{new Date(event.date).toLocaleDateString()}</p>
                  <p className="text-xs mt-1">{event.images.length} photos</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-30">
                  <button 
                    onClick={() => openImageModal(event)}
                    className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium hover:bg-blue-50 transition-colors"
                  >
                    View Photos
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No events found in this category</p>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full">
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-gray-600 text-3xl hover:text-blue-500 z-10"
            >
              &times;
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden">
              {/* Main Image */}
              <div className="relative h-[60vh]">
                <img 
                  src={selectedEvent.images[selectedImageIndex]} 
                  alt={`${selectedEvent.title} - ${selectedImageIndex + 1}`}
                  className="w-full h-full object-contain"
                />
                
                {/* Navigation Arrows */}
                {selectedEvent.images.length > 1 && (
                  <>
                    <button 
                      onClick={() => navigateImage('prev')}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                    >
                      &lt;
                    </button>
                    <button 
                      onClick={() => navigateImage('next')}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                    >
                      &gt;
                    </button>
                  </>
                )}
              </div>
              
              {/* Event Info */}
              <div className="p-4 bg-gray-50">
                <h3 className="text-xl font-bold text-gray-800">{selectedEvent.title}</h3>
                <p className="text-gray-600">{new Date(selectedEvent.date).toLocaleDateString()}</p>
                <p className="text-gray-700 mt-2">{selectedEvent.description}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Photo {selectedImageIndex + 1} of {selectedEvent.images.length}
                </p>
              </div>
              
              {/* Thumbnail Navigation */}
              {selectedEvent.images.length > 1 && (
                <div className="p-4 bg-gray-100 flex overflow-x-auto space-x-2">
                  {selectedEvent.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 border-2 ${selectedImageIndex === index ? 'border-blue-500' : 'border-transparent'}`}
                    >
                      <img 
                        src={img} 
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}