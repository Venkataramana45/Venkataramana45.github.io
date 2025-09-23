import { useEffect } from 'react';
import Section from './Section'
import MyBudget from '../../assets/flutter-projects/MyBudget.png'
import DinoRun from '../../assets/flutter-projects/DinoRun.png'
import Askthepic from '../../assets/flutter-projects/Askthepic.png'
import MyMusic from '../../assets/flutter-projects/MyMusic.png'
import EarthTime from '../../assets/flutter-projects/EarthTime.png'
import MYAi from '../../assets/flutter-projects/MyAi.png'
import Notes from '../../assets/flutter-projects/Notes.png'
import InCal from '../../assets/flutter-projects/InCal.png'
import FlashLight from '../../assets/flutter-projects/FlashLight.png'
import blogify from '../../assets/mern-projects/Blogify.png'
import globalconnect from '../../assets/mern-projects/GlobalConnect.png'

export default function ProjectsCategory({ type, onBack, theme }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const list = type === 'flutter'
    ? [
        { name: 'My Budget', subtitle: 'Money tracking app (Flutter + Firebase)', src: MyBudget, desc: 'A retro-themed expense tracking application designed with a custom UI for a smooth and engaging user experience. The app enables users to log and monitor transactions, filter expenses within a specific date range, and gain actionable insights through integrated analytics that track spending behavior and patterns.' },
        { name: 'Dio Run', subtitle: 'Gaming app (Flutter + Flame)', src: DinoRun, desc: 'A colorful reimagining of the classic Chrome offline dinosaur game. This version enhances the original gameplay with a vibrant UI and introduces a 5-life system, offering players multiple chances and a more engaging experience while maintaining the fast-paced, obstacle-dodging fun.' },
        { name: 'Askthepic', subtitle: 'AI problem solver (Flutter + Gemini API)', src: Askthepic, desc: 'An AI-powered Q&A app that allows users to upload or capture an image containing a question. Using OCR (Optical Character Recognition), the app extracts the text from the image and leverages Gemini AI to generate accurate and relevant answers—streamlining the process of getting help with visual or handwritten queries.' },
        { name: 'My Music', subtitle: 'Music app (Flutter)', src: MyMusic, desc: 'A personalized music app developed to eliminate the interruptions of ads and subscription prompts often found in mainstream music services. Featuring a sleek, glassmorphic UI and dynamic background changes, this app offers a seamless listening experience while integrating music directly into the development process.' },
        { name: 'Earth Time', subtitle: 'Time by timezone app (Flutter)', src: EarthTime, desc: 'An interactive 3D globe app that allows users to select different time zones from a dropdown menu. The app displays the corresponding time for the selected zone, locates the city on the 3D globe, and dynamically adjusts the background to reflect day or night in real-time. This visually engaging tool brings the concept of time zones to life with an immersive experience.' },
        { name: 'My AI', subtitle: 'AI app (Flutter + Gemini API)', src: MYAi, desc: 'An interactive AI application featuring both a chat and voice interface. Users can either type or speak to the AI, with speech-to-text functionality enabling seamless voice interactions. The app provides intelligent responses, creating a dynamic and engaging conversational experience.' },
        { name: 'Notes', subtitle: 'Notes taking app (Flutter + Firebase)', src: Notes, desc: 'A straightforward note-taking app with a key feature that allows users to easily share notes with colleagues, friends, or others. The app offers a simple, user-friendly interface similar to the native Android notes app, making it easy to create, organize, and share notes with just a few taps.' },
        { name: 'InCal', subtitle: 'Feets & Inches calculator app (Flutter)', src: InCal, desc: 'A specialized calculator app designed to perform arithmetic operations using feet and inches. The app features a user-friendly interface that allows users to input measurements in feet and inches, and it accurately computes the results while properly handling conversions between the two units.' },
        { name: 'Flash Light', subtitle: 'Flash light app (Flutter)', src: FlashLight, desc: 'A simple flashlight app featuring a playful firefly animation. Users can tap the firefly to toggle the flashlight on and off, mimicking a button-like action. The app’s UI dynamically changes depending on the flashlight’s status, offering a fun and intuitive way to control the light.' },
      ]
    : [
        { name: 'Global Connect', subtitle: 'Chat application (MERN + tailwindcss)', src: globalconnect, desc: 'A chat application that allows users to connect with random strangers, similar to Omegle, for spontaneous conversations. In addition to one-on-one chats, the app features a universal chat room where all users can engage in a larger, open conversation. It’s designed to foster global connections and spontaneous social interactions.' },
        { name: 'Blogify', subtitle: 'Blogging application (MERN + tailwindcss)', src: blogify, desc: 'A minimalist blogging platform that emphasizes simplicity and ease of use. With a clean, distraction-free UI, users can effortlessly create and publish blog posts. The design focuses on delivering a smooth writing experience while keeping everything streamlined and user-friendly.' },
      ]
  return (
    <Section id="projects-category" title={`${type.toUpperCase()} Projects`} className={theme === 'dark' ? 'bg-neutral-900' : 'bg-white'} theme={theme}>
      {/* <button onClick={onBack} className={`mb-6 text-sm hover:underline ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'}`}>← Back</button> */}
      <div className="grid gap-6 mb-10">
        {list.map((p) => (
          <div key={p.name} className={`rounded-xl border p-6 shadow-sm bg-white/5 flex gap-10  items-center ${theme === 'dark' ? 'border-neutral-800 bg-neutral-900' : 'border-neutral-200 bg-white'}`}>
            <div className='aspect-square h-25 w-auto items-center lg:block hidden'>
              <img src={p.src} alt="img" />
            </div>
            <div>
              <div className={`lg:text-xl text-lg font-bold ${theme === 'dark' ? 'text-white' : ''}`}>{p.name}</div>
              <p className={`mt-2 font-semibold  ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'}`}>{p.subtitle}</p>
              <p className={`mt-2 text-sm lg:text-base ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'} text-justify`}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}


