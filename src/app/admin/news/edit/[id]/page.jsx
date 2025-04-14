'use client';
import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import NewsForm from '../../../../../models/News';

export default function EditNewsPage() {
  const router = useRouter();
  const params = useParams();
  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNews() {
      try {
        const res = await fetch(`/api/admin/news/${params.id}`);
        if (!res.ok) throw new Error('Failed to fetch news');
        
        const data = await res.json();
        // Ensure date is properly formatted for the form input
        if (data.date) {
          data.date = new Date(data.date).toISOString().split('T')[0];
        }
        setInitialData(data);
      } catch (error) {
        console.error('Error loading news:', error);
      } finally {
        setLoading(false);
      }
    }
    loadNews();
  }, [params.id]);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (!initialData) {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Failed to load news data
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Edit News</h1>
      <NewsForm initialData={initialData} onSubmit={handleSubmit} />
    </div>
  );

  async function handleSubmit(formData) {
    try {
      const response = await fetch(`/api/admin/news/${params.id}`, {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        router.push('/admin/news');
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error updating news:', error);
      alert(error.message || 'Failed to update news');
    }
  }
}