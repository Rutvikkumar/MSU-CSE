import mongoose from 'mongoose';
import dbConnect from '../lib/db';

const newsSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Title is required'] },
  date: { type: Date, required: [true, 'Date is required'], default: Date.now },
  content: { type: String, required: [true, 'Content is required'] },
  newsPaper: { type: String, required: [true, 'News paper is required'] },
  edition: { type: String, required: [true, 'Edition is required'] },
  image: { type: String },
  category: { type: String },
  fullContent: { type: String, required: [true, 'Full content is required'] },
  pdfUrl: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
newsSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const News = mongoose.models.News || mongoose.model('News', newsSchema);

export async function getNewsList() {
    try {
      await dbConnect();
      const news = await News.find({}).sort({ date: -1 }).lean().exec();
      
      return news;
    } catch (error) {
      console.error('Error fetching news list:', error);
      throw new Error('Failed to fetch news list');
    }
  }
  
  export async function getNewsById(id) {
    try {
      await dbConnect();
      const newsItem = await News.findById(id).lean().exec();
      if (!newsItem) {
        throw new Error('News not found');
      }
      return newsItem;
    } catch (error) {
      console.error('Error fetching news item:', error);
      throw new Error('Failed to fetch news item');
    }
  }
  
  
  export async function createNews(newsData) {
    await dbConnect();
    return News.create(newsData);
  }
  
  export async function updateNews(id, updates) {
    await dbConnect();
    return News.findByIdAndUpdate(id, updates, { new: true }).lean();
  }

  export async function deleteNews(id) {
    await dbConnect();
    return News.findByIdAndDelete(id);
  }
  
  export default News;