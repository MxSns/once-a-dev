import React, { useState } from 'react';
import { Element } from 'react-scroll';
import ReactPlayer from 'react-player';
import '../styles/General.css';
import '../styles/SectionFour.css';
import webDevWork from '../assets/images/developer.png';
import htmlLogo from '../assets/images/html.svg';
import cssLogo from '../assets/images/css3.svg';
import jsLogo from '../assets/images/js.svg';
import sassLogo from '../assets/images/sass.svg';
import reactLogo from '../assets/images/react.svg';
import introduction from '../assets/videos/introduction.mp4';
import whiteArrow from '../assets/images/regular--arrow--right--white.svg';


const SectionFour = () => {
    const [aboutIsOpen, setAboutIsOpen] = useState(false); 

    const handleClick = () => {
        setAboutIsOpen(!aboutIsOpen);
    };
    return (
      <Element name="tech-stack">
      
        <section className="section__four">
            <div className="section__four__main">
                <div className="section__four__image">
                    <img src={webDevWork} alt="Web developer at work"/>
                </div>
                <div className="section__four__text">
                    <h1>Technology Stack</h1>
                </div>
            </div>
            <div className="section__four__logos">
                <img src={htmlLogo} alt="Logo html" />
                <img src={cssLogo} alt="CSS" />
                <img src={sassLogo} alt="Sass" />
                <img src={jsLogo} alt="JavaScript" />
                <img src={reactLogo} alt="React" />
            </div>
            
            <div className="about__introduction">
                    <div className="lorem__button--black" id="select" onClick={handleClick}>
                        <p><strong>About my work</strong></p>
                        <img src={whiteArrow} alt="targetting arrow" />
                    </div>
                    <div className={`about__me ${aboutIsOpen ? 'open' : ''}`}>
                    {aboutIsOpen && (
                        
                        
                        <ReactPlayer
                            url={introduction}
                            playing={true}
                            volume={0.5}
                            width='80%'
                            height='80%'
                        />
                        
                        
                     )}
                    </div>
                </div>
            
        </section>
      </Element>  
    );
};

export default SectionFour;