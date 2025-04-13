import { Project } from "../../utils/types";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="text-white bg-dark px-4 pt-4 pb-6 rounded-[20px] shadow-md">
      <img
        src={project.image}
        className="max-h-60 h-full w-full object-cover"
        alt="blog"
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
    </div>
  );
};

export default ProjectCard;
