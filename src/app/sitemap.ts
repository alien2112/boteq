import { MetadataRoute } from 'next';
import dbConnect from '@/lib/db';
import { BlogPost } from '@/models/BlogPost';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://5yata.com';

    // Static Routes
    const routes = [
        '',
        '/about',
        '/collection',
        '/contact',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic Blog Routes
    let blogRoutes: MetadataRoute.Sitemap = [];
    try {
        await dbConnect();
        const posts = await BlogPost.find({ status: 'published' }).select('slug updatedAt');

        blogRoutes = posts.map((post) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(post.updatedAt),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }));
    } catch (error) {
        console.error('Sitemap generation error:', error);
    }

    return [...routes, ...blogRoutes];
}
