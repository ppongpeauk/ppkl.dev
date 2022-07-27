import { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowBackIos } from "@mui/icons-material"
import { LoadContext } from '../contexts/LoadContext';

import { Parallax, Background } from "react-parallax";
import projectPreviewPlaceholder from '../assets/images/project-preview-placeholder.png';
import { useEffect, useState } from 'react';

import eveeduBanner from '../assets/images/projects/eveedu/banner.png';

import { projectData } from '../data/projects'

function Image(props) {
  const media = props.media;
  return <>
    <div className="flex flex-col items-end p-4">
      <div className={`flex flex-col items-end w-[${media.width}px]`}>
        <img className={`object-cover py-2 transition duration-300`} src={media.src} style={{width: `${media.width}px`}}></img>
      </div>
      {media.captionTitle && <div className="text-xl text-right font-bold">{media.captionTitle}</div>}
      {media.captionDescription && <div className="text-xl text-right">{media.captionDescription}</div>}
    </div>
  </>
}

export default function Project() {
  let params = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useContext(LoadContext);
  const [project, setProject] = useState();

  useEffect(() => {
    setLoading(true);
    if (projectData[params.projectId]) {
      setProject(projectData[params.projectId]);
      setLoading(false);
    } else {
      navigate('/not-found');
    }
  }, [project]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (project ? <>
    <Helmet>
      <title>{project.name}</title>
    </Helmet>
    <div>
      {/* <Parallax bgImage={projectPreviewPlaceholder} blur={{ min: -15, max: 15 }} strength={512} className="w-full h-96 object-cover"/> */}
      <Parallax strength={128} disabled className="h-48">
        <Background className="w-screen h-screen">
          <img src={project.media.banner} className="w-screen h-screen object-cover banner-gradient" />
        </Background>
      </Parallax>
      <section className="flex flex-col md:flex-row w-full min-h-screen h-auto box-border px-4 py-4">
        <div className="w-full sm:w-2/4 p-8">
          <Link to="/" onClick={(e) => { e.preventDefault(); navigate(-1); }}>
            <ArrowBackIos className="transition-all duration-300 hover:text-neutral-500 active:text-neutral-300" sx={{ fontSize: 48 }} />
          </Link>
          {/* name */}
          <div>
            {/* project name */}
            <h1 className="text-5xl font-bold pt-2">
              {project.name}
            </h1>
            {/* date */}
            <p className="text-xl uppercase">
              {project.date}
            </p>
            <p className="text-lg">
              {project.briefDescription}
            </p>
            {/* divider */}
            <div className="bg-black w-10 h-2 mt-4" />
          </div>
          {/* description */}
          <div className="pt-4">
            <p className="text-lg">
              {
                project.description.map((line, index) => {
                  return <span key={index}>{line}<br /><br /></span>
                }
                )
              }
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full items-end h-auto sm:w-2/4">
          {
            project.media.main.map((media, index) => {
              return <Image key={index} media={media} />
            })
          }
        </div>
      </section>
    </div>
  </> : <></>)
}