import * as React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/about_int.css';
import ScrollReveal from 'scrollreveal';
const AboutIntro = () => {
    

    return (
        <div>
            <Helmet>
                <script src="https://unpkg.com/scrollreveal"></script>
            </Helmet>
            <body>
            <div class="about_meh" style={{ display: "flex", flexFlow: "column", alignItems: "center", padding: "200px 100px", paddingBottom: "200px" }}>
                <div className="txt"> I like to create web applications that has good user-interface</div>
                <div className="txt">and user-experience. And I always open my mind </div>
                <div className="txt">and willing to learn new things to achieve the goals.</div>
                <div>
                    <a href="/about-me" className="round-button" id="bottom">
                        About me
                    </a>
                </div>
            </div>
           
            <script>
                    ScrollReveal().reveal('.about_meh');
            </script> 
            </body>
        </div>
    )
}

export default AboutIntro