import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoMdMenu } from "react-icons/io";


const navbar = () => {
  return (
    <>
    <div className="navcontainer">
        <div className="navlogo">
            <p>Malitha Supun</p>
        </div>
        <div className="navitems">
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Projects</a></li>
                <li><a>Contact Me</a></li>
            </ul>
        </div>
        <IoMdMenu id='menu-icon'/>
    </div>
    </>
  )
}

export default navbar