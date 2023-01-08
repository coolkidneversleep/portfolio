import * as React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import "../../styles/prj.css"
import planme_img from "../../images/planme.png"

const Planme = () => {
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
            <div className="prj_name">Plan me</div>
            <div className="type" style={{ paddingTop: "0px" }}>
              mobile application
            </div>
            <div
              className="description"
              style={{ paddingTop: "30px", paddingRight: "40px" }}
            >
              Plan me is a Cross Platform Application developed by Flutter that
              can help users manage their daily schedules. It has many features
              such as timer, to-do list, achievement, etc.
            </div>
            <div className="des_div">
              <div>
                <div className="type">project date</div>
                <div className="sub_description">2021</div>
              </div>
              <div>
                <div className="type">website</div>
                <div className="description">
                  <a
                    className="website"
                    href="https://github.com/ggolfz/planme"
                  >
                    https://github.com/ggolfz/planme
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div style={{ paddingLeft: "9px", paddingTop: "40px" }}>
            <img src={planme_img} className="eduroom_img"></img>
          </div>
        </div>
      </div>
      <div className="more_container">
        <div className="more_div">
          <div className="more_col">
            <div className="topic">My Role</div>
            <div className="des">
              UI Design, Design system, Frontend Development
            </div>
          </div>
          <div className="more_col">
            <div className="topic">Techs&Tools</div>
            <div className="tech_div">
              <div>
                <div className="box">Flutter</div>
              </div>
              <div>
                <div className="box">Flask</div>
              </div>
              <div>
                <div className="box">Figma</div>
              </div>
              <div>
                <div className="box">PostgreSQL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Planme
