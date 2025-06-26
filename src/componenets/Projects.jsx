import { projectList } from "../constants/ProjectInfo"
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="w-full  flex flex-col gap-4 px-10  " id="projects"> 
      <h1 className="text-[#b56e17] underline text-3xl font-semibold text-center py-4"> Projects </h1>
      
      <div className="flex items-center justify-center flex-col gap-4">
      {projectList.map((project) => (
        <div key={project.id} className="project-card w-[90%] md:w-[70%] flex flex-col gap-2 p-4 rounded-md shadow-md hover:bg-[#e9cea3] transition-transform">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl text-orange-700 font-semibold">{project.name}</h1>
          <a href={project.link} target="_blank" rel="noreferrer">
            <FaExternalLinkAlt className="text-2xl text-orange-700" />
          </a>
        </div>
        <p>{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.skill?.map((skill) => (
            <span key={skill} className="skill-tag w-fit h-fit flex items-center sm:text-lg text-base font-light bg-[#FF9D23] hover:text-[#FF9D23] hover:bg-white hover:font-medium transition-all px-2 py-1 rounded-full cursor-default">
              {skill}
            </span>
          ))}
        </div>
        <hr />
      </div>
       ))}
        </div>
    </div>
  )
}

export default Projects
