import { useEffect, useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { IBlog } from '@/database/blogSchema';
import style from '@/styles/blog/blog.module.css';
// import Comment from '@/components/Comment';
import CommentForm from '@/components/CommentForm'; 

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
      <h2>{blog.date}</h2>
      <div id='sectionLine'></div>
      <article>{blog.content}</article>
      <section className={style.commentSection}>
        <h2>Comments</h2>
        <div id='sectionLine'></div>

        <CommentForm blogSlug={slug} onCommentAdded={refreshComments} /> 

        {/* {blog.comments && blog.comments.length > 0 ? (
          blog.comments.map((comment, index) => (
              <Comment key={index} comment={comment}/> 
          ))
        ) : (
          <p>No comments</p>
        )} */}
        <div id='commentDivirdor'></div>
      </section>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug as string;
  return { props: { slug } };
};

export default BlogPage;