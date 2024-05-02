import React from 'react'
import mailicon from './../Assets/get-intouch/mail.png'
import mailcopyicon from './../Assets/get-intouch/copy.png'
import telephoneicon from './../Assets/get-intouch/telephone.png'
import giticon from './../Assets/get-intouch/github.png'
import instaicon from './../Assets/get-intouch/instagram.png'
import facebookicon from './../Assets/get-intouch/facebook-app-symbol.png'
import linkedinicon from './../Assets/get-intouch/linkedin.png'

const Getintouch = () => {
  return (
    <>
    <div className="getintouchcontainer">
    <div className="getintouchtitle">
            <h5 id='getintouchtitle-text'>Get In Touch</h5>
            <p className='mt-4'>What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
        </div>
        <div className="getintouchmail">
            <img id='mailicong-i-t' src={mailicon} alt=""/>
            <h2>malithasupun2@gmail.com</h2>
            <img id='mailicong-i-tcopy' src={mailcopyicon} alt=""/>
        </div>
        <div className="getintouchmobile">
            <img id='mobileicong-i-t' src={telephoneicon} alt=""/>
            <h2>+94 718465170</h2>
            <img id='mobileicong-i-tcopy' src={mailcopyicon} alt=""/>
        </div>
        <div className="get-in-touch-social-icons-section">
            <h6>You may also find me on these platforms!</h6>
            <div className="get-in-touch-social-icons mt-2">
             <a href='https://github.com/MalithaSupun'>
            <img id='social-icons-get-i-t' src={giticon} alt=""/>
            </a>
            <a href='https://www.instagram.com/supun_malitha/?hl=en'>
            <img id='social-icons-get-i-t' src={instaicon} alt=""/>
            </a>
            <a href='https://www.facebook.com/profile.php?id=100008346046354'>
            <img id='social-icons-get-i-t' src={facebookicon} alt=""/>
            </a>
            <a href='https://www.linkedin.com/in/malitha-supun-a6145314a/'>
            <img id='social-icons-get-i-t' src={linkedinicon} alt=""/>
            </a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Getintouch