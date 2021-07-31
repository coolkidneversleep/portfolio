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
    <div maxWidth="lg" className="all_container">
      <div className="container">
        <div>
          <div data-sal="slide-left" data-sal-duration="2000" data-sal-delay="2" data-sal-easing="easeOutBreak">
            <h2 className="heading">All of My works</h2>
          </div>
          
          <img src={eduroom} alt="" className="img_card"></img>
          <div className="name_card">
            <a className="card1" style={{ maxWidth:"80vw"}} href="/eduroom">eduroom
              <div class="go-corner" href="/eduroom">
                <div class="go-arrow">
                  →
                </div>
              </div>
            </a>
          </div>
          
          <img src={setthi} alt=""  className="img_card"></img>
          <div className="name_card">
            <a className="card_setthi" style={{ maxWidth:"80vw"}} href="/setthi">setthi
            <div class="go-corner" style={{backgroundColor:"#FFD344"}} href="/setthi">
                <div class="go-arrow">
                  →
                </div>
              </div>
            </a>
          </div>
            
        </div>
        <div className="row_card">

          <img src={vcare_img} alt=""  className="img_card"></img>
          <div className="name_card">
            <a className="card_vcare" style={{ maxWidth:"80vw"}} href="/vcare">vcare
            <div class="go-corner" style={{backgroundColor:"#5984F4"}} href="/vcare">
                <div class="go-arrow">
                  →
                </div>
              </div>
            </a>
          </div>

          <img src={famashi} alt="" className="img_card"></img>
          <div className="name_card">
            <a className="card_famashi" style={{ maxWidth:"80vw"}} href="/famashi">famashi
              <div class="go-corner" style={{backgroundColor:"#B28CFE"}} href="/famashi">
                <div class="go-arrow">
                  →
                </div>
              </div>
            </a>
          </div>

          <img src={planme} alt="" className="img_card"></img>
          <div className="name_card">
            <a className="card_planme" style={{ maxWidth:"80vw"}} href="/planme">planme
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