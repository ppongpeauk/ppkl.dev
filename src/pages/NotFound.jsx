import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import ProjectCard from "../components/ProjectCard";
import projectPreviewPlaceholder from '../assets/images/project-preview-placeholder.png';

export default function NotFound() {
  return <>
    <Helmet>
      <title>projects</title>
    </Helmet>
    <div>
      <section className="w-full min-h-screen box-border pt-48 px-48 flex flex-col items-center align-middle">
        <div className="py-8">
          <h1 className="text-5xl font-bold">404 Not Found</h1>
          <div className="bg-black w-10 h-2 mt-2" />
          <p className="text-2xl py-4 pb-8">It seems like you're trying to access a page that either never existed or no longer exists.</p>
          <Link to="/" className="transition duration-500 border-solid border-[4px] border-black px-6 py-2 active:bg-black active:text-white font-bold text-2xl rounded-full align-middle shrink">
            Take me home, country roads
          </Link>
        </div>
      </section>
    </div>
  </>
}