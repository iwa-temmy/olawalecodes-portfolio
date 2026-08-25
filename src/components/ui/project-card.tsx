import { Project } from "../../utils/types";
import Icon from "./icon";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="text-white bg-dark px-4 pt-4 pb-6 rounded-[20px] shadow-md block"
    >
      <img
        src={project.image}
        className="max-h-60 md:max-h-80 h-full w-full object-cover"
        alt={project.title}
      />
      <div className="space-y-4 my-3">
        <h2 className="text-center text-white/80 font-bold">{project.title}</h2>
        <p className="text-center text-white/60 text-base font-normal">
          {project.description}
        </p>
      </div>
      <ul className="flex justify-center list-disc [&_li]:pr-4">
        {project.tools.map((tool, index) => (
          <li key={index} className="text-white text-sm font-normal">
            {tool}
          </li>
        ))}
      </ul>
      <span className="flex justify-center items-center gap-2 text-white font-black text-sm mt-4">
        Visit site
        <Icon icon="fluent:arrow-right" height={14} width={14} />
      </span>
    </a>
  );
};

export default ProjectCard;
