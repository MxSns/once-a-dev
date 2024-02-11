import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import gitLogo from '../assets/images/github-2.svg';
import threadsLogo from '../assets/images/threads.svg';
import twitterLogo from '../assets/images/x-2.svg';
import ytLogo from '../assets/images/youtube-icon-5.svg';
import mediumLogo from '../assets/images/medium-4.svg';

const Footer = () => {
    return (
        <>
        <section className="section__six">
            <p>From scratch to SPA, Built on React with love </p>
            <div className="socials">
              <Link to="https://github.com/MxSns" target="_blank"><img src={gitLogo} alt="Logo GitHub" /></Link>
              <Link to="https://www.threads.net/@mxn.dev" target="_blank"><img src={threadsLogo} alt="Logo GitHub" /></Link>
              <Link to="https://twitter.com/Oz_70th" target="_blank"><img src={twitterLogo} alt="Logo GitHub" /></Link>
              <Link to="https://github.com/MxSns" target="_blank"><img src={ytLogo} alt="Logo GitHub" /></Link>
              <Link to="https://medium.com/@oz_70" target="_blank"><img src={mediumLogo} alt="Logo GitHub" /></Link>


            </div>
        </section>
    
        <footer>
            <p>Copyright ©OnceUponADev.</p>
            <p>Privacy Policy | Terms & Conditions</p>
        </footer>
        </>
    )
    
}
export default Footer;