import * as React from "react"
import Header from "../components/header"
import WorksPage from "./works"
import AboutIntro from "./about_int"
import Footer from '../components/footer'
import '../images/profile.jpg'
import '../styles/index.css'




const IndexPage = () => {
  return (
    <div className="App" >
      <Header />
      <div style={{ display: "grid", gridTemplateRows: "auto" }} className="landing">
        <div style={{ display: "grid", gridTemplateColumns: "60% 40%"}}>
          <div className="txt_block">
            <h1 className="great_txt">Hi there,</h1><br></br>
            <h1 className="name_txt">I'm kaewket </h1>
            <h2 className="role_txt">Computer Science Student, KMUTT</h2>
          </div>
          {/* <section  class="cluster clusterGreat">
            <div class="circle clusterPieces"></div>
            <div><img  class="dotsBlue clusterPieces" src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/dots_blue_494x434.svg" alt="blue dot"/></div>
            
            
          </section> */}
        </div>

      </div>
      <div id="#works">
      <WorksPage/>
      </div>
      <div data-sal="slide-up" data-sal-duration="2000" data-sal-delay="2" data-sal-easing="easeOutBack">
        <AboutIntro/> 
      </div>
      <Footer />
    </div>

  )
}

export default IndexPage
