const AboutMe = () => {
  return (
    <>
      <div className="max-w-4xl my-4 mx-auto">
        <h1>About Me</h1>
        <p className="font-poppins">
          I'm Ka Hou Lau but I go by Andrew. I am a Junior Software Developer
          currently based in the UK, planning to relocate to Hanoi, Vietnam. I
          have recently completed a JavaScript Bootcamp at{" "}
          <a
            href="https://www.northcoders.com/"
            target="_blank"
            rel="noopener noreferrer"
            //   className=""
          >
            Northcoders
          </a>{" "}
          and am exicted to dive into real-world projects that help people and
          improve lives.
        </p>
        <p>
          My tech stack includes HTML, CSS, JavaScript, TypeScript, React, and
          Node.js. I've also worked with Supabase for backend/database
          functionality and used SQL for data handling. On the UI side of
          things. I've explored using Tailwind CSS and Material UI (MUI) for
          styling and component libaries.
        </p>
        <p>
          I'm currently looking for remote junior developer positions - ideally
          with teams that value mentorship, continuous learning, and career
          development. I am eager to contribute while growing my skills in a
          supportive environment.
        </p>
      </div>
    </>
  );
};

export default AboutMe;
