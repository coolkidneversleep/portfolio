import * as React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import '../../styles/prj.css';
import image from '../../images/english_landing.png';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const English = () => {
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
                        <div className="prj_name" style={{fontSize:"4rem", fontWeight:"600"}}>English handwriting regcognition</div>
                        <div className="type" style={{paddingTop:"0px"}}>classification model</div>
                        <div className="description" style={{paddingTop:"30px", paddingRight:"40px"}}>
                        Develop a classification model that can classify characters of English handwriting from the image. The system will receive the image from the user and use Canny to perform bounding boxes around each character. And then pass each bounding box to the model to predict the character.
                        </div>
                        <div className="des_div">
                            <div>
                                <div className="type" >project date</div>
                                <div className="sub_description" >2022</div>
                            </div>
                            <div>
                                <div className="type" >website</div>
                                <div className="sub_description" >under construction</div>
                            </div>
                        </div>
                    </div>
                    <div data-sal="slide-left" data-sal-duration="1000" data-sal-delay="1" data-sal-easing="easeOutBreak" style={{paddingLeft:"3px", paddingTop:"50px"}}>
                        <img src={image} className="eduroom_img"></img>
                    </div>
                </div>
            </div>
            {/* <div className="more_container">
                    <div className="more_div">
                        <div className="more_col">
                            <div className="topic">My Role</div>
                            <div className="des">UI Design, Design system, Frontend Development,<br></br> Backend Development </div>
                        </div>
                        <div className="more_col"> 
                            <div className="topic">Techs&Tools</div>
                            <div className="tech_div">
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
            </div> */}
            <Footer />
            
        </div>
    )
}

export default English