import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { BlogPost } from '@/models/BlogPost';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
    await dbConnect();
    try {
        const post = await BlogPost.findOne({ slug: params.slug, status: 'published' });
        if (!post) return NextResponse.json({ error: 'Post not found' }, { status: 404 });

        // Increment views
        try {
            post.views += 1;
            await post.save();
        } catch (err) { }

        return NextResponse.json(post);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
    }
}
