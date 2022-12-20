import * as React from 'react';
import '../styles/about_int.css';
import udemy from '../images/udemy.jpg';
import cousera from '../images/cousera.png';
import ml from '../images/ml_cert.png';
import dl from '../images/deep_cert.png';

const AboutIntro = () => {
    
    return (
        <div className="about_container" >
            <div className="udemy_container" >
                <div>
                <img src={udemy} className="udemy_img"></img>
                <p className="cert_name">flutter develoment <br></br>boostcamp with dart</p>
                </div>
                <div style={{width:'30vw'}}>
                    <div className="flutter_div">
                        <img src={cousera} className="flutter_img"></img>
                        <p className="cert_name">Introduction to cloud identity</p>
                    </div>
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
            <div className="ml_container" >
                <div>
                <img src={ml} className="udemy_img"></img>
                <p className="cert_name">intro to <br></br>machine learning</p>
                </div>
                <div>
                <img src={dl} className="dl_img"></img>
                <p className="cert_name"><br></br>fundamental of <br></br>deep learning</p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutIntro