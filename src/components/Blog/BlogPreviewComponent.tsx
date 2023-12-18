import React from 'react';
import { IBlog } from '@/database/blogSchema';
import style from '@/styles/blogPreview.module.css'
import Link from 'next/link';

interface BlogComponentProps {
  blogs: IBlog[];
}

const BlogPreviewComponent: React.FC<BlogComponentProps> = ({ blogs }) => {
  return (
    <div className={style.blogContainer}>
      {blogs.map(blog => (
        <Link href={`/blogs/${blog.slug}`} key={blog.slug} className={style.blog}>
            <h2 className={style.blogTitle}>{blog.title}</h2>
            <p className={style.blogDate}>{blog.date}</p>
            <p>{blog.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default BlogPreviewComponent;