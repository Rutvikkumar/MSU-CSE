'use client';
import { useState, useEffect } from 'react';
import { FiCalendar, FiFilter, FiX, FiChevronLeft, FiChevronRight, FiImage } from 'react-icons/fi';

const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [monthFilter, setMonthFilter] = useState('');
  const [showPhotosForEvent, setShowPhotosForEvent] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  
  // Sample event data - replace with your actual data
  const [eventData, setEventData] = useState([
    {
      id: 1,
      title: 'Annual Science Seminar',
      date: '2023-05-15',
      content: 'Join us for ',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80',
      category: 'Seminar',
      photos: ['https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80', 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80'],
      featured: true
    },
    {
        id: 2,
        title: 'Annual Science Seminar',
        date: '2023-05-15',
        content: 'Join us for ',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80',
        category: 'Seminar',
        photos: ['https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80', 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80'],
        featured: true
      },
      {
        id: 3,
        title: 'Annual Science Seminar',
        date: '2023-05-15',
        content: 'Join us for ',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80',
        category: 'Seminar',
        photos: ['https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80', 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80'],
        featured: true
      },
  ]);
  const categories = [
    'Seminar', 'Cultural', 'Sports', 'Celebration', 'Webinar',
    'Competition', 'Workshop', 'Lecture/Talk', 'Conference',
    'Exhibition', 'Visit', 'STTP', 'FDP', 'Symposium',
    'Student Event', 'Festival'
  ];
  const years = [...new Set(eventData.map(item => new Date(item.date).getFullYear()))]
    .sort((a, b) => b - a);

  const filteredEvents = eventData.filter(event => {
    const eventDate = new Date(event.date);
    const eventYear = eventDate.getFullYear();
    const eventMonth = String(eventDate.getMonth() + 1).padStart(2, '0');
    
    return (
      (!selectedCategory || event.category === selectedCategory) &&
      (!yearFilter || eventYear === parseInt(yearFilter)) &&
      (!monthFilter || eventMonth === monthFilter)
    );
  });

  const featuredEvents = eventData.filter(event => event.featured);
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  const clearFilters = () => {
    setSelectedCategory('');
    setYearFilter('');
    setMonthFilter('');
  };

  const navigatePhotos = (direction) => {
    const currentEvent = eventData.find(e => e.id === showPhotosForEvent);
    if (!currentEvent) return;
    
    if (direction === 'prev') {
      setCurrentPhotoIndex(prev => 
        prev === 0 ? currentEvent.photos.length - 1 : prev - 1
      );
    } else {
      setCurrentPhotoIndex(prev => 
        prev === currentEvent.photos.length - 1 ? 0 : prev + 1
      );
    }
  };

  
  const closeGallery = () => {
    setShowPhotosForEvent(null);
    setCurrentPhotoIndex(0);
  };

  // Toggle filter panel on mobile
  const toggleFilterPanel = () => {
    setIsFilterPanelOpen(!isFilterPanelOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Department Events</h1>
            <p className="text-gray-600 mt-1">
              Browse through our upcoming and past events
            </p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={toggleFilterPanel}
              className="md:hidden flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium"
            >
              <FiFilter /> Filters
            </button>
            <a 
              href="/" 
              className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium"
            >
              Back to Home
            </a>
          </div>
        </div>

        {/* Featured Events (optional) */}
        {featuredEvents.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Featured Events</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredEvents.map(event => (
                <EventCard 
                  key={event.id} 
                  event={event} 
                  onViewPhotos={() => setShowPhotosForEvent(event.id)}
                  formatDate={formatDate}
                  featured
                />
              ))}
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter Sidebar - Desktop */}
          <div className={`hidden md:block w-64 flex-shrink-0 ${isFilterPanelOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button 
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Clear All
                </button>
              </div>

              <div className="space-y-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Category
                  </label>
                  <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                    {categories.map(category => (
                      <div key={category} className="flex items-center">
                        <input
                          id={`cat-${category}`}
                          type="radio"
                          name="category"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(selectedCategory === category ? '' : category)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`cat-${category}`} className="ml-3 text-sm text-gray-700">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Date Filters */}
                <div className="space-y-4">
                  <div>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                      Year
                    </label>
                    <select
                      id="year"
                      value={yearFilter}
                      onChange={(e) => setYearFilter(e.target.value)}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 border text-sm"
                    >
                      <option value="">All Years</option>
                      {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="month" className="block text-sm font-medium text-gray-700 mb-1">
                      Month
                    </label>
                    <select
                      id="month"
                      value={monthFilter}
                      onChange={(e) => setMonthFilter(e.target.value)}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 border text-sm"
                      disabled={!yearFilter}
                    >
                      <option value="">All Months</option>
                      {Array.from({length: 12}, (_, i) => {
                        const monthValue = String(i + 1).padStart(2, '0');
                        const monthName = new Date(0, i).toLocaleString('en-US', {month: 'long'});
                        return (
                          <option key={monthValue} value={monthValue}>{monthName}</option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Filter Panel */}
          {isFilterPanelOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
              <div className="absolute right-0 top-0 h-full w-4/5 bg-white shadow-lg overflow-y-auto">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-medium">Filters</h2>
                    <button onClick={toggleFilterPanel} className="text-gray-500">
                      <FiX size={24} />
                    </button>
                  </div>
                  {/* Mobile filter content would go here */}
                  {/* (Same as desktop filters but optimized for mobile) */}
                </div>
              </div>
            </div>
          )}

          {/* Events Grid */}
          <div className="flex-1">
            {/* Results header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {selectedCategory || 'All'} Events
                </h2>
                <p className="text-sm text-gray-500">
                  {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'} found
                  {(yearFilter || monthFilter) && (
                    <span>
                      {' in '}
                      {monthFilter && `${new Date(0, monthFilter-1).toLocaleString('en-US', {month: 'long'})} `}
                      {yearFilter}
                    </span>
                  )}
                </p>
              </div>
              <div className="flex gap-2">
                {(selectedCategory || yearFilter || monthFilter) && (
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-1 text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-md"
                  >
                    <FiX size={16} /> Clear filters
                  </button>
                )}
              </div>
            </div>

            {/* Events List */}
            {filteredEvents.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {filteredEvents.map(event => (
                  <EventCard 
                    key={event.id} 
                    event={event} 
                    onViewPhotos={() => setShowPhotosForEvent(event.id)}
                    formatDate={formatDate}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
                  <FiCalendar className="w-full h-full" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">No events found</h3>
                <p className="text-gray-600 mb-4">
                  {selectedCategory || yearFilter || monthFilter ? 
                    "Try adjusting your filters" : 
                    "Check back later for upcoming events"
                  }
                </p>
                {(selectedCategory || yearFilter || monthFilter) && (
                  <button
                    onClick={clearFilters}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Photo Gallery Modal */}
      {showPhotosForEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl max-h-[90vh]">
            {/* Close button */}
            <button 
              onClick={closeGallery}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
            >
              <FiX size={24} />
            </button>
            
            {/* Navigation arrows */}
            <button
              onClick={() => navigatePhotos('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
            >
              <FiChevronLeft size={32} />
            </button>
            <button
              onClick={() => navigatePhotos('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
            >
              <FiChevronRight size={32} />
            </button>

            {/* Current photo */}
            <div className="flex flex-col h-full">
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={eventData.find(e => e.id === showPhotosForEvent)?.photos[currentPhotoIndex]}
                  alt={`Event photo ${currentPhotoIndex + 1}`}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              </div>
              
              {/* Photo counter */}
              <div className="text-center text-white py-4">
                Photo {currentPhotoIndex + 1} of {eventData.find(e => e.id === showPhotosForEvent)?.photos.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Event Card Component
const EventCard = ({ event, onViewPhotos, formatDate, featured = false }) => {
  return (
    <div className={`bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-all duration-300 ${featured ? 'border-2 border-blue-500' : ''}`}>
      {/* Event image */}
      <div className="relative h-48 w-full">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <span className="text-xs font-medium text-white bg-blue-600 px-2 py-1 rounded">
            {event.category}
          </span>
        </div>
        {featured && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
            Featured
          </div>
        )}
      </div>
      
      {/* Event content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
          <div className="flex items-center text-sm text-gray-500 whitespace-nowrap ml-2">
            <FiCalendar className="mr-1" size={14} />
            {formatDate(event.date)}
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{event.content}</p>
        
        {/* View Photos button */}
        {event.photos?.length > 0 && (
          <button
            onClick={onViewPhotos}
            className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            <FiImage className="mr-1" size={16} />
            View {event.photos.length} photo{event.photos.length > 1 ? 's' : ''}
          </button>
        )}
      </div>
    </div>
  );
};

export default EventsPage;