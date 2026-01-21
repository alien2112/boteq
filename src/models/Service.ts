import mongoose, { Schema, models } from 'mongoose';

const ServiceSchema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    order: { type: Number, default: 0 },
}, { timestamps: true });

export const Service = models.Service || mongoose.model('Service', ServiceSchema);
