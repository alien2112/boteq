import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { CollectionItem } from '@/models/CollectionItem';

// GET: Fetch all items (with optional filtering)
export async function GET(request: Request) {
    await dbConnect();
    try {
        const { searchParams } = new URL(request.url);
        const category = searchParams.get('category');
        const featured = searchParams.get('featured');

        let query: any = {};
        if (category && category !== 'all') query.category = category;
        if (featured === 'true') query.isFeatured = true;

        const items = await CollectionItem.find(query).sort({ createdAt: -1 });
        return NextResponse.json(items, {
            headers: {
                'Cache-Control': 'public, max-age=1800, s-maxage=1800, stale-while-revalidate=59',
            }
        });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch items' }, { status: 500 });
    }
}

// POST: Create a new item (Protected - middleware should handle auth ideally, but we'll add check here or rely on middleware)
export async function POST(request: Request) {
    await dbConnect();
    try {
        const body = await request.json();
        const newItem = await CollectionItem.create(body);
        return NextResponse.json(newItem, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create item' }, { status: 400 });
    }
}
