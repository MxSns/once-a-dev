import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
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
  );
};

export default App;
