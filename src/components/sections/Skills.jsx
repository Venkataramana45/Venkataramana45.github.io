import Section from './Section'
import java from '../../assets/orbits/orbit-1/java-logo.png'
import python from '../../assets/orbits/orbit-1/python-logo.png'
import html from '../../assets/orbits/orbit-1/html-logo.png'
import css from '../../assets/orbits/orbit-1/css-logo.png'
import js from '../../assets/orbits/orbit-1/js-logo.png'
import sql from '../../assets/orbits/orbit-1/sql-logo.png'
import git from '../../assets/orbits/orbit-2/git-logo.png'
import github from '../../assets/orbits/orbit-2/github-logo.png'
import figma from '../../assets/orbits/orbit-2/figma-logo.png'
import android from '../../assets/orbits/orbit-2/android-logo.png'
import vscode from '../../assets/orbits/orbit-2/vscode-logo.png'
import flutter from '../../assets/orbits/orbit-3/flutter-logo.png'
import firebase from '../../assets/orbits/orbit-3/firebase-logo.png'
import flutterflow from '../../assets/orbits/orbit-3/flutterflow-logo.png'
import getx from '../../assets/orbits/orbit-3/getx-logo.png'
import mongo from '../../assets/orbits/orbit-4/mongodb-logo.png'
import express from '../../assets/orbits/orbit-4/express-logo.png'
import react from '../../assets/orbits/orbit-4/react-logo.png'
import node from '../../assets/orbits/orbit-4/node-logo.png'
import tailwind from  '../../assets/orbits/orbit-4/tailwindcss-logo.png'
import { useState } from 'react';





const core = ['Skills']
const orbit1 = [
  { src: git, label: "Git" },
  { src: github, label: "GitHub" },
  { src: figma, label: "Figma" },
  { src: android, label: "Android" },
  { src: vscode, label: "VS Code" }
];

const orbit2 = [
  { src: java, label: "Java" },
  { src: python, label: "Python" },
  { src: html, label: "HTML" },
  { src: css, label: "CSS" },
  { src: js, label: "JavaScript" },
  { src: sql, label: "SQL" }
];

const orbit3 = [
  { src: flutter, label: "Flutter" },
  { src: firebase, label: "Firebase" },
  { src: flutterflow, label: "FlutterFlow" },
  { src: getx, label: "GetX" }
];

const orbit4 = [
  { src: mongo, label: "MongoDB" },
  { src: express, label: "Express" },
  { src: react, label: "React" },
  { src: node, label: "Node.js" },
  { src: tailwind, label: "Tailwind CSS" }
];


function Chip({ t }) {
  return <div className="tag-chip">{t}</div>
}

function ringPositions(count) {
  return Array.from({ length: count }).map((_, i) => {
    const theta = (i / count) * 2 * Math.PI
    const left = 50 + 50 * Math.cos(theta)
    const top = 50 + 50 * Math.sin(theta)
    return { left: `${left}%`, top: `${top}%` }
  })
}

export default function Skills({theme}) {

  const [isHovered, setIsHovered] = useState(false);

  const positions1 = ringPositions(orbit1.length)
  const positions2 = ringPositions(orbit2.length)
  const positions3 = ringPositions(orbit3.length)
  const positions4 = ringPositions(orbit4.length)

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {setIsHovered(false)};


  return (
    <Section id="skills" title="Skills" className={`${theme === 'dark' ? 'bg-neutral-900' : 'bg-white'}`} theme={theme}>
      <div className="relative mx-auto max-w-3xl aspect-square items-center">
        <div className="solar-core"/>


        <div className={`orbit orbit-1 ${isHovered ? 'paused' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {orbit1.map(({ src, label }, i) => {
            return(<img src={src} key={label}  alt={label}  className="tag-chip"  style={{ left: positions1[i].left, top: positions1[i].top, transform: 'translate(-50%, -50%)' }}/>)
          })}
        </div>

        <div className={`orbit orbit-2 ${isHovered ? 'paused' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {orbit2.map(({ src, label }, i) => {
            return(<img src={src} key={label}  alt={label}  className="tag-chip"  style={{ left: positions2[i].left, top: positions2[i].top, transform: 'translate(-50%, -50%)' }}/>)
          })}
        </div>

        <div className={`orbit orbit-3 ${isHovered ? 'paused' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {orbit3.map(({ src, label }, i) => {
            return(<img src={src} key={label}  alt={label}  className="tag-chip"  style={{ left: positions3[i].left, top: positions3[i].top, transform: 'translate(-50%, -50%)' }}/>)
          })}
        </div>

        <div className={`orbit orbit-4 ${isHovered ? 'paused' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {orbit4.map(({ src, label }, i) => {
            return(<img src={src} key={label}  alt={label}  className="tag-chip"  style={{ left: positions4[i].left, top: positions4[i].top, transform: 'translate(-50%, -50%)' }}/>)
          })}
        </div>
      </div>
    </Section>
  )
}


