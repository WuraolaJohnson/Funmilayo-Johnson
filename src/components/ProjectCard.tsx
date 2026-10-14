import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <button
      className={`project-card project-card--${project.size}`}
      onClick={() => onSelect(project)}
      aria-label={`Read case study: ${project.title}`}
    >
      <span
        className="project-card__thumb"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.18), rgba(15, 23, 42, 0.52)), url(${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {project.id}
      </span>
      <span className="project-card__overlay" aria-hidden="true" />
      <span className="project-card__arrow">
        <ArrowUpRight size={18} strokeWidth={2} />
      </span>
      <span className="project-card__info">
        <span className="project-card__category">{project.category}</span>
        <span className="project-card__title">{project.title}</span>
        <span className="project-card__desc">{project.summary}</span>
      </span>
    </button>
  );
}
