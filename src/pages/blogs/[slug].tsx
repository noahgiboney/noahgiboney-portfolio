import { useEffect, useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import Blog, { IBlog } from '@/database/blogSchema';
import style from '@/styles/blog.module.css';
import Comment from '@/components/Blog/Comment';
import CommentForm from '@/components/Blog/CommentForm'; 

interface BlogPageProps {
  slug: string;
}

const BlogPage: NextPage<BlogPageProps> = ({ slug }) => {
  const [blog, setBlog] = useState<IBlog | null>(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(`/api/blog/${slug}`);
        if (response.ok) {
          const data = await response.json();
          setBlog(data);
        } else {
          console.error('Blog fetch error:', response.status, response.statusText);
          setBlog(null);
        }
      } catch (error) {
        console.error('Error fetching blog data:', error);
        setBlog(null);
      }
    };

    fetchBlogData();
  }, [slug]);

  const refreshComments = async () => {
    try {
      const response = await fetch(`/api/blog/${slug}`);
      if (response.ok) {
        const updatedBlog = await response.json();
        setBlog(updatedBlog);
      }
    } catch (error) {
      console.error('Error refreshing comments:', error);
    }
  };

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className={style.blogContainer}>
      <h3>{blog.title}</h3>
      <div className={style.sectionLine}></div>
      <p>{blog.date}</p>
      <article>{blog.content}</article>
      <section>
        <h2>Comments</h2>
        {blog.comments && blog.comments.length > 0 ? (
          blog.comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))
        ) : (
          <p>No comments</p>
        )}
        <CommentForm blogSlug={slug} onCommentAdded={refreshComments} />
      </section>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug as string;
  return { props: { slug } };
};

export default BlogPage;