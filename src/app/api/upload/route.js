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