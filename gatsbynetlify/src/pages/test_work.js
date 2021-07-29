import * as React from 'react';
import eduroom from '../images/eduroom.png';
import vcare_img from '../images/vcare.png';
import setthi from '../images/setthi_2.png';
import famashi from '../images/famashi.jpg';
import planme from '../images/planme.png';
import '../styles/works.css';

const TestWorksPage = () => {

    return (
      <div style={{backgroundColor:"#F4F7FB", paddingBottom:"150px", padding:"100px", paddingTop:"120px"}}>
        <div className="container" style={{display:"grid", gridTemplateColumns:"45% 55%"}}>
            <div>
              <div data-sal="slide-left" data-sal-duration="2000" data-sal-delay="5" data-sal-easing="easeOutBack"><h2 className="heading">All of My works</h2></div>
              <div className="image" >
                <a href="/eduroom" className="link">
                <img src={eduroom} alt="" style={{ borderRadius:"20px"}}></img>
                <div className="middle">
                  <div className="text" style={{fontFamily:"DM Sans", fontSize:"35px", paddingTop:"2px", paddingLeft:"350px"}}>eduroom</div>
                  <div className="text" style={{fontFamily:"DM Sans", fontSize:"20px", fontWeight:"300", paddingLeft:"350px"}}>web application</div>
                </div>
                </a>
              </div>
              <div className="image" style={{paddingTop:"440px"}}>
                <a href="/setthi" className="link">
                <img src={setthi} alt="" style={{ borderRadius:"20px",objectFit:"cover"}}></img>
                <div className="middle">
                  <div className="text" style={{fontFamily:"DM Sans", fontSize:"35px", paddingTop:"310px", paddingLeft:"20px"}}>setthi</div>
                  <div className="text" style={{fontFamily:"DM Sans", fontSize:"20px", fontWeight:"300", paddingLeft:"20px"}}>mobile application</div>
                </div>
                </a>
              </div>
            </div>
            <div>
              <div className="image" style={{paddingLeft:"150px", paddingTop:"50px"}}>
                <a href="/vcare" className="link">
                <img src={vcare_img} alt="" style={{borderRadius:"20px",objectFit:"cover"}}></img>
                <div className="middle">
                  <div className="text" style={{fontFamily:"DM Sans", fontSize:"35px", paddingTop:"310px", paddingLeft:"20px"}}>vcare</div>
                  <div className="text" style={{fontFamily:"DM Sans", fontSize:"20px", fontWeight:"300", paddingLeft:"20px"}}>web application</div>
                </div>
                </a>
              </div>
              <div className="image" style={{paddingLeft:"150px", paddingTop:"100px"}}>
                <a href="/famashi" className="link">
                <img src={famashi} alt="" style={{borderRadius:"20px",objectFit:"cover"}}></img>
                <div className="middle">
                  <div className="text" style={{fontFamily:"DM Sans", fontSize:"35px", paddingTop:"10px", paddingLeft:"20px"}}>famashi</div>
                  <div className="text" style={{fontFamily:"DM Sans", fontSize:"20px", fontWeight:"300", paddingLeft:"20px"}}>mobile application</div>
                </div>
                </a>
              </div>
              <div className="image" style={{paddingLeft:"130px", paddingTop:"450px"}}>
                <a href="/planme" className="link">
                  <img src={planme} alt="" style={{borderRadius:"20px",objectFit:"cover"}}></img>
                  <div className="middle">
                    <div className="text" style={{fontFamily:"DM Sans", fontSize:"35px", paddingTop:"300px", paddingLeft:"40px"}}>planme</div>
                    <div className="text" style={{fontFamily:"DM Sans", fontSize:"20px", fontWeight:"300", paddingLeft:"40px"}}>mobile application</div>
                  </div>
                </a>
              </div>
            </div>
        </div>
      </div>

    )
  }
export default TestWorksPage