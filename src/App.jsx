import { useState } from 'react'
import Aboutme from './Components/Aboutme';
import Footer from './Components/Footer';
import Getintouch from './Components/Getintouch';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Navbar from './Components/navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <Aboutme />
      {/* <Skills /> */}
      {/* <Projects/> */}
      {/* <Getintouch /> */}
      {/* <Footer /> */}
    </>
  )
}

export default App
