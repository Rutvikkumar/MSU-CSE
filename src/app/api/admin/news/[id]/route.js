'use client';
import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import NewsForm from '../../../../../components/NewsForm';

export default function EditNewsPage() {
  const router = useRouter();
  const params = useParams();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    async function loadNews() {
      const res = await fetch(`/api/admin/news/${params.id}`);
      if (res.ok) {
        const data = await res.json();
        // Ensure date is properly formatted
        data.date = new Date(data.date).toISOString();
        setInitialData(data);
      }
    }
    loadNews();
  }, [params.id]);

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

  if (!initialData) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Edit News</h1>
      <NewsForm initialData={initialData} onSubmit={handleSubmit} />
    </div>
  );
}