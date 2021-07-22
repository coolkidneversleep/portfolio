import * as React from 'react';
import { Container } from '@material-ui/core';
import eduroom from '../images/eduroom.png';
import vcare from '../images/vcare.png';
import setthi from '../images/setthi_2.png';
import famashi from '../images/famashi.jpg';
import '../styles/works.css';
import { fontWeight } from '@material-ui/system';

const WorksPage = () => {
  let scaleAmount = 0.25;

function scrollZoom() {
  const images = document.querySelectorAll("[data-scroll-zoom]");
  let scrollPosY = 0;
  scaleAmount = scaleAmount / 100;

  const observerConfig = {
    rootMargin: "0% 0% 0% 0%",
    threshold: 0
  };

  // Create separate IntersectionObservers and scroll event listeners for each image so that we can individually apply the scale only if the image is visible
  images.forEach(image => {
    let isVisible = false;
    const observer = new IntersectionObserver((elements, self) => {
      elements.forEach(element => {
        isVisible = element.isIntersecting;
      });
    }, observerConfig);

    observer.observe(image);

    // Set initial image scale on page load
    image.style.transform = `scale(${1 + scaleAmount * percentageSeen(image)})`;

    // Only fires if IntersectionObserver is intersecting
    window.addEventListener("scroll", () => {
      if (isVisible) {
        scrollPosY = window.pageYOffset;
        image.style.transform = `scale(${1 +
          scaleAmount * percentageSeen(image)})`;
      }
    });
  });

  function percentageSeen(element) {
    const parent = element.parentNode;
    const viewportHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const elPosY = parent.getBoundingClientRect().top + scrollY;
    const borderHeight = parseFloat(getComputedStyle(parent).getPropertyValue('border-bottom-width')) + parseFloat(getComputedStyle(element).getPropertyValue('border-top-width'));
    const elHeight = parent.offsetHeight + borderHeight;

    if (elPosY > scrollY + viewportHeight) {
      // If we haven't reached the image yet
      return 0;
    } else if (elPosY + elHeight < scrollY) {
      // If we've completely scrolled past the image
      return 100;
    } else {
      // When the image is in the viewport
      const distance = scrollY + viewportHeight - elPosY;
      let percentage = distance / ((viewportHeight + elHeight) / 100);
      percentage = Math.round(percentage);

      return percentage;
    }
  }
}

scrollZoom();


    return (
      <Container maxWidth="lg" style={{backgroundColor:"#f8f8ff", paddingBottom:"500px"}}>
        <div className="container" style={{display:"grid", gridTemplateColumns:"45% 55%"}}>
            <div>
              <h2 className="heading">All of My works</h2>
              <div className="image">
                <img src={eduroom} data-scroll-zoom width="550" height="400" style={{ borderRadius:"20px",objectFit:"cover"}}></img>
                <div className="middle">
                  <div className="text" style={{fontFamily:"DM Sans", fontSize:"35px", paddingTop:"2px", paddingLeft:"350px"}}>eduroom</div>
                  <div className="text" style={{fontFamily:"DM Sans", fontSize:"20px", fontWeight:"300", paddingLeft:"350px"}}>web application</div>
                </div>
              </div>
              <div className="image" style={{paddingTop:"440px"}}>
                <img src={setthi} data-scroll-zoom width="550" height="400" style={{ borderRadius:"20px",objectFit:"cover"}}></img>
                <div className="middle">
                  <div className="text" style={{fontFamily:"DM Sans", fontSize:"35px", paddingTop:"330px", paddingLeft:"20px"}}>setthi</div>
                  <div className="text" style={{fontFamily:"DM Sans", fontSize:"20px", fontWeight:"300", paddingLeft:"20px"}}>mobile application</div>
                </div>
              </div>
            </div>
            <div>
              <div className="image" style={{paddingLeft:"150px", paddingTop:"50px"}}>
                <img src={vcare} data-scroll-zoom width="550" height="400" style={{borderRadius:"20px",objectFit:"cover"}}></img>
                <div className="middle">
                  <div className="text" style={{fontFamily:"DM Sans", fontSize:"35px", paddingTop:"330px", paddingLeft:"20px"}}>vcare</div>
                  <div className="text" style={{fontFamily:"DM Sans", fontSize:"20px", fontWeight:"300", paddingLeft:"20px"}}>web application</div>
                </div>
              </div>
              <div className="image" style={{paddingLeft:"150px", paddingTop:"100px"}}>
                <img src={famashi} data-scroll-zoom width="550" height="400" style={{borderRadius:"20px",objectFit:"cover"}}></img>
                <div className="middle">
                  <div className="text" style={{fontFamily:"DM Sans", fontSize:"35px", paddingTop:"10px", paddingLeft:"20px"}}>famashi</div>
                  <div className="text" style={{fontFamily:"DM Sans", fontSize:"20px", fontWeight:"300", paddingLeft:"20px"}}>mobile application</div>
                </div>
              </div>
            </div>
        </div>
      </Container>

    )
  }
export default WorksPage