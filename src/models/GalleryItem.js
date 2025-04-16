import mongoose from 'mongoose';

const GalleryItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { 
    type: String, 
    required: true,
    enum: ['cultural', 'academic', 'sports', 'activities', 'events']
  },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  images: [{ type: String, required: true }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.GalleryItem || mongoose.model('GalleryItem', GalleryItemSchema);