import { Helmet } from 'react-helmet'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowBackIos } from "@mui/icons-material"

import { Parallax, Background } from "react-parallax";
import projectPreviewPlaceholder from '../assets/images/project-preview-placeholder.png';

export default function Project() {
  let params = useParams();
  const navigate = useNavigate();

  return <>
    <Helmet>
      <title>{params.projectName}</title>
    </Helmet>
    <div className="py-48">
      {/* <Parallax bgImage={projectPreviewPlaceholder} blur={{ min: -15, max: 15 }} strength={512} className="w-full h-96 object-cover"/> */}
      <Parallax strength={512} blur={{ min: -15, max: 15 }} className="h-96">
        <Background className="w-screen h-screen">
          <img src={projectPreviewPlaceholder} className="w-screen h-screen object-cover" />
        </Background>
      </Parallax>
      <section className="flex flex-col md:flex-row w-full h-auto box-border p-8">
        <div className="w-full sm:w-2/4 p-8">
          <Link to="/" onClick={(e) => { e.preventDefault(); navigate(-1); }}>
            <ArrowBackIos className="transition-all duration-500 active:opacity-75" sx={{ fontSize: 48 }} />
          </Link>
          {/* name */}
          <div>
            <h1 className="text-5xl font-bold my-2">
              {params.projectName}
            </h1>
            <p className="text-2xl">12-12-2017</p>
            <div className="bg-black w-10 h-2 mt-4" />
          </div>
          {/* description */}
          <div className="pt-4">
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-2/4">
          <div className="p-4">
            <img className="w-full h-128 object-cover py-2 transition duration-500 hover:scale-[103%]" src={projectPreviewPlaceholder}></img>
            <p className="text-xl text-right">Image #1 Caption</p>
          </div>
          <div className="p-4">
            <img className="w-full h-128 object-cover py-2 transition duration-500 hover:scale-[103%]" src={projectPreviewPlaceholder}></img>
            <p className="text-xl text-right">Image #2 Caption</p>
          </div>
        </div>
      </section>
    </div>
  </>
}