import React from 'react'
import reacticon from './../Assets/Related software/react-2.svg'
import html from './../Assets/Related software/html-1.svg'
import css from './../Assets/Related software/css-3.svg'
import javascript from './../Assets/Related software/javascript-1.svg'
import java from './../Assets/Related software/java-icon.svg'
import mysql from './../Assets/Related software/mysql-3.svg'
import bootstrap from './../Assets/Related software/bootstrap-4.svg'
import php from './../Assets/Related software/php-1.svg'
import tailwind from './../Assets/Related software/tailwind-css-2.svg'
import flutter from './../Assets/Related software/flutter-logo.svg'
import figma from './../Assets/Related software/figma.png'
import androidstudio from './../Assets/Related software/android-studio.svg'
import vscode from './../Assets/Related software/vscode.svg'
import netbeans from './../Assets/Related software/netbeans.svg'
import photoshop from './../Assets/Related software/photoshop.svg'
import adobeillustrator from './../Assets/Related software/illustrator.png'
import intellij from './../Assets/Related software/intellij-idea.svg'
import sqlite from './../Assets/Related software/sqlite.svg'
import reportbuilder from './../Assets/Related software/report-builder.svg'
import maya from './../Assets/Related software/maya.svg'



const Skills = () => {
  return (
    <>
    <div className="skillcontainer">
        <div className="skilltitle">
            <h5 id='aboutmetitle-text'>SKILLS</h5>
            <p className='mt-2'>The skills, tools and technologies I am really good at:</p>
        </div>
        <div className="skillitems">

            <div className="skillitemimg">
                <img id='skillitemimgtag' src= {reacticon} alt="React" />
                <p>React</p>
            </div>

            <div className="skillitemimg">
                <img id='skillitemimgtag' src= {html} alt="Html" />
                <p>Html</p>
            </div>

            <div className="skillitemimg">
                <img id='skillitemimgtag' src= {css} alt="css" />
                <p>Css</p>
            </div>

            <div className="skillitemimg">
                <img id='skillitemimgtag' src= {javascript} alt="javascript" />
                <p>javascript</p>
            </div>

            <div className="skillitemimg">
                <img id='skillitemimgtag' src= {bootstrap} alt="bootstrap" />
                <p className='mt-3'>bootstrap</p>
            </div>

            <div className="skillitemimg">
                <img id='skillitemimgtag' className='mt-3' src= {php} alt="php" />
                <p className='mt-4'>php</p>
            </div>

            <div className="skillitemimg">
                <img id='skillitemimgtag' className='mt-3' src= {tailwind} alt="tailwind" />
                <p className='mt-4'>tailwind</p>
            </div>

            <div className="skillitemimg">
                <img id='skillitemimgtag' src= {java} alt="java" />
                <p className='mt-3'>java</p>
            </div>

            <div className="skillitemimg">
                <img id='skillitemimgtag' src= {mysql} alt="mysql" />
                <p className='mt-3'>mysql</p>
            </div>

            <div className="skillitemimg">
                <img id='skillitemimgtag' src= {flutter} alt="flutter" />
                <p className='mt-3'>flutter</p>
            </div>

            <div className="skillitemimg">
                <img id='skillitemimgtag' src= {figma} alt="figma" />
                <p className='mt-3'>figma</p>
            </div>

            <div className="skillitemimg">
                <img id='skillitemimgtag' src= {androidstudio} alt="androidstudio" />
                <p className='mt-3'>android studio</p>
            </div>

            <div className="skillitemimg">
                <img id='skillitemimgtag' src= {vscode} alt="vscode" />
                <p className='mt-3'>vscode</p>
            </div>

            <div className="skillitemimg">
                <img id='skillitemimgtag' src= {netbeans} alt="netbeans" />
                <p className='mt-3'>netbeans</p>
            </div>

            <div className="skillitemimg">
                <img id='skillitemimgtag' src= {photoshop} alt="photoshop" />
                <p className='mt-3'>photoshop</p>
            </div>

            <div className="skillitemimg">
                <img id='skillitemimgtag' src= {adobeillustrator} alt="adobeillustrator" />
                <p className='mt-3'>adobe illustrator</p>
            </div>

            <div className="skillitemimg">
                <img id='skillitemimgtag' src= {intellij} alt="intellij" />
                <p className='mt-3'>intellij idea</p>
            </div>

            <div className="skillitemimg">
                <img id='skillitemimgtag' src= {sqlite} alt="sqlite" />
                <p className='mt-3'>sqlite</p>
            </div>

            <div className="skillitemimg">
                <img id='skillitemimgtag' src= {reportbuilder} alt="reportbuilder" />
                <p className='mt-3'>PowerBi</p>
            </div>

            <div className="skillitemimg">
                <img id='skillitemimgtag' src= {maya} alt="maya" />
                <p className='mt-3'>Maya</p>
            </div>
            

        </div>
    </div>
    </>
  )
}

export default Skills