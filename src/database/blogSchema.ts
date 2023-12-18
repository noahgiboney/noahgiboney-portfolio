import { Schema } from "mongoose";
import mongoose from "mongoose";

export type IComment = {
    user: string;
    comment: string;
    time: Date;
};

const commentSchema = new Schema<IComment>({
    user: { type: String, required: true },
    comment: { type: String, required: true },
    time: { type: Date, required: true },
});

// Blog type and schema
export type IBlog = {
    title: string;
    slug: string;
    date: string;
    description: string;
    content: string;
    comments: IComment[];
};

export const blogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: String, required: false },
    description: { type: String, required: true },
    content: { type: String, required: true },
    comments: [commentSchema],
});

const Blog = mongoose.models['blogs'] || mongoose.model('blogs', blogSchema);
export default Blog;