import { Link } from 'react-router-dom'

export default function ProjectCard(props) {
  return <>
    <div className="p-4 w-full xl:w-1/4 lg:w-2/4 md:w-full sm:w-full">
      <Link to={props.link}>
        <div className="transition duration-300 border-solid border-[3px] border-black box-border rounded-3xl hover:scale-[105%] active:scale-95 overflow-hidden h-full">
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