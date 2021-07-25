import * as React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/prj.css';
import image from '../images/eduroom-mac.png';
const Eduroom = () => {
    return(
        <div>
            <Header />
            <div style={{display:"grid",gridTemplateRows:"auto auto"}}>
                <div style={{display:"grid",gridTemplateColumns:"40% 60%"}}>
                    <div>
                        <div className="prj_name">Eduroom</div>
                        <div className="type" style={{paddingTop:"0px"}}>web application</div>
                        <div className="description" style={{paddingTop:"50px", paddingRight:"40px"}}>
                            Eduroom, online learning platform, is a project of integrated project 1 subject.
                            This website consist of private tutors, courses, forums, etc.
                        </div>
                        <div style={{display:"grid",gridTemplateColumns:"auto auto"}}>
                            <div>
                                <div className="type" style={{paddingTop:"50px"}} >project date</div>
                                <div className="description" style={{paddingTop:"3px"}} >2019</div>
                            </div>
                            <div>
                                <div className="type" style={{paddingTop:"50px", paddingLeft:"40px"}} >website</div>
                                <a style={{color:"#2C2E43", paddingLeft:"40px"}} href="https://eduroom.cscms.me"><div className="description" style={{paddingTop:"3px", paddingLeft:"40px"}} >https://eduroom.cscms.me</div></a>
                            </div>
                        </div>
                    </div>
                    <div style={{paddingLeft:"142px", paddingTop:"140px", backgroundColor:"#FBCFFC", height:'680px'}}>
                        <img src={image} width="725px" height="500px" style={{objectFit:"cover"}} className="crop"></img>
                    </div>
                </div>
                <div style={{paddingTop:'20px',paddingLeft:"20px"}}>
                    <div style={{display:"grid",gridTemplateColumns:"40% 60%"}}>
                        <div>
                            <div className="topic">My Role</div>
                            <div className="topic" style={{paddingTop:"140px"}}>Techs&Tools</div>
                        </div>
                        <div>
                            <div className="des" style={{paddingLeft:"0px"}}>In this project, I design database, convert design from UI to HTML&CSS using NextJs, and coding backend to connect database in part of forum page.</div>
                            <div style={{ display: "grid", gridTemplateColumns:"15% 15% 15%", paddingTop:"40px", paddingBottom:"60px"}}>
                            <div>
                                <div className="box">NextJS</div>
                                <div className="box">NodeJS</div>
                            </div>
                            <div>
                                <div className="box">Figma</div>
                                <div className="box">Material UI</div>
                            </div>
                            <div>
                                <div className="box">PostgreSQL</div>
                            </div> 
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Eduroom