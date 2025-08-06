import AboutMe from "../components/AboutMe";
import Interests from "../components/Interests";
import Space from "../components/Space";
import TechStack from "../components/TechStack";

const About = () => {
  return (
    <>
      <div id="about" className="pb-24">
        <Space spaceNeeded="h-30"/>
        <div className="border-1 border-border lg:mx-30 rounded-3xl hover:border-1 hover:border-mutedorange hover:shadow-lg hover:shadow-mutedorange/10 transition-transform duration-300 ease-in-out hover:-translate-y-1">
          <AboutMe />
          <TechStack />
          <Interests />
        </div>
      </div>
       <Space spaceNeeded="h-10"/>
    </>
  );
};

export default About;
