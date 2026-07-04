import { useEffect } from 'react';
import Section from './Section'
import TwinShot from '../../assets/flutter-projects/TwinShot.png'
import SmartToolsBox from '../../assets/flutter-projects/SmartToolsBox.png'
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
import { LinkIcon } from '../../assets/icons/Link'

export default function ProjectsCategory({ type, onBack, theme }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const list =
    type === "flutter"
      ? [
          {
            name: "TwinShot: Multi-Angle Recorder",
            subtitle: "Record Once, Export in Landscape & Portrait (Flutter)",
            src: TwinShot,
            desc: "TwinShot: Multi-Angle Recorder lets you record a single video and instantly export it in both Landscape (16:9) and Portrait (9:16) formats. Preview both frames while recording, monitor audio in real time, and create content for YouTube, TikTok, Instagram Reels, and Shorts with ease. Fast, private, and processed entirely on your device.",
            link: "https://play.google.com/store/apps/details?id=com.devcrafts.twinshot",
          },
          {
            name: "Smart Tools Box",
            subtitle: "Your Everyday All-in-One Utility App (Flutter)",
            src: SmartToolsBox,
            desc: "Smart Tools Box is a lightweight, all-in-one utility app that brings together essential PDF tools, document scanning, QR utilities, file conversion, and everyday smart tools in one place. It works 100% offline, requires no login, and offers a fast, clean, and user-friendly experience. Whether you're a student, professional, or everyday user, Smart Tools Box helps you complete daily tasks quickly and efficiently.",
            link: "https://play.google.com/store/apps/details?id=com.smarttoolsbox.Smart_Tools_Box",
          },
          {
            name: "My Budget",
            subtitle: "Money tracking app (Flutter)",
            src: MyBudget,
            desc: "A retro-themed expense tracking application designed with a custom UI for a smooth and engaging user experience. The app enables users to log and monitor transactions, filter expenses within a specific date range, and gain actionable insights through integrated analytics that track spending behavior and patterns.",
            link: "https://play.google.com/store/apps/details?id=com.mybudget.MyBudget",
          },
          {
            name: "Dio Run",
            subtitle: "Gaming app (Flutter + Flame)",
            src: DinoRun,
            desc: "A colorful reimagining of the classic Chrome offline dinosaur game. This version enhances the original gameplay with a vibrant UI and introduces a 5-life system, offering players multiple chances and a more engaging experience while maintaining the fast-paced, obstacle-dodging fun.",
            link: "https://play.google.com/store/apps/details?id=com.DinoRun.dino_run",
          },
          {
            name: "Askthepic",
            subtitle: "AI problem solver (Flutter + Gemini API)",
            src: Askthepic,
            desc: "An AI-powered Q&A app that allows users to upload or capture an image containing a question. Using OCR (Optical Character Recognition), the app extracts the text from the image and leverages Gemini AI to generate accurate and relevant answers—streamlining the process of getting help with visual or handwritten queries.",
            link: "https://ai.google.dev/competition/projects/askthepic",
          },
          {
            name: "My Music",
            subtitle: "Music app (Flutter)",
            src: MyMusic,
            desc: "A personalized music app developed to eliminate the interruptions of ads and subscription prompts often found in mainstream music services. Featuring a sleek, glassmorphic UI and dynamic background changes, this app offers a seamless listening experience while integrating music directly into the development process.",
            link: "https://www.linkedin.com/posts/makkena-venkata-ramana-33a1a8229_flutter-mobileapp-musicapp-activity-7221949974673047553-b-ez?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkovd4B8FXOjm1Ce0tr_8lIIiY2iFXwVlc",
          },
          {
            name: "Earth Time",
            subtitle: "Time by timezone app (Flutter)",
            src: EarthTime,
            desc: "An interactive 3D globe app that allows users to select different time zones from a dropdown menu. The app displays the corresponding time for the selected zone, locates the city on the 3D globe, and dynamically adjusts the background to reflect day or night in real-time. This visually engaging tool brings the concept of time zones to life with an immersive experience.",
            link: "https://www.linkedin.com/posts/makkena-venkata-ramana-33a1a8229_flutter-appdevelopment-androiddevelopment-activity-7163829434611949568-fdcC?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkovd4B8FXOjm1Ce0tr_8lIIiY2iFXwVlc",
          },
          {
            name: "My AI",
            subtitle: "AI app (Flutter + Gemini API)",
            src: MYAi,
            desc: "An interactive AI application featuring both a chat and voice interface. Users can either type or speak to the AI, with speech-to-text functionality enabling seamless voice interactions. The app provides intelligent responses, creating a dynamic and engaging conversational experience.",
            link: "https://www.linkedin.com/posts/makkena-venkata-ramana-33a1a8229_aiassistant-digitaltransformation-innovation-activity-7160190833823043586-dqkc?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkovd4B8FXOjm1Ce0tr_8lIIiY2iFXwVlc",
          },
          {
            name: "Notes",
            subtitle: "Notes taking app (Flutter + Firebase)",
            src: Notes,
            desc: "A straightforward note-taking app with a key feature that allows users to easily share notes with colleagues, friends, or others. The app offers a simple, user-friendly interface similar to the native Android notes app, making it easy to create, organize, and share notes with just a few taps.",
            link: "https://www.linkedin.com/posts/makkena-venkata-ramana-33a1a8229_notesapp-productivity-organization-activity-7159807232786755584-iLOP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkovd4B8FXOjm1Ce0tr_8lIIiY2iFXwVlc",
          },
          {
            name: "InCal",
            subtitle: "Feets & Inches calculator app (Flutter)",
            src: InCal,
            desc: "A specialized calculator app designed to perform arithmetic operations using feet and inches. The app features a user-friendly interface that allows users to input measurements in feet and inches, and it accurately computes the results while properly handling conversions between the two units.",
            link: "https://www.linkedin.com/posts/makkena-venkata-ramana-33a1a8229_calculatorapp-innovativemath-revolutionarytech-activity-7143674392676380672-ukZ3?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkovd4B8FXOjm1Ce0tr_8lIIiY2iFXwVlc",
          },
          {
            name: "Flash Light",
            subtitle: "Flash light app (Flutter)",
            src: FlashLight,
            desc: "A simple flashlight app featuring a playful firefly animation. Users can tap the firefly to toggle the flashlight on and off, mimicking a button-like action. The app’s UI dynamically changes depending on the flashlight’s status, offering a fun and intuitive way to control the light.",
            link: "https://www.linkedin.com/posts/makkena-venkata-ramana-33a1a8229_flashlight-app-the-app-features-a-activity-7229766428340461569-0_xl?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkovd4B8FXOjm1Ce0tr_8lIIiY2iFXwVlc",
          },
        ]
      : [
          {
            name: "Global Connect",
            subtitle: "Chat application (MERN + tailwindcss)",
            src: globalconnect,
            desc: "A chat application that allows users to connect with random strangers, similar to Omegle, for spontaneous conversations. In addition to one-on-one chats, the app features a universal chat room where all users can engage in a larger, open conversation. It’s designed to foster global connections and spontaneous social interactions.",
            link: "https://www.linkedin.com/posts/makkena-venkata-ramana-33a1a8229_webdevelopment-reactjs-nodejs-activity-7386829465361813505-lUvu?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkovd4B8FXOjm1Ce0tr_8lIIiY2iFXwVlc",
          },
          {
            name: "Blogify",
            subtitle: "Blogging application (MERN + tailwindcss)",
            src: blogify,
            desc: "A minimalist blogging platform that emphasizes simplicity and ease of use. With a clean, distraction-free UI, users can effortlessly create and publish blog posts. The design focuses on delivering a smooth writing experience while keeping everything streamlined and user-friendly.",
            link: "https://www.linkedin.com/posts/makkena-venkata-ramana-33a1a8229_mern-reactjs-nodejs-activity-7389383238797942786-hKgI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkovd4B8FXOjm1Ce0tr_8lIIiY2iFXwVlc",
          },
        ];
  return (
    <Section
      id="projects-category"
      title={`${type.toUpperCase()} Projects`}
      className={theme === "dark" ? "bg-neutral-900" : "bg-white"}
      theme={theme}
    >
      <div className="grid gap-6 mb-10">
        {list.map((p) => (
          <div
            key={p.name}
            className={`rounded-xl border p-6 shadow-sm bg-white/5 flex gap-10  items-center ${theme === "dark" ? "border-neutral-800 bg-neutral-900" : "border-neutral-200 bg-white"}`}
          >
            <div className="aspect-square h-25 w-auto items-center lg:block hidden">
              <img src={p.src} alt="img" />
            </div>
            <div>
              <div
                className={`flex items-center gap-2 lg:text-xl text-lg font-bold ${theme === "dark" ? "text-white" : ""}`}
              >
                {p.name}{" "}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${p.name}`}
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <LinkIcon />
                </a>
              </div>
              <p
                className={`mt-2 font-semibold  ${theme === "dark" ? "text-neutral-300" : "text-neutral-600"}`}
              >
                {p.subtitle}
              </p>
              <p
                className={`mt-2 text-sm lg:text-base ${theme === "dark" ? "text-neutral-300" : "text-neutral-600"} text-justify`}
              >
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}


