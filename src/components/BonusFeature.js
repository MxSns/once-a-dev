import React from 'react';
import ReactPlayer from 'react-player';
import '../assets/videos/rickRoll.mp4'

const BonusFeature = () => {
    const rickRoll = '../assets/videos/rickRoll.mp4';
    return (
        <div className="rickRoll">
            <ReactPlayer
                url={rickRoll}
                playing={true}
                volume={0.5}
            />
            <p className="aboutMe">Sorry about this old school RickRoll trolling !!</p>
            <p className="aboutMe">Hello, I'm Max, and I'm passionate about coding and crafting web solutions. My primary expertise lies in React, where I have substantial experience. I'm excited about the opportunity to assist you in building your application, ensuring it's smooth and efficient. Feel free to reach out to me at contact@onceuponadev.com</p>
        </div>
    )
}
export default BonusFeature;