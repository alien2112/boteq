import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { GalleryItem } from '@/models/Gallery';

export async function GET() {
    try {
        await dbConnect();

        const count = await GalleryItem.countDocuments();

        if (count === 0) {
            // Seed initial data if empty
            const initialGallery = [
                {
                    title: "Royal Jalabiya",
                    image: "/siteimages/5151.webp",
                    order: 1
                },
                {
                    title: "Elegant Detail",
                    image: "/siteimages/download.webp",
                    order: 2
                },
                {
                    title: "Measurement Taking",
                    image: "/siteimages/download (46).webp",
                    order: 3
                },
                {
                    title: "Quality Fabrics",
                    image: "/siteimages/download (47).webp",
                    order: 4
                },
                {
                    title: "Sewing Process",
                    image: "/siteimages/download (45).webp",
                    order: 5
                },
                {
                    title: "Fashion Design",
                    image: "/siteimages/Screenshot 2026-01-19 075710.webp",
                    order: 6
                },
                {
                    title: "Custom Fitting",
                    image: "/siteimages/Screenshot 2026-01-19 082828.webp",
                    order: 7
                },
                {
                    title: "Final Touches",
                    image: "/siteimages/Sustainable Fashion Sewing, Handcrafted Production, Silky Satin Fabrics, Nightwear Sewing.webp",
                    order: 8
                }
            ];

            await GalleryItem.insertMany(initialGallery);
        }

        const galleryItems = await GalleryItem.find({}).sort({ order: 1 });
        return NextResponse.json(galleryItems);
    } catch (error) {
        console.error('Error fetching gallery items:', error);
        return NextResponse.json({ error: 'Failed to fetch gallery items' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        await dbConnect();
        const body = await request.json();
        const newItem = await GalleryItem.create(body);
        return NextResponse.json(newItem, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create item' }, { status: 500 });
    }
}
