import Space from "../components/Space";
import ProjectCard from "../components/ProjectCard";
import ProjectCardNotHosted from "../components/ProjectCardNotHosted";
import projectLinks from "../configs/projectLinks";
import projectNotHosted from "../configs/projectNotHosted";
const ProjectPage = () => {
  const projectLinkList = Object.keys(projectLinks);
  const projectNotHostedList = Object.keys(projectNotHosted);
  return (
    <>
      <div className="pb-24" id="projects">
       <Space spaceNeeded="h-20"/>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:ml-30 lg:mr-30">
          {projectLinkList.map((project) => {
            return <ProjectCard key={project} projectName={project} />;
          })}
          {projectNotHostedList.map((project) => {
            return <ProjectCardNotHosted key={project} projectName={project} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
