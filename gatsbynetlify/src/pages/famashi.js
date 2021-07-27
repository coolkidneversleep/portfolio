import * as React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import  famashi_img from '../images/famashi_landing.jpg';
import '../styles/prj.css';

const Famashi = () => {
    return(
        <div>
            <Header />
            <div style={{display:"grid",gridTemplateColumns:"40% 60%"}}>
                    <div>
                        <div className="prj_name" style={{paddingTop:'160px'}}>Famashi</div>
                        <div className="type" style={{paddingTop:"0px"}}>mobile application</div>
                        <div className="description" style={{paddingTop:"30px", paddingRight:"40px"}}>
                        The older person forgets to take medicine, can’t memorize the medicine's appearance, can’t track the remaining amount of medicine, and forgets their own allergy medicine.
                        So, this mdicine taking reminder application, famashi, can solve this problem.                        
                        </div>
                        <div style={{display:"grid",gridTemplateColumns:"40% 50%"}}>
                            <div>
                                <div className="type" style={{paddingTop:"50px"}} >project date</div>
                                <div className="description" style={{paddingTop:"20px"}} >2021</div>
                            </div>
                            <div style={{paddingLeft:"10px"}}>
                                <div className="type" style={{paddingTop:"50px", paddingLeft:"40px", paddingBottom:"0px"}} >website</div>
                                <a style={{color:"#2C2E43",paddingTop:"0px", paddingLeft:"50px"}} href="https://github.com/GGolfz/Famashi-App"><div className="description" style={{paddingTop:"0px", paddingLeft:"40px", fontSize:"18px"}} >https://github.com/GGolfz/Famashi-App</div></a>
                            </div>
                        </div>
                    </div>
                    <div data-sal="slide-left" data-sal-duration="2000" data-sal-delay="2" data-sal-easing="easeOutBreak" style={{paddingLeft:"9px", paddingTop:"120px"}}>
                        <img src={famashi_img} height="600px" width="860px"></img>
                    </div>
            </div>
            <div style={{paddingTop:'60px',paddingLeft:"20px"}}>
                    <div style={{display:"grid",gridTemplateColumns:"40% 60%"}}>
                        <div>
                            <div className="topic">My Role</div>
                            <div className="topic" style={{paddingTop:"70px"}}>Techs&Tools</div>
                        </div>
                        <div>
                            <div className="des" style={{paddingLeft:"5px"}}>Frontend Development, Backend Development </div>
                            <div style={{ display: "grid", gridTemplateColumns:"10% 20% 10% 10%", paddingTop:"30px", paddingBottom:"60px"}}>
                            <div>
                                <div className="box">Flutter</div>
                            </div>
                            <div style={{paddingLeft:"10px"}}>
                                <div className="box" style={{paddingLeft:"10px"}}>Ruby on Rails</div>
                            </div>
                            <div>
                                <div className="box">Figma</div>
                            </div>
                            <div style={{paddingLeft:"10px"}}>
                                <div className="box">SQLite</div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Famashi