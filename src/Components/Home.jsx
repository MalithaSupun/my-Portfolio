import React, { useRef, useEffect, useState } from 'react';
import profilePic from './../Assets/Untitled-2.png';
import github from './../Assets/socail icon/github-white.png';
import insta from './../Assets/socail icon/insta-white.png';
import linkedin from './../Assets/socail icon/linkedin -white.png';

const Home = () => {
  const textSectionRef = useRef(null);
  const imageRef = useRef(null);
  const [typedText, setTypedText] = useState('');
  
  useEffect(() => {
    // Add animation class after component mounts
    if (textSectionRef.current) {
      textSectionRef.current.classList.add('animate');
    }
    if (imageRef.current) {
      imageRef.current.classList.add('animate');
    }
    // Start typing animation after a delay when component mounts
    setTimeout(() => {
      typeText("Hi, I'm Malitha Supun👋");
    }, 1300); // Adjust delay time here (milliseconds)
  }, []);

  const typeText = (text) => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= text.length) {
        setTypedText(text.substring(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust typing speed here (milliseconds per character)
  };

  return (
    <>
<div className="homecontainer">
        <div ref={textSectionRef} className="H-textSection">
        <h1 className='animation-home-title'>{typedText}</h1>
            <p>As a full stack developer, I'm dedicated to crafting fast, accessible, visually appealing, and responsive digital experiences. Each project excites me anew, driving me to innovate and create exceptional solutions. With expertise in both front-end and back-end technologies, I strive to exceed expectations and leave a lasting impression.</p>
            <div className="ptaglocationhome">
            <p1>📍 Bentota, Sri Lanka</p1>
            </div>
            <div className="setofsocial">
            <a href='https://github.com/MalithaSupun'><img className="social-icon" src={github} alt="github" /></a>
            <a href='https://www.linkedin.com/in/malitha-supun-a6145314a/'><img className="social-icon" src={linkedin} alt="linkedin" /></a>
            <a href='https://www.instagram.com/supun_malitha/?hl=en'><img className="social-icon" src={insta} alt="insta" /></a>
            </div>
            <a href="src\Assets\Malitha Supun.pdf" download="Malitha_Supun_CV.pdf">
            <button className="DownloadCv">Download CV</button>
            </a>
        </div>
        <div className="imagesection">
        <img ref={imageRef} src={profilePic} alt="Profile Picture"/>
        </div>
    </div>
    </>
  )
}

export default Home