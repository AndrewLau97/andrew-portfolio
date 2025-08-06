import projectLinks from "../configs/projectLinks";
const ProjectCard = ({ projectName }) => {
  const { weblink, name, info, techStack } = projectLinks[projectName];
  return (
    <>
      <div className="border-1 border-border rounded-3xl hover:border-1 hover:border-mutedorange hover:shadow-lg hover:shadow-mutedorange/10 transition-transform duration-300 ease-in-out hover:-translate-y-1">
        <div className="p-10">
          <a href={weblink} target="_blank" rel="noopener noreferrer">
            <div className=" flex justify-center">
              <img
                src={`/${projectName}.png`}
                className="w-100 h-50 border-4 rounded-3xl"
              />
            </div>
            <h1 className="flex justify-center pt-5">{name}</h1>
            <div className="pt-5">
              <p>{info}</p>
            </div>
            <div className="flex pt-5">
              {techStack.map((tech) => {
                return (
                  <p className="mx-2 bg-gray-300 text-charcoal rounded-full px-2">
                    {tech}
                  </p>
                );
              })}
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
