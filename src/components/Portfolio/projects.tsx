export interface Project{
    title: string;
    date: string;
    skills: string;
    description: string;
    urlLink: string;
}

const projects: Project[] = [
    {
        title: "Personal Website",
        date: "Fall 2023 - Present",
        skills: "HTML, CSS, TypeScript",
        description: "Personal porfolio website showcasing projects and contact information.",
        urlLink: "/virtualworld"
    },
    {
        title: "Personal Website",
        date: "Fall 2023 - Present",
        skills: "HTML, CSS, TypeScript",
        description: "Personal porfolio website showcasing projects and contact information.",
        urlLink: "/virtualworld'"
    },
];

export default projects;