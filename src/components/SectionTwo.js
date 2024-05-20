import React, { useState } from 'react';
import { Element } from 'react-scroll';
import ReactPlayer from 'react-player';
import '../styles/General.css';
import '../styles/SectionTwo.css';
import devPic from '../assets/images/devAtWork.webp';
import whiteArrow from '../assets/images/regular--arrow--right--white.svg';
import presentationFr from '../assets/videos/secondeVideo1080.mp4';
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
                <h1>Hello ! Je suis Maxime, developpeur: <TypeWriter className="typeWriterContainer" /></h1>

                    <p>Mon approche allie originalité et expertise technique, en mettant l'accent sur deux aspects essentiels du développement web: le référencement naturel et l'accessibilité.</p>
                    <p>Je m'efforce de créer des sites web à la fois esthétiques, accessibles et optimisés pour le référencement. </p>
                    <p>En améliorant sa visibilité sur les moteurs de recherche, je m'assure que votre contenu touche son public cible, maximisant ainsi son efficacité. <br></br>En parallèle, ma spécialisation dans l'accessibilité garantit une navigation fluide pour tous les utilisateurs, quels que soient leurs besoins.</p>
                </div>
            </div>
            <div className="about">
                    <div className="lorem__button--black" id="select" onClick={handleClick}>
                        <p><strong>à propos</strong></p>
                        <img src={whiteArrow} alt="targetting arrow" />
                    </div>
                    <div className={`about__me ${aboutIsOpen ? 'open' : ''}`}>
                    {aboutIsOpen && (

                        <ReactPlayer
                            url={presentationFr}
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