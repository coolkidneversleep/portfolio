import * as React from 'react';
import '../styles/about_int.css';
const AboutIntro = () => {
    return(
    <div style={{ display:"flex", flexFlow:"column",alignItems:"center",padding:"200px 100px", paddingBottom:"200px"}}>
        <div className="txt"> I like to create web applications that has good user-interface</div>
        <div className="txt">and user-experience. And I always open my mind </div>
        <div className="txt">and willing to learn new things to achieve the goals.</div>
        <a href="/about-me" className="round-button" id="bottom">About me</a>
    </div>
    )
}

export default AboutIntro