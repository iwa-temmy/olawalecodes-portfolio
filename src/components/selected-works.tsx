import ProjectCard from "./ui/project-card";
import { projects } from "../utils/constant";
import { useScrollReveal } from "../utils/use-scroll-reveal";

const SelectedWorks = () => {
  const headerRef = useScrollReveal<HTMLDivElement>({ y: 30, stagger: 0.15 });
  const gridRef = useScrollReveal<HTMLDivElement>({ y: 50, stagger: 0.15 });

  return (
    <section className="selected-works" id="works">
      <div
        ref={headerRef}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 md:pb-16"
      >
        <h1 className="text-white text-4xl md:text-7xl font-black uppercase">
          Projects.
        </h1>
        <p className="text-white/50 max-w-xs md:text-right">
          I've worked with founders, startups and teams to ship products that
          people actually use.
        </p>
      </div>
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default SelectedWorks;
