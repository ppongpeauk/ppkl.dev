import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import { useState, useEffect, useRef, useContext } from 'react'
import { LoadContext } from '../contexts/LoadContext';

import frontImage from '../assets/images/front-icon-3-transparent.png'
import projectPreviewPlaceholder from '../assets/images/project-preview-placeholder.png'
import './Home.css'

import ProjectCard from "../components/ProjectCard";
import { projectData } from '../data/projects';

export default function Home() {
  const projectsRef = useRef(null);
  const [loading, setLoading] = useContext(LoadContext);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (!loading &&
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* Main Introduction */}
      <section className="flex justify-center items-center w-full min-h-screen flex-col box-border pt-48 xl:px-24 md:p-8 lg:flex-row">
        <div className="p-8 w-full xl:w-2/4 lg:w-2/4 sm:2/4">
          <div>
            <h1 className="text-5xl font-bold"><span className="home-brand-name">Hi, I'm Pete.</span></h1>
            <p className="text-3xl font-semibold">I'm a Computer Science student from Washington, D.C.</p>
          </div>
          <div className="flex flex-col justify-items-start sm:flex-row py-4 w-full">
            {/* View projects button */}
            <div className="py-4 sm:pr-2">
              <Link to="" onClick={(e) => { e.preventDefault(); projectsRef.current.scrollIntoView({ behavior: "smooth", block: "center" }) }} className="transition duration-300 border-solid border-[4px] border-black px-6 py-2 hover:opacity-75 active:opacity-100 active:bg-black active:text-white font-bold text-2xl rounded-full align-middle">
                View Projects
              </Link>
            </div>
            {/* Get in touch button */}
            <div className="py-4">
              <a href="mailto:ppongpeauk@gmail.com" rel="_noreferrer" className="transition duration-300 border-solid border-[4px] border-black px-6 py-2 hover:opacity-75 active:opacity-100 active:bg-black active:text-white font-bold text-2xl rounded-full align-middle">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        <div className="home-mugshot-container h-auto w-full sm:w-5/12">
          <img className="home-mugshot" src={frontImage} alt="front bust shot"></img>
        </div>
      </section>
      {/* Projects */}
      <section ref={projectsRef} className="w-full h-auto box-border p-2 sm:p-8">
        <div className="w-full p-8">
          <h1 className="text-5xl font-bold flex align-middle">
            Projects
            <Link to="/projects" className="transition duration-300 border-[3px] border-solid mx-8 px-4 py-1 border-black font-bold text-lg rounded-full hover:opacity-75 active:opacity-100 active:bg-black active:text-white items-center m-auto w-full text-center sm:w-auto">View All</Link>
          </h1>
          <div className="bg-black w-10 h-2 mt-4" />
        </div>
        <div className="w-full flex flex-wrap justify-start sm:px-4">
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
      {/* Experience */}
      <section className="w-full h-auto box-border p-2 sm:p-8">
        <div className="w-2/4 p-8">
          <h1 className="text-5xl font-bold">Experience</h1>
          <div className="bg-black w-10 h-2 mt-4" />
        </div>
        <div className="flex flex-row justify-center box-border xl:px-8 md:px-8">
          {/* <div className="flex-wrap justify-start px-8 hidden md:flex">
            <img className="border-solid border-[3px] object-cover rounded-3xl" src={about1}></img>
          </div> */}

          {/* Experience Timeline */}
          <div className="h-screen">
            <div className="flex flex-col items-center w-[8px] h-full bg-black relative">
              <div className="w-auto bg-neutral-300 p-8 absolute top-[100px] -left-[250px]">
                <span className="rounded-full w-[48px] h-[48px] bg-black -right-[152px] top-0 absolute"></span>
                <h1>
                  title
                </h1>
                <p>
                  description
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Me */}
      <section className="w-full h-auto box-border p-2 sm:p-8">
        <div className="w-2/4 p-8">
          <h1 className="text-5xl font-bold">About Me</h1>
          <div className="bg-black w-10 h-2 mt-4" />
        </div>
        <div className="flex align-middle justify-between flex-row box-border xl:px-8 md:px-8">
          {/* <div className="flex-wrap justify-start px-8 hidden md:flex">
            <img className="border-solid border-[3px] object-cover rounded-3xl" src={about1}></img>
          </div> */}
          <div className="w-full flex flex-wrap justify-start px-8">
            <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </section>
    </>
  )
}