import * as React from "react"
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
            <h1 className="great_txt">Hi there,</h1><br></br>
            <h1 className="name_txt">I'm kaewket </h1>
            <h2 className="role_txt">Computer Science Student, KMUTT</h2>
            <h3 className="txt"> I am studying as	an undergraduate in SIT at KMUTT. I like to create web applications that has good user-interface and user-experience. I always open my mind and willing to learn new things to achieve the goals.</h3>
          </div>
          <section class="cluster clusterGreat">
            <div class="circle clusterPieces"></div>
            <img class="dotsBlue clusterPieces" src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/dots_blue_494x434.svg" alt="blue dot"/>
          </section>
        </div>

      </div>
      <WorksPage />
    </div>

  )
}

export default IndexPage
