import About from "./Content/About"
import Contact from "./Content/Contact"
import HomeCV from "./Content/HomeCV"
import Project from "./Content/Project"
import Skill from "./Content/Skill"

const RightPart = () => {
  return (
    <>
      <div className="arlo_tm_rightpart">
        <div className="rightpart_inner">
          {/* HOME */}
          <HomeCV />
          {/* /HOME */}

          {/*  < !-- ABOUT --> */}
          <About />
          {/*  < !-- /ABOUT --> */}

          {/*  < !-- SKILLS --> */}
          <Skill />
          {/*  < !-- /SKILLS --> */}

          {/*  < !-- PROJECTS --> */}
          <Project />
          {/*  < !-- /PROJECTS --> */}

          {/*  < !-- CONTACT & FOOTER --> */}
          <Contact />
          {/*  < !-- /CONTACT & FOOTER --> */}

        </div>
      </div>
    </>
  )
}

export default RightPart
