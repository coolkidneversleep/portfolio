import * as React from 'react';
import { Container } from '@material-ui/core';
import eduroom from '../images/eduroom.png';
import vcare_img from '../images/vcare.png';
import setthi from '../images/setthi_2.png';
import famashi from '../images/famashi.jpg';
import planme from '../images/planme.png';
import '../styles/works.css';


const WorksPage = () => {

  return (
    <div maxWidth="lg" style={{ backgroundColor: "#F4F7FB", paddingBottom: "160px", padding: "100px", paddingTop: "130px" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "45% 55%" }}>
        <div>
          <div data-sal="slide-left" data-sal-duration="2000" data-sal-delay="2" data-sal-easing="easeOutBreak"><h2 className="heading">All of My works</h2></div>
          
          <img src={eduroom} alt="" width="600" height="450" style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px", objectFit: "cover" }}></img>
          <div style={{paddingTop:"450px", paddingBottom:"70px"}}>
            <a className="card1" style={{width:"600px"}} href="/eduroom">eduroom
              <div class="go-corner" href="/eduroom">
                <div class="go-arrow">
                  →
                </div>
              </div>
            </a>
          </div>
          
          <img src={setthi} alt=""  width="600" height="450" style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px", objectFit: "cover" }}></img>
          <div style={{paddingTop:"450px"}}>
            <a className="card_setthi" style={{width:"600px"}} href="/setthi">setthi
            <div class="go-corner" style={{backgroundColor:"#FFD344"}} href="/setthi">
                <div class="go-arrow">
                  →
                </div>
              </div>
            </a>
          </div>
            
        </div>
        <div style={{paddingLeft:"100px"}}>

          <img src={vcare_img} alt=""  width="600" height="450" style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px", objectFit: "cover" }}></img>
          <div style={{paddingTop:"450px", paddingBottom:"70px"}}>
            <a className="card_vcare" style={{width:"600px"}} href="/vcare">vcare
            <div class="go-corner" style={{backgroundColor:"#5984F4"}} href="/vcare">
                <div class="go-arrow">
                  →
                </div>
              </div>
            </a>
          </div>

          <img src={famashi} alt="" width="600" height="450" style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px", objectFit: "cover" }}></img>
          <div style={{paddingTop:"450px", paddingBottom:"70px"}}>
            <a className="card_famashi" style={{width:"600px"}} href="/famashi">famashi
              <div class="go-corner" style={{backgroundColor:"#B28CFE"}} href="/famashi">
                <div class="go-arrow">
                  →
                </div>
              </div>
            </a>
          </div>

          <img src={planme} alt="" width="600" height="450" style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px", objectFit: "cover" }}></img>
          <div style={{paddingTop:"450px"}}>
            <a className="card_planme" style={{width:"600px"}} href="/planme">planme
              <div class="go-corner" style={{backgroundColor:"#99D9FF"}} href="/planme">
                <div class="go-arrow">
                  →
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>
    </div>

  )
}
export default WorksPage