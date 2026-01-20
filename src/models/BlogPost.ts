import mongoose, { Schema, models } from 'mongoose';

const BlogPostSchema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true }, // Featured image URL
    author: { type: String, default: 'Admin' },
    category: { type: String, default: 'General' },
    tags: [{ type: String }],
    status: { type: String, enum: ['published', 'draft'], default: 'draft' },
    views: { type: Number, default: 0 },
}, { timestamps: true });

export const BlogPost = models.BlogPost || mongoose.model('BlogPost', BlogPostSchema);
