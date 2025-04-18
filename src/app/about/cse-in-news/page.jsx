'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NewsPage() {
  const router = useRouter();
  const [yearFilter, setYearFilter] = useState('');
  const [monthFilter, setMonthFilter] = useState('');
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch('/api/admin/news');
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setNewsData(data);
      } catch (error) {
        console.error('Error fetching news:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  // Extract unique years from news data (sorted newest first)
  const years = [...new Set(newsData.map(item => new Date(item.date).getFullYear()))]
    .sort((a, b) => b - a);
  
  // Filter news based on selected year and month
  const filteredNews = newsData.filter(item => {
    const itemDate = new Date(item.date);
    const itemYear = itemDate.getFullYear();
    const itemMonth = String(itemDate.getMonth() + 1).padStart(2, '0');
    
    return (!yearFilter || itemYear === parseInt(yearFilter)) && 
           (!monthFilter || itemMonth === monthFilter);
  });

  // Clear all filters
  const clearFilters = () => {
    setYearFilter('');
    setMonthFilter('');
  };

  // Format date nicely
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Handle read more click
  const handleReadMore = (newsId) => {
    router.push(`/about/cse-in-news/${newsId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with title and back button */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Department News</h1>
          <a href="/" className="text-blue-600 hover:text-blue-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </a>
        </div>
        
        {/* Filter controls */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Filter News</h2>
              <div className="flex flex-wrap gap-4">
                <div className="w-full sm:w-auto">
                  <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                  <select
                    id="year"
                    value={yearFilter}
                    onChange={(e) => setYearFilter(e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 border"
                  >
                    <option value="">All Years</option>
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                
                <div className="w-full sm:w-auto">
                  <label htmlFor="month" className="block text-sm font-medium text-gray-700 mb-1">Month</label>
                  <select
                    id="month"
                    value={monthFilter}
                    onChange={(e) => setMonthFilter(e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 border"
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
            
            <button
              onClick={clearFilters}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition duration-300 h-fit"
            >
              Clear All Filters
            </button>
          </div>
        </div>
        
        {/* Results count */}
        <div className="mb-4 text-gray-600">
          Showing {filteredNews.length} {filteredNews.length === 1 ? 'result' : 'results'}
          {(yearFilter || monthFilter) && (
            <span> for 
              {yearFilter && ` ${yearFilter}`}
              {monthFilter && ` ${new Date(0, monthFilter-1).toLocaleString('en-US', {month: 'long'})}`}
            </span>
          )}
        </div>
        
        {/* News cards */}
        <div className="grid gap-6 md:grid-cols-1">
          {filteredNews.length > 0 ? (
            filteredNews.map(newsItem => (
              <div 
                key={newsItem._id} 
                className="bg-white overflow-hidden shadow rounded-lg flex flex-col md:flex-row hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image on left side */}
                <div className="w-full md:w-1/3 h-48 md:h-auto relative">
                  <img 
                    src={newsItem.image} 
                    alt={newsItem.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {newsItem.category && (
                    <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                      {newsItem.category}
                    </span>
                  )}
                </div>
                
                {/* Content on right side */}
                <div className="w-full md:w-2/3 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-gray-900">{newsItem.title}</h3>
                      <span className="text-sm text-gray-500">
                        {formatDate(newsItem.date)}
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      <p><span className="font-medium">News Paper:</span> {newsItem.newsPaper}</p>
                      <p><span className="font-medium">Edition:</span> {newsItem.edition}</p>
                    </div>
                    <p className="mt-2 text-gray-600">{newsItem.content}</p>
                  </div>
                  <button 
                    onClick={() => handleReadMore(newsItem._id)} 
                    className="mt-4 text-blue-600 hover:text-blue-800 font-medium self-start"
                  >
                    Read more →
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No news found</h3>
              <p className="mt-1 text-gray-600">
                {yearFilter || monthFilter ? 
                  "Try adjusting your filters" : 
                  "Check back later for updates"
                }
              </p>
              {yearFilter || monthFilter ? (
                <button
                  onClick={clearFilters}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                >
                  Clear Filters
                </button>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}