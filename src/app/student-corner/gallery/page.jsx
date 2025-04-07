// pages/gallery.js
"use client"
import { useState } from 'react';
import Head from 'next/head';

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample gallery data - replace with your actual images
  const galleryData = [
    {
      id: 1,
      title: 'Ethnic Day',
      category: 'cultural',
      imageUrl: '/images/gallery/ethnic-day.jpg',
      date: '2024-03-15'
    },
    {
      id: 2,
      title: 'Fresher\'s Day',
      category: 'events',
      imageUrl: '/images/gallery/freshers-day.jpg',
      date: '2024-02-10'
    },
    {
      id: 3,
      title: 'Convocation 2024',
      category: 'academic',
      imageUrl: '/images/gallery/convocation.jpg',
      date: '2024-04-05'
    },
    {
      id: 4,
      title: 'Sports Achievers',
      category: 'sports',
      imageUrl: '/images/gallery/sports-achievers.jpg',
      date: '2024-01-20'
    },
    {
      id: 5,
      title: 'NCC Activities',
      category: 'activities',
      imageUrl: '/images/gallery/ncc.jpg',
      date: '2023-12-15'
    },
    {
      id: 6,
      title: 'International Yoga Day',
      category: 'events',
      imageUrl: '/images/gallery/yoga-day.jpg',
      date: '2023-06-21'
    },
    {
      id: 7,
      title: 'Annual Day 2024',
      category: 'cultural',
      imageUrl: '/images/gallery/annual-day.jpg',
      date: '2024-03-25'
    },
    {
      id: 8,
      title: 'Independence Day 2024',
      category: 'national',
      imageUrl: '/images/gallery/independence-day.jpg',
      date: '2024-08-15'
    },
  ];

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'academic', name: 'Academic' },
    { id: 'sports', name: 'Sports' },
    { id: 'activities', name: 'Activities' },
    { id: 'national', name: 'National' },
    { id: 'events', name: 'Special Events' },
    
  ];

  const filteredImages = activeTab === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeTab);

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
          {filteredImages.map(item => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative h-48 overflow-hidden">
                {/* Replace with your actual image component */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm opacity-90">{new Date(item.date).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No images found in this category</p>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-blue-300"
            >
              &times;
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <img 
                src={selectedImage.imageUrl} 
                alt={selectedImage.title}
                className="w-full max-h-[70vh] object-contain"
              />
              <div className="p-4 bg-gray-50">
                <h3 className="text-xl font-bold text-gray-800">{selectedImage.title}</h3>
                <p className="text-gray-600">{new Date(selectedImage.date).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;