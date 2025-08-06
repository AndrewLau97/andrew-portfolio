import projectNotHosted from "../configs/projectNotHosted";

const ProjectCardNotHosted = ({ projectName }) => {
  const { name, info, gitHub, techStack } = projectNotHosted[projectName];
  console.log(name);
  return (
    <>
      <div className="border-1 border-border rounded-3xl hover:border-1 hover:border-mutedorange hover:shadow-lg hover:shadow-mutedorange/10 transition-transform duration-300 ease-in-out hover:-translate-y-1">
        <div className="p-10">
          <div className="flex justify-center">
            <img
              src={`/${projectName}.png`}
              className="w-100 h-50 border-4 flex rounded-3xl"
            />
          </div>
          <div className="relative h-64">
            <div className="pt-5 flex justify-center">
              <h1>{name}</h1>
            </div>
            <div className="pt-5">
              <p>{info}</p>
            </div>
            <div className="absolute bottom-4 left-4 flex">
              {techStack.map((tech) => {
                return (
                  <p className="mx-2 bg-gray-300 text-charcoal rounded-full px-2">
                    {tech}
                  </p>
                );
              })}
            </div>
            <div className="absolute bottom-0 right-0 rounded">
              <a href={gitHub} className="bg-gray-300 rounded-full pr-1 pl-1">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCardNotHosted;
