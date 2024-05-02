import React from 'react'
import adbouemepic from './../Assets/black.png'

const Aboutme = () => {
  return (
    <>
    <div className="aboutmecontainer">
      <div className="aboutmetitle">
        <h5 id='skillstitle-text'>About me</h5>
      </div>
      <div className="aboutmepicandpara">
        <div className="aboutmepic">
        <img id='aboutmepicimg' src={adbouemepic} alt="Your Image" />
        </div>
        <div className="aboutmeparacontainer">
          <div className="aboutmeparatitle">
          <h1 class="ame-title-des">Curious about me? Here you have it:</h1>
          </div>
          <div className="aboutmepara">
          <p class="about-me__text">
                    I'm a passionate, self-proclaimed designer who specializes in full stack development. I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
                </p>

                <p class="about-me__text">
                    I began my journey as a web developer, eager to dive into the world of coding. Since then, I've embraced every challenge, continually expanding my skill set and staying updated with the latest technologies. Now, proficient in Java, HTML, CSS, Flutter, Bootstrap, TailwindCSS, and React, I specialize in creating intuitive and efficient digital experiences across platforms. Let's build something amazing together!
                </p>

                <p class="about-me__text">
                    I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
                </p>

                <p class="about-me__text">
                    When I'm not in full-on developer mode, you can find me hovering around on Twitter or on Indie Hackers, witnessing the journey of early startups or enjoying some free time. Follow me on Twitter @supun_malitha where I share tech-related bites and build in public, or you can connect with me on GitHub to see my web pharmacy project and explore my passion for learning new technologies and languages.
                </p>

                <p class="about-me__text">
                    Finally, some quick bits about me.
                </p>
                
                <p class="about-me__text">
                    👉 B.Sc. (Hons) Computer Science and Software Engineering  &emsp;  👉 Avid learner &emsp;👉 Part time freelancer &emsp; 
                </p>
                <p class="about-me__text">
                    I'm available for internship and freelance work, so feel free to reach out and say hello! I promise I don't bite 😉
                </p>
          </div>
        </div>
      </div>
      </div>    
    </>
  )
}

export default Aboutme