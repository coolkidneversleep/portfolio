import * as React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import "../../styles/prj.css"
import image from "../../images/vcare-landing.png"

const Vcare = () => {
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
            <div className="prj_name">Vcare</div>
            <div className="type" style={{ paddingTop: "0px" }}>
              web application
            </div>
            <div
              className="description"
              style={{ paddingTop: "30px", paddingRight: "40px" }}
            >
              Vcare is a project that I created during end of semester of 2nd
              year. This website was born from the idea that Recently, various
              systems for booking vaccines have been created.<br></br>So I was
              interested and tried designing and building this website.
            </div>
            <div className="des_div">
              <div>
                <div className="type">project date</div>
                <div className="sub_description">2021</div>
              </div>
              <div>
                <div className="type">website</div>
                <div className="sub_description">under construction</div>
              </div>
            </div>
          </div>
          <div>
            <img src={image} className="eduroom_img"></img>
          </div>
        </div>

        <div className="more_container">
          <div className="more_div">
            <div className="more_col">
              <div className="topic">My Role</div>
              <div className="des">
                UI Design, Design system, Frontend Development,<br></br> Backend
                Development{" "}
              </div>
            </div>
            <div className="more_col">
              <div className="topic">Techs&Tools</div>
              <div className="tech_div">
                <div>
                  <div className="box">ReactJS</div>
                  <div className="box">NodeJS</div>
                </div>
                <div>
                  <div className="box">Figma</div>
                  <div className="box">Material UI</div>
                </div>
                <div>
                  <div className="box">MongoDB</div>
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

export default Vcare
