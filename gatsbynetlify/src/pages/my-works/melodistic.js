import * as React from "react"
import Header from "../../components/header"
import melodistic_landing from "../../images/Cover-2.png"
import "../../styles/prj.css"
import Footer from "../../components/footer"

const Melodistic = () => {
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
            <div className="prj_name">Melodistic</div>
            <div className="type" style={{ paddingTop: "0px" }}>
              music mood classification for a workout program application
            </div>
            <div
              className="description"
              style={{ paddingTop: "30px", paddingRight: "40px" }}
            >
              is a mobile application for the user to generate new music tracks
              via a Melodistic combiner system and process the music via a
              Melodistic processor system.{" "}
            </div>
            <div className="des_div">
              <div>
                <div className="type">project date</div>
                <div className="sub_description">2022</div>
              </div>
              <div>
                <div className="type">website</div>
                <div className="sub_description">
                  <a
                    className="website"
                    href="https://github.com/melodistic/Melodistic-App"
                  >
                    https://github.com/melodistic/Melodistic-App
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div style={{ paddingLeft: "75px", paddingTop: "40px" }}>
            <img src={melodistic_landing} className="eduroom_img"></img>
          </div>
        </div>

        <div className="more_container">
          <div className="more_div">
            <div className="more_col">
              <div className="topic">My Role</div>
              <div className="des">
                Frontend Development, Testing application
              </div>
            </div>
            <div className="more_col">
              <div className="topic">Techs&Tools</div>
              <div className="tech_div">
                <div>
                  <div className="box">Flutter</div>
                  <div className="box">NestJS</div>
                  <div className="box">Flask</div>
                </div>
                <div>
                  <div className="box">postgres</div>
                  <div className="box">redis</div>
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

export default Melodistic
