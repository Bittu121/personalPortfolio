import { useState } from "react";
import FadeIn from "../FadeIn";
import ProjectShowcase from "./ProjectShowcase";
import ProjectFeaturesModal from "./ProjectFeaturesModal";
import ProjectArchitectureModal from "./ProjectArchitectureModal";
import { PROJECTS } from "./projectData";

const Project = () => {
  const [featuresOf, setFeaturesOf] = useState(null);
  const [archOf, setArchOf] = useState(null);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-page py-16 md:py-24 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto relative">
        <FadeIn className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-[#818cf8] uppercase mb-4">
              05 — Projects
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-content tracking-[-0.03em] leading-[1.1]">
              Full-stack applications I've built
            </h2>
            <p className="text-content/45 text-sm md:text-[17px] mt-4 max-w-[620px] leading-8">
              Projects focused on frontend interfaces, backend APIs,
              authentication, dashboards, CRUD operations, and responsive user
              experiences.
            </p>
          </div>
          <div className="px-4 py-2 rounded-lg border border-content/10 text-sm text-content/40">
            {PROJECTS.length} Projects
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
          {PROJECTS.map((project, i) => (
            <ProjectShowcase
              key={project.id}
              project={project}
              index={i}
              onViewFeatures={() => setFeaturesOf(project)}
              onViewArchitecture={() => setArchOf(project)}
            />
          ))}
        </div>
      </div>

      <ProjectFeaturesModal
        project={featuresOf}
        onClose={() => setFeaturesOf(null)}
      />

      <ProjectArchitectureModal
        project={archOf}
        onClose={() => setArchOf(null)}
      />
    </section>
  );
};

export default Project;
