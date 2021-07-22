import * as React from 'react';
import { Container } from '@material-ui/core';
import eduroom from '../images/eduroom.png';
import { gsap } from "gsap";
import { ScrollMagic } from "gsap/ScrollTrigger";
import '../styles/works.css'
import { TimelineMax } from 'gsap/gsap-core';

const WorksPage = () => {
  var controller = new ScrollMagic.Controller();

  $(".wrapper").each(function() {
    var tl = new TimelineMax();
    var cov = $(this).find(".cover");
    var img = $(this).find("img");

    tl.from(cov, 1, { scaleX: 0, transformOrigin: "left" });
    tl.to(cov, 1, { scaleX: 0, transformOrigin: "right" }, "reveal");
    tl.from(img, 1, { opacity: 0 }, "reveal");

    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.7
    })
      .setTween(tl)
      .addIndicators()
      .addTo(controller);
  });
    return (
      <Container maxWidth="lg" style={{backgroundColor:"#f8f8ff"}}>
        <h2 className="heading">All of <br></br>My works</h2>
        <div className="wrapper">
          <img src={eduroom} width="600" height="450"></img>
          <div className="cover"></div>
        </div>
      </Container>

    )
  }
export default WorksPage