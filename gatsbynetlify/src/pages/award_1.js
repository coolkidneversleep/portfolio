import * as React from 'react';
import Header from '../components/header';
import award_1 from '../images/award_2.jpg';
import Footer from '../components/footer';
import '../styles/awards.css';
import '../styles/prj.css';
import '../styles/aboutme.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const Awards = () => {
    return (
        <div>
            <Header />
            <div style={{ display: "grid", gridTemplateRows: "auto", paddingTop:"125px",paddingLeft:"100px"}} data-sal="slide-left" data-sal-duration="2000" data-sal-delay="2" data-sal-easing="easeOutBreak">
                <div>
                    <ArrowBackIosIcon className="icon_link"/>
                    <a className="card_link" href="/about-me">back</a>
                </div>
            </div>
                <div style={{ display: "grid", gridTemplateRows: "auto", paddingTop:"50px",paddingBottom:"150px"}}>
                <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
                    <div style={{paddingLeft:"100px"}} data-sal="slide-right" data-sal-duration="2000" data-sal-delay="2" data-sal-easing="easeOutBreak">
                        
                        <img src={award_1} alt=""  width="570px" height="400px"></img> 
                    </div>
                    <div style={{paddingTop:"0px",paddingRight:"120px",paddingLeft:"30px"}} data-sal="slide-up" data-sal-duration="2000" data-sal-delay="2" data-sal-easing="easeOutBreak">
                        <div className="award_name" style={{color:"#675BBE"}}> ICT Contest 12 </div>
                        <div className="descript">The Ultimate Craft Project Telecommunications and ICT to honor His Majesty the King No. 12</div>
                        <div style={{display:"grid",gridTemplateColumns:"auto auto"}}>
                            <div>
                                <div className="org" style={{paddingTop:"30px"}} >organized by</div>
                                <div className="msg" style={{paddingTop:"20px"}} >G-Able x ICT</div>
                            </div>
                            <div style={{paddingLeft:"0px"}}>
                                <div className="org" style={{paddingTop:"30px", paddingBottom:"0px"}}> team-mate</div>
                                <div className="msg" style={{paddingTop:"20px"}}> Wisarut Kitticharoenphonngam</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Awards