import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { BlogPost } from '@/models/BlogPost';
import { generateSlug, generateSEOMetadata } from '@/lib/seo-utils';

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

        // Generate Arabic-friendly slug from title
        let slug = body.slug || generateSlug(body.title);

        // Check if slug exists, if so add a unique suffix
        const existingPost = await BlogPost.findOne({ slug });
        if (existingPost) {
            slug = `${slug}-${Date.now()}`;
        }

        // Auto-generate SEO metadata if autoSEO is enabled (default true)
        let seoData = {};
        if (body.autoSEO !== false) {
            const generated = generateSEOMetadata(body.title, body.content, body.excerpt);
            seoData = {
                metaTitle: body.metaTitle || generated.metaTitle,
                metaDescription: body.metaDescription || generated.metaDescription,
                metaKeywords: body.metaKeywords?.length ? body.metaKeywords : generated.metaKeywords,
            };
        }

        const post = await BlogPost.create({
            ...body,
            slug,
            ...seoData,
        });

        return NextResponse.json(post, { status: 201 });
    } catch (error) {
        console.error('Error creating post:', error);
        return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
    }
}
