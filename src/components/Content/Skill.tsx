import ProgressBar from "@ramonak/react-progress-bar";
const Skill = () => {
  return (
    <>
      <div className="arlo_tm_section" id="skills">
        <div className="arlo_tm_skills_wrap">
          <div className="container">
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Frontend Skills</h4>
                </div>
                <li>Slicing and integrating responsive website templates</li>
                <li>Frameworks/Libraries: ReactJS, NextJS, Bootstrap 4</li>
                <li>Core Technologies: HTML, CSS, JavaScript</li>
              </div>
              <div className="rightbox">
                <div className="progress_bar_wrap_total">
                  <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                    <div className="arlo_tm_progress" data-color="#000">
                      <span>
                        <span className="label">HTML/CSS/JavaScript</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar
                          completed={80}
                          bgColor="#333"
                          height="8px"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>
                    <div className="arlo_tm_progress" data-color="#000">
                      <span>
                        <span className="label">ReactJS (NextJS)</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar
                          completed={80}
                          bgColor="#333"
                          height="8px"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>
                    <div className="arlo_tm_progress" data-color="#000">
                      <span>
                        <span className="label">Design UI/UX</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar
                          completed={80}
                          bgColor="#333"
                          height="8px"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="arlo_tm_skills_wrap">
          <div className="container">
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Backend Skills</h4>
                </div>
                <li>Programming Languages: JavaScript, Java</li>
                <li>Frameworks: ExpressJS, NestJS, Spring Boot</li>
                <li>Databases: MySQL, MongoDB</li>
                <li>Experienced in building and designing RESTful APIs</li>
              </div>
              <div className="rightbox">
                <div className="progress_bar_wrap_total">
                  <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                    <div className="arlo_tm_progress" data-color="#000">
                      <span>
                        <span className="label">ExpressJS/NestJS</span>
                        <span className="number">75%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar
                          completed={75}
                          bgColor="#333"
                          height="8px"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>
                    <div className="arlo_tm_progress" data-color="#000">
                      <span>
                        <span className="label">JavaSpring</span>
                        <span className="number">75%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar
                          completed={75}
                          bgColor="#333"
                          height="8px"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>
                    <div className="arlo_tm_progress" data-color="#000">
                      <span>
                        <span className="label">Database MySQL/MongoDB</span>
                        <span className="number">75%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar
                          completed={75}
                          bgColor="#333"
                          height="8px"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skill
