// app/student-corner/events-activities/[id]/page.js
'use client';
import { FiCalendar, FiImage, FiChevronLeft, FiMapPin, FiClock, FiUser, FiMail } from 'react-icons/fi';
import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const EventDetailsPage = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    fetchEvent();
  }, [params.id]);

  const fetchEvent = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/events/${params.id}`);
      const data = await res.json();
      
      if (!data) {
        router.push('/student-corner/event-activities');
        return;
      }
      
      setEvent(data);
    } catch (error) {
      console.error('Error fetching event:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const navigatePhotos = (direction) => {
    if (!event?.photos) return;
    
    if (direction === 'prev') {
      setCurrentPhotoIndex(prev => 
        prev === 0 ? event.photos.length - 1 : prev - 1
      );
    } else {
      setCurrentPhotoIndex(prev => 
        prev === event.photos.length - 1 ? 0 : prev + 1
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Event Not Found</h1>
          <p className="text-gray-600 mb-6">The event you're looking for doesn't exist or may have been removed.</p>
          <button 
            onClick={() => router.push('/student-corner/event-activities')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md flex items-center gap-2 mx-auto"
          >
            <FiChevronLeft /> Back to Events
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back button */}
        <button 
          onClick={() => router.push('/student-corner/event-activities')}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6"
        >
          <FiChevronLeft /> Back to Events
        </button>

        {/* Event Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="md:flex">
            {/* Event Image */}
            <div className="md:w-1/2 relative">
              <img 
                src={event.imageUrl} 
                alt={event.title}
                className="w-full h-full object-cover"
              />
              {event.featured && (
                <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Featured
                </div>
              )}
            </div>

            {/* Event Info */}
            <div className="md:w-1/2 p-6">
              <div className="flex justify-between items-start mb-2">
                <h1 className="text-2xl font-bold text-gray-900">{event.title}</h1>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {event.category}
                </span>
              </div>

              <div className="flex items-center text-gray-600 mb-4">
                <FiCalendar className="mr-2" />
                <span>{formatDate(event.date)}</span>
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500 flex items-center">
                  <FiMapPin className="mr-2" /> Location
                </h3>
                <p className="text-gray-800 ml-6">{event.location}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500 flex items-center">
                  <FiClock className="mr-2" /> Time
                </h3>
                <p className="text-gray-800 ml-6">{event.time}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500 flex items-center">
                  <FiUser className="mr-2" /> Organized by
                </h3>
                <p className="text-gray-800 ml-6">{event.organizer}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-500 flex items-center">
                  <FiMail className="mr-2" /> Contact
                </h3>
                <p className="text-gray-800 ml-6">{event.contact}</p>
              </div>

              {event.photos?.length > 0 && (
                <button
                  onClick={() => setCurrentPhotoIndex(0)}
                  className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  <FiImage className="mr-2" />
                  View Event Gallery ({event.photos.length} photos)
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Event Description */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">About the Event</h2>
          <p className="text-gray-700 whitespace-pre-line">{event.description}</p>
        </div>

        {/* Photo Gallery */}
        {event.photos?.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Event Gallery</h2>
            
            <div className="relative">
              {/* Main Photo */}
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={event.photos[currentPhotoIndex]} 
                  alt={`Event photo ${currentPhotoIndex + 1}`}
                  className="w-full h-auto max-h-96 object-contain"
                />
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={() => navigatePhotos('prev')}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded"
                >
                  Previous
                </button>
                <span className="text-gray-600">
                  Photo {currentPhotoIndex + 1} of {event.photos.length}
                </span>
                <button
                  onClick={() => navigatePhotos('next')}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded"
                >
                  Next
                </button>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-2">
                {event.photos.map((photo, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPhotoIndex(index)}
                    className={`overflow-hidden rounded border-2 ${currentPhotoIndex === index ? 'border-blue-500' : 'border-transparent'}`}
                  >
                    <img 
                      src={photo} 
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetailsPage;