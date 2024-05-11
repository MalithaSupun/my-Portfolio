import React from 'react'
import myLogoSVG from './../../loading3.svg'; // Path to your SVG file

function Loading() {
  return (
    <div className="loading" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: 'black' }}>
      <img src={myLogoSVG} alt="Loading..." style={{ width: '100px', height: '100px', animation: 'rotate 2s linear infinite' }} />
      <p style={{ color: 'white',marginTop: '20px' }}>Loading...</p>
    </div>
  );
}

export default Loading