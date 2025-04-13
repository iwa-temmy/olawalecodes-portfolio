import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProjectCard from "./ui/project-card";
import { projects } from "../utils/constant";
import { Project } from "../utils/types";

const SelectedWorks = () => {
  const [page, setPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<Project[]>([]);

  const totalPages = projects?.length / 2;

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };
  const handlePrevPage = () => {
    setPage((prev) => prev - 1);
  };

  useEffect(() => {
    const startIndex = (page - 1) * 2;
    const endIndex = startIndex + 2;
    setSelectedProject(projects.slice(startIndex, endIndex));
  }, [page]);

  console.log("selectedProject", selectedProject);
  return (
    <section className="selected-works">
      <div className="flex flex-col gap-5 items-center pb-4">
        <h1 className="text-white/30 text-center text-6xl font-black">
          Selected works
        </h1>
        <div className="bg-[#212121] h-2 w-44 rounded-3xl">
          <div className="bg-white w-1/2 h-full rounded-3xl" />
        </div>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {selectedProject.map((project) => (
          <React.Fragment key={project.id}>
            <ProjectCard project={project} />
          </React.Fragment>
        ))}
      </section>
      <div className="flex items-center justify-center gap-4 mt-5">
        <button
          className="text-black h-8 flex justify-center items-center w-8 rounded-full bg-white disabled:bg-[#1F1F1F] disabled:text-white"
          onClick={handlePrevPage}
          disabled={page === 1}
        >
          <ArrowLeft />
        </button>
        <span className="text-white text-sm">
          Page {page} of {totalPages}
        </span>
        <button
          className="text-black h-8 flex justify-center items-center w-8 rounded-full bg-white disabled:bg-[#1F1F1F] disabled:text-white"
          onClick={handleNextPage}
          disabled={page === totalPages}
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default SelectedWorks;
