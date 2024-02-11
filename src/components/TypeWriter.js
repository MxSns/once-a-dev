import React from 'react';
import Typewriter from 'typewriter-effect';
import '../styles/General.css';

function TypeWriter() {
    return (
        
            
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 70,
                        strings: ["Front-end !", "JavaScript !", "React !"]
                    }}
                    
                />
            
                
            
        
    )
}

export default TypeWriter;