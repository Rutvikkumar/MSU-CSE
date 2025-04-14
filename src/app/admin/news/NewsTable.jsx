'use client';
import { useRouter } from 'next/navigation';

export default function NewsTable({ news }) {
  const router = useRouter();

  async function handleDelete(id) {
    if (confirm('Are you sure you want to delete this news item?')) {
      try {
        const res = await fetch(`/api/admin/news/${id}`, {
          method: 'DELETE'
        });
        
        if (res.ok) {
          router.refresh();
        } else {
          alert('Failed to delete news');
        }
      } catch (error) {
        console.error('Delete error:', error);
        alert('Error deleting news');
      }
    }
  }

  return (
    <>
      <button 
        onClick={() => router.push('/admin/news/create')}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        Add New News
      </button>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {news.map(item => (
              <tr key={item._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {item.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(item.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => router.push(`/admin/news/edit/${item._id}`)}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}