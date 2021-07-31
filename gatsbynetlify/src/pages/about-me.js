import * as React from 'react';
import Header from '../components/header';
import '../styles/aboutme.css';
import profile from '../images/profile2.jpg'
import Footer from '../components/footer';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const AboutMe = () => {
    return (
        <div>
            <Header />
            <div className="cont_div">
                <div className="grid_div">
                    <div className="col_div">
                        <div className="img_div" >
                            <div>
                                <img src={profile} alt="" height="350" width="320" className="image" ></img>
                            </div>
                        </div>
                        <div className="intro_div">
                            <div className="name">Kaewket Saelee</div>
                            <div className="intro">I am studying as an undergraduate in SIT at KMUTT. I have completed several projects such as web applications, mobile applications. I used to work on both frontend and backend. Also received awards in 2019-2020.<br></br> My strength is opening my mind and willing to learn new things to achieve targets and objectives.</div>
                        </div>
                    </div>
                    <div className="col_div">
                        <div className="title" style={{ color: "#fc659e" }}>
                            Education
                        </div>
                        <div className="ed_col" >
                            <div>
                                <div className="box_color"><p className="year">2016 - 2018</p></div>
                                <p className="school">Benjamarachalai School<br></br>gifted program<br></br><br></br>gpax : 3.80</p>
                            </div>
                            <div>
                                <div className="box_color" style={{ backgroundColor: "#FFE89A" }}><p className="year">2019 - Present</p></div>
                                <p className="school">King Mongkut's University of Technology Thonburi<br></br>
                                    studying bachelor's degree (3rd year), computer science,<br></br> school of information techonology<br></br>
                                    gpax : 3.72</p>
                            </div>
                        </div>
                    </div>
                    <div className="col_div">
                        <div className="title" style={{ color: "#33CCC0" }}>
                            Awards
                        </div>
                        <div className="award_col">
                            <div>
                                <p className="award" >First Runner-up Award ICT contest 12 </p>
                                <p className="date">IOT (smart nodeMCU)</p>
                                <div className="col_award">
                                    <p className="date">November 2019</p>
                                    <div>
                                        <a className="card_link" href="/award_1">Read more </a>
                                        <ChevronRightIcon className="icon_link"></ChevronRightIcon>
                                    </div>
                                </div>

                                <hr></hr>
                            </div>
                            <div>
                                <p className="award">First Runner-up Award ICT contest 13 </p>
                                <p className="date">AI (chatbot)</p>
                                <div className="col_award">
                                    <p className="date">November 2020</p>
                                    <div>
                                        <a className="card_link" href="/award_2">Read more </a>
                                        <ChevronRightIcon className="icon_link"></ChevronRightIcon>
                                    </div>
                                </div>
                                <hr></hr>
                            </div>
                        </div>
                    </div>
                    <div className="col_div">
                    <div className="title" style={{ color: "#FBC921" }}>
                        Techs &Tools
                    </div>
                    <div className="tool_div">
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
            </div>
            <Footer />
        </div>
    )
}

export default AboutMe