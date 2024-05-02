import React from 'react'
import profilePic from './../Assets/Untitled-2.png';
import github from './../Assets/socail icon/github-white.png';
import insta from './../Assets/socail icon/insta-white.png';
import linkedin from './../Assets/socail icon/linkedin -white.png';

const Home = () => {
  return (
    <>
    <div className="bg-backgroundone sm:flex text-white grid ">
        <div className="block xl:mt-36 xl:ml-36 lg:mt-7 lg:ml-12 md:mt-5 md:ml-6 sm:ml-10 sm:mt-12" >
            <h1 className='text-3xl xl:text-5xl '>Hi,I'm Malitha Supun👋</h1>
            <p className='xl:mt-4 xl:text-xl md:mt-4 text-[14px] '>As a full stack developer, I'm dedicated to crafting fast, accessible, visually appealing, and responsive digital experiences. Each project excites me anew, driving me to innovate and create exceptional solutions. With expertise in both front-end and back-end technologies, I strive to exceed expectations and leave a lasting impression.</p>
            <div className="mt-4 text-lg">
            <p>📍 Bentota, Sri Lanka</p>
            </div>
            <div className="mt-2 text-lg">
            <p>🟢 Available for Internship</p>
            </div>
            <div className="flex mt-4">
            <a href='https://github.com/MalithaSupun'><img className="mr-3 w-6" src={github} alt="github" /></a>
            <a href='https://www.linkedin.com/in/malitha-supun-a6145314a/'><img className="mr-3 w-6" src={linkedin} alt="linkedin" /></a>
            <a href='https://www.instagram.com/supun_malitha/?hl=en'><img className="mr-3 w-6" src={insta} alt="insta" /></a>
            </div>
            <button id='downloadcv' className="mt-10 border-2 rounded-2xl border-white py-1.5 px-2 text-white ">Download CV</button>
        </div>
        <div className="mt-7 max-w-[628px] lg:ml-40 l md:ml-5">
        <img src={profilePic} alt="Profile Picture"/>
        </div>
    </div>
    </>
  )
}

export default Home