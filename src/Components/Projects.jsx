import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import WebPharmacy from './../Assets/projects/donpharmacy.png'
import timetiker from './../Assets/projects/timetiker.png'
import Villa846 from './../Assets/projects/villa846.png'
import weatherapp from './../Assets/projects/wetherapp.png'
import Webpos from './../Assets/projects/Web pos.png'
import Brainwave from './../Assets/projects/Brainwave.png'
import NativeLogin from './../Assets/projects/NativeLogin.jpeg'
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <>
    <div className="projectsontainer">
    <div className="projecttitle">
            <h5 id='projecttitle-text'>Projects</h5>
            <p className='mt-4 mb-5'>Some of the noteworthy projects I have built:</p>
        </div>

        <div className="projectcards">
        <div class="card" style={{ width: '18rem' }}>
  <img src={WebPharmacy} class="card-img-top static-img" alt="..."/>
  <div className="card-body">
    <h5 class="card-title">Pharmacy Web Project</h5>
    <p class="card-text">#Boostrap #Html #css #php -this is uni project 2nd year</p>
    <a href="#" class="btn btn-primary"><FaGithub /> <span>Github</span></a>
  </div>
</div>

<div class="card" style={{width: '18rem' }}>
  <img src={timetiker} class="card-img-top static-img" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Time tiker</h5>
    <p class="card-text">#java #neatbeans - this based on uni 1st year project</p>
    <a href="https://github.com/MalithaSupun/TimeTikerProject.git" class="btn btn-primary"><FaGithub /> <span>Github</span></a>
  </div>
</div>

<div class="card" style={{ width: '18rem' }}>
  <img src={Villa846} class="card-img-top static-img" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Villa 846</h5>
    <p class="card-text">#Html #Css #js - This for Guest house coaded by me</p>
    <a href="https://github.com/MalithaSupun/Villa846-web.git" class="btn btn-primary"><FaGithub /> <span>Github</span></a>
  </div>
</div>

<div class="card" style={{ width: '18rem' }}>
  <img src={weatherapp} class="card-img-top static-img" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Weather App</h5>
    <p class="card-text">#flutter #dart - I was code to gain knowledge</p>
    <a href="https://github.com/MalithaSupun/WeatherApp.git" class="btn btn-primary"><FaGithub /> <span>Github</span></a>
  </div>
</div>

<div class="card" style={{ width: '18rem' }}>
  <img src={Webpos} class="card-img-top static-img" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">WebPos UI</h5>
    <p class="card-text">#Boostrap #Html #Css #js - I was code to gain knowledge</p>
    <a href="#https://github.com/MalithaSupun/Web-POS-system.git" class="btn btn-primary"><FaGithub /> <span>Github</span></a>
  </div>
</div>

<div class="card" style={{ width: '18rem' }}>
  <img src={Brainwave} class="card-img-top static-img" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Brainwave UI</h5>
    <p class="card-text">#React #tailwindcss - I was code to gain knowledge</p>
    <a href="#https://github.com/MalithaSupun/brainwave.git" class="btn btn-primary"><FaGithub /> <span>Github</span></a>
  </div>
</div>

<div class="card" style={{ width: '18rem' }}>
  <img src={NativeLogin} class="card-img-top static-img" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">ReactNative Login UI</h5>
    <p class="card-text">#ReactNative #tailwindcss - I was code to gain knowledge</p>
    <a href="#https://github.com/MalithaSupun/React_native_Login_Ui.git" class="btn btn-primary"><FaGithub /> <span>Github</span></a>
  </div>
</div>

<div class="card" style={{ width: '18rem' }}>
  <img src="https://i.pinimg.com/736x/87/b0/81/87b081cbb02f5342f6a89fd739ff29b0.jpg" class="card-img-top static-img" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Emoji Lovers</h5>
    <p class="card-text">#Swift - I was code to gain knowledge</p>
    <a href="https://github.com/MalithaSupun/EmojiLover.git" class="btn btn-primary"><FaGithub /> <span>Github</span></a>
  </div>
</div>

<div class="card" style={{ width: '18rem' }}>
  <img src="https://i.pinimg.com/736x/95/e4/86/95e48605ea99182272f94a45bbd1f783.jpg" class="card-img-top static-img" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"># Web Calculator</h5>
    <p class="card-text">#HTML5 #CSS3 #JavaScript - I was code to gain knowledge</p>
    <a href="https://github.com/MalithaSupun/Web-Calculator.git" class="btn btn-primary"><FaGithub /> <span>Github</span></a>
  </div>
</div>

        </div>

    </div>
    </>
  )
}

export default Projects