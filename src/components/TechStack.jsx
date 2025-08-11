const TechStack = () => {
  const frontendTechStack = [
    "React",
    "Vite",
    "HTML",
    "CSS",
    "Tailwind",
    "TypeScript",
    "Material UI",
  ];
  const backendTechStack = [
    "JavaScript",
    "SQL/PSQL",
    "Jest",
    "Node.js",
    "Supabase",
    "Express.js",
  ];
  return (
    <>
      <div className="max-w-4xl my-4 lg:mx-auto lg:flex sm:flex mx-10">
        <div className="lg:w-1/2">
          <h2 className="pb-5 flex justify-center text-xl font-bold">
            Frontend
          </h2>
          <div className="flex flex-wrap">
            {frontendTechStack.map((tech) => {
              return (
                <span key={`FE${tech}`} className="mx-2 bg-gray-300 text-charcoal rounded-full px-2 my-2">
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
        <div className="lg:w-1/2">
          <h2 className="pb-5 flex justify-center text-xl font-bold sm:pt-0 pt-5">
            Backend
          </h2>
          <div className="flex flex-wrap">
            {backendTechStack.map((tech) => {
              return (
                <span key={`BE${tech}`} className="mx-2 bg-gray-300 text-charcoal rounded-full px-2 my-2">
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default TechStack;
