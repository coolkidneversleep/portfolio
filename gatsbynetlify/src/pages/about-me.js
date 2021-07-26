import * as React from 'react';
import Header from '../components/header';
import '../styles/aboutme.css';
import profile from '../images/profile2.jpg'
import Footer from '../components/footer';
import { Helmet } from 'react-helmet';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const AboutMe = () => {
    
    return (
        <div>
            <Helmet>
                <script src="https://unpkg.com/scrollreveal"></script>
            </Helmet>
            <Header />
            <div style={{ display: "grid", gridTemplateRows: "auto" }}>
                <div style={{ display: "grid", gridTemplateColumns: "40% 60%" }}>
                    <div>
                        <div data-sal="slide-up" data-sal-duration="2000" data-sal-delay="2" data-sal-easing="easeOutBreak" style={{paddingTop:"150px", paddingLeft:"150px"}}>
                        <img src={profile} alt="" height="350" width="320" className="image" ></img>  
                        </div>
                        <div data-sal="slide-right" data-sal-duration="2000" data-sal-delay="5" data-sal-easing="easeOutBreak" className="title" style={{paddingTop:"410px",paddingLeft: "150px"}}>Education</div>
                        <div data-sal="slide-right" data-sal-duration="2000" data-sal-delay="2" data-sal-easing="easeOutBreak"className="title" style={{paddingTop:"190px",paddingLeft: "150px"}}>Awards</div>
                        <div data-sal="slide-right" data-sal-duration="2000" data-sal-delay="2" data-sal-easing="easeOutBreak"className="title" style={{paddingTop:"360px",paddingLeft: "150px"}}>Techs &Tools</div>

                    </div>
                    <div>
                        <div data-sal="slide-up" data-sal-duration="2000" data-sal-delay="2" data-sal-easing="easeOutBreak" className="name" style={{paddingLeft:"5px", color:"#6C5CE7"}}>Kaewket Saelee</div>
                        <div data-sal="slide-up" data-sal-duration="2000" data-sal-delay="2" data-sal-easing="easeOutBreak"className="intro">I am studying as an undergraduate in SIT at KMUTT. I have completed several projects such as web applications, mobile applications. I used to work on both frontend and backend. Also received awards in 2019-2020.<br></br> My strength is opening my mind and willing to learn new things to achieve targets and objectives.</div>
                        <div data-sal="slide-up" data-sal-duration="2000" data-sal-delay="2" data-sal-easing="easeOutBreak" style={{ display: "grid", gridTemplateColumns: "auto auto", paddingTop:"135px"}}>
                            <div>
                                <p className="year">2016 - 2018</p>
                                <p className="school">Benjamarachalai School<br></br>gifted program<br></br><br></br>gpax : 3.80</p>
                            </div>
                            <div>
                                <p className="year">2019 - Present</p>
                                <p className="school">King Mongkut's University of Technology Thonburi<br></br>
                                studying bachelor's degree (3rd year), computer science,<br></br> school of information techonology<br></br>
                                gpax : 3.72</p>
                            </div>
                        </div>
                        <div data-sal="slide-left" data-sal-duration="2000" data-sal-delay="2" data-sal-easing="easeOutBreak">
                            
                                <p className="award" style={{paddingTop:"75px"}}>First Runner-up Award ICT contest 12 </p>
                                <p className="date">IOT (smart nodeMCU)</p>
                                <div style={{display:"grid", gridTemplateColumns:"75% 25%"}}>
                                    <p className="date">November 2019</p>
                                    <div>
                                        <a className="card_link" href="/award_1">Read more </a>
                                        <ChevronRightIcon className="icon_link"></ChevronRightIcon>
                                    </div>
                                </div>
                                
                                <hr></hr>
                        </div>
                        <div data-sal="slide-left" data-sal-duration="2000" data-sal-delay="2" data-sal-easing="easeOutBreak">
                            <p className="award">First Runner-up Award ICT contest 13 </p>
                            <p className="date">AI (chatbot)</p>
                            <div style={{display:"grid", gridTemplateColumns:"75% 25%"}}>
                                <p className="date">November 2020</p>
                                <div>
                                    <a className="card_link" href="/award_2">Read more </a>
                                        <ChevronRightIcon className="icon_link"></ChevronRightIcon>
                                    </div>
                                </div>
                            <hr></hr>
                        </div>
                        <div data-sal="slide-left" data-sal-duration="2000" data-sal-delay="2" data-sal-easing="easeOutBreak" style={{ display: "grid", gridTemplateColumns:"25% 25% 25% 25%", paddingTop:"40px", paddingBottom:"60px"}}>
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