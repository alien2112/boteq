import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import mongoose from 'mongoose';

export async function GET(
    request: Request,
    { params }: { params: { filename: string } }
) {
    await dbConnect();

    try {
        const db = mongoose.connection.db;
        const bucket = new mongoose.mongo.GridFSBucket(db, {
            bucketName: 'images',
        });

        const files = await bucket.find({ filename: params.filename }).toArray();
        if (!files || files.length === 0) {
            return NextResponse.json({ error: 'File not found' }, { status: 404 });
        }

        const file = files[0];
        const stream = bucket.openDownloadStreamByName(params.filename);

        // Convert Node ReadableStream to Web ReadableStream
        const webStream = new ReadableStream({
            start(controller) {
                stream.on('data', (chunk) => controller.enqueue(chunk));
                stream.on('end', () => controller.close());
                stream.on('error', (err) => controller.error(err));
            },
        });

        return new NextResponse(webStream, {
            headers: {
                'Content-Type': file.contentType || 'image/jpeg',
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        });
    } catch (error) {
        console.error('Image fetch error:', error);
        return NextResponse.json({ error: 'Failed to fetch image' }, { status: 500 });
    }
}
