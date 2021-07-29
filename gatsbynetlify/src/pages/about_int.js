import * as React from 'react';
import '../styles/about_int.css';
import udemy from '../images/udemy.jpg';
import cousera from '../images/cousera.png';

const AboutIntro = () => {
    
    return (
        <div className="about_container" data-sal="slide-up" data-sal-duration="2000" data-sal-delay="2" data-sal-easing="easeOutBreak">
            <div className="udemy_container" >
                <div>
                <img src={udemy} className="udemy_img"></img>
                <p className="cert_name">flutter develoment boostcamp with dart</p>
                </div>
            </div>
            <div class="about_meh">
                <div className="txt"> I like to create web applications that has good user-interface
                and user-experience. And I always open my mind 
                and willing to learn new things to achieve the goals.</div>
                <div className="btn_div">
                    <a href="/about-me" className="round-button" id="bottom">
                        About me
                    </a>
                </div>
            </div>
            <div className="flutter_container" >
                <div>
                    <div className="flutter_div">
                        <img src={cousera} className="flutter_img"></img>
                    </div>
                    <p className="cert_name">Introduction to <br></br>cloud identity</p>
                </div>
            </div>
        </div>
    )
}

export default AboutIntro