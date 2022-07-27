import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { LoadContext } from '../contexts/LoadContext';

import ProjectCard from "../components/ProjectCard";
import { projectData } from '../data/projects';

export default function ProjectList() {
  const [loading, setLoading] = useContext(LoadContext);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    setLoading(false);
  }, []);

  return <>
    <Helmet>
      <title>Projects</title>
    </Helmet>
    <div>
      <section className="w-full min-h-screen box-border px-0 sm:px-8 pt-48">
        <div className="w-2/4 p-8">
          <h1 className="text-5xl font-bold">Projects</h1>
          <div className="bg-black w-10 h-2 mt-2" />
        </div>
        <div className="w-full flex flex-wrap justify-start px-4">
          {
            Object.keys(projectData).map((key, index) => {
              let project = projectData[key];
              return <ProjectCard
                name={project.name}
                type={project.type}
                briefDescription={project.briefDescription}
                img={project.media.preview}
                link={`/projects/${Object.keys(projectData)[index]}`}
              />
            })
          }
        </div>
      </section>
    </div>
  </>
}