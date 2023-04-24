import { useRouter } from "next/router";
import Gallery from "../../components/Gallery";

export default function Project() {
  const router = useRouter();
  const { projectId } = router.query;
  const projectData = {
    num: 1,
    name: "EVE",
    description: "sample description"
  }

  return <>
    <h1>
      {/* add fancy leading zero if project number is below two digits long */}
      {(projectData.num < 10) ? 0 : null}{projectData.num} - {projectData.name}
    </h1>
    <p>{projectData.description}</p>
    <hr/>
    <Gallery />
  </>
}