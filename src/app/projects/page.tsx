"use client";
import Filters from "@/components/Projects/Filters";
import ProjectCard from "@/components/Projects/ProjectCard";
import ProjectDetails from "@/components/Projects/ProjectModal";
import PageWrapper from "@/components/shared/PageWrapper";
import { projects } from "@/data/projects";
import { ETheme, EWorkspace } from "@/models/EThemes";
import { useState } from "react";

export default function ProjectsPage() {
  const [workspace, setWorkspace] = useState(EWorkspace.all);
  const [theme, setTheme] = useState(ETheme.all);
  const [projectId, setProjectId] = useState<string | null>(null);
  return (
    <>
      <PageWrapper flex>
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
                (project.theme.includes(theme) || theme === ETheme.all),
            )
            .map((project) => (
              <div
                key={project.title}
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
      </PageWrapper>
      <ProjectDetails
        projectId={projectId}
        onClose={() => setProjectId(null)}
      />
    </>
  );
}
