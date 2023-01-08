import * as React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import famashi_img from "../../images/famashi_landing.jpg"
import "../../styles/prj.css"

const Famashi = () => {
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
            <div className="prj_name">Famashi</div>
            <div className="type" style={{ paddingTop: "0px" }}>
              mobile application
            </div>
            <div
              className="description"
              style={{ paddingTop: "30px", paddingRight: "40px" }}
            >
              The older person forgets to take medicine, can’t memorize the
              medicine's appearance, can’t track the remaining amount of
              medicine, and forgets their own allergy medicine. So, this mdicine
              taking reminder application, famashi, can solve this problem.
            </div>
            <div className="des_div">
              <div>
                <div className="type">project date</div>
                <div className="sub_description">2021</div>
              </div>
              <div>
                <div className="type">website</div>
                <div
                  className="sub_description"
                  style={{ paddingRight: "10vw" }}
                >
                  <a
                    className="website"
                    href="https://github.com/GGolfz/Famashi-App"
                  >
                    https://github.com/GGolfz/Famashi-App
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div style={{ paddingLeft: "9px", paddingTop: "40px" }}>
            <img src={famashi_img} className="eduroom_img"></img>
          </div>
        </div>
      </div>
      <div className="more_container">
        <div className="more_div">
          <div className="more_col">
            <div className="topic">My Role</div>
            <div className="des">
              Frontend Development, Backend Development{" "}
            </div>
          </div>
          <div className="more_col">
            <div className="topic">Techs&Tools</div>
            <div className="tech_div">
              <div>
                <div className="box">Flutter</div>
              </div>
              <div>
                <div className="box">Ruby on Rails</div>
              </div>
              <div>
                <div className="box">Figma</div>
              </div>
              <div>
                <div className="box">SQLite</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Famashi
