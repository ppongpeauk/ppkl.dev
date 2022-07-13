import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import { useState, useEffect, useRef, useContext } from 'react'
import { NavContext } from '../contexts/NavContext';

import frontImage from '../assets/images/front-icon-2-transparent.png'
import projectPreviewPlaceholder from '../assets/images/project-preview-placeholder.png'
import './Home.css'

import ProjectCard from "../components/ProjectCard"; 



export default function Home() {
  const projectRefState = useRef(null)
  const homeRefState = useRef(null)
  const aboutRefState = useRef(null)

  const { projectRef, setProjectRef } = useContext(NavContext) || { projectRef: null };

  useEffect(() => {
    if (projectRef) {
      setProjectRef(projectRefState);
    }
  }, [projectRefState, projectRef])

  return (
    <>
      <Helmet>
        <title>home</title>
      </Helmet>
      <section ref={homeRefState} className="flex justify-center items-center w-full min-h-screen flex-col box-border pt-48 xl:px-24 md:p-8 lg:flex-row">
        <div className="p-8 w-full l:w-2/4 lg:w-2/4 sm:2/4">
          <div>
            <h1 className="text-5xl font-bold"><span className="home-brand-name">Hi, I'm Pete.</span></h1>
            <p className="text-3xl font-semibold">Software Engineer from Washington, D.C.</p>
          </div>
          <div className="home-button-container">
            <Link to="/projects" className="transition duration-500 border-solid border-[4px] border-black px-6 py-2 active:bg-black active:text-white font-bold text-2xl rounded-full align-middle">
              View Projects
            </Link>
          </div>
        </div>
        <div className="home-mugshot-container h-auto w-full sm:w-5/12">
          <img className="home-mugshot" src={frontImage}></img>
        </div>
      </section>
      <section ref={projectRefState} className="w-full h-auto box-border p-8">
        <div className="w-2/4 p-8">
          <h1 className="text-5xl font-bold flex align-middle">
            Projects
            <Link to="/projects" className="transition duration-500 border-[3px] border-solid mx-8 px-4 py-1 border-black font-bold text-lg rounded-full align-middle active:bg-black active:text-white flex items-center">View All</Link>
          </h1>
          <div className="bg-black w-10 h-2 mt-4" />
        </div>
        <div className="w-full flex flex-wrap justify-start sm:px-8">
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
      <section ref={aboutRefState} className="w-full h-auto box-border p-8">
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