'use client';
import { FiCalendar, FiImage, FiChevronLeft } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const EventDetailsPage = ({ params }) => {
  const router = useRouter();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Sample event data - in a real app, you would fetch this from an API
  const eventData = [
    {
      id: 1,
      title: 'Annual Science Seminar',
      date: '2023-05-15',
      content: 'Join us for our annual science seminar where students present their research projects. This year we have special guest speakers from leading scientific institutions.',
      description: 'The Annual Science Seminar is a flagship event of our department where students showcase their research work. The event features keynote speeches, poster presentations, and interactive sessions with industry experts. This year\'s theme is "Innovations in Sustainable Technology".',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80',
      category: 'Seminar',
      photos: [
        'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80'
      ],
      featured: false,
      location: 'Main Auditorium, Block A',
      time: '10:00 AM - 4:00 PM',
      organizer: 'Science Department',
      contact: 'prof.smith@university.edu'
    },
    {
      id: 2,
      title: 'Cultural Fest',
      date: '2023-07-20',
      content: 'Annual cultural festival showcasing diverse traditions and talents.',
      description: 'Our university\'s most vibrant event featuring performances, food stalls, and competitions representing cultures from around the world. The event includes dance competitions, music performances, art exhibitions, and culinary delights from different regions.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80',
      category: 'Cultural',
      photos: [
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
        'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80'
      ],
      featured: true,
      location: 'University Grounds',
      time: '9:00 AM - 9:00 PM',
      organizer: 'Cultural Committee',
      contact: 'cultural@university.edu'
    },
    {
      id: 3,
      title: 'Sports Tournament',
      date: '2023-09-10',
      content: 'Inter-department sports competition with various games.',
      description: 'Annual sports tournament featuring cricket, football, basketball, badminton, and athletics. Teams from all departments compete for the championship trophy. The event promotes sportsmanship and healthy competition among students.',
      image: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80',
      category: 'Sports',
      photos: [
        'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
        'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80'
      ],
      featured: true,
      location: 'University Sports Complex',
      time: '8:00 AM - 6:00 PM',
      organizer: 'Sports Council',
      contact: 'sports@university.edu'
    }
  ];

  useEffect(() => {
    // Find the event with the matching ID
    const foundEvent = eventData.find(e => e.id.toString() === params.id);
    if (foundEvent) {
      setEvent(foundEvent);
    } else {
      // Handle case where event is not found
      console.error('Event not found');
    }
    setLoading(false);
  }, [params.id]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    });
  };

  const navigatePhotos = (direction) => {
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
                src={event.image} 
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
                <span>{formatDate(event.date)} • {event.time}</span>
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500">Location</h3>
                <p className="text-gray-800">{event.location}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500">Organized by</h3>
                <p className="text-gray-800">{event.organizer}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-500">Contact</h3>
                <p className="text-gray-800">{event.contact}</p>
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
        {event.photos?.length > 0 && currentPhotoIndex !== null && (
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