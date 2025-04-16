import connectToDB from '../../../lib/db';
import Event from '../../../models/Event';

export async function GET(request) {
  try {
    await connectToDB();
    
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const year = searchParams.get('year');
    const month = searchParams.get('month');
    const featured = searchParams.get('featured');
    
    let query = {};
    
    if (category) query.category = category;
    if (featured) query.featured = true;
    
    if (year) {
      const startDate = new Date(`${year}-01-01`);
      const endDate = new Date(`${year}-12-31`);
      query.date = { $gte: startDate, $lte: endDate };
      
      if (month) {
        const monthStart = new Date(`${year}-${month}-01`);
        const monthEnd = new Date(`${year}-${month}-31`);
        query.date = { $gte: monthStart, $lte: monthEnd };
      }
    }
    
    const events = await Event.find(query).sort({ date: -1 });
    return Response.json(events);
    
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

// app/api/events/route.js (continued)
export async function POST(request) {
  try {
    await connectToDB();
    const data = await request.json();
    
    const newEvent = new Event(data);
    await newEvent.save();
    
    return Response.json(newEvent, { status: 201 });
    
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}