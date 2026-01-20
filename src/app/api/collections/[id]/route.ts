import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { CollectionItem } from '@/models/CollectionItem';

// PUT: Update an item
export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    await dbConnect();
    try {
        const body = await request.json();
        const updatedItem = await CollectionItem.findByIdAndUpdate(params.id, body, {
            new: true,
            runValidators: true,
        });
        if (!updatedItem) {
            return NextResponse.json({ error: 'Item not found' }, { status: 404 });
        }
        return NextResponse.json(updatedItem);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update item' }, { status: 400 });
    }
}

// DELETE: Remove an item
export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    await dbConnect();
    try {
        const deletedItem = await CollectionItem.findByIdAndDelete(params.id);
        if (!deletedItem) {
            return NextResponse.json({ error: 'Item not found' }, { status: 404 });
        }
        return NextResponse.json({ message: 'Item deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete item' }, { status: 400 });
    }
}
