import { createNews } from '@/models/News';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { NextResponse } from 'next/server';
import { getNewsList } from '../../../../models/News';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request) {
  try {
    const formData = await request.formData();

    // Validate required fields
    const requiredFields = ['title', 'date', 'content', 'newsPaper', 'edition', 'fullContent'];
    const missingFields = requiredFields.filter(field => !formData.get(field));

    if (missingFields.length > 0) {
      return NextResponse.json(
        { success: false, message: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Get date from form data (should be in YYYY-MM-DD format)
    const dateString = formData.get('date');
    const dateValue = new Date(dateString);

    // Validate date
    if (isNaN(dateValue.getTime())) {
      return NextResponse.json(
        { success: false, message: `Invalid date format. Please use YYYY-MM-DD format. Received: ${dateString}` },
        { status: 400 }
      );
    }

    // Ensure upload directories exist
    await mkdir(join(process.cwd(), 'public', 'uploads', 'images'), { recursive: true });
    await mkdir(join(process.cwd(), 'public', 'uploads', 'pdfs'), { recursive: true });

    // Process file uploads
    const imageFile = formData.get('image');
    const pdfFile = formData.get('pdfUrl');
    
    let imagePath = '';
    let pdfPath = '';
    
    // Save image if exists
    if (imageFile && imageFile.name && imageFile.size > 0) {
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const imageName = `${Date.now()}-${imageFile.name.replace(/\s+/g, '-')}`;
      imagePath = `/uploads/images/${imageName}`;
      const imageDest = join(process.cwd(), 'public', imagePath);
      await writeFile(imageDest, buffer);
    }
    
    // Save PDF if exists
    if (pdfFile && pdfFile.name && pdfFile.size > 0) {
      const bytes = await pdfFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const pdfName = `${Date.now()}-${pdfFile.name.replace(/\s+/g, '-')}`;
      pdfPath = `/uploads/pdfs/${pdfName}`;
      const pdfDest = join(process.cwd(), 'public', pdfPath);
      await writeFile(pdfDest, buffer);
    }
    
    // Prepare news data with properly formatted date
    const newsData = {
      title: formData.get('title'),
      date: dateValue, // This is now a valid Date object
      content: formData.get('content'),
      newsPaper: formData.get('newsPaper'),
      edition: formData.get('edition'),
      fullContent: formData.get('fullContent'),
      ...(formData.get('category') && { category: formData.get('category') }),
      ...(imagePath && { image: imagePath }),
      ...(pdfPath && { pdfUrl: pdfPath })
    };
    
    // Create news in database
    const createdNews = await createNews(newsData);
    
    return NextResponse.json({
      success: true,
      data: createdNews,
      message: 'News created successfully'
    }, { 
      status: 201 
    });
  } catch (error) {
    console.error('Error creating news:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: error.message || 'Internal server error' 
      },
      { status: 500 }
    );
  }
}

// Add other HTTP methods as needed (GET, PUT, DELETE)
// export async function GET() {
//   try {
//     // Implement your GET logic here if needed
//     return NextResponse.json(
//       { success: false, message: 'Method not implemented' },
//       { status: 501 }
//     );
//   } catch (error) {
//     console.error('Error fetching news:', error);
//     return NextResponse.json(
//       { success: false, message: error.message || 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }
// export async function GET() {
//     try {
//       const news = await getNewsList();
//       return NextResponse.json(news);
//     } catch (error) {
//       console.error('Error fetching news list:', error);
//       return NextResponse.json(
//         { error: 'Failed to fetch news' },
//         { status: 500 }
//       );
//     }
//   }

export async function GET() {
  try {
    const news = await getNewsList();
    return NextResponse.json(news, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 's-maxage=60, stale-while-revalidate=30'
      }
    });
  } catch (error) {
    console.error('API Error - /api/news:', error);
    return NextResponse.json(
      { 
        error: error.message || 'Failed to fetch news',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

// export async function GET() {
//     try {
//       const news = await getNewsList();
//       return NextResponse.json(news);
//     } catch (error) {
//       return NextResponse.json(
//         { error: error.message },
//         { status: 500 }
//       );
//     }
//   }

export async function PUT() {
  try {
    // Implement your PUT logic here if needed
    return NextResponse.json(
      { success: false, message: 'Method not implemented' },
      { status: 501 }
    );
  } catch (error) {
    console.error('Error updating news:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  try {
    // Implement your DELETE logic here if needed
    return NextResponse.json(
      { success: false, message: 'Method not implemented' },
      { status: 501 }
    );
  } catch (error) {
    console.error('Error deleting news:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}