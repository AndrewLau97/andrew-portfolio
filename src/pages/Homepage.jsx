import Space from "../components/Space";
import scrollIntoView from "scroll-into-view";

const Homepage = () => {
  function aboutMeClick() {
    const aboutSection = document.getElementById("about");
    const cancel = scrollIntoView(aboutSection, {
      time: 3500,
      align: {
        top: 0,
        topOffset: 0,
      },
      ease: (t) => 1 - Math.pow(1 - t, 3),
    });
    setTimeout(cancel, 1500);
  }
  return (
    <>
      <div id="homepage">
        <div className="hidden md:block">
          <Space spaceNeeded="h-20" />
        </div>
        <div className=" w-full md:my-10 sm:my-4 mx-auto md:p-10 flex flex-col-reverse md:flex-row">
          <div className="md:my-10 md:w-1/2 sm:my-4 mx-auto p-10 flex flex-col justify-evenly">
            <div className="flex justify-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Hello there, I am Ka Hou (Andrew) Lau, Junior Software Developer
              </h1>
            </div>
            <div>
              <p>
                I am currently open to job opportunities in software
                development. I bring a strong work ethic, problem-solving
                mindset, and a willingness to quickly learn any new technologies
                required for the role.
              </p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={aboutMeClick}
                className="bg-lightblue hover:bg-mediumblue py-1 px-2 rounded-xl text-lightwhite hover:cursor-pointer my-2"
              >
                More about me
              </button>
            </div>
          </div>
          <div className="md:my-10 md:w-1/2 sm:my-4 mx-auto p-10">
            <img
              src="profilePicture.JPG"
              className="lg:w-lg mx-auto rounded-full w-sm"
            ></img>
          </div>
        </div>
        <Space spaceNeeded="h-60" />
      </div>
    </>
  );
};

export default Homepage;
