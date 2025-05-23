import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';


export async function POST(request) {
  const formData = await request.formData();
  const file = formData.get('file');
  const type = formData.get('type'); // 'image' or 'pdf'

  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }

  const buffer = await file.arrayBuffer();
  const fileName = `${Date.now()}-${file.name}`;
  const uploadDir = path.join(process.cwd(), 'public', 'uploads', type);
  const filePath = path.join(uploadDir, fileName);

  // Ensure directory exists
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  // Write file
  fs.writeFileSync(filePath, Buffer.from(buffer));

  return NextResponse.json({ 
    success: true, 
    filePath: `/uploads/${type}/${fileName}` 
  });
}




export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    const eventId = formData.get('eventId') || 'temp';
    
    if (!file) {
      return NextResponse.json(
        { message: 'No file uploaded' },
        { status: 400 }
      );
    }

    // Create uploads directory if it doesn't exist
    const uploadDir = path.join(process.cwd(), 'uploads', 'gallery', eventId);
    await fs.mkdir(uploadDir, { recursive: true });

    // Generate unique filename
    const ext = path.extname(file.name);
    const filename = `${uuidv4()}${ext}`;
    const filePath = path.join(uploadDir, filename);

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Write file to disk
    await fs.writeFile(filePath, buffer);

    // Return relative path (will be served via rewrite)
    const publicPath = `/gallery-uploads/${eventId}/${filename}`;
    
    return NextResponse.json({ path: publicPath });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { message: 'Upload failed' },
      { status: 500 }
    );
  }
}