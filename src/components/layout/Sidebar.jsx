import ThemeToggle from './ThemeToggle'
import logo from '../../assets/images/logo.png'
import { RightArrow } from '../../assets/icons/RightArrow'
import { useState } from 'react'
import { LeftArrow } from '../../assets/icons/LeftArrow'
import { LinkedInIcon } from '../../assets/icons/LinkedIn'
import { GithubIcon } from '../../assets/icons/Github'

const NAV_ITEMS = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'education', label: 'EDUCATION' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'work', label: 'WORK HISTORY' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'contact', label: 'CONTACT' },
]

export default function Sidebar({ activeId, theme, onToggleTheme }) {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    toggle ? setToggle(false) : setToggle(true)
    document.body.style.overflow = toggle ? 'auto' : 'hidden'
  }

  return (
    <div className="relative z-49 ">
      <aside
        className={`fixed lg:left-0 ${toggle ? `left-0` : `-left-11/12`} top-0 h-screen lg:w-56 w-11/12 flex flex-col justify-between px-6 pt-8 pb-20 sm:pb-8 ${theme === "dark" ? `bg-white text-neutral-900` : `bg-neutral-900 text-white`} transition-all duration-300 ease-in-out`}
      >
        <div>
          <div className="flex items-center justify-between mb-10">
            <div className="text-2xl font-bold">
              <img src={logo} alt="logo" className="h-12 w-12" />
            </div>
            <div onClick={window.innerWidth < 1024 ? handleToggle : null}>
              <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            </div>
          </div>
          <nav className="space-y-4">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={window.innerWidth < 1024 ? handleToggle : null}
                  className={`relative block py-1 text-sm tracking-wide transition-colors cursor-pointer hover:font-semibold
                  ${
                    isActive
                      ? "font-semibold strike-gradient"
                      : `${theme === "dark" ? `text-neutral-700 hover:text-neutral-900` : `text-neutral-300 hover:text-white`}`
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
        <div
          className={`text-xs  ${theme === "dark" ? `text-neutral-500` : `text-neutral-400`} flex flex-col space-y-6`}
        >
          <div className="flex space-x-9">
            <a
              href="https://www.linkedin.com/in/makkena-venkata-ramana-33a1a8229/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/Venkataramana45/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon theme={theme} />
            </a>
          </div>
          <div>Copyright ©2026</div>
        </div>
      </aside>
      <div className="lg:hidden block">
        <div
          className={`fixed top-20 ${toggle ? `left-11/12` : `left-0`} w-5 h-20 bg-gray-300 bg-opacity-50 z-40 flex items-center justify-center rounded-r-md transition-all duration-300 ease-in-out`}
          onClick={handleToggle}
        >
          {toggle ? <LeftArrow /> : <RightArrow />}
        </div>
      </div>
    </div>
  );
}

export { NAV_ITEMS }

