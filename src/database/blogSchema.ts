import mongoose, { Schema } from 'mongoose';

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

export type IContent = {
    content: string;
    image: string;
};

const contentSchema = new Schema<IContent>({
    content: { type: String, required: true },
    image: { type: String, required: false }, 
});

export type Section = {
    title: string; 
    sections: IContent[];
};

const sectionSchema = new Schema<Section>({
    title: { type: String, required: true },
    sections: [contentSchema], 
});

export type IBlog = {
    title: string;
    slug: string;
    date: string;
    description: string;
    content: Section[]; 
    comments: IComment[];
};

export const blogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: String, required: false },
    description: { type: String, required: true },
    content: [sectionSchema], 
    comments: [commentSchema],
});

const Blog = mongoose.models['blogs'] || mongoose.model('blogs', blogSchema);
export default Blog;
