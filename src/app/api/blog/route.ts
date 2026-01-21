import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { BlogPost } from '@/models/BlogPost';

export async function GET(request: Request) {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const role = searchParams.get('role'); // Check if admin is requesting

    let query = {};
    if (role !== 'admin') {
        query = { status: 'published' };
    }

    try {
        const posts = await BlogPost.find(query).sort({ createdAt: -1 });
        return NextResponse.json(posts, {
            headers: {
                'Cache-Control': 'public, max-age=1800, s-maxage=1800, stale-while-revalidate=59',
            }
        });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    await dbConnect();
    try {
        const body = await request.json();

        // Simple slug generation
        const baseSlug = body.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
        const slug = `${baseSlug}-${Date.now()}`;

        const post = await BlogPost.create({ ...body, slug });
        return NextResponse.json(post);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
    }
}
