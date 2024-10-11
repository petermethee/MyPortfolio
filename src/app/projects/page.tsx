"use client";
import Filters from "@/components/Projects/Filters";
import ProjectCard from "@/components/Projects/ProjectCard";
import ProjectDetails from "@/components/Projects/ProjectDetails";
import Wrapper from "@/components/shared/Wrapper";
import { projects } from "@/data/projects";
import { ETheme, EWorkspace } from "@/models/EThemes";
import { useState } from "react";

export default function ProjectsPage() {
  const [workspace, setWorkspace] = useState(EWorkspace.all);
  const [theme, setTheme] = useState(ETheme.webApp);
  const [projectId, setProjectId] = useState<number | null>(null);
  return (
    <>
      <Wrapper flex>
        <Filters
          workspace={workspace}
          theme={theme}
          setTheme={setTheme}
          setWorkspace={setWorkspace}
        />
        <div className="flex flex-1 flex-wrap items-center justify-center gap-x-10 gap-y-20">
          {projects
            .filter(
              (project) =>
                (project.workspace === workspace ||
                  workspace === EWorkspace.all) &&
                (project.theme === theme || theme === ETheme.all),
            )
            .map((project) => (
              <div
                key={project.id}
                className="w-full min-w-[250px] max-w-[500px] lg:w-[40%]"
              >
                <ProjectCard
                  key={project.title}
                  project={project}
                  onClick={setProjectId}
                />
              </div>
            ))}
        </div>
      </Wrapper>
      <ProjectDetails
        projectId={projectId}
        onClose={() => setProjectId(null)}
      />
    </>
  );
}
