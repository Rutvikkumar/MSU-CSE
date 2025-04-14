'use client';
import { useState, useEffect } from 'react';
import { notFound, useRouter } from 'next/navigation';

export default function NewsDetailPage({ params }) {
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchNewsItem() {
      try {
        const response = await fetch(`/api/admin/news/${params.id}`);
        if (!response.ok) {
          return notFound();
        }
        const data = await response.json();
        setNewsItem(data);
      } catch (error) {
        console.error('Error fetching news item:', error);
        return notFound();
      } finally {
        setLoading(false);
      }
    }
    fetchNewsItem();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!newsItem) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          ← Back to News
        </button>

        {/* News content */}
        <div className="bg-white p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold mb-4">{newsItem.title}</h1>
          <div className="flex justify-between text-sm text-gray-500 mb-6">
            <span>{newsItem.newsPaper} • {newsItem.edition}</span>
            <span>{new Date(newsItem.date).toLocaleDateString()}</span>
          </div>
          {newsItem.image && (
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          )}
          <div className="prose max-w-none">
            <p className="text-gray-700">{newsItem.fullContent}</p>
          </div>
          {newsItem.pdfUrl && (
            <div className="mt-8 flex gap-4">
              <a
                href={newsItem.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                View PDF
              </a>

              <a
                href={newsItem.pdfUrl}
                download
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download PDF
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}