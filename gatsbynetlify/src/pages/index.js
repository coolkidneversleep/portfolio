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
      <div className="landing">
          <div className="txt_block">
            <h1 className="great_txt">Hi there,</h1><br></br>
            <h1 className="name_txt">I'm kaewket </h1>
            <h2 className="role_txt">Computer Science Student, KMUTT</h2>
          </div>
      </div>
      <div>
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
