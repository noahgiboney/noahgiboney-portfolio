import linkedinIcon from 'images/icons/linkedin.png'; 
import githubIcon from 'images/icons/github.png';    
import mailIcon from 'images/icons/mail.png';  
import style from '@/styles/index.module.css'
import faceShot from 'images/faceShot.png';
import VantaFog from '@/components/VantaGlobe/vantaGlobe';
import Blog from '@/database/blogSchema';
import connectDB from '@/database/helpers/db';
import {IBlog} from '@/database/blogSchema'
import Project, {IProject} from '@/database/projectSchema'
import BlogPreviewComponent from '@/components/Blog/BlogPreviewComponent';
import ProjectComponent from '@/components/ProjectPreviewComponent';
import {Contact} from '@/components/ContactForm'

interface HomeProps {
  blogs: IBlog[];
  projects: IProject[];
}


async function getBlogs() {
  await connectDB(); // Connect to the database

  try {
      const blogs = await Blog.find().sort({ date: -1 });
      return blogs;
  } catch (err) {
      return null;
  }
}

async function getProjects(){
  await connectDB(); // Connect to the database

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
  //mongoose to json
  blogs = JSON.parse(JSON.stringify(blogs));
  projects = JSON.parse(JSON.stringify(projects));
  return {
    // Pass the blogs as a prop or an empty array if null
      props: {
          blogs: blogs || [], 
          projects: projects || [], 
      },
  };
}


export default function Home({blogs, projects}: HomeProps) {

  return (
    <div>

      <div className={style.vantaContainer}>
      <VantaFog/>
        <section className={style.homeContainer}>
          <h2>Noah Giboney</h2>
          <div className={style.socialsContainer}>
            <a href="https://www.linkedin.com/in/noah-giboney-896847261/" target="_blank">
              <img src={linkedinIcon.src} className="round" alt="LinkedIn"/>
            </a>
            <a href="https://github.com/noahgiboney" target="_blank">
              <img src={githubIcon.src} className="round" alt="GitHub"/>
            </a>
            <a href="#contact">
              <img src={mailIcon.src}  className="round" alt="Email"/>
            </a>
          </div>   
        </section>
        <div className={style.arrowContainer}>
          <a href='#about'><div className={style.arrow}></div></a>
        </div>
      </div>

      <div className={style.mainContainer}>

        <h3 id="about">About</h3> 
        <div id='sectionLine'></div>
        <section className={style.aboutContainer}> 
          <div className={style.innerAboutContainer}>
            <div className={style.textContainer}>
              <h2>My name is <span className="name">Noah Giboney</span></h2>
              <h4>CS @ Cal Poly Slo</h4>
              <p>I'm a computer science major at Cal Poly, San Luis Obispo.</p>
              <p>Currently interested in iOS Development and Software Engineering</p>
              <p>Connect with me on <a href="https://www.linkedin.com/in/noah-giboney-896847261/" className="link">LinkedIn</a> and check out my projects below</p>
            </div>
            <div className={style.faceShotContainer}>
              <img src={faceShot.src} alt="Noah Giboney" />
            </div>
          </div>
        </section>

        <h3 id="portfolio">Portfolio</h3>
        <div id='sectionLine'></div>

        <section className={style.portfolioContainer}>
          <p>Click each project for more information.</p>
          <ProjectComponent projects={projects}/>
        </section>
        

        <h3 id="blogs">Blogs</h3>
        <div id='sectionLine'></div>
        <BlogPreviewComponent blogs={blogs}/>

        <h3 id="contact">Contact</h3>
        <div id='sectionLine'></div>
        <section className={style.contactContainer}>
          <p>Feel free to reach out to me on <a href="https://www.linkedin.com/in/noah-giboney-896847261/" className="link">LinkedIn</a>, also available through email at <a href="mailto:noahgiboney@gmail.com" className="link">noahgiboney@gmail.com</a>.</p>
          <br></br>
          <p>Check out my Resume, GitHub, and LinkedIn below!</p>
          <div className={style.buttonContainer}>
            <a className={style.button} href="documents/Noah Giboney Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            <a className={style.button} href="https://github.com/noahgiboney" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className={style.button} href="https://www.linkedin.com/in/noah-giboney-896847261/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </section>
        <Contact/>
      </div>
    </div>
  );
}