import * as React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import '../../styles/prj.css';
import image from '../../images/eduroom.png';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Eduroom = () => {

    return(
        <div>
            <Header />
            <div className="back_container" >
                <div>
                    <ArrowBackIosIcon className="icon_link"/>
                    <a className="card_link" href="/">back</a>
                </div>
            </div>
            <div className="prj_div">
                <div className="prj_intro">
                    <div>
                        <div className="prj_name">Eduroom</div>
                        <div className="type" style={{paddingTop:"0px"}}>web application</div>
                        <div className="description" style={{paddingTop:"50px", paddingRight:"40px"}}>
                            Eduroom, online learning platform, is a project of integrated project 1 subject.
                            This website consist of private tutors, courses, forums, etc.
                        </div>
                        <div className="des_div">
                            <div>
                                <div className="type">project date</div>
                                <div className="sub_description">2019</div>
                            </div>
                            <div>
                                <div className="type" >website</div>
                                <div className="sub_description" ><a  className="website" href="https://eduroom.cscms.me">https://eduroom.cscms.me</a></div>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div >
                        <img src={image} className="eduroom_img"></img>
                    </div>
                    </div>
                   
                </div>
                <div className="more_container">
                    <div className="more_div">
                        <div className="more_col">
                            <div className="topic">My Role</div>
                            <div className="des">In this project, I design database, convert design from UI to HTML&CSS using NextJs, and coding backend to connect database in part of forum page.</div>
                        </div>
                        <div className="more_col">
                        <div className="topic">Techs&Tools</div>
                            <div className="tech_div">
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