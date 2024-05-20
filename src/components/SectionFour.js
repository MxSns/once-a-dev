import React, { useState } from 'react';
import { Element } from 'react-scroll';
import ReactPlayer from 'react-player';
import '../styles/General.css';
import '../styles/SectionFour.css';
import webDevWork from '../assets/images/developer.webp';
import htmlLogo from '../assets/images/html.svg';
import cssLogo from '../assets/images/css3.svg';
import jsLogo from '../assets/images/js.svg';
import sassLogo from '../assets/images/sass.svg';
import reactLogo from '../assets/images/react.svg';
import introduction from '../assets/videos/presentationOnce-a-dev.mp4';
import whiteArrow from '../assets/images/regular--arrow--right--white.svg';


const SectionFour = () => {
    const [aboutIsOpen, setAboutIsOpen] = useState(false);

    const handleClick = () => {
        setAboutIsOpen(!aboutIsOpen);
    };

    const techstack = [
        {id: 1, img: htmlLogo, text:'Meilleures pratiques HTML pour améliorer votre référencement SEO.'},
        {id: 2, img: cssLogo, text:'Techniques CSS3 pour des conceptions web réactives et visuellement attrayantes.'},
        {id: 3, img: sassLogo, text:'Maitrise SaSS pour un code CSS efficace, évolutif et facile à maintenir.'},
        {id: 4, img: jsLogo, text:'Expertise JavaScript pour des expériences utilisateurs interactives et dynamiques.'},
        {id: 5, img: reactLogo, text:"Des applications développées sous React pour créer des composants d'interface performants et réutilisables. "},
    ];

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
                <ul>
                    {techstack.map(stack => (
                        <li className="section__four__item" key={stack.id}>
                            <img src={stack.img} alt={stack.text} className="section__four__img" />
                            <span>{stack.text}</span>
                        </li>
                    ))}
                </ul>
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