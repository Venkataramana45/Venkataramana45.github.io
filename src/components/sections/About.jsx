import Section from "./Section";
import me from "../../assets/images/memoji.png";
import resume from "../../assets/resume/RESUME.pdf";

export default function About({ theme }) {
  return (
    <Section
      id="about"
      theme={theme}
      className={theme === "dark" ? "bg-neutral-900" : "bg-white"}
    >
      <h5 className="text-2xl font-bold mb-5">WELCOME TO...</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="flex items-center gap-6 lg:flex-row flex-col">
          <div className="relative w-40 h-40  rounded-full overflow-hidden z-0">
            <div className="absolute aspect-square inset-0 bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-amber-300 opacity-80 z-0">
              <img src={me} alt="me" className="h-full w-full" />
            </div>
          </div>
          <div className="justify-items-center">
            <div
              className={`lg:text-2xl text-xl font-extrabold ${
                theme === "dark" ? "text-white" : "text-neutral-900"
              }`}
            >
              MAKKENA VENKATA RAMANA
            </div>
            <a
              className={`mt-4 inline-flex items-center text-sm rounded-md px-3 py-2 ${
                theme === "dark"
                  ? "bg-white text-neutral-900"
                  : "bg-neutral-900 text-white"
              }`}
              href={resume}
              target="_blank"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="text-justify lg:mb-0 mb-20">
          <p
            className={`mt-3 lg:text-md text-sm ${
              theme === "dark" ? "text-neutral-300" : "text-neutral-700"
            }`}
          >
            Hello! I'm a <span className="font-semibold">Computer Science graduate</span> with a strong passion for building innovative, user-focused digital experiences. As a <span className="font-semibold">self-driven and curious developer</span>, I enjoy exploring new technologies and bringing ideas to life through clean, functional, and scalable solutions.
            <br/>
            <br/>
            I’ve developed a solid foundation in <span className="font-semibold">full-stack web development</span> using the <span className="font-semibold">MERN stack (MongoDB, Express.js, React, Node.js)</span> and tools like <span className="font-semibold">Firebase</span> for backend services. I also have hands-on experience in <span className="font-semibold">mobile app development using Flutter</span>, enabling me to build cross-platform applications with smooth and responsive user interfaces.
            <br/>
            <br/>
            With a keen eye for design, I use <span className="font-semibold">Figma</span> to create intuitive UI/UX prototypes and bring them to life with <span className="font-semibold">Tailwind CSS</span>. I’m also comfortable working with <span className="font-semibold">Java, SQL, Git, and GitHub</span> to build robust and maintainable solutions.
            <br/>
            <br/>
            I'm passionate about <span className="font-semibold">continuous learning</span> and always looking to take on <span className="font-semibold">new challenges</span>. I’m currently seeking opportunities where I can <span className="font-semibold">grow, contribute to impactful projects, and collaborate with teams</span> to build meaningful technology solutions.
          </p>
        </div>
      </div>
    </Section>
  );
}
