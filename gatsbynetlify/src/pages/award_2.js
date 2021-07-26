import * as React from 'react';
import Header from '../components/header';
import award_1 from '../images/award_3.jpg';
import Footer from '../components/footer';
import '../styles/awards.css';
import '../styles/prj.css';
const Awards = () => {
    return (
        <div>
            <Header />
            <div style={{ display: "grid", gridTemplateRows: "auto", paddingTop:"185px",paddingBottom:"150px"}}>
                <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
                    <div style={{paddingLeft:"100px"}} data-sal="slide-right" data-sal-duration="2000" data-sal-delay="2" data-sal-easing="easeOutBreak">
                       <img src={award_1} alt=""  width="570px" height="400px"></img> 
                    </div>
                    <div style={{paddingTop:"0px",paddingRight:"120px",paddingLeft:"30px"}} data-sal="slide-up" data-sal-duration="2000" data-sal-delay="2" data-sal-easing="easeOutBreak">
                        <div className="award_name"> ICT Contest 13 </div>
                        <div className="descript">The Ultimate Craft Project Telecommunications and ICT to honor His Majesty the King No. 13</div>
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