import Space from "../components/Space";
import ProjectCard from "../components/ProjectCard";
// import ProjectCardNotHosted from "../components/ProjectCardNotHosted";
import projectHosted from "../configs/projectHosted";
import projectNotHosted from "../configs/projectNotHosted";
const ProjectPage = () => {
  const projectLinkList = Object.keys(projectHosted);
  const projectNotHostedList = Object.keys(projectNotHosted);
  return (
    <>
      <div className="pb-24" id="projects">
       <Space spaceNeeded="h-20"/>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:ml-30 lg:mr-30">
          {projectLinkList.map((project) => {
            return <ProjectCard key={project} projectName={project} projectList={projectHosted}/>;
          })}
          {projectNotHostedList.map((project)=>{
            return <ProjectCard key={project} projectName={project} projectList={projectNotHosted}/>
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
