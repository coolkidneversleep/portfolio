import * as React from 'react';
import Header from '../components/header';
import setthi_img from '../images/setthi_landing-2.png';
import '../styles/prj.css';
import Footer from '../components/footer';

const Setthi = () => {
    return(
        <div>
            <Header />
            <div style={{display:"grid",gridTemplateColumns:"40% 60%"}}>
                    <div>
                        <div className="prj_name" style={{paddingTop:'160px'}}>Setthi</div>
                        <div className="type" style={{paddingTop:"0px"}}>mobile application</div>
                        <div className="description" style={{paddingTop:"30px", paddingRight:"40px"}}>
                        It is an expense management application that can help you to manage your expenses and transactions in your daily life and also allow you to split your money by the purpose.
                        </div>
                        <div style={{display:"grid",gridTemplateColumns:"auto auto"}}>
                            <div>
                                <div className="type" style={{paddingTop:"50px"}} >project date</div>
                                <div className="description" style={{paddingTop:"20px"}} >2021</div>
                            </div>
                            <div>
                                <div className="type" style={{paddingTop:"50px", paddingLeft:"40px", paddingBottom:"0px"}} >website</div>
                                <a style={{color:"#2C2E43",paddingTop:"0px", paddingLeft:"40px"}} href="https://github.com/GGolfz/Setthi"><div className="description" style={{paddingTop:"0px", paddingLeft:"40px", fontSize:"18px"}} >https://github.com/GGolfz/Setthi</div></a>
                            </div>
                        </div>
                    </div>
                    <div style={{paddingLeft:"9px", paddingTop:"120px"}}>
                        <img src={setthi_img} height="600px" width="auto"></img>
                    </div>
            </div>
            <div style={{paddingTop:'150px',paddingLeft:"20px"}}>
                    <div style={{display:"grid",gridTemplateColumns:"40% 60%"}}>
                        <div>
                            <div className="topic">My Role</div>
                            <div className="topic" style={{paddingTop:"90px"}}>Techs&Tools</div>
                        </div>
                        <div>
                            <div className="des" style={{paddingLeft:"5px"}}>UI Design, Frontend Development, Testing application,<br></br> Get feedback from user</div>
                            <div style={{ display: "grid", gridTemplateColumns:"15% 20% 15%", paddingTop:"20px", paddingBottom:"60px"}}>
                            <div>
                                <div className="box">Flutter</div>
                                <div className="box">NestJS</div>
                            </div>
                            <div>
                                <div className="box">MySQL</div>
                                <div className="box">Google Cloud Run</div>
                            </div>
                            <div>
                                <div className="box">Figma</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Setthi