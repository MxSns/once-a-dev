import React, { useState } from 'react';
import { Element } from 'react-scroll';
import ReactPlayer from 'react-player';
import '../styles/General.css';
import '../styles/SectionTwo.css';
import devPic from '../assets/images/devAtWork.png';
import whiteArrow from '../assets/images/regular--arrow--right--white.svg';
import TypeWriter from '../components/TypeWriter';



const SectionTwo = () => {
    const [aboutIsOpen, setAboutIsOpen] = useState(false); 

    const handleClick = () => {
        setAboutIsOpen(!aboutIsOpen);
    };
       
    return (
        <Element name="about">

        <div>
       <section className="section__two">
            <div className="section__two__main">
                <div className="section__two__image">
                    <img src= {devPic} alt="Web dev set up"/>
                </div>
                <div className="section__two__text">
                <h1>Hey ! I'm Max, and I'm a developer <TypeWriter className="typeWriterContainer" /></h1>
                    
                    <p>My work is a fusion of artistry and precision, with a primary focus on two critical aspects of web development: SEO and accessibility.</p>
                    <p>I believe in building not just visually stunning websites, but also ones that are discoverable and inclusive. By optimizing for search engines, I ensure that your content reaches its intended audience, maximizing its impact. Simultaneously, my dedication to accessibility means that every user, regardless of ability, can navigate and engage with your site seamlessly.</p>
                </div>
            </div>
            <div className="about">
                    <div className="lorem__button--black" id="select" onClick={handleClick}>
                        <p><strong>About me</strong></p>
                        <img src={whiteArrow} alt="targetting arrow" />
                    </div>
                    <div className={`about__me ${aboutIsOpen ? 'open' : ''}`}>
                    {aboutIsOpen && (
                        
                        <ReactPlayer
                            url='https://youtu.be/dQw4w9WgXcQ?si=Z3YJCNPiIwP0rD2f'
                            playing={true}
                            volume={0.5}
                            width='80%'
                            height='80%'
                        />
                        
                        
                     )}
                    </div>
                </div>
            
            
        </section> 
    </div>
    </Element>
    )
    
};
export default SectionTwo;