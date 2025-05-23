import avt from '@/assets/img/about/avt.jpg'
import myCV from '@/assets/CV_Lê_Phan_Hải_Long.pdf'
import { TypeAnimation } from 'react-type-animation'
const About = () => {
  return (
    <>
      <div className="arlo_tm_section relative" id="about">
        <div className="arlo_tm_about_wrapper_all">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>About Me</h3>
              <span>Main informations about me</span>
            </div>
            <div className="arlo_tm_about_wrap">
              <div className="author_wrap">
                <div className="leftbox">
                  <div className="about_image_wrap parallax" data-relative-input="true">
                    <div className="image layer" data-depth="0.1">
                      <img src="img/about/550x640.jpg" alt="550x640" />
                      <div className="inner" data-img-url={avt}></div>
                    </div>
                    <div className="border layer" data-depth="0.2">
                      <img src="img/about/550x640.jpg" alt="550x640" />
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
                    <p>Xin chào, mình là <strong>Long</strong>. Là một lập trình viên website, code toàn bug, nhưng mình vẫn rất thích code _._</p>
                  </div>
                  <div className="definition">
                    <p>Hiện tại mình đang sinh viên năm 2. Đang học tại trường đại học công nghệ thông tin và truyền thông Việt-Hàn. Mình chọn ngành này vì tưởng IT lương nghìn đô nhưng hơi hối hận ~.~</p>
                  </div>
                  <div className="about_short_contact_wrap">
                    <ul>
                      <li>
                        <span><label>Ngày sinh:</label> 17.02.2005</span>
                      </li>
                      <li>
                        <span><label>Giới tính:</label> Nam</span>
                      </li>
                      <li>
                        <span><label>Trường:</label> Đại học Việt-Hàn</span>
                      </li>
                      <li>
                        <span><label>Chuyên ngành:</label> Kỹ sư Công Nghệ Phần Mềm</span>
                      </li>
                      <li>
                        <span><label>GPA:</label> 3.31</span>
                      </li>
                      <li>
                        <span><label>Địa chỉ:</label> Thành phố Đà Nẵng</span>
                      </li>
                      <li>
                        <span><label>GitHub:</label> <a target='_blank' href="https://github.com/longlephanhai">longlephanhai</a></span>
                      </li>
                      <li>
                        <span><label>Facebook:</label> Lê Phan Hải Long</span>
                      </li>
                      <li>
                        <span><label>Mail:</label> <a href="mailto:longlph.23it@gmail.com">longlph.23it&#64;gmail.com</a></span>
                      </li>
                      <li>
                        <span><label>Phone:</label> <a href="#">+86 077 xxx xxx</a></span>
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
