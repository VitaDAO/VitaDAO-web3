import React, { useContext } from "react";
import { StoreContext } from "../../store/store";
import ProjectCard from "../../components/cards/projectCard";
import CardGrid from "../../components/cardGrid/cardGrid";

function Projects() {
  const { state } = useContext(StoreContext);
  const projects = state.data.proposals.map((proposal) => proposal.project);
  return (
    <CardGrid title="projects">
      {projects.map((project) => (
        <ProjectCard
          id={project.id}
          key={project.id}
          projectSummary={project.project_summary}
          researchLead={project.research_lead}
          institution={project.institution}
          fundingStage={project.funding_stage}
          projectTitle={project.title}
        />
      ))}
    </CardGrid>
  );
}

export default React.memo(Projects);
