import * as React from 'react';
import Header from '../components/header';
import '../styles/aboutme.css';
import profile from '../images/profile2.jpg'
import Footer from '../components/footer';
import { Helmet } from 'react-helmet';
import ScrollReveal from 'scrollreveal';

const AboutMe = () => {
    ScrollReveal().reveal('.award_1', { 
        delay: 375,
        duration: 500,
        reset: true
    });
    ScrollReveal().reveal('.award_2', { 
        delay: 375,
        duration: 500,
        reset: true
    });
    return (
        <div>
            <Helmet>
                <script src="https://unpkg.com/scrollreveal"></script>
            </Helmet>
            <Header />
            <div style={{ display: "grid", gridTemplateRows: "auto" }}>
                <div style={{ display: "grid", gridTemplateColumns: "40% 60%" }}>
                    <div>
                        <div style={{paddingTop:"150px", paddingLeft:"150px"}}>
                        <img src={profile} alt="" height="350" width="320" className="image" ></img>  
                        </div>
                        <div className="title" style={{paddingTop:"410px",paddingLeft: "150px"}}>Education</div>
                        <div className="title" style={{paddingTop:"190px",paddingLeft: "150px"}}>Awards</div>
                        <div className="title" style={{paddingTop:"360px",paddingLeft: "150px"}}>Techs &Tools</div>

                    </div>
                    <div>
                        <div className="name" style={{paddingLeft:"5px"}}>Kaewket Saelee</div>
                        <div className="intro">I am studying as an undergraduate in SIT at KMUTT. I have completed several projects such as web applications, mobile applications. I used to work on both frontend and backend. Also received awards in 2019-2020.<br></br> My strength is opening my mind and willing to learn new things to achieve targets and objectives.</div>
                        <div style={{ display: "grid", gridTemplateColumns: "auto auto", paddingTop:"135px"}}>
                            <div>
                                <p className="year">2016 - 2018</p>
                                <p className="school">Benjamarachalai School<br></br>gifted program<br></br><br></br>gpax : 3.80</p>
                            </div>
                            <div>
                                <p className="year">2019 - Present</p>
                                <p className="school">King Mongkut's University of Technology Thonburi<br></br>
                                studying bachelor's degree (3rd year), computer science,<br></br> school of information techonology<br></br>
                                gpax : 3.70</p>
                            </div>
                        </div>
                        <div class="award_1">
                            <p className="award" style={{paddingTop:"75px"}}>First Runner-up Award ICT contest 12 </p>
                            <p className="date">IOT (smart nodeMCU)</p>
                            <p className="date">November 2019</p>
                            <hr></hr>
                        </div>
                        <div class="award_2">
                            <p className="award">First Runner-up Award ICT contest 13 </p>
                            <p className="date">AI (chatbot)</p>
                            <p className="date">November 2020</p>
                            <hr></hr>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns:"25% 25% 25% 25%", paddingTop:"40px", paddingBottom:"60px"}}>
                            <div>
                                <div className="box">NextJS</div>
                                <div className="box">ReactJS</div>
                                <div className="box">VueJS</div>
                                <div className="box">NodeJS</div>
                            </div>
                            <div>
                                <div className="box">HTML</div>
                                <div className="box">CSS</div>
                                <div className="box">GatsbyJS</div>
                                <div className="box">Figma</div>
                            </div>
                            <div>
                                <div className="box">Python</div>
                                <div className="box">Java</div>
                                <div className="box">JavaScript</div>
                                <div className="box">Flutter</div>
                            </div> 
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default AboutMe