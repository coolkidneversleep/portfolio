import * as React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/prj.css';
import image from '../images/vcare-landing.png';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Vcare = () => {
    return(
        <div>
            <Header />
            <div style={{ display: "grid", gridTemplateRows: "auto", paddingTop:"120px",paddingLeft:"70px"}} >
                <div>
                    <ArrowBackIosIcon className="icon_link"/>
                    <a className="card_link" href="/">back</a>
                </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"40% 60%"}}>
                    <div>
                        <div className="prj_name" style={{paddingTop:'50px'}}>Vcare</div>
                        <div className="type" style={{paddingTop:"0px"}}>web application</div>
                        <div className="description" style={{paddingTop:"30px", paddingRight:"40px"}}>
                            Vcare is a project that I created during end of semester of 2nd year.
                            This website was born from the idea that Recently, various systems for booking vaccines have been created.<br></br>So I was interested and tried designing and building this website.
                        </div>
                        <div style={{display:"grid",gridTemplateColumns:"auto auto"}}>
                            <div>
                                <div className="type" style={{paddingTop:"50px"}} >project date</div>
                                <div className="description" style={{paddingTop:"3px"}} >2021</div>
                            </div>
                            <div>
                                <div className="type" style={{paddingTop:"50px", paddingLeft:"40px"}} >website</div>
                                <div className="description" style={{paddingTop:"3px", paddingLeft:"40px"}} >under construction</div>
                            </div>
                        </div>
                    </div>
                    <div data-sal="slide-left" data-sal-duration="2000" data-sal-delay="2" data-sal-easing="easeOutBreak" style={{paddingLeft:"3px", paddingTop:"80px"}}>
                        <img src={image} height="470px" width="860px"></img>
                    </div>
            </div>
            <div style={{paddingTop:'70px',paddingLeft:"20px"}}>
                    <div style={{display:"grid",gridTemplateColumns:"40% 60%"}}>
                        <div>
                            <div className="topic">My Role</div>
                            <div className="topic" style={{paddingTop:"90px"}}>Techs&Tools</div>
                        </div>
                        <div>
                            <div className="des" style={{paddingLeft:"5px"}}>UI Design, Design system, Frontend Development,<br></br> Backend Development </div>
                            <div style={{ display: "grid", gridTemplateColumns:"15% 15% 15%", paddingTop:"20px", paddingBottom:"60px"}}>
                            <div>
                                <div className="box">ReactJS</div>
                                <div className="box">NodeJS</div>
                            </div>
                            <div>
                                <div className="box">Figma</div>
                                <div className="box">Material UI</div>
                            </div>
                            <div>
                                <div className="box">MongoDB</div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            
        </div>
    )
}

export default Vcare