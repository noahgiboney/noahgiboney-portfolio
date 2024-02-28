import style from "@/styles/index.module.css";
import Blog from "@/database/blogSchema";
import connectDB from "@/database/db";
import { IBlog } from "@/database/blogSchema";
import Project, { IProject } from "@/database/projectSchema";
import BlogPreviewComponent from "@/components/BlogPreviewComponent";
import ProjectComponent from "@/components/ProjectPreview";
import ContactForm from "@/components/ContactForm";

interface HomeProps {
  blogs: IBlog[];
  projects: IProject[];
}

async function getBlogs() {
  await connectDB();

  try {
    const blogs = await Blog.find().sort({ date: -1 });
    return blogs;
  } catch (err) {
    return null;
  }
}

async function getProjects() {
  await connectDB();

  try {
    const projects = await Project.find().sort({ order: 1 });
    return projects;
  } catch (err) {
    return null;
  }
}

export async function getStaticProps() {
  let blogs = await getBlogs();
  let projects = await getProjects();
  blogs = JSON.parse(JSON.stringify(blogs));
  projects = JSON.parse(JSON.stringify(projects));
  return {
    props: {
      blogs: blogs || [],
      projects: projects || [],
    },
  };
}

export default function Home({ blogs, projects }: HomeProps) {
  return (
    <div>
      {/* <div className={style.vantaContainer}>
        <section className={style.homeContainer}>
          <h2>Noah Giboney</h2>
        </section>
        <a href="#about">
          <div className={style.arrow}></div>
        </a>
      </div> */}

      <div className={style.mainContainer}>
        <section className={style.aboutContainer}>
          <div className={style.textContainer}>
            <h2>
              My name is <span className={style.name}>Noah Giboney</span>
            </h2>
            <h4>CS @ Cal Poly Slo</h4>
            <div className={style.innerText}>
              <p>
                I'm a third year computer science major at Cal Poly, San Luis
                Obispo, interested in iOS Development and Software Engineering.
                Connect with me on{" "}
                <a
                  href="https://www.linkedin.com/in/noah-giboney-896847261/"
                  className="link"
                >
                  LinkedIn{" "}
                </a>
                and check out my projects below.
              </p>
            </div>
            <div className={style.buttonContainer}>
              <div className={style.socialsContainer}>
                <a
                  href="https://www.linkedin.com/in/noah-giboney-896847261/"
                  target="_blank"
                >
                  <img
                    src="/images/icons/linkedin.png"
                    className="round"
                    alt="LinkedIn"
                  />
                </a>
                <a href="https://github.com/noahgiboney" target="_blank">
                  <img
                    src="/images/icons/github.png"
                    className="round"
                    alt="GitHub"
                  />
                </a>
                <a href="#contact">
                  <img
                    src="/images/icons/mail.png"
                    className="round"
                    alt="Email"
                  />
                </a>
                <a
                className="button"
                href="Noah Giboney Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              </div>
            </div>
          </div>
          <div className={style.faceShotContainer}>
            <img src="/images/faceshot.png" alt="Noah Giboney Faceshot" />
          </div>
        </section>

        <h3 id="portfolio">Portfolio</h3>
        <div id="sectionLine"></div>
        <h4>Click each project for more information.</h4>
        <ProjectComponent projects={projects} />

        <h3 id="blogs">Blogs</h3>
        <div id="sectionLine"></div>
        <h4>Click to see more.</h4>
        <BlogPreviewComponent blogs={blogs} />

        <h3 id="contact">Contact</h3>
        <div id="sectionLine"></div>
        <ContactForm />
      </div>
    </div>
  );
}
