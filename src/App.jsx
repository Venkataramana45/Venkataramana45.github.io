import { useEffect, useState } from 'react'
import Sidebar, { NAV_ITEMS } from './components/layout/Sidebar'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Education from './components/sections/Education'
import Skills from './components/sections/Skills'
import Work from './components/sections/Work'
import Projects from './components/sections/Projects'
import ProjectsCategory from './components/sections/ProjectsCategory'
import Contact from './components/sections/Contact'
import ScreenSizeNote from './components/layout/CustomDialog'


export default function App() {
  const [activeId, setActiveId] = useState('home')
  const [category, setCategory] = useState(() => (location.hash.startsWith('#cat=') ? location.hash.replace('#cat=','') : null))

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'dark'; // Default to dark mode if nothing is saved
  });

  const handleToggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save the new theme to localStorage
  };


  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const viewportAnchor = window.innerHeight * 0.35
        let current = NAV_ITEMS[0].id
        NAV_ITEMS.forEach((n) => {
          const el = document.getElementById(n.id)
          if (!el) return
          const rect = el.getBoundingClientRect()
          if (rect.top - viewportAnchor <= 0) current = n.id
        })
        setActiveId(current)
        ticking = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    const onHash = () => {
      const h = location.hash
      if (h.startsWith('#cat=')) setCategory(h.replace('#cat=', ''))
      else setCategory(null)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const openCategory = (type) => {
    location.hash = `cat=${type}`
  }

  const backToProjects = () => {
    location.hash = '#projects'
  }

  if (category) {
    return (
      <div className={`min-h-screen ${theme === 'dark' ? 'bg-neutral-950 text-white' : 'bg-white text-neutral-900'}`}>
        <main>
          <ProjectsCategory type={category} onBack={backToProjects} theme={theme} />
        </main>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-neutral-950 text-white' : 'bg-white text-neutral-900'}`}>
      <ScreenSizeNote />
      <Sidebar activeId={activeId} theme={theme} onToggleTheme={handleToggleTheme} />
      <main className="lg:ml-56">
        <Home theme={theme} />
        <About theme={theme} />
        <Education theme={theme} />
        <Skills theme={theme} />
        <Work theme={theme} />
        <Projects onOpenCategory={openCategory} theme={theme} />
        <Contact theme={theme} />
      </main>
    </div>
  )
}

