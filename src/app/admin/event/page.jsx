// app/admin/events/page.js
'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import EventForm from '@/components/admin/EventForm';

const AdminEventsPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await fetch('/api/events');
      const data = await res.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this event?')) {
      try {
        await fetch(`/api/events/${id}`, { method: 'DELETE' });
        fetchEvents();
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Events</h1>
      
      <button 
        onClick={() => setSelectedEvent({})}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-6"
      >
        Add New Event
      </button>
      
      {selectedEvent && (
        <EventForm 
          event={selectedEvent} 
          onSuccess={() => {
            setSelectedEvent(null);
            fetchEvents();
          }} 
          onCancel={() => setSelectedEvent(null)}
        />
      )}
      
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Featured</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {events.map(event => (
              <tr key={event._id}>
                <td className="px-6 py-4 whitespace-nowrap">{event.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(event.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{event.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {event.featured ? 'Yes' : 'No'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(event._id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminEventsPage;