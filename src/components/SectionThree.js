import React from 'react';
import { Element } from 'react-scroll';

import '../styles/General.css';
import '../styles/SectionThree.css';
import seo from '../assets/images/seo.png';
import accessibility from '../assets/images/accessibility.png';
import eCommerce from '../assets/images/eCommerce.png';
import reactApp from '../assets/images/react-2.svg';
import maskedCoder from '../assets/images/maskedCoder.png';

const SectionThree = () => {
    return (
        
            <Element name="services">
                <section className="section__three">
            <div className="section__three__main">
                <div className="section__three__intro">
                    <p className="section__three__intro__textYellow">
                    Because you aim for the highest standards in digital communication. 
                    </p>
                    <h1 className="h--white">I provide expertise in the most modern approaches to web development.
                    </h1>
                    
                </div>
                <div className="section__three__container__nb">
                    <div className="section__three__container__nb--one">
                        <div className="conseq__container__white">
                            <img className="nb__icon" src={seo} alt="SEO"/>
                            <p className="nb__rank">Search Engine Optimization<span className="yellow">.</span></p>
                            <p className="nb__rank__title">Unlock online visibility and boost rankings with my expert SEO strategies.</p>
                            
                        </div>
                        <div className="conseq__container__yellow">
                            <img className="nb__icon" src={accessibility} alt="Accessibility"/>
                            <p className="nb__rank">Web Accessibility<span className="white">.</span></p>
                            <p className="nb__rank__title">Creating web solutions that adhere to the highest accessibility standards</p>
                            
                        </div>
                    </div>
    
                    <div className="section__three__container__nb--two">
                        <div className="conseq__container__white">
                            <img className="nb__icon" src={eCommerce} alt="eCommerce"/>
                            <p className="nb__rank">eCommerce<span className="yellow">.</span></p>
                            <p className="nb__rank__title">Transform your eCommerce ambitions into reality with my expertise in crafting and optimizing innovative strategies and applications.</p>
                            
                        </div>
                        <div className="conseq__container__yellow">
                            <img className="nb__icon" src={reactApp} alt="React developement"/>
                            <p className="nb__rank">React Applications<span className="white">.</span></p>
                            <p className="nb__rank__title">Elevate user experiences with React development solutions</p>
                            
                        </div>
                    </div>
                </div>
            </div>
          
                <div className="conseq__container__5">
                    
                    <img src={maskedCoder} alt="profile pic"/>
                    <div className="conseq__text">
                        <h1>Let's build together !!</h1>
                        <p>My dedication, high performance standards, and passion for user-centric design define my approach as a front-end developer. With a keen eye for detail, I transform concepts into visually appealing and seamlessly functioning interfaces. Elevate your web presence with my commitment to creating immersive and responsive user experiences </p>
                        <p>Mxn</p>
                    </div>
                </div>
        </section> 
            </Element>
           
    )
}
export default SectionThree;