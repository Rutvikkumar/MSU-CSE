// 'use client';
// import { useRouter, useParams } from 'next/navigation';
// import { useState, useEffect } from 'react';
// import NewsForm from '../../../../../components/NewsForm';

// export default function EditNewsPage() {
//   const router = useRouter();
//   const params = useParams();
//   const [initialData, setInitialData] = useState(null);

//   useEffect(() => {
//     async function loadNews() {
//       const res = await fetch(`/api/admin/news/${params.id}`);
//       if (res.ok) {
//         const data = await res.json();
//         // Ensure date is properly formatted
//         data.date = new Date(data.date).toISOString();
//         setInitialData(data);
//       }
//     }
//     loadNews();
//   }, [params.id]);

//   async function handleSubmit(formData) {
//     try {
//       const response = await fetch(`/api/admin/news/${params.id}`, {
//         method: 'PUT',
//         body: formData,
//       });

//       if (response.ok) {
//         router.push('/admin/news');
//       } else {
//         const errorData = await response.json();
//         alert(`Error: ${errorData.message}`);
//       }
//     } catch (error) {
//       console.error('Error updating news:', error);
//       alert(error.message || 'Failed to update news');
//     }
//   }

//   if (!initialData) return <div>Loading...</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-6">Edit News</h1>
//       <NewsForm initialData={initialData} onSubmit={handleSubmit} />
//     </div>
//   );
// }
import { getNewsById } from '../../../../../models/News';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    const { id } = params;

    // Validate ID parameter
    if (!id || id.length !== 24) {
      return NextResponse.json(
        { success: false, message: 'Invalid news ID format' },
        { status: 400 }
      );
    }

    const newsItem = await getNewsById(id);

    if (!newsItem) {
      return NextResponse.json(
        { success: false, message: 'News not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: newsItem
    }, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 's-maxage=60, stale-while-revalidate=30'
      }
    });

  } catch (error) {
    console.error('Error fetching news item:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: error.message || 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const formData = await request.formData();

    // Validate ID parameter
    if (!id || id.length !== 24) {
      return NextResponse.json(
        { success: false, message: 'Invalid news ID format' },
        { status: 400 }
      );
    }

    // Implement your update logic here
    // You'll need to:
    // 1. Get the existing news item
    // 2. Handle file uploads if new files are provided
    // 3. Update the news item in your database

    return NextResponse.json(
      { success: false, message: 'Update not implemented yet' },
      { status: 501 }
    );

  } catch (error) {
    console.error('Error updating news:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: error.message || 'Internal server error' 
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    // Validate ID parameter
    if (!id || id.length !== 24) {
      return NextResponse.json(
        { success: false, message: 'Invalid news ID format' },
        { status: 400 }
      );
    }

    // Implement your delete logic here
    // You'll need to:
    // 1. Delete the news item from database
    // 2. Optionally delete associated files

    return NextResponse.json(
      { success: false, message: 'Delete not implemented yet' },
      { status: 501 }
    );

  } catch (error) {
    console.error('Error deleting news:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: error.message || 'Internal server error' 
      },
      { status: 500 }
    );
  }
}