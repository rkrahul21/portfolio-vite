// import { projectList } from "../constants/ProjectInfo"
// import { FaExternalLinkAlt } from "react-icons/fa";

// const Projects = () => {
//   return (
//     <div className="w-full  flex flex-col gap-4 px-10  " id="projects"> 
//       <h1 className="text-[#b56e17] underline text-3xl font-semibold text-center py-4"> Projects </h1>
      
//       <div className="flex items-center justify-center flex-col gap-4">
//       {projectList.map((project) => (
//         <div key={project.id} className="project-card w-[90%] md:w-[70%] flex flex-col gap-2 p-4 rounded-md shadow-md hover:bg-[#e9cea3] transition-transform">
//         <div className="flex justify-between items-center">
//           <h1 className="text-2xl text-orange-700 font-semibold">{project.name}</h1>
//           <a href={project.link} target="_blank" rel="noreferrer">
//             <FaExternalLinkAlt className="text-2xl text-orange-700" />
//           </a>
//         </div>
//         <p>{project.description}</p>
//         <div className="flex flex-wrap gap-2">
//           {project.skill?.map((skill) => (
//             <span key={skill} className="skill-tag w-fit h-fit flex items-center sm:text-lg text-base font-light bg-[#FF9D23] hover:text-[#FF9D23] hover:bg-white hover:font-medium transition-all px-2 py-1 rounded-full cursor-default">
//               {skill}
//             </span>
//           ))}
//         </div>
//         <hr />
//       </div>
//        ))}
//         </div>
//     </div>
//   )
// }

// export default Projects



// 2nd version with modal for project details

// import { useState } from "react";
// import { projectList } from "../constants/ProjectInfo";
// import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   return (
//     <div className="w-full flex flex-col gap-4 px-10" id="projects">
//       <h1 className="text-[#b56e17] underline text-3xl font-semibold text-center py-4">
//         Projects
//       </h1>

//       <div className="flex items-center justify-center flex-col gap-4">
//         {projectList.map((project) => (
//           <div
//             key={project.id}
//             className="project-card w-[90%] md:w-[70%] flex flex-col gap-2 p-4 rounded-md shadow-md bg-white/90 dark:bg-[#1a2236] hover:bg-[#ffe6c7] dark:hover:bg-[#232b43] hover:scale-105 transition-all cursor-pointer relative"
//             onClick={() => setSelectedProject(project)}
//           >
//             <div className="flex justify-between items-center">
//               <h1 className="text-2xl text-orange-700 font-semibold">{project.name}</h1>
//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="z-10"
//                 onClick={e => e.stopPropagation()}
//               >
//                 <FaExternalLinkAlt className="text-2xl text-orange-700" />
//               </a>
//             </div>
//             <p className="text-gray-700 dark:text-gray-200">{project.description}</p>
//             <div className="flex flex-wrap gap-2">
//               {project.skill?.map((skill) => (
//                 <span
//                   key={skill}
//                   className="skill-tag w-fit h-fit flex items-center sm:text-lg text-base font-light bg-[#FF9D23] hover:text-[#FF9D23] hover:bg-white hover:font-medium transition-all px-2 py-1 rounded-full cursor-default"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//             <hr />
//           </div>
//         ))}
//       </div>

//       {/* Project Details Modal */}
//       {selectedProject && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
//           <div className="relative bg-white dark:bg-[#1a2236] rounded-lg shadow-2xl w-[90%] md:w-[50%] p-8 animate-fadeIn">
//             {/* Close Icon */}
//             <button
//               className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-red-500 transition"
//               onClick={() => setSelectedProject(null)}
//               aria-label="Close"
//             >
//               <FaTimes />
//             </button>
//             <h2 className="text-3xl font-bold text-orange-700 mb-2">{selectedProject.name}</h2>
//             <p className="mb-4 text-gray-700 dark:text-gray-200">{selectedProject.description}</p>
//             <div className="mb-4">
//               <span className="font-semibold text-gray-800 dark:text-gray-300">Skills: </span>
//               {selectedProject.skill?.map((skill) => (
//                 <span
//                   key={skill}
//                   className="inline-block bg-[#FF9D23] text-white px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//             <a
//               href={selectedProject.link}
//               target="_blank"
//               rel="noreferrer"
//               className="inline-flex items-center gap-2 text-blue-600 hover:underline font-semibold"
//             >
//               Visit Project <FaExternalLinkAlt />
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Projects;


// 3rd version with improved styling and animations


import { useState } from "react";
import { projectList } from "../constants/ProjectInfo";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="w-full flex flex-col gap-4 px-10" id="projects">
      <h1 className="text-[#b56e17] underline text-3xl font-semibold text-center py-4">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="project-card flex flex-col gap-2 p-4 rounded-md shadow-md bg-white/90 dark:bg-[#1a2236] hover:bg-[#ffe6c7] dark:hover:bg-[#232b43] hover:scale-105 transition-all cursor-pointer relative"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.thumbnail} alt={project.name} className="w-full h-32 object-cover rounded-md" />
            <h1 className="text-xl text-orange-700 font-semibold">{project.name}</h1>
            <p className="text-gray-700 dark:text-gray-200">{project.description.substring(0,100)}...</p>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative bg-white dark:bg-[#1a2236] rounded-lg shadow-2xl w-[90%] md:w-[50%] p-8 animate-fadeIn">
            {/* Close Icon */}
            <button
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-red-500 transition"
              onClick={() => setSelectedProject(null)}
              aria-label="Close"
            >
              <FaTimes />
            </button>
            <h2 className="text-3xl font-bold text-orange-700 mb-2">{selectedProject.name}</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-200">{selectedProject.description}</p>
            <div className="mb-4">
              <span className="font-semibold text-gray-800 dark:text-gray-300">Skills: </span>
              {selectedProject.skill?.map((skill) => (
                <span
                  key={skill}
                  className="inline-block bg-[#FF9D23] text-white px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2"
                >
                  {skill}
                </span>
              ))}
            </div>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:underline font-semibold"
            >
              Visit Project <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

