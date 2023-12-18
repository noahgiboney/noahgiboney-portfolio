import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@/database/helpers/db';
import Blog from '@/database/blogSchema';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    await connectDB();
    const { slug } = req.query;

    if (!slug || typeof slug !== 'string') {
        return res.status(400).json({ message: 'Invalid slug' });
    }

    const comment = req.body; 

    try {
        const updatedBlog = await Blog.findOneAndUpdate(
            { slug: slug },
            { $push: { comments: { ...comment, time: new Date() } } },
            { new: true }
        );

        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        res.status(200).json({ message: 'Comment added successfully' });
    } catch (error) {
        console.error('Error adding comment:', error);
        res.status(500).json({ message: 'Server error' });
    }
}