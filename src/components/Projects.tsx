import { projects, type Project } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { SectionSubTitle } from "./SectionSubTitle";
import Tappit from "./Tappit";

const Projects = () => (
  <section id="projects" className="py-24 px-6">
    <div className="max-w-5xl mx-auto space-y-12">
      <SectionHeading label="04. Projects" />
      <p className="text-stone-400 mt-4 mb-12 text-sm">
        A selection of things I have built including professional and personal
        projects.
      </p>

      <Tappit />

      <div className="max-w-5xl mx-auto space-y-6">
        <SectionSubTitle label="b. Personal" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group bg-white border border-stone-200 rounded-xl p-6 flex flex-col gap-4 hover:border-blue-400 hover:shadow-md transition-all">
    <div className="flex items-start justify-between gap-2">
      <div>
        {project.logo ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={project.title}
          >
            <img
              src={project.logo}
              alt={project.title}
              className="h-12 w-auto"
            />
          </a>
        ) : (
          <h3 className="text-stone-800 font-semibold text-lg leading-snug group-hover:text-blue-500 transition-colors">
            {project.title}
          </h3>
        )}
      </div>

      <div className="flex items-center gap-2 shrink-0">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-stone-800 transition-colors"
            aria-label="GitHub repository"
          >
            <GitHubIcon />
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-stone-800 transition-colors"
            aria-label="Live demo"
          >
            <ExternalLinkIcon />
          </a>
        )}
      </div>
    </div>

    <p className="text-stone-500 text-sm leading-relaxed flex-1">
      {project.description}
    </p>

    <ul className="space-y-1">
      {project.highlights.map((h) => (
        <li key={h} className="flex items-start gap-2 text-stone-400 text-xs">
          <span className="text-blue-500 mt-0.5 shrink-0">▸</span>
          {h}
        </li>
      ))}
    </ul>

    <div className="flex flex-wrap gap-2 pt-2 border-t border-stone-100">
      {project.tech.map((t) => (
        <span
          key={t}
          className="text-xs font-mono text-blue-500 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded"
        >
          {t}
        </span>
      ))}
    </div>
  </div>
);

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

export default Projects;
