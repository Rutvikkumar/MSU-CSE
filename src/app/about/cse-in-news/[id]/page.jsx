// app/news/[id]/page.js

"use client"
import { notFound } from 'next/navigation';
const newsData = [
    { 
        id: 1, 
        title: 'Department Seminar', 
        date: '2023-05-15', 
        content: 'Join us for our monthly seminar featuring guest speaker Dr. Johnson discussing cutting-edge research in our field.',
        newsPaper: 'Science Times',
        edition: 'May 2023 Edition',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80',
        category: 'Events',
        fullContent: 'This is the full detailed content about the department seminar...' // Added for detail page
      },
      { 
        id: 2, 
        title: 'Research Grant Awarded', 
        date: '2023-06-20', 
        content: 'Our team received a $2M research grant from the National Science Foundation for our work in renewable energy solutions.',
        newsPaper: 'Research Weekly',
        edition: 'Summer 2023 Special',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80',
        category: 'Achievements',
        fullContent: 'This is the full detailed content about the research grant...' // Added for detail page
      },
  
];

export default function NewsDetailPage({ params }) {
  
  const newsItem = newsData.find(item => item.id === Number(params.id));

  if (!newsItem) {
    return notFound(); 
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <a 
          href="/about/cse-in-news" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          ← Back to News
        </a>

        {/* News content */}
        <div className="bg-white p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold mb-4">{newsItem.title}</h1>
          <div className="flex justify-between text-sm text-gray-500 mb-6">
            <span>{newsItem.newsPaper} • {newsItem.edition}</span>
            <span>{new Date(newsItem.date).toLocaleDateString()}</span>
          </div>
          <img 
            src={newsItem.image} 
            alt={newsItem.title} 
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <div className="prose max-w-none">
            <p className="text-gray-700">{newsItem.fullContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
}