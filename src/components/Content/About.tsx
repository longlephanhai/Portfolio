import avt from '@/assets/img/about/avt.jpg'
import myCV from '@/assets/img/LePhanHaiLong_CV.pdf'
import { TypeAnimation } from 'react-type-animation'
import { useEffect, useRef } from 'react'
import Parallax from 'parallax-js'
import logo550 from '@/assets/img/about/550x640.jpg'
const About = () => {
  const sceneEl = useRef(null)
  useEffect(() => {
    if (sceneEl && sceneEl.current) {
      const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        hoverOnly: true,
      })
      parallaxInstance.enable()
      return () => parallaxInstance.disable()
    }
  }, [])
  return (
    <>
      <div className="arlo_tm_section relative" id="about" style={{ paddingTop: '100px' }}>
        <div className="arlo_tm_about_wrapper_all">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>About Me</h3>
              <span>Main informations about me</span>
            </div>
            <div className="arlo_tm_about_wrap">
              <div className="author_wrap">
                <div className="leftbox">
                  <div ref={sceneEl} className="about_image_wrap parallax" data-relative-input="true">
                    <div className="image layer" data-depth="0.1">
                      <img src={logo550} alt="550x640" />
                      <div className="inner" data-img-url={avt}
                        style={{ backgroundImage: `url(${avt})` }}
                      ></div>
                    </div>
                    <div className="border layer" data-depth="0.2">
                      <img src={logo550} alt="550x640" />
                      <div className="inner"></div>
                    </div>
                  </div>

                </div>
                <div className="rightbox">
                  <div className="arlo_tm_mini_title_holder">
                    <h4>Hi there...I'm a
                      &nbsp;
                      <TypeAnimation
                        sequence={[
                          // Same substring at the start will only be typed out once, initially
                          'Freelancer',
                          2000, // wait 1s before replacing "Mice" with "Hamsters"
                          'UI/UX Designer',
                          2000,
                          'Web Developer',
                          2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        // style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                      />
                      <span className="arlo_tm_animation_text_word"></span></h4>
                  </div>
                  <div className="definition">
                    <p>Hi, I'm <strong>Long</strong>. A second-year student majoring in Information Technology at the Vietnam-Korea University of Information and Communication Technology</p>
                  </div>
                  <div className="definition">
                    <p>I'm currently focusing on web development and constantly striving to improve my skills. I was initially drawn to the IT field by its promising career opportunities and high earning potential. Although the journey has turned out to be more challenging than expected, I've come to truly enjoy coding and solving problems through technology.</p>
                  </div>
                  <div className="definition">
                    <p>I'm always eager to learn, improve, and become a developer who not only writes cleaner code but also builds products that matter.</p>
                  </div>
                  <div className="about_short_contact_wrap">
                    <ul>
                      <li>
                        <span><label>Full Name:</label>Lê Phan Hải Long</span>
                      </li>
                      <li>
                        <span><label>Date of Birth:</label>February 17, 2005</span>
                      </li>
                      <li>
                        <span><label>University:</label>Vietnam - Korea University of Information and Communication Technology</span>
                      </li>
                      <li>
                        <span><label>Major:</label>Software Engineering</span>
                      </li>
                      <li>
                        <span><label>GPA:</label>3.31</span>
                      </li>
                      <li>
                        <span><label>Location:</label>Da Nang City, Vietnam</span>
                      </li>
                      <li>
                        <span><label>GitHub:</label><a target='_blank' href="https://github.com/longlephanhai">longlephanhai</a></span>
                      </li>
                      <li>
                        <span><label>Facebook:</label><a target='_blank' href="https://www.facebook.com/le.phan.hai.long">Lê Phan Hải Long</a></span>
                      </li>
                      <li>
                        <span><label>Mail:</label><a href="mailto:longlph.23it@gmail.com">longlph.23it&#64;gmail.com</a></span>
                      </li>
                      <li>
                        <span><label>Phone:</label>+84 077 519 548</span>
                      </li>
                      <li>
                        <span><label>Linked:</label><a href="https://www.linkedin.com/in/hai-long-le-phan-9292b6329/">hai long le phan</a></span>
                      </li>
                    </ul>
                  </div>
                  <div className="buttons_wrap">
                    <ul>
                      <li>
                        <a href={myCV} download><span>Download CV</span></a>
                      </li>
                    </ul>
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

export default About
