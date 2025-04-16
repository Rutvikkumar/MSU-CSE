// app/api/gallery/upload/route.js
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// Supported image types
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_SIZE = 5 * 1024 * 1024; // 5MB

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    
    // Validate file exists
    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: `Unsupported file type. Only ${ALLOWED_TYPES.join(', ')} allowed` },
        { status: 400 }
      );
    }

    // Validate file size
    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { error: `File too large. Maximum size is ${MAX_SIZE/1024/1024}MB` },
        { status: 400 }
      );
    }

    // Create upload directory
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    await fs.mkdir(uploadDir, { recursive: true });

    // Generate unique filename
    const ext = path.extname(file.name);
    const filename = `${Date.now()}-${Math.round(Math.random() * 1E9)}${ext}`;
    const filePath = path.join(uploadDir, filename);

    // Convert file to buffer and save
    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(filePath, buffer);

    return NextResponse.json({
      success: true,
      path: `/uploads/${filename}`
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}