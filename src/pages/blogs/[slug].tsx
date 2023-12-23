import { useEffect, useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { IBlog } from '@/database/blogSchema';
import style from '@/styles/projects.module.css'
import Comment from '@/components/Comment';
import CommentForm from '@/components/CommentForm';

export type IContent = {
  content: string;
  image: string;
};

export type ISection = {
  title: string;
  sections: IContent[];
};

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
      <div className={style.mainContainer}>
        <h3>{blog.title}</h3>
        <p>{blog.date}</p>
        <div id='sectionLine'></div>

        {Array.isArray(blog.content) && blog.content.map((section: ISection, index: number) => (
          <article key={index} className={style.subSection}>
            <h2>{section.title}</h2>
            {Array.isArray(section.sections) && section.sections.map((content: IContent, contentIndex: number) => (
              <div key={contentIndex} className={style.content}> 
                <p>{content.content}</p>
                {content.image && <img src={content.image} alt="Content" />}
              </div>
            ))}
          </article>
        ))}

          <h3>Comments</h3>
          <div id='sectionLine'></div>
          <CommentForm blogSlug={slug} onCommentAdded={refreshComments} /> 

          {blog.comments && blog.comments.length > 0 ? (
            blog.comments.map((comment, index) => (
                <Comment key={index} comment={comment}/> 
            ))
          ) : (
            <div>
              <br></br>
              <p>No comments yet. Be the first to comment!</p>
            </div>
          )} 
          <div id='commentDivirdor'></div>
        </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug as string;
  return { props: { slug } };
};

export default BlogPage;
