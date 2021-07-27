import * as React from 'react';
import { Container } from '@material-ui/core';
import eduroom from '../images/eduroom.png';
import vcare_img from '../images/vcare.png';
import setthi from '../images/setthi_2.png';
import famashi from '../images/famashi.jpg';
import planme from '../images/planme.png';
import '../styles/works.css';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const WorksPage = () => {
  //   let scaleAmount = 0.25;

  // function scrollZoom() {
  //   const images = document.querySelectorAll("[data-scroll-zoom]");
  //   let scrollPosY = 0;
  //   scaleAmount = scaleAmount / 100;

  //   const observerConfig = {
  //     rootMargin: "0% 0% 0% 0%",
  //     threshold: 0
  //   };

  //   // Create separate IntersectionObservers and scroll event listeners for each image so that we can individually apply the scale only if the image is visible
  //   images.forEach(image => {
  //     let isVisible = false;
  //     const observer = new IntersectionObserver((elements, self) => {
  //       elements.forEach(element => {
  //         isVisible = element.isIntersecting;
  //       });
  //     }, observerConfig);

  //     observer.observe(image);

  //     // Set initial image scale on page load
  //     image.style.transform = `scale(${1 + scaleAmount * percentageSeen(image)})`;

  //     // Only fires if IntersectionObserver is intersecting
  //     window.addEventListener("scroll", () => {
  //       if (isVisible) {
  //         scrollPosY = window.pageYOffset;
  //         image.style.transform = `scale(${1 +
  //           scaleAmount * percentageSeen(image)})`;
  //       }
  //     });
  //   });

  //   function percentageSeen(element) {
  //     const parent = element.parentNode;
  //     const viewportHeight = window.innerHeight;
  //     const scrollY = window.scrollY;
  //     const elPosY = parent.getBoundingClientRect().top + scrollY;
  //     const borderHeight = parseFloat(getComputedStyle(parent).getPropertyValue('border-bottom-width')) + parseFloat(getComputedStyle(element).getPropertyValue('border-top-width'));
  //     const elHeight = parent.offsetHeight + borderHeight;

  //     if (elPosY > scrollY + viewportHeight) {
  //       // If we haven't reached the image yet
  //       return 0;
  //     } else if (elPosY + elHeight < scrollY) {
  //       // If we've completely scrolled past the image
  //       return 100;
  //     } else {
  //       // When the image is in the viewport
  //       const distance = scrollY + viewportHeight - elPosY;
  //       let percentage = distance / ((viewportHeight + elHeight) / 100);
  //       percentage = Math.round(percentage);

  //       return percentage;
  //     }
  //   }
  // }

  // scrollZoom();


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
            <a className="card_famashi" style={{width:"600px"}} href="/eduroom">famashi
              <div class="go-corner" style={{backgroundColor:"#B28CFE"}} href="/eduroom">
                <div class="go-arrow">
                  →
                </div>
              </div>
            </a>
          </div>

          <img src={planme} alt="" width="600" height="450" style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px", objectFit: "cover" }}></img>
          <div style={{paddingTop:"450px"}}>
            <a className="card_planme" style={{width:"600px"}} href="/eduroom">famashi
              <div class="go-corner" style={{backgroundColor:"#99D9FF"}} href="/eduroom">
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