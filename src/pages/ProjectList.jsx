import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import ProjectCard from "../components/ProjectCard";
import projectPreviewPlaceholder from '../assets/images/project-preview-placeholder.png';

export default function ProjectList() {
  return <>
    <Helmet>
      <title>projects</title>
    </Helmet>
    <div>
      <section className="w-full min-h-screen box-border p-8 pt-48">
        <div className="w-2/4 p-8">
          <h1 className="text-5xl font-bold">Projects</h1>
          <div className="bg-black w-10 h-2 mt-2" />
        </div>
        <div className="w-full flex flex-wrap justify-start px-8">
          <ProjectCard
            name="eveedu"
            type="Development"
            briefDescription="Automation tool that makes distanced-learning easier"
            img={projectPreviewPlaceholder}
            link="/projects/eveedu"
          />
          <ProjectCard
            name="restrafes.co"
            type="Development & Design"
            briefDescription="My personal website (this one!)"
            img={projectPreviewPlaceholder}
            link="/projects/ppongpeauk-co"
          />
        </div>
      </section>
    </div>
  </>
}