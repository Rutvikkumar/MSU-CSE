// app/api/upload/route.js
import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }
    
    const buffer = await file.arrayBuffer();
    const filename = `${Date.now()}-${file.name}`;
    const uploadDir = path.join(process.cwd(), 'public/uploads');
    
    try {
      await fs.access(uploadDir);
    } catch {
      await fs.mkdir(uploadDir, { recursive: true });
    }
    
    const filePath = path.join(uploadDir, filename);
    await fs.writeFile(filePath, Buffer.from(buffer));
    
    return NextResponse.json({ 
      success: true, 
      filePath: `/uploads/${filename}` 
    });
    
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}