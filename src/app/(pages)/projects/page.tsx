import DivMotion from "@/components/DivMotion";
import ProjectCard from "@/components/ProjectCard";
import { project } from "@/utils/constants";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sonu Sahu - Projects",
};
function Projects() {
  return (
    <DivMotion>
      <div className="mb-10">
        <div className="mt-0 text-center">
          <div>
            <h1 className="text-4xl font-bold mb-3">Projects</h1>
          </div>
          <div className="w-full ">
            {project.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </DivMotion>
  );
}

export default Projects;
