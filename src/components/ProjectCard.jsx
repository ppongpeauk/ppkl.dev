import { Link } from 'react-router-dom'
import WOW from 'wowjs';

export default function ProjectCard(props) {
  return <>
    <div className="p-4 w-full xl:w-1/4 lg:w-1/2">
      <Link to={props.link}>
        <div className="transition duration-300 shadow-lg box-border rounded-3xl hover:scale-[101%] hover:shadow-2xl overflow-hidden h-full active:bg-neutral-300">
          <div className="w-full">
            <img className="block w-full" src={props.img} alt="Logo" />
          </div>
          <div className="px-8 py-4"> {/* card info */}
            <p className="text-sm font-semibold">{props.type.toUpperCase()}</p>
            <h2 className="text-3xl font-bold">
              {props.name}
            </h2>
            <div className="flex">
              <p className="text-lg font-semibold">
                {props.briefDescription}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  </>
}