import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import ProjectCard from "../components/ProjectCard";
import projectPreviewPlaceholder from '../assets/images/project-preview-placeholder.png';
import { useEffect } from 'react';

export default function ProjectList() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'auto'});
  }, []);
  
  return <>
    <Helmet>
      <title>projects</title>
    </Helmet>
    <div>
      <section className="w-full min-h-screen box-border px-0 sm:px-8 pt-48">
        <div className="w-2/4 p-8">
          <h1 className="text-5xl font-bold">Projects</h1>
          <div className="bg-black w-10 h-2 mt-2" />
        </div>
        <div className="w-full flex flex-wrap justify-start px-4">
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
            link="/projects/personal-website"
          />
        </div>
      </section>
    </div>
  </>
}