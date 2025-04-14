import NewsTable from './NewsTable';
import dbConnect from '../../../lib/db';
import News from '../../../models/News';

export default async function AdminNewsPage() {
  await dbConnect();
  
  // Fetch news sorted by date (newest first)
  const news = await News.find({}).sort({ date: -1 }).lean();

  // Convert MongoDB objects to plain objects
  const newsData = news.map(item => ({
    ...item,
    _id: item._id.toString(),
    date: item.date.toISOString()
  }));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Manage News</h1>
      <NewsTable news={newsData} />
    </div>
  );
}