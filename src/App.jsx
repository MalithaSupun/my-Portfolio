import React, { useState, useEffect } from 'react';
import Aboutme from './Components/Aboutme';
import Footer from './Components/Footer';
import Getintouch from './Components/Getintouch';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Navbar from './Components/navbar';
import Loading from './Components/Loading';


function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (remove this in production)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
    <>
      <Navbar />
      <Home />
      <Aboutme />
      <Skills />
      <Projects/>
      <Getintouch />
      <Footer />
    </>
  )}
    </>
  );
}

export default App
