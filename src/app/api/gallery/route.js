// app/api/gallery/route.js
import { NextResponse } from 'next/server';
import dbConnect from "../../../lib/db"
import GalleryItem from '@/models/GalleryItem';

export async function GET() {
  await dbConnect();
  try {
    const items = await GalleryItem.find().sort({ date: -1 });
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json(
      { message: 'Server error' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  await dbConnect();
  try {
    const body = await request.json();
    const newItem = new GalleryItem(body);
    await newItem.save();
    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Invalid data' },
      { status: 400 }
    );
  }
}