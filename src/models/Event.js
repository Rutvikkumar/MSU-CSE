// models/Event.js
import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  content: { type: String, required: true },
  description: { type: String, required: true },
  category: { 
    type: String, 
    required: true,
    enum: ['Seminar', 'Cultural', 'Sports', 'Celebration', 'Webinar', 
           'Competition', 'Workshop', 'Lecture/Talk', 'Conference',
           'Exhibition', 'Visit', 'STTP', 'FDP', 'Symposium',
           'Student Event', 'Festival']
  },
  featured: { type: Boolean, default: false },
  location: String,
  time: String,
  organizer: String,
  contact: String,
  imageUrl: String, // Path to main image
  photos: [String], // Array of paths to gallery images
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Event || mongoose.model('Event', eventSchema);

// export async function getEventList() {
//   try {
//     await dbConnect();
//     const events = await Event.find({}).sort({ date: -1 }).lean().exec();
//     return events;
//   } catch (error) {
//     console.error('Error fetching event list:', error);
//     throw new Error('Failed to fetch event list');
//   }
// }

// export async function getEventById(id) {
//   try {
//     await dbConnect();
//     const event = await Event.findById(id).lean().exec();
//     if (!event) {
//       throw new Error('Event not found');
//     }
//     return event;
//   } catch (error) {
//     console.error('Error fetching event:', error);
//     throw new Error('Failed to fetch event');
//   }
// }

// export async function createEvent(eventData) {
//   await dbConnect();
//   return Event.create(eventData);
// }

// export async function updateEvent(id, updates) {
//   await dbConnect();
//   return Event.findByIdAndUpdate(id, updates, { new: true }).lean();
// }

// export async function deleteEvent(id) {
//   await dbConnect();
//   return Event.findByIdAndDelete(id);
// }

// export default Event;