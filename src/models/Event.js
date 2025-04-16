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