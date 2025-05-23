import About from "./Content/About"
import Contact from "./Content/Contact"
import HomeCV from "./Content/HomeCV"
import Project from "./Content/Project"
import Skill from "./Content/Skill"
import { IProps } from "./LeftPart"

const RightPart = (props: IProps) => {
  return (
    <>
      <div className={props.hideLeftPart ? "arlo_tm_rightpart_wrap opened" : "arlo_tm_rightpart"}>
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
