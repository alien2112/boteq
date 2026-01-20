import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { SiteContent } from '@/models/SiteContent';

export async function GET() {
    await dbConnect();
    try {
        const content = await SiteContent.find({});
        return NextResponse.json(content);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    await dbConnect();
    try {
        const body = await request.json();
        const { key, value, label, type } = body;

        const updated = await SiteContent.findOneAndUpdate(
            { key },
            { value, label, type },
            { upsert: true, new: true }
        );

        return NextResponse.json(updated);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to save content' }, { status: 500 });
    }
}
