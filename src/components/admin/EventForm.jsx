'use client';
import { useState, useEffect } from 'react';
import { FiX, FiUpload, FiImage } from 'react-icons/fi';

const EventForm = ({ event, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    content: '',
    description: '',
    category: '',
    featured: false,
    location: '',
    time: '',
    organizer: '',
    contact: '',
    imageUrl: '',
    photos: []
  });

  const [uploading, setUploading] = useState(false);
  const [previewImages, setPreviewImages] = useState([]);

  // Initialize form with event data if editing
  useEffect(() => {
    if (event) {
      setFormData({
        title: event.title || '',
        date: event.date ? new Date(event.date).toISOString().split('T')[0] : '',
        content: event.content || '',
        description: event.description || '',
        category: event.category || '',
        featured: event.featured || false,
        location: event.location || '',
        time: event.time || '',
        organizer: event.organizer || '',
        contact: event.contact || '',
        imageUrl: event.imageUrl || '',
        photos: event.photos || []
      });
      if (event.photos) setPreviewImages(event.photos);
    }
  }, [event]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageUpload = async (e, isGallery = false) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/events/upload', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();

      if (isGallery) {
        setFormData(prev => ({
          ...prev,
          photos: [...prev.photos, data.filePath]
        }));
        setPreviewImages(prev => [...prev, data.filePath]);
      } else {
        setFormData(prev => ({
          ...prev,
          imageUrl: data.filePath
        }));
      }
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  const removeImage = (index, isGallery = false) => {
    if (isGallery) {
      setFormData(prev => ({
        ...prev,
        photos: prev.photos.filter((_, i) => i !== index)
      }));
      setPreviewImages(prev => prev.filter((_, i) => i !== index));
    } else {
      setFormData(prev => ({ ...prev, imageUrl: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = event?._id ? 'PUT' : 'POST';
      const url = event?._id ? `/api/events/${event._id}` : '/api/events';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        onSuccess();
      } else {
        throw new Error('Failed to save event');
      }
    } catch (error) {
      console.error('Error saving event:', error);
      alert('Error saving event. Please try again.');
    }
  };

  const categories = [
    'Seminar', 'Cultural', 'Sports', 'Celebration', 'Webinar',
    'Competition', 'Workshop', 'Lecture/Talk', 'Conference',
    'Exhibition', 'Visit', 'STTP', 'FDP', 'Symposium',
    'Student Event', 'Festival'
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-xl font-bold mb-4">
        {event?._id ? 'Edit Event' : 'Add New Event'}
      </h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Title*</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Date*</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Time</label>
              <input
                type="text"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="e.g., 10:00 AM - 2:00 PM"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Category*</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select Category</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Short Description*</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="w-full p-2 border rounded h-24"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Full Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 border rounded h-24"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Organizer</label>
              <input
                type="text"
                name="organizer"
                value={formData.organizer}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Contact Info</label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="featured"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="featured" className="text-sm font-medium">
                Featured Event
              </label>
            </div>
          </div>
        </div>

        {/* Main Image Upload */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Main Event Image*</label>
          {formData.imageUrl ? (
            <div className="relative w-64 h-40 mb-2">
              <img 
                src={formData.imageUrl} 
                alt="Event preview" 
                className="w-full h-full object-cover rounded"
              />
              <button
                type="button"
                onClick={() => removeImage()}
                className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full"
              >
                <FiX size={16} />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center w-64 h-40 border-2 border-dashed rounded cursor-pointer bg-gray-50 hover:bg-gray-100">
              <FiUpload className="w-8 h-8 text-gray-400 mb-2" />
              <span className="text-sm text-gray-500">
                {uploading ? 'Uploading...' : 'Click to upload'}
              </span>
              <input 
                type="file" 
                accept="image/*"
                onChange={(e) => handleImageUpload(e)}
                className="hidden"
                disabled={uploading}
              />
            </label>
          )}
        </div>

        {/* Gallery Images */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Event Gallery</label>
          <div className="flex flex-wrap gap-4 mb-4">
            {previewImages.map((img, index) => (
              <div key={index} className="relative w-32 h-32">
                <img 
                  src={img} 
                  alt={`Gallery preview ${index + 1}`}
                  className="w-full h-full object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index, true)}
                  className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full"
                >
                  <FiX size={14} />
                </button>
              </div>
            ))}
          </div>
          
          <label className="flex items-center justify-center w-32 h-32 border-2 border-dashed rounded cursor-pointer bg-gray-50 hover:bg-gray-100">
            <FiImage className="w-6 h-6 text-gray-400 mr-2" />
            <span className="text-sm">
              {uploading ? 'Uploading...' : 'Add Photo'}
            </span>
            <input 
              type="file" 
              accept="image/*"
              onChange={(e) => handleImageUpload(e, true)}
              className="hidden"
              disabled={uploading}
            />
          </label>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end gap-3 pt-4 border-t">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {event?._id ? 'Update Event' : 'Save Event'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;