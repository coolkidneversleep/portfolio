import * as React from "react"
import Header from "../../components/header"
import setthi_img from "../../images/setthi_landing-2.png"
import "../../styles/prj.css"
import Footer from "../../components/footer"

const Setthi = () => {
  return (
    <div>
      <Header />
      <div className="back_container">
        <div>
          <a className="card_link" href="/">
            ← back
          </a>
        </div>
      </div>
      <div className="prj_div">
        <div className="prj_intro">
          <div>
            <div className="prj_name">Setthi</div>
            <div className="type" style={{ paddingTop: "0px" }}>
              mobile application
            </div>
            <div
              className="description"
              style={{ paddingTop: "30px", paddingRight: "40px" }}
            >
              It is an expense management application that can help you to
              manage your expenses and transactions in your daily life and also
              allow you to split your money by the purpose.
            </div>
            <div className="des_div">
              <div>
                <div className="type">project date</div>
                <div className="sub_description">2021</div>
              </div>
              <div>
                <div className="type">website</div>
                <div className="sub_description">
                  <a
                    className="website"
                    href="https://github.com/GGolfz/Setthi"
                  >
                    https://github.com/GGolfz/Setthi
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={setthi_img} className="eduroom_img"></img>
          </div>
        </div>

        <div className="more_container">
          <div className="more_div">
            <div className="more_col">
              <div className="topic">My Role</div>
              <div className="des">
                UI Design, Frontend Development, Testing application,<br></br>{" "}
                Get feedback from user
              </div>
            </div>
            <div className="more_col">
              <div className="topic">Techs&Tools</div>
              <div className="tech_div">
                <div>
                  <div className="box">Flutter</div>
                  <div className="box">NestJS</div>
                </div>
                <div>
                  <div className="box">MySQL</div>
                  <div className="box">Google Cloud Run</div>
                </div>
                <div>
                  <div className="box">Figma</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Setthi
