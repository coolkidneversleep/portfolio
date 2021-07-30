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
            <div className="back_btn" >
                <div>
                    <ArrowBackIosIcon className="icon_link"/>
                    <a className="card_link" href="/about-me">back</a>
                </div>
            </div>
            <div className="all_div">
                <div className="small_div">

                    <div style={{paddingLeft:"10vw", marginRight:"30vw"}} >
                        <img src={award_1} alt="" className="image_award"></img> 
                    </div>
                    <div className="content">
                        <div className="award_name" style={{color:"#675BBE"}}> ICT Contest 12 </div>
                        <div className="descript">The Ultimate Craft Project Telecommunications and ICT to honor His Majesty the King No. 12</div>
                        <div className="sub_content">
                            <div>
                                <div className="org" style={{paddingTop:"30px"}} >organized by</div>
                                <div className="msg" style={{paddingTop:"20px"}} >G-Able x ICT</div>
                            </div>
                            <div className="team_col">
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