import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@/database/helpers/db';
import Blog from '@/database/blogSchema';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  const { slug } = req.query;

  if (!slug || typeof slug !== 'string') {
    return res.status(400).json({ message: 'Invalid slug' });
  }

  const blog = await Blog.findOne({ slug }).lean();

  if (!blog) {
    return res.status(404).json({ message: 'Blog not found' });
  }

  res.status(200).json(blog);
}