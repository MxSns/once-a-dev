import React, { useState } from 'react';
import './components/i18n';
import { Link } from 'react-scroll';
import upArrow from './assets/images/up-circle.svg';
import './styles/General.css';
import HomeScreen from './components/HomeScreen';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';


const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleStartClick = () => {
    setShowSplash(false);
  };

  return (
    /*
      <div>
      {showSplash ? (
        <WelcomeScreen onClick={handleStartClick} />
      ) : (
        <>
        <HomeScreen />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <ContactForm />
        <Footer />
        </>
      )}
    </div>
    */
    <>
    <HomeScreen />
    <Link to="home" smooth={true} duration={700} className="upArrow"><img src={upArrow}></img></Link>
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <ContactForm />
    <Footer />

    </>

  );
};

export default App;
