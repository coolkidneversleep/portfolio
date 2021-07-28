import * as React from 'react';
import '../styles/about_int.css';
import udemy from '../images/udemy.jpg';
import cousera from '../images/cousera.png';

const AboutIntro = () => {
    
    return (
        <div style={{display:"grid", gridTemplateColumns:"20% 60% 20%", paddingTop:"60px"}}>
            <div style={{display:"grid", gridTemplateColumns:"auto", paddingLeft:"90px", paddingTop:"70px"}} >
                <div>
                <img src={udemy} width="210px" height="140px"></img>
                <p style={{paddingTop:"160px",paddingLeft:"15px"}} className="cert">flutter develoment boostcamp with dart</p>
                </div>
            </div>
            <div class="about_meh" style={{ display: "flex", flexFlow: "column", alignItems: "center",padding: "120px 50px 40px 140px", paddingBottom:"120px"}}>
                <div className="txt"> I like to create web applications that has good user-interface
                and user-experience. And I always open my mind 
                and willing to learn new things to achieve the goals.</div>
                <div style={{paddingRight:"80px"}}>
                    <a href="/about-me" className="round-button" id="bottom">
                        About me
                    </a>
                </div>
            </div>
            <div style={{display:"grid", gridTemplateColumns:"auto"}} >
                <div>
                    <div style={{paddingRight:"100px", paddingTop:"135px",cursor:"pointer"}} className="cert"><img src={cousera} width="200px" height="130px"></img></div>
                    <p style={{paddingTop:"160px",paddingLeft:"30px", paddingRight:"60px"}} className="cert">Introduction to <br></br>cloud identity</p>
                </div>
            </div>
        </div>
    )
}

export default AboutIntro