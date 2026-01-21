import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { Service } from '@/models/Service';

export async function GET() {
    try {
        await dbConnect();

        const count = await Service.countDocuments();

        if (count === 0) {
            // Seed initial data if empty
            const initialServices = [
                {
                    title: "أزياء الحج والعمرة",
                    image: "/siteimages/5151.webp",
                    order: 1
                },
                {
                    title: "تعديل الملابس",
                    image: "/siteimages/download.webp",
                    order: 2
                },
                {
                    title: "خياطة الجلابيات",
                    image: "/siteimages/download (46).webp",
                    order: 3
                },
                {
                    title: "خياطة نسائية شاملة",
                    image: "/siteimages/download (45).webp",
                    order: 4
                }
            ];

            await Service.insertMany(initialServices);
        }

        const services = await Service.find({}).sort({ order: 1 });
        return NextResponse.json(services);
    } catch (error) {
        console.error('Error fetching services:', error);
        return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        await dbConnect();
        const body = await request.json();
        const newItem = await Service.create(body);
        return NextResponse.json(newItem, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create item' }, { status: 500 });
    }
}
