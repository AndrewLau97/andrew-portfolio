// import projectNotHosted from "../configs/projectNotHosted";

// const ProjectCardNotHosted = ({ projectName }) => {
//   const { name, info, gitHub, techStack } = projectNotHosted[projectName];
//   return (
//     <>
//       <div className="border-1 border-border rounded-3xl hover:border-1 hover:border-mutedorange hover:shadow-lg hover:shadow-mutedorange/10 transition-transform duration-300 ease-in-out hover:-translate-y-1">
//         <div className="p-10">
//           <div className="flex justify-center">
//             <img
//               src={`/${projectName}.png`}
//               className="w-100 h-50 border-4 flex rounded-3xl"
//             />
//           </div>
//             <div className="pt-5 flex justify-center">
//               <h1>{name}</h1>
//             </div>
//             <div className="pt-5">
//               <p>{info}</p>
//             </div>
//             <div className="flex flex-wrap pt-5">
//               {techStack.map((tech) => {
//                 return (
//                   <p className="mx-2 bg-gray-300 text-charcoal rounded-full px-2">
//                     {tech}
//                   </p>
//                 );
//               })}
//             </div>
//             <div className="">
//               <a href={gitHub} className="underline hover:text-mutedgrey">
//                 View on Github
//               </a>
//             </div>
//           </div>
//         </div>
//     </>
//   );
// };

// export default ProjectCardNotHosted;
