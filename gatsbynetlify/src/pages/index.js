import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import WorksPage from "./works"
import '../images/profile.jpg'
import '../styles/index.css'
import { useRef, useEffect } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const IndexPage = () => {
  gsap.set(".circle", { yPercent: -15 });
  gsap.set(".dotsBlue", { yPercent: 20 });
  gsap.to(".circle", {
    yPercent: 15,
    ease: "none",
    scrollTrigger: {
      trigger: ".clusterGreat",
      scrub: 1
    },
  });

  gsap.to(".dotsBlue", {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
      trigger: ".clusterGreat",
      scrub: 1
    },
  });

  gsap.to(".clusterGreat", {
    yPercent: -5,
    ease: "none",
    scrollTrigger: {
      trigger: ".clusterGreat",
      end: "bottom center",
      scrub: 1
    },
  });
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".great_txt"),
      {
        opacity: 1,
        y: -20
      },
      {
        opacity: 0,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".txt_block"),
          start: "top top",
          end: "bottom center",
          scrub: true
        }
      }
    );
    gsap.fromTo(
      element.querySelector(".name_txt"),
      {
        opacity: 1,
        y: -20
      },
      {
        opacity: 0,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".txt_block"),
          start: "top top",
          end: "bottom center",
          scrub: true
        }
      }
    );
    gsap.fromTo(
      element.querySelector(".role_txt"),
      {
        opacity: 1,
        y: -20
      },
      {
        opacity: 0,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".txt_block"),
          start: "top top",
          end: "bottom center",
          scrub: true
        }
      }
    );
  }, []);

  return (
    <div className="App" ref={ref}>
      <Header />
      <div style={{ display: "grid", gridTemplateRows: "auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "60% 40%" }}>
          <div className="txt_block">
            <h1 className="great_txt">hi there,</h1><br></br>
            <h1 className="name_txt">I'm kaewket </h1>
            <h2 className="role_txt">Computer Science Student, KMUTT</h2>
            <h3 className="txt"> I am studying as	an undergraduate in SIT at KMUTT. I like to create web applications that has good user-interface and user-experience. I always open my mind and willing to learn new things to achieve the goals.</h3>
          </div>
          <section class="cluster clusterGreat">
            <div class="circle clusterPieces"></div>
            <img class="dotsBlue clusterPieces" src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/dots_blue_494x434.svg" />
          </section>
        </div>

      </div>
      <WorksPage />
      {/* <img src="https://scontent.fbkk2-8.fna.fbcdn.net/v/t1.6435-9/101483980_3058963557524210_3918084869349652298_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=iRyX4NX5jCoAX9Gu2ze&_nc_ht=scontent.fbkk2-8.fna&oh=400adc2e0306aac2eb7eca8846d9ea0d&oe=60FD47D5"></img> */}
    </div>

  )
}

export default IndexPage
