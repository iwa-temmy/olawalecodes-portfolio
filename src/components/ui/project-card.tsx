import { Project } from "../../utils/types";
import Icon from "./icon";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col gap-3 w-full"
    >
      <div className="aspect-square w-full overflow-hidden rounded-xl">
        <img
          src={project.image}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          alt={project.title}
        />
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-white/10 pt-3">
        <p className="text-white font-bold text-sm md:text-base">
          {project.title}
        </p>
        <div className="flex items-center gap-3 text-white/50 text-sm">
          <span>{project.year}</span>
          <Icon
            icon="fluent:arrow-right"
            height={14}
            width={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
