const Contact = () => {
  return (
    <>
      <div className="arlo_tm_section" id="contact">
        <div className="container">
          <div className="arlo_tm_title_holder contact">
            <h3>Contact Me</h3>
            <span>Get in touch with me</span>
          </div>
        </div>
        <div className="arlo_tm_footer_contact_wrapper_all">
          <div className="arlo_tm_contact_wrap_all">
            <div className="container">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder contact">
                  <h4>Contact Information</h4>
                </div>
                <div className="short_info_wrap">
                  <ul>
                    <li>
                      <p><label>Email:</label><span><a href="mailto:longlph.23it@gmail.com">longlph.23it@gmail.com</a></span></p>
                    </li>
                    <li>
                      <p><label>Phone:</label><span>+84 077 519 548</span></p>
                    </li>
                    <li>
                      <p><label>Github:</label><span><a href="https://github.com/longlephanhai" target="_blank">https://github.com/longlephanhai</a></span></p>
                    </li>
                    <li>
                      <p><label>FaceBook:</label><span><a href="https://www.facebook.com/le.phan.hai.long" target="_blank">Lê Phan Hải Long</a></span></p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rightbox">
                <div className="arlo_tm_contact_wrap">
                  <div className="main_input_wrap">
                    <div style={{ height: 200 }}></div>
                    {/* <form action="http://frenify.com/" method="post" className="contact_form" id="contact_form">
                      <div className="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
                      <div className="empty_notice"><span>Please Fill Required Fields</span></div>
                      <div className="wrap">
                        <input id="name" type="text" placeholder="Your Name" />
                      </div>
                      <div className="wrap">
                        <input id="email" type="text" placeholder="Your Email" />
                      </div>
                      <div className="wrap">
                        <textarea id="message" placeholder="Your Message"></textarea>
                      </div>
                      <div className="arlo_tm_button">
                        <a id="send_message" href="#"><span>Send Message</span></a>
                      </div>
                    </form> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="arlo_tm_footer_wrap">
            <div className="container">
              <p>&copy; Copyright 2025 by Le Phan Hai Long. All Rights are Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
