import * as React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/prj.css'
import planme_img from '../images/planme.png'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Planme = () => {
    return(
        <div>
            <Header />
            <div style={{ display: "grid", gridTemplateRows: "auto", paddingTop:"100px",paddingLeft:"70px"}} >
                <div>
                    <ArrowBackIosIcon className="icon_link"/>
                    <a className="card_link" href="/">back</a>
                </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"40% 60%"}}>
                    <div>
                        <div className="prj_name" style={{paddingTop:'60px'}}>Plan me</div>
                        <div className="type" style={{paddingTop:"0px"}}>mobile application</div>
                        <div className="description" style={{paddingTop:"30px", paddingRight:"40px"}}>
                        Plan me is a Cross Platform Application developed by Flutter that can help users manage their daily schedules.
                        It has many features such as timer, to-do list, achievement, etc.                       
                        </div>
                        <div style={{display:"grid",gridTemplateColumns:"auto auto"}}>
                            <div>
                                <div className="type" style={{paddingTop:"50px"}} >project date</div>
                                <div className="description" style={{paddingTop:"20px"}} >2021</div>
                            </div>
                            <div style={{paddingLeft:"0px"}}>
                                <div className="type" style={{paddingTop:"50px", paddingLeft:"40px", paddingBottom:"0px"}} >website</div>
                                <a style={{color:"#2C2E43",paddingTop:"0px", paddingLeft:"50px"}} href="https://github.com/ggolfz/planme"><div className="description" style={{paddingTop:"0px", paddingLeft:"40px", fontSize:"18px"}} >https://github.com/ggolfz/planme</div></a>
                            </div>
                        </div>
                    </div>
                    <div data-sal="slide-left" data-sal-duration="2000" data-sal-delay="2" data-sal-easing="easeOutBreak"  style={{paddingLeft:"9px", paddingTop:"40px"}}>
                        <img src={planme_img} height="600px" width="860px"></img>
                    </div>
            </div>
            <div style={{paddingTop:'120px',paddingLeft:"20px"}}>
                    <div style={{display:"grid",gridTemplateColumns:"40% 60%"}}>
                        <div>
                            <div className="topic">My Role</div>
                            <div className="topic" style={{paddingTop:"60px"}}>Techs&Tools</div>
                        </div>
                        <div>
                            <div className="des" style={{paddingLeft:"5px"}}>UI Design, Design system, Frontend Development</div>
                            <div style={{ display: "grid", gridTemplateColumns:"15% 15% 15% 15%", paddingTop:"20px", paddingBottom:"60px"}}>
                            <div>
                                <div className="box">Flutter</div>
                                
                            </div>
                            <div>
                            <div className="box">Flask</div>
                            </div>
                            <div>
                                <div className="box">Figma</div>
                            </div>
                            <div>
                                <div className="box">PostgreSQL</div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Planme