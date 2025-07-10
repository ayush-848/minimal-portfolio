import React from "react";
import NavMenu from "../components/main/NavMenu";
import PageWrapper from "../components/main/PageWrapper";

const projects = [
  {
    title: "DocuScope",
    description: "A document analysis platform that extracts structured insights using AI.",
    link: "https://example.com/project1",
    tags: ["Node.js", "AI", "PostgreSQL"],
  },
  {
    title: "Imaginate",
    description: "An image generation tool with theme-based customization and ShadCN components.",
    link: "https://example.com/project2",
    tags: ["Next.js", "Tailwind", "OpenAI"],
  },
  {
    title: "AudioMark",
    description: "Bookmark and annotate audio moments for podcasts and audiobooks.",
    link: "https://example.com/project3",
    tags: ["React", "Flask", "WaveSurfer.js"],
  },
  {
    title: "Café Menu",
    description: "A digital cafeteria menu built with JSON-driven data and interactive filters.",
    link: "https://example.com/project4",
    tags: ["Vanilla JS", "CSS", "UX Design"],
  },
];

const Projects = () => {
  return (
    <div className="relative bg-[#FFF9DB] dark:bg-[#20294B] min-h-screen">
      <NavMenu />

      <PageWrapper>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-main-foreground">Projects</h1>
          <p className="text-lg text-main-foreground/80 mb-8">
            A few handpicked creations that reflect my craft.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              href={project.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-black rounded-lg p-5 bg-yellow-100 hover:bg-yellow-200 transition-all shadow-[4px_4px_0px_black] hover:shadow-[2px_2px_0px_black] cursor-pointer"
            >
              <h2 className="text-xl font-semibold mb-2 text-main-foreground group-hover:underline">
                {project.title}
              </h2>
              <p className="text-main-foreground/80 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-black text-yellow-300 text-xs px-2 py-1 rounded-md font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </PageWrapper>
    </div>
  );
};

export default Projects;
