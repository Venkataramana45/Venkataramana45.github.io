import Section from "./Section";
import me from "../../assets/images/memoji.png";
import { TopRightArrow } from "../../assets/icons/TopRightArrow";

export default function Home({ theme }) {
  return (
    <Section
      id="home"
      theme={theme}
      className={`${theme === "dark" ? "bg-neutral-900" : "bg-white"}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div
            className={`lg:text-xl text-md uppercase tracking-wider ${
              theme === "dark" ? "text-neutral-400" : "text-neutral-500"
            }`}
          >
            My name is
          </div>
          <div className="text-4xl lg:text-5xl font-black leading-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-500 to-amber-400">
            Makkena Venkata Ramana
          </div>
          <p
            className={`lg:mt-6 mt-2 lg:text-lg text-md ${
              theme === "dark" ? "text-neutral-300" : "text-neutral-600"
            }`}
          >
            Developer <span className="font-semibold">...</span>
          </p>
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 lg:mt-8 mt-3 px-6 py-3 rounded-md transition ${
              theme === "dark"
                ? "bg-white text-neutral-900"
                : "bg-neutral-900 text-white"
            }`}
          >
            Let's talk with me
            <TopRightArrow/>
          </a>
        </div>
        <div className="hidden md:block">
          <div className="relative aspect-square max-w-[480px] ml-auto">
            <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-orange-300 opacity-80 [clip-path:inset(0_0_70%_0)]  animate-[spin_8s_linear_infinite]"></div>
            <div
              className={`absolute inset-10 rounded-full ${
                theme === "dark"
                  ? "bg-white/20"
                  : "bg-gray-300/30"
              } `}
            >
              <img
                src={me}
                alt="logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// [transform:rotate(135deg)]

//mix-blend-lighten
